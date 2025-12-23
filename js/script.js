const API_URL = "http://127.0.0.1:8000/contact"; // local
// const API_URL = "https://your-backend.onrender.com/contact"; // production

const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }
});
const form = document.getElementById("contactForm");
const statusText = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, message })
        });

        const result = await response.json();

        if (result.success) {
            statusText.textContent = "Message sent successfully!";
            statusText.style.color = "green";
            form.reset();
        }
    } catch (error) {
        statusText.textContent = "Server error!";
        statusText.style.color = "red";
    }
});
