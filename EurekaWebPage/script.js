document.addEventListener('DOMContentLoaded', function () {
    let lastScrollTop = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Downscroll - hide header
            header.classList.add('nav-hidden');
        } else {
            // Upscroll - show header
            header.classList.remove('nav-hidden');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling

    });

    // Accordion Functionality
    const accHeaders = document.querySelectorAll('.accordion-header');

    accHeaders.forEach(header => {
        header.addEventListener('click', function () {
            // Close other items
            const currentlyActive = document.querySelector('.accordion-header.active');
            if (currentlyActive && currentlyActive !== header) {
                currentlyActive.classList.remove('active');
                currentlyActive.nextElementSibling.style.maxHeight = null;
            }

            // Toggle current item
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (this.classList.contains('active')) {
                // Add buffer for padding (15px top + 20px bottom = 35px) + generous safety margin
                content.style.maxHeight = (content.scrollHeight + 40) + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });

    // Promotoria Section Hover Interaction
    const promoItems = document.querySelectorAll('.promo-item');
    const displayTitle = document.getElementById('promo-display-title');
    const displayDesc = document.getElementById('promo-display-desc');
    // const displayImg = document.getElementById('promo-display-img'); // Uncomment when images are ready

    promoItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            // Remove active class from all
            promoItems.forEach(btn => btn.classList.remove('active'));

            // Add active class to current
            this.classList.add('active');

            // Update content
            const title = this.getAttribute('data-title');
            const desc = this.getAttribute('data-desc');

            displayTitle.textContent = title;
            displayDesc.textContent = desc;
        });
    });

    // Privacy Policy Modal Logic
    const privacyLink = document.getElementById('privacy-link');
    const privacyModal = document.getElementById('privacy-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');

    if (privacyLink && privacyModal && closeModalBtn) {
        // Open Modal
        privacyLink.addEventListener('click', function (e) {
            e.preventDefault();
            privacyModal.classList.remove('hidden');
            // Prevent body scrolling
            document.body.style.overflow = 'hidden';
        });

        // Close Modal via Button
        closeModalBtn.addEventListener('click', function () {
            privacyModal.classList.add('hidden');
            // Restore body scrolling
            document.body.style.overflow = 'auto';
        });

        // Close Modal via clicking outside content (overlay)
        privacyModal.addEventListener('click', function (e) {
            if (e.target === privacyModal) {
                privacyModal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        });

        // Close with Escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && !privacyModal.classList.contains('hidden')) {
                privacyModal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // NEW FAQ Redesign Interactivity
    const newFaqToggles = document.querySelectorAll('.faq-toggle');

    newFaqToggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            // Close other open items (optional, but good for clean UI)
            const currentlyActive = document.querySelector('.faq-toggle.active');
            if (currentlyActive && currentlyActive !== toggle) {
                currentlyActive.classList.remove('active');
                currentlyActive.nextElementSibling.style.maxHeight = null;
            }

            // Toggle current
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            if (this.classList.contains('active')) {
                // Add buffer for padding (15px top + 20px bottom = 35px) + generous safety margin
                answer.style.maxHeight = (answer.scrollHeight + 40) + "px";
            } else {
                answer.style.maxHeight = null;
            }
        });
    });
    // Login Page Demo Logic
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Stop actual submission

            const input = this.querySelector('.login-input');
            const val = input.value.trim().toLowerCase();

            if (val === 'demo') {
                // Redirect to 404 page
                window.location.href = '404.html';
            } else {
                // Optional: Handle other cases or show error
                alert('Código no válido. Intenta "demo"');
            }
        });
    }

});
