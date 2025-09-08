// Presentation navigation and keyboard controls
document.addEventListener('DOMContentLoaded', function() {
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        switch(e.key) {
            case 'ArrowLeft':
                const prevButton = document.querySelector('.nav-button.prev');
                if (prevButton) prevButton.click();
                break;
            case 'ArrowRight':
                const nextButton = document.querySelector('.nav-button.next');
                if (nextButton) nextButton.click();
                break;
            case 'Home':
                const homeButton = document.querySelector('.nav-button.home');
                if (homeButton) homeButton.click();
                break;
        }
    });
    
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add slide transition effects
    const slideContent = document.querySelector('.slide-content');
    if (slideContent) {
        slideContent.style.opacity = '0';
        slideContent.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            slideContent.style.transition = 'all 0.6s ease';
            slideContent.style.opacity = '1';
            slideContent.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Add hover effects to navigation buttons
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});
