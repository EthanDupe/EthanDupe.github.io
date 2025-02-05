function dismissNotification() {
    document.getElementById("notification").style.display = "none";
}

window.onload = function() {
    // Display notification
    let notification = document.getElementById('notification');
    notification.style.display = 'block';
    
    // Automatically dismiss notification after 2 minutes
    setTimeout(() => {
        notification.style.display = 'none';
    }, 120000);

    // Matrix effect
    const canvas = document.querySelector('.matrix-canvas');
    const ctx = canvas.getContext('2d');
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drops.length = Math.floor(canvas.width / fontSize);
        drops.fill(1);
    }

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00ff00';
        ctx.font = fontSize + 'px monospace';
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    setInterval(drawMatrix, 33);
}
