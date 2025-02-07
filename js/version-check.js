(async function () {
    // GitHub raw URL for version.json
    const VERSION_FILE = "https://raw.githubusercontent.com/EthanDupe/EthanDupe.github.io/main/version.json";
    const currentVersion = document.querySelector("header").getAttribute("data-version");

    async function fetchVersion() {
        try {
            const response = await fetch(VERSION_FILE, { cache: "no-cache" });
            return await response.json();
        } catch (error) {
            console.error("Error fetching version:", error);
            return null;
        }
    }

    function showNotification(version, changes) {
        // Create notification div if it doesn't exist
        let notification = document.getElementById("notification");
        if (!notification) {
            notification = document.createElement("div");
            notification.id = "notification";
            notification.style.cssText = "position: fixed; bottom: 10px; left: 10px; background: #333; color: white; padding: 10px; border-radius: 5px;";
            document.body.appendChild(notification);
        }

        // Update notification content
        let changeList = changes.map(change => `• ${change}`).join("<br>");
        notification.innerHTML = `<strong>Update Available: v${version}</strong><br>${changeList}<br><button onclick="document.getElementById('notification').remove()">Dismiss</button>`;
        
        notification.style.display = "block"; // Make it visible
    }

    function showUpToDateMessage() {
        // Remove any existing "up to date" message
        let oldMessage = document.getElementById("up-to-date-message");
        if (oldMessage) oldMessage.remove();

        // Create and show the "up to date" message
        let upToDateMsg = document.createElement("div");
        upToDateMsg.id = "up-to-date-message";
        upToDateMsg.style.cssText = "position: fixed; bottom: 10px; right: 10px; background: #222; color: #0f0; padding: 10px; border-radius: 5px; font-size: 14px;";
        upToDateMsg.textContent = "✅ Your version is up to date.";
        document.body.appendChild(upToDateMsg);

        // Auto-hide message after 50 seconds
        setTimeout(() => upToDateMsg.remove(), 50000);
    }

    const versionData = await fetchVersion();

    if (versionData) {
        if (currentVersion !== versionData.version) {
            // If there's a version update, show the notification
            showNotification(versionData.version, versionData.changes);
        } else {
            // If up-to-date, remove any previous notification and show the "up to date" message
            let notification = document.getElementById("notification");
            if (notification) notification.style.display = "none"; // Hide existing notification

            showUpToDateMessage();
        }
    }
})();
