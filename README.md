# 🔐 ClaimVault – Smart Warranty Manager

> **A digital warranty management system that helps users store, track, and manage product warranties, invoices, claims, and product documents in one place.**

---

## 📌 Overview

**ClaimVault** is a web-based Warranty Management System designed to make warranty tracking simple and organized.

Users can add their products, upload product images and invoices, check warranty status, view remaining warranty days, and manage warranty claims from a single dashboard.

The project uses a modern frontend with a **Node.js backend** and **AWS S3** for secure file storage.

---

## 🎯 Problem Statement

Managing product warranties manually can be difficult because users may:

- Forget warranty expiry dates
- Lose invoices or warranty documents
- Have difficulty tracking multiple products
- Miss warranty claim opportunities
- Store product documents in different locations

### 💡 Solution

ClaimVault provides a centralized platform where users can:

✅ Store product information  
✅ Track warranty periods  
✅ Upload invoices/documents  
✅ Upload product images  
✅ Check remaining warranty days  
✅ Manage warranty claims  
✅ View warranty status from a dashboard  

---

## 🚀 Features

### 📊 Dashboard

- Total products
- Active warranties
- Expired warranties
- Warranty status overview
- Dynamic product information

### 📦 Product Management

- Add new products
- View product details
- Product images
- Warranty information
- Purchase date
- Warranty expiry date
- Product category

### 🛡️ Warranty Management

- Track warranty duration
- Calculate remaining warranty days
- Active/Expired status
- View complete warranty details
- Warranty records

### 📄 Invoice & Document Management

- Upload invoices
- Store warranty documents
- View uploaded documents
- Secure cloud-based file storage

### 🧾 Claims Management

- Create warranty claims
- Store claim information
- Track claim status
- Manage claim records

### ☁️ Cloud Storage

Product images and documents are stored using **Amazon S3**.

---

## 🏗️ System Architecture

```text
                    ┌─────────────────────┐
                    │       User          │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   ClaimVault UI     │
                    │   HTML/CSS/JS       │
                    └──────────┬──────────┘
                               │
                          REST API
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Node.js Server    │
                    │      Express        │
                    └──────┬───────┬──────┘
                           │       │
                 ┌─────────┘       └─────────┐
                 ▼                           ▼
        ┌─────────────────┐        ┌─────────────────┐
        │ Product/Claim   │        │   Amazon S3     │
        │     APIs        │        │ File Storage    │
        └─────────────────┘        └─────────────────┘
```

---

## 🛠️ Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript
- Responsive UI

### Backend

- Node.js
- Express.js
- REST APIs
- Multer

### Cloud

- Amazon Web Services (AWS)
- Amazon S3
- AWS SDK

### Development Tools

- Visual Studio Code
- Git
- GitHub
- Postman

---

## 📁 Project Structure

```text
ClaimVault/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env
│
├── uploads/
│
├── README.md
└── .gitignore
```

> **Note:** `.env` and other sensitive credentials should never be uploaded to GitHub.

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ClaimVault.git
```

Go to the project folder:

```bash
cd ClaimVault
```

---

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

---

### 3. Configure Environment Variables

Create a `.env` file inside the `backend` folder:

```env
PORT=3000

AWS_REGION=your_aws_region
S3_BUCKET_NAME=your_bucket_name

AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
```

⚠️ **Never share your AWS access keys publicly.**

---

### 4. Start the Backend

```bash
node server.js
```

If everything is configured correctly:

```text
ClaimVault Backend is running on port 3000
```

---

### 5. Open the Frontend

Open:

```text
frontend/index.html
```

or run the frontend using a local development server such as VS Code Live Server.

---

## 🔌 API Endpoints

### Products

```text
GET     /api/products
POST    /api/products
GET     /api/products/:id
PUT     /api/products/:id
DELETE  /api/products/:id
```

### Claims

```text
GET     /api/claims
POST    /api/claims
GET     /api/claims/:id
PUT     /api/claims/:id
DELETE  /api/claims/:id
```

### File Upload

```text
POST    /api/upload
```

Used for uploading product images and documents to Amazon S3.

### File Delete

```text
DELETE  /api/upload/:key
```

Used to remove files from cloud storage.

---

## 🔄 How ClaimVault Works

```text
1. User adds a product
          ↓
2. Product information is stored
          ↓
3. User uploads product image/invoice
          ↓
4. Files are uploaded to Amazon S3
          ↓
5. Warranty dates are calculated
          ↓
6. Dashboard displays warranty status
          ↓
7. User can create/manage warranty claims
```

---

## 📸 Main Modules

### Dashboard

Provides an overview of:

- Total products
- Active warranties
- Expired warranties
- Warranty status

### Products

Users can add and manage their products.

### Warranty Details

Users can view:

- Purchase date
- Warranty period
- Expiry date
- Days remaining
- Warranty status

### Documents

Users can upload and access invoices and warranty-related documents.

### Claims

Users can create and track warranty claims.

---

## 🔐 Security

ClaimVault follows basic security practices such as:

- Environment variables for AWS credentials
- `.gitignore` for sensitive files
- Cloud-based file storage
- Backend API separation
- Input validation
- Secure AWS S3 configuration

### `.gitignore`

```gitignore
node_modules/
.env
uploads/
*.log
```

---

## ☁️ AWS S3 Configuration

ClaimVault uses Amazon S3 to store:

```text
Product Images
      │
      ├── image files
      │
      └── product photos

Warranty Documents
      │
      ├── invoices
      │
      └── warranty documents
```

This keeps large files outside the application server and allows cloud-based access.

---

## 🧪 Testing

The backend APIs can be tested using **Postman**.

Recommended tests:

- Add product
- Get products
- Update product
- Delete product
- Create claim
- Get claims
- Upload image
- Upload invoice
- Delete uploaded file
- Check warranty status

---

## 📈 Project Status

| Module | Status |
|---|---|
| Frontend UI | ✅ Completed |
| Dashboard | ✅ Completed |
| Product Management | ✅ Completed |
| Warranty Management | ✅ Completed |
| Product Images | ✅ Completed |
| Invoice Upload | ✅ Completed |
| AWS S3 Integration | ✅ Completed |
| Claims Management | ✅ Completed |
| Frontend–Backend Integration | ✅ Completed |
| API Testing | ✅ Completed |
| Final Testing | 🔄 Ongoing |

### Overall Progress

**~93%+ Completed**

---

## 🔮 Future Improvements

The project can be further improved by adding:

- 🔔 Warranty expiry notifications
- 📧 Email reminders
- 👤 User authentication
- 🔑 Login/Register system
- 📱 Mobile application
- 🔍 Advanced search and filters
- 🤖 AI-based warranty document extraction
- 📄 Automatic invoice information extraction
- 📊 Warranty analytics
- 🔐 JWT authentication
- 🗄️ Database integration
- ☁️ Full AWS deployment

---

## 👨‍💻 Team

### ClaimVault Team

**Project:** ClaimVault – Warranty Manager

### Roles

- **Frontend Developer**
  - UI/UX
  - Dashboard
  - Product interface
  - Warranty interface
  - Frontend API integration

- **Backend Developer**
  - Node.js/Express server
  - REST APIs
  - Product APIs
  - Claims APIs
  - AWS S3 integration
  - File upload/delete functionality

---

## 🎓 Project Purpose

ClaimVault was developed as a **full-stack web application project** to demonstrate practical implementation of:

- Web development
- REST APIs
- Cloud computing
- AWS S3
- File management
- CRUD operations
- Frontend-backend integration
- Warranty management

---

## 📜 License

This project is created for educational and project demonstration purposes.

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

# 🔐 ClaimVault

**Store it. Track it. Claim it.**

> **Never lose a warranty again.**
