// ClaimVault - Frontend JavaScript

document.addEventListener("DOMContentLoaded", () => {

    console.log("ClaimVault loaded successfully ✅");

    // -----------------------------
    // File upload handling
    // -----------------------------
    const fileInputs = document.querySelectorAll('input[type="file"]');

    fileInputs.forEach((input) => {
        input.addEventListener("change", () => {

            if (input.files.length > 0) {
                const file = input.files[0];

                console.log("Selected file:", file.name);

                // Show selected filename near the input
                let message = input.parentElement.querySelector(".file-name");

                if (!message) {
                    message = document.createElement("div");
                    message.className = "file-name";
                    message.style.marginTop = "8px";
                    message.style.fontSize = "14px";
                    input.parentElement.appendChild(message);
                }

                message.textContent = `Selected: ${file.name}`;
            }
        });
    });


    // -----------------------------
    // Button interaction
    // -----------------------------
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            const text = button.innerText.trim().toLowerCase();

            console.log("Button clicked:", text);

            // Upload buttons
            if (
                text.includes("upload") ||
                text.includes("choose file") ||
                text.includes("browse")
            ) {
                const input = button.parentElement.querySelector(
                    'input[type="file"]'
                );

                if (input) {
                    input.click();
                }
            }

            // Claim submission
            if (
                text.includes("submit claim") ||
                text.includes("submit")
            ) {
                alert("Claim submitted successfully! ✅");
            }
        });
    });


    // -----------------------------
    // Navigation links
    // -----------------------------
    const links = document.querySelectorAll("a[href^='#']");

    links.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (targetId && targetId !== "#") {

                const target = document.querySelector(targetId);

                if (target) {
                    event.preventDefault();

                 target.scrollIntoView({
    behavior: "smooth"
});
}
}
});
});
});