let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let navlinks = document.querySelectorAll('.navlist a');


//toggle menu logic
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

// Active link logic
navlinks.forEach(link => {
    link.onclick = () => {
        // 1. Remove 'active' class from all links
        navlinks.forEach(nav => nav.classList.remove('active'));
        
        // 2. Add 'active' class to the clicked link
        link.classList.add('active');

        // 3. Close the mobile menu after clicking 
        menu.classList.remove('bx-x');
        navlist.classList.remove('open');
    }
});


//Home but analysis section

function updateUptime() {
    //the starting date
    const startDate = new Date(2025, 11, 22, 0, 0, 0); 
    const now = new Date();

    let diff = now - startDate;

    // Time calculations for years, months, days, hours, mins, and secs
    const msPerSecond = 1000;
    const msPerMinute = msPerSecond * 60;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerYear = msPerDay * 365.25; // for leap years  

    const years = Math.floor(diff / msPerYear);
    diff %= msPerYear;

    const months = Math.floor(diff / (msPerDay * 30.44)); // Average month length
    diff %= (msPerDay * 30.44);

    const days = Math.floor(diff / msPerDay);
    diff %= msPerDay;

    const hours = Math.floor(diff / msPerHour);
    diff %= msPerHour;

    const minutes = Math.floor(diff / msPerMinute);
    diff %= msPerMinute;

    const seconds = Math.floor(diff / msPerSecond);

    // 2. Display the result in your HTML
    const counterElement = document.getElementById('uptime-counter');
    counterElement.innerHTML = 
        `${years} years, ${months} months, ${days} days, ` + 
        `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

// Update the count every 1 second
setInterval(updateUptime, 1000);

// Run once immediately so it doesn't wait 1 second to start
updateUptime();



document.addEventListener("DOMContentLoaded", () => {
    // Get the current page name from the URL
    const currentFileName = window.location.pathname.split("/").pop();

    // Select all links in your navlist
    const navLinks = document.querySelectorAll('.navlist a');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');

        // First, remove the 'active' class from all links
        link.classList.remove('active');

        // Check if the current file name matches the link's href
        if (currentFileName === linkHref) {
            link.classList.add('active');
        } 
        
        // Default: If you are at the root (index) or URL is empty, highlight Home
        if ((currentFileName === "" || currentFileName === "index.html") && linkHref === "index.html") {
            link.classList.add('active');
        }
    });
});