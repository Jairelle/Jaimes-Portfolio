window.addEventListener('load', () => {
    const loader = document.querySelector('.loading');

    setTimeout(() => {
        loader.style.transition = "opacity 0.8s ease";
        loader.style.opacity = "0";
        
        setTimeout(() => {
            loader.style.display = "none"
            document.body.style.overflow = 'auto'; 
        }, 800);
    }, 1000); 
});