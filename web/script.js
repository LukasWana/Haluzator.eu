document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Animate sections on scroll
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

    // Dynamic background effect (subtle mouse movement)
    const bgAnimation = document.querySelector('.bg-animation');
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        bgAnimation.style.backgroundPosition = `${x * 20}px ${y * 20}px`;
    });

    // Carousel with automatic animation
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    if (carouselWrapper) {
        const slides = document.querySelectorAll('.carousel-slide');
        const indicators = document.querySelectorAll('.carousel-indicator');
        let currentSlide = 0;
        const slideInterval = 5000; // 5 seconds

        function showSlide(index) {
            // Remove active class from all slides and indicators
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                indicators[i].classList.remove('active');
            });

            // Add active class to current slide and indicator
            slides[index].classList.add('active');
            indicators[index].classList.add('active');
            currentSlide = index;
        }

        function nextSlide() {
            const nextIndex = (currentSlide + 1) % slides.length;
            showSlide(nextIndex);
        }

        // Auto-advance carousel
        let carouselInterval = setInterval(nextSlide, slideInterval);

        // Indicator click handlers
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                showSlide(index);
                // Reset auto-advance timer
                clearInterval(carouselInterval);
                carouselInterval = setInterval(nextSlide, slideInterval);
            });
        });

        // Pause on hover
        carouselWrapper.addEventListener('mouseenter', () => {
            clearInterval(carouselInterval);
        });

        carouselWrapper.addEventListener('mouseleave', () => {
            carouselInterval = setInterval(nextSlide, slideInterval);
        });
    }

    // Interactive UI buttons image highlighting
    const uiButtonsImage = document.getElementById('ui-buttons-image');
    const buttonItems = document.querySelectorAll('.button-item[data-button]');

    if (uiButtonsImage && buttonItems.length > 0) {
        let highlightTimeout;
        let currentHighlightedIndex = -1;

        function highlightNextButton() {
            // Remove highlight from all buttons
            buttonItems.forEach(item => item.classList.remove('highlighted'));

            // Highlight next button
            currentHighlightedIndex = (currentHighlightedIndex + 1) % buttonItems.length;
            buttonItems[currentHighlightedIndex].classList.add('highlighted');

            // Scroll highlighted button into view if needed
            const highlightedButton = buttonItems[currentHighlightedIndex];
            highlightedButton.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        function startHighlighting() {
            // Start highlighting immediately
            highlightNextButton();

            // Continue highlighting every 1.5 seconds
            highlightTimeout = setInterval(highlightNextButton, 1500);
        }

        function stopHighlighting() {
            clearInterval(highlightTimeout);
            buttonItems.forEach(item => item.classList.remove('highlighted'));
            currentHighlightedIndex = -1;
        }

        // Start highlighting on mouse enter
        uiButtonsImage.addEventListener('mouseenter', startHighlighting);

        // Stop highlighting on mouse leave
        uiButtonsImage.addEventListener('mouseleave', stopHighlighting);

        // Also allow manual highlighting by hovering over image
        uiButtonsImage.addEventListener('mousemove', () => {
            if (!highlightTimeout) {
                startHighlighting();
            }
        });
    }
});
