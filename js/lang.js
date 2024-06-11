document.addEventListener('DOMContentLoaded', function () {
    const titulo = document.getElementById('titulo');
    const descripcion1 = document.getElementById('descripcion1');
    const descripcion2 = document.getElementById('descripcion2');
    const descripcion3 = document.getElementById('descripcion3');
    const idiomaSelector = document.getElementById('idioma');
    const inicio = document.getElementById('inicio');
    const acerca = document.getElementById('acerca');
    const proyectos = document.getElementById('proyectos');
    const intereses = document.getElementById('intereses');
    const contacto = document.getElementById('contacto');
    
    // Objeto con las traducciones
    const traducciones = {
        es: {
            titulo: 'Estudiante de Ingeniería en Sistemas y Redes Informáticas',
            descripcion1: 'Mi nombre es Walter Eliseo y actualmente estoy cursando el séptimo ciclo de la carrera de "Ingeniería en Sistemas y Redes Informáticas" en la Universidad Gerardo Barrios. Soy un joven apasionado por las tecnologías y el desarrollo de sitios y aplicaciones web, especialmente en el ámbito de backend. Desde mi etapa de bachillerato, comencé a adquirir gusto por los temas tecnológicos y con el paso del tiempo mi atención se centró en el área de desarrollo.',
            descripcion2: 'En la universidad, además, he adquirido conociminetos en áreas que han sido de mucho interés para mí, como las redes y la electrónica. En cada una de esta áreas he aprendido sobre temas como el enrutamiento dinámico, la creación de circuitos, el manejo de bases de datos y el desarrollo web. Además, junto con estos conocimientos, me desenvuelvo en el trabajo en equipo, el liderazgo y la toma de decisiones importantes.',
            descripcion3: 'Mi deseo de querer seguir aprendiendo me llevan a mantenerme actualizado con las últimas noticias tecnológicas para ampliar mis conocimientos en diversas areas.',
            inicio: 'Inicio',
            acerca: 'Sobre Mi',
            proyectos: 'Proyectos',
            intereses: 'Intereses',
            contacto: 'Contacto'
        },
        en: {
            titulo: 'Computer Systems and Network Engineering Student',
            descripcion1: 'My name is Walter Eliseo and I am currently studying the seventh cycle of the “Computer Systems and Network Engineering” degree at Gerardo Barrios University. I am a young man passionate about technologies and the development of websites and web applications, especially in the backend area. Since my high school, I began to acquire a taste for technological issues and over time my attention focused on the area of development.',
            descripcion2: 'At the university, I have also acquired knowledge in areas that have been of great interest to me, such as networks and electronics. In each of these areas I have learned about topics such as dynamic routing, circuit creation, database management and web development. In addition, along with this knowledge, I am skilled in teamwork, leadership and making important decisions.',
            descripcion3: 'My desire to keep learning leads me to keep updated with the latest technological news to expand my knowledge in different areas.',
            inicio: 'Home',
            acerca: 'About Me',
            proyectos: 'Projects',
            intereses: 'Interests',
            contacto: 'Contact'
        }
    };
    
    // Función para cambiar el idioma
    function cambiarIdioma() {
        const idiomaSeleccionado = idiomaSelector.value;
        titulo.textContent = traducciones[idiomaSeleccionado].titulo;
        descripcion1.textContent = traducciones[idiomaSeleccionado].descripcion1;
        descripcion2.textContent = traducciones[idiomaSeleccionado].descripcion2;
        descripcion3.textContent = traducciones[idiomaSeleccionado].descripcion3;
        inicio.innerHTML = `<a href="#">${traducciones[idiomaSeleccionado].inicio}</a>`;
        acerca.innerHTML = `<a href="#">${traducciones[idiomaSeleccionado].acerca}</a>`;
        proyectos.innerHTML = `<a href="#">${traducciones[idiomaSeleccionado].proyectos}</a>`;
        intereses.innerHTML = `<a href="#">${traducciones[idiomaSeleccionado].intereses}</a>`;
        contacto.innerHTML = `<a href="#">${traducciones[idiomaSeleccionado].contacto}</a>`;
    }
    
    // Event listener para cambiar el idioma cuando se seleccione otro
    idiomaSelector.addEventListener('change', cambiarIdioma);
    
    // Inicializar con el idioma actual
    cambiarIdioma();
});
