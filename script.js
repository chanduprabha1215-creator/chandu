// Custom Cursor
const cursor = document.getElementById('cursor');
const cursorBlur = document.getElementById('cursor-blur');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorBlur.style.left = e.clientX + 'px';
    cursorBlur.style.top = e.clientY + 'px';
});

// Cursor Hover Effects on Links and Buttons
const hoverElements = document.querySelectorAll('a, button, .skill-card, .btn-resume');

hoverElements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(2)';
        cursor.style.backgroundColor = 'transparent';
        cursor.style.border = '1px solid var(--accent)';
    });

    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.backgroundColor = 'var(--accent)';
        cursor.style.border = 'none';
    });
});

// Scroll Animations (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            // Optional: remove class to repeat animation on scroll up
            // entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Parallax effect on hero image
const heroImage = document.querySelector('.hero-image');
if(heroImage) {
    window.addEventListener('scroll', () => {
        const scrollVal = window.scrollY;
        heroImage.style.transform = `translateY(${scrollVal * 0.2}px)`;
    });
}
