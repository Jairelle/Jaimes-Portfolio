const launchDate = new Date(2025, 7, 18, 0, 0, 0); 

function updateUptime() {
    const now = new Date();
    const diff = now - launchDate;

    const s = Math.floor((diff / 1000) % 60);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));

    // Formatted for better "card" display
    document.getElementById('uptime-display').innerHTML = 
        `${d}d ${h}h ${m}m ${s}s`;
}

setInterval(updateUptime, 1000);
updateUptime();



