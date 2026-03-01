// Smooth scrolling untuk nav links
const navLinks = document.querySelectorAll('.nav-links a');
const navLinksContainer = document.querySelector('.nav-links');
const hamburger = document.getElementById('hamburger');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            navLinksContainer.classList.remove('active');
        }
    });
});

hamburger.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('nav')) {
        navLinksContainer.classList.remove('active');
    }
});

window.addEventListener('scroll', () => {
    let currentSection = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.pageYOffset >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.style.color = 'var(--primary)';
        } else {
            link.style.color = 'var(--dark)';
        }
    });
});

// Re-trigger Instagram embed setelah navigasi
window.addEventListener('load', () => {
    if (window.instgrm) {
        window.instgrm.Embeds.process();
    }
});