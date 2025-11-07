document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});


const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

document.addEventListener('mousemove', (e) => {
    cursorDot.style.left = `${e.clientX}px`;
    cursorDot.style.top = `${e.clientY}px`;

    setTimeout(() => {
        cursorOutline.style.left = `${e.clientX}px`;
        cursorOutline.style.top = `${e.clientY}px`;
    }, 80);
});


const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-item');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
    });

    el.addEventListener('mouseleave', () => {
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

// Animação de digitação
// const typewriterElement = document.querySelector('.typewriter-text');
// if (typewriterElement) {
//     // Inicia a animação após um pequeno delay
//     setTimeout(() => {
//         typewriterElement.style.animation = 'typewriter 2s steps(40) 1s forwards, blink 0.75s step-end infinite';
//     }, 500);
// }


window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('shadow-md');
        header.classList.remove('bg-white/90');
        header.classList.add('bg-white');
    } else {
        header.classList.remove('shadow-md');
        header.classList.remove('bg-white');
        header.classList.add('bg-white/90');
    }
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section h2, section p, .project-card, .skill-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

const dot = document.querySelector('.cursor-dot');
    const outline = document.querySelector('.cursor-outline');

    window.addEventListener('mousemove', e => {
      const { clientX: x, clientY: y } = e;
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      outline.style.left = `${x}px`;
      outline.style.top = `${y}px`;
    });

console.warn("woring for while")

