// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Add mobile menu toggle functionality
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobile-menu-button';
    mobileMenuButton.innerHTML = '☰';
    document.querySelector('header .container').prepend(mobileMenuButton);

    const nav = document.querySelector('nav');
    mobileMenuButton.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenuButton.classList.toggle('active');
    });

    // Hero Slider functionality
    const indicators = document.querySelectorAll('.slide-indicators .indicator');
    const prevButton = document.querySelector('.nav-button.prev');
    const nextButton = document.querySelector('.nav-button.next');
    const shortInfoHeading = document.querySelector('.short-info h3');
    const shortInfoText = document.querySelector('.short-info p');

    // Sample content for the slider
    const sliderContent = [
        {
            heading: "Short heading goes here",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            heading: "Pregnancy Wellness Tips",
            text: "Discover expert advice for a healthy pregnancy journey."
        },
        {
            heading: "Financial Planning Guide",
            text: "Prepare for your baby's future with our smart financial tools."
        }
    ];

    let currentSlide = 0;

    // Function to update the slider
    function updateSlider() {
        // Update indicators
        indicators.forEach((indicator, index) => {
            if (index === currentSlide) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });

        // Update content
        shortInfoHeading.textContent = sliderContent[currentSlide].heading;
        shortInfoText.textContent = sliderContent[currentSlide].text;
    }

    // Add click events to navigation buttons
    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
            currentSlide = (currentSlide === 0) ? sliderContent.length - 1 : currentSlide - 1;
            updateSlider();
        });

        nextButton.addEventListener('click', () => {
            currentSlide = (currentSlide === sliderContent.length - 1) ? 0 : currentSlide + 1;
            updateSlider();
        });
    }

    // Add click events to indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            // Here you would typically send this to your backend
            alert('Thank you for subscribing! We\'ll keep you updated.');
            this.reset();
        });
    }

    // Add animation on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.card, .medium-section, .testimonial');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
}); 