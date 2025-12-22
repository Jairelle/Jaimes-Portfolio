// 1. Initialize EmailJS with your Public Key
(function() {
    emailjs.init("6OML6jnIt0e52Pv-C"); //
})();

// 2. Wait for the DOM to fully load before attaching events
window.onload = function() {
    const contactForm = document.getElementById('contact-form');
    const btn = document.getElementById('button');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Change button state to give visual feedback
            const originalText = btn.innerHTML;
            btn.innerHTML = 'Sending...';
            btn.style.opacity = '0.7';

            // 3. Your specific IDs
            const serviceID = 'service_gazeusf'; //
            const templateID = 'template_taz65wa'; //

            // 4. Send the form data
            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    // Success state
                    btn.innerHTML = originalText;
                    btn.style.opacity = '1';
                    alert('Thank you! Your message has been sent successfully.');
                    contactForm.reset(); //
                }, (err) => {
                    // Error state
                    btn.innerHTML = originalText;
                    btn.style.opacity = '1';
                    
                    // This alert will show the exact error code (e.g., 400, 412) if it fails
                    alert('Failed to send message. Error: ' + JSON.stringify(err));
                    console.error('EmailJS Error:', err);
                });
        });
    } else {
        console.error("Error: Could not find the element with ID 'contact-form'. Check your HTML.");
    }
};