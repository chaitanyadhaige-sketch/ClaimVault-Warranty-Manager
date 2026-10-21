require("dotenv").config();

const express = require("express");
const multer = require("multer");

const {
  S3Client,
  PutObjectCommand,
  ListObjectsV2Command,
  GetObjectCommand,
  DeleteObjectCommand
} = require("@aws-sdk/client-s3");

const app = express();
const PORT = 3000;

// =========================
// Middleware
// =========================
app.use(express.json());

// Multer - store uploaded file in memory
const upload = multer({
  storage: multer.memoryStorage()
});

// =========================
// AWS S3 Configuration
// =========================
const s3 = new S3Client({
  region: process.env.AWS_REGION
});


// =========================
// Health Check
// =========================
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "ClaimVault Backend is running"
  });
});


// =========================
// Upload Claim File
// =========================
app.post(
  "/api/files/claims",
  upload.single("file"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "No file uploaded"
        });
      }

      const fileKey =
        `claims/${Date.now()}-${req.file.originalname}`;

      const command = new PutObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: fileKey,
        Body: req.file.buffer,
        ContentType: req.file.mimetype
      });

      await s3.send(command);

      res.json({
        success: true,
        message: "File uploaded to S3 successfully",
        key: fileKey
      });

    } catch (error) {
      console.error(
        "S3 Upload Error:",
        error.message
      );

      res.status(500).json({
        success: false,
        message: "S3 upload failed",
        error: error.message
      });
    }
  }
);


// =========================
// List Uploaded Files
// =========================
app.get("/api/files", async (req, res) => {
  try {
    const command = new ListObjectsV2Command({
      Bucket: process.env.S3_BUCKET_NAME
    });

    const result = await s3.send(command);

    const files = (result.Contents || []).map((file) => ({
      key: file.Key,
      size: file.Size,
      uploadedAt: file.LastModified
    }));

    res.json({
      success: true,
      files: files
    });

  } catch (error) {
    console.error(
      "S3 List Error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch files",
      error: error.message
    });
  }
});


// =========================
// Download File
// =========================
app.get(/^\/api\/files\/(.+)$/, async (req, res) => {
  try {
    const key = req.params[0];

    const command = new GetObjectCommand({
      Bucket: process.env.S3_BUCKET_NAME,
      Key: key
    });

    const result = await s3.send(command);

    const filename = key.split("/").pop();

    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${filename}"`
    );

    result.Body.pipe(res);

  } catch (error) {
    console.error(
      "S3 Download Error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Failed to download file",
      error: error.message
    });
  }
});


// =========================
// Delete File
// =========================
app.delete(/^\/api\/files\/(.+)$/, async (req, res) => {
  try {
    const key = req.params[0];

    const command = new DeleteObjectCommand({
      Bucket: process.env.S3_BUCKET_NAME,
      Key: key
    });

    await s3.send(command);

    res.json({
      success: true,
      message: "File deleted successfully",
      key: key
    });

  } catch (error) {
    console.error(
      "S3 Delete Error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Failed to delete file",
      error: error.message
    });
  }
});


// =========================
// Start Server
// =========================
app.listen(PORT, () => {
  console.log(
    `ClaimVault Backend running at http://localhost:${PORT}`
  );
});