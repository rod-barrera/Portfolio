// Selecciona todos los enlaces dentro de 'nav' y añade un evento de clic a cada uno
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Previene la acción predeterminada del enlace (que es navegar a una nueva URL)
        e.preventDefault();
        // Obtiene el elemento que corresponde al atributo 'href' del enlace clicado
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            // Desplaza suavemente hasta el elemento
            behavior: 'smooth'
        });
    });
});

// Selecciona todas las secciones (aunque en este código no se usan realmente)
const sections = document.querySelectorAll('section');
// Selecciona todos los enlaces dentro de 'nav ul li'
const navLi = document.querySelectorAll('nav ul li a');

// Añade eventos de mouseover y mouseout a cada enlace de navegación
navLi.forEach(li => {
    // Evento de mouseover: añade la clase 'active' al enlace sobre el cual está el ratón
    li.addEventListener('mouseover', () => {
        // Remueve la clase 'active' de todos los enlaces de navegación
        navLi.forEach(link => link.classList.remove('active'));
        // Añade la clase 'active' al enlace actual
        li.classList.add('active');
    });
    // Evento de mouseout: remueve la clase 'active' del enlace cuando el ratón se aleja
    li.addEventListener('mouseout', () => {
        li.classList.remove('active');
    });
});