function dismissNotification() {
    document.getElementById("notification").style.display = "none";
}

window.onload = function () {
    // Display notification
    let notification = document.getElementById("notification");
    notification.style.display = "block";

    // Automatically dismiss notification after 2 minutes
    setTimeout(() => {
        notification.style.display = "none";
    }, 120000);

    // Matrix effect
    const canvas = document.querySelector(".matrix-canvas");
    const ctx = canvas.getContext("2d");
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789".split("");
    const fontSize = 16;
    let columns, drops;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        columns = Math.floor(canvas.width / fontSize);
        drops = new Array(columns).fill(1); // Reset drops properly
    }

    function drawMatrix() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#00ff00";
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    resizeCanvas(); // Call before defining columns/drops
    window.addEventListener("resize", resizeCanvas);
    setInterval(drawMatrix, 33);
};

document.addEventListener("DOMContentLoaded", function () {
    console.log("Applying user settings...");

    // Load saved settings from localStorage
    const savedTheme = localStorage.getItem("theme");
    const savedBg = localStorage.getItem("background");
    const savedFontSize = localStorage.getItem("fontSize");
    const savedButtonColor = localStorage.getItem("buttonColor");
    const savedHeaderColor = localStorage.getItem("headerColor");
    const savedTextShadow = localStorage.getItem("textShadow") === "true";
    const savedFontFamily = localStorage.getItem("fontFamily");

    // Apply Theme
    if (savedTheme) document.body.classList.add(savedTheme + "-theme");

    // Apply Background Image
    if (savedBg) {
        document.body.style.backgroundImage = `url(${savedBg})`;
        document.body.classList.add("custom-background");
    }

    // Apply Font Size
    if (savedFontSize) {
        document.body.style.fontSize = `${savedFontSize}px`;
    }

    // Apply Button Color
    if (savedButtonColor) {
        document.documentElement.style.setProperty("--button-color", savedButtonColor);
    }

    // Apply Header Color
    if (savedHeaderColor) {
        const header = document.querySelector("header");
        if (header) header.style.backgroundColor = savedHeaderColor;
    }

    // Apply Text Shadow
    if (savedTextShadow) {
        document.body.classList.add("text-shadow-enabled");
    }

    // Apply Font Family
    if (savedFontFamily) {
        document.body.style.fontFamily = savedFontFamily;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("Applying saved theme...");

    // Load the saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");

    // If a theme is saved, apply it
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        const header = document.querySelector("header");
        if (header) {
            header.classList.add(savedTheme); // Apply theme to header
        }
    }
});
