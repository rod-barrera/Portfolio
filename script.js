document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li a');

function setActiveLink() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 60 && window.scrollY < sectionTop + sectionHeight - 60) {
            current = section.getAttribute('id');
        }
    });

    if (!current) {
        current = sections[0].getAttribute('id');  // Default to 'About'
    }

    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.getAttribute('href').includes(current)) {
            li.classList.add('active');
        }
    });
}

window.addEventListener('scroll', setActiveLink);

// Set the initial active link on page load
document.addEventListener('DOMContentLoaded', () => {
    navLi.forEach(li => li.classList.remove('active'));
    navLi[0].classList.add('active');  // Default to 'About'
    setActiveLink();
});
