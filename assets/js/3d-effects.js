/**
 * 3D EFFECTS AND ANIMATIONS JAVASCRIPT
 * K-Tech Solutions
 * 
 * Handles:
 * - Scroll-based animation triggers
 * - 3D tilt effects
 * - Mouse tracking parallax
 * - Counter animations
 * - Performance optimization
 */

(function () {
    'use strict';

    // ================================================
    // SCROLL REVEAL ANIMATIONS
    // ================================================

    /**
     * Intersection Observer for scroll-based animations
     */
    function initScrollReveal() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Optionally unobserve after animation
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all reveal elements
        const revealElements = document.querySelectorAll(
            '.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children'
        );

        revealElements.forEach(el => observer.observe(el));
    }

    // ================================================
    // 3D TILT EFFECT
    // ================================================

    /**
     * Add 3D tilt effect to cards on mouse move
     */
    function init3DTilt() {
        const tiltCards = document.querySelectorAll('.card-tilt');

        tiltCards.forEach(card => {
            card.addEventListener('mousemove', handleTilt);
            card.addEventListener('mouseleave', resetTilt);
        });

        function handleTilt(e) {
            const card = e.currentTarget;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        }

        function resetTilt(e) {
            const card = e.currentTarget;
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        }
    }

    // ================================================
    // PARALLAX MOUSE TRACKING
    // ================================================

    /**
     * Create parallax effect on mouse movement
     */
    function initMouseParallax() {
        const parallaxElements = document.querySelectorAll('.parallax-layer');

        if (parallaxElements.length === 0) return;

        let mouseX = 0;
        let mouseY = 0;
        let rafId = null;

        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 2;

            if (!rafId) {
                rafId = requestAnimationFrame(updateParallax);
            }
        });

        function updateParallax() {
            parallaxElements.forEach((el) => {
                const speed = el.dataset.speed || 10;
                const x = mouseX * speed;
                const y = mouseY * speed;
                el.style.transform = `translate(${x}px, ${y}px)`;
            });
            rafId = null;
        }
    }

    // ================================================
    // COUNTER ANIMATIONS
    // ================================================

    /**
     * Animate numbers counting up
     */
    function initCounters() {
        const counters = document.querySelectorAll('.counter');
        const speed = 200; // Lower is faster

        const observerOptions = {
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    animateCounter(entry.target);
                    entry.target.classList.add('counted');
                }
            });
        }, observerOptions);

        counters.forEach(counter => observer.observe(counter));

        function animateCounter(counter) {
            const target = +counter.getAttribute('data-target') || +counter.innerText.replace(/[^0-9]/g, '');
            const increment = target / speed;
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.innerText = formatNumber(Math.ceil(current));
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = formatNumber(target);
                }
            };

            updateCounter();
        }

        function formatNumber(num) {
            // Keep original formatting if it has special characters
            return num.toLocaleString();
        }
    }

    // ================================================
    // SMOOTH PARALLAX SCROLLING
    // ================================================

    /**
     * Add parallax effect to background elements on scroll
     */
    function initParallaxScroll() {
        const parallaxBgs = document.querySelectorAll('.parallax-scroll');

        if (parallaxBgs.length === 0) return;

        let rafId = null;
        let scrollY = window.pageYOffset;

        window.addEventListener('scroll', () => {
            scrollY = window.pageYOffset;
            if (!rafId) {
                rafId = requestAnimationFrame(updateParallaxScroll);
            }
        });

        function updateParallaxScroll() {
            parallaxBgs.forEach(el => {
                const speed = el.dataset.parallaxSpeed || 0.5;
                const yPos = -(scrollY * speed);
                el.style.transform = `translate3d(0, ${yPos}px, 0)`;
            });
            rafId = null;
        }
    }

    // ================================================
    // ICON ANIMATIONS ON HOVER
    // ================================================

    /**
     * Add hover animations to icons
     */
    function initIconAnimations() {
        // Icons already have CSS hover classes
        // This function can be used for more complex icon animations if needed
        const icons = document.querySelectorAll('.icon-bounce, .icon-spin');

        icons.forEach(icon => {
            icon.style.cursor = 'pointer';
        });
    }

    // ================================================
    // PERFORMANCE OPTIMIZATION
    // ================================================

    /**
     * Check if user prefers reduced motion
     */
    function respectReducedMotion() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            document.documentElement.classList.add('reduce-motion');
            // Disable complex animations
            return true;
        }
        return false;
    }

    /**
     * Throttle function for performance
     */
    function throttle(func, limit) {
        let inThrottle;
        return function () {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // ================================================
    // INITIALIZE ALL EFFECTS
    // ================================================

    /**
     * Initialize all 3D effects and animations
     */
    function init() {
        // Check for reduced motion preference
        if (respectReducedMotion()) {
            console.log('Reduced motion enabled - animations simplified');
        }

        // Initialize features
        initScrollReveal();
        init3DTilt();
        initMouseParallax();
        initCounters();
        initParallaxScroll();
        initIconAnimations();

        console.log('3D Effects initialized');
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // ================================================
    // EXPOSE PUBLIC API (Optional)
    // ================================================

    window.AnimationEffects = {
        refreshObservers: initScrollReveal,
        initTilt: init3DTilt,
        initCounters: initCounters
    };

})();
