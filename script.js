     let backToTop = document.getElementById('backToTopBtn');
    if (!backToTop) {
        backToTop = document.createElement('button');
        backToTop.id = 'backToTopBtn';
        backToTop.textContent = '↑';
        backToTop.style.position = 'fixed';
        backToTop.style.bottom = '30px';
        backToTop.style.right = '30px';
        backToTop.style.display = 'none';
        backToTop.style.zIndex = '9999';
        backToTop.style.padding = '0.7rem 1.2rem';
        backToTop.style.fontSize = '1.5rem';
        backToTop.style.borderRadius = '50%';
        backToTop.style.border = 'none';
        backToTop.style.background = '#1E1E1E';
        backToTop.style.color = '#00F5D4';
        backToTop.style.cursor = 'pointer';
        backToTop.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
        document.body.appendChild(backToTop);
    }

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
   
    const contactForm = document.querySelector('.form-submission');
    if (contactForm) {
        let errorBox = document.querySelector('.form-error');
        let successBox = document.querySelector('.form-success');
        if (!errorBox) {
            errorBox = document.createElement('div');
            errorBox.className = 'form-error';
            errorBox.style.color = 'red';
            errorBox.style.marginBottom = '1rem';
            contactForm.prepend(errorBox);
        }
        if (!successBox) {
            successBox = document.createElement('div');
            successBox.className = 'form-success';
            successBox.style.color = 'green';
            successBox.style.marginBottom = '1rem';
            contactForm.prepend(successBox);
        }
        errorBox.textContent = '';
        successBox.textContent = '';

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            errorBox.textContent = '';
            successBox.textContent = '';
            // Get form values
            const name = contactForm.querySelector('#name').value.trim();
            const email = contactForm.querySelector('#email').value.trim();
            const subject = contactForm.querySelector('#subject').value.trim();
            const message = contactForm.querySelector('#message').value.trim();

            let errors = [];
            if (!name) errors.push('Name is required.');
            if (!email) {
                errors.push('Email is required.');
            } else if (!/^\S+@\S+\.\S+$/.test(email)) {
                errors.push('Email is invalid.');
            }
            if (!subject) errors.push('Subject is required.');
            if (!message) errors.push('Message is required.');

            if (errors.length > 0) {
                errorBox.textContent = errors.join(' ');
                return;
            }
            successBox.textContent = 'Message sent successfully!';
            contactForm.reset();
            setTimeout(() => {
                successBox.textContent = '';
            }, 3000);
        });
    }
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    const menu = document.querySelector('.menu');
    const navLinks = document.querySelectorAll('.menu a');
    if (hamburger && navbar && menu) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation(); 
            navbar.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target)) {
                navbar.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                navbar.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }
    if (typeof Typed !== 'undefined') {
        new Typed('.typing-text', {
            strings: ['Front-End Developer'],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true,
            startDelay: 1000,
            showCursor: true,
            cursorChar: '|'
        });
    }
    const skillsSection = document.querySelector('#Skills');
    const skillBars = document.querySelectorAll('.bar-fill');

    if (skillsSection && skillBars.length) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillBars.forEach((bar) => {
                        const percent = bar.dataset.percent || bar.getAttribute('data-percent') || '0%';
                        bar.style.transition = 'width 900ms ease-in-out';
                        bar.style.width = percent;
                    });
                } else {
                    skillBars.forEach((bar) => {
                        bar.style.width = '0%';
                    });
                }
            });
        }, { root: null, threshold: 0.25 });

        io.observe(skillsSection);
        }

});
