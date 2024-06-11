// lang.js
document.addEventListener('DOMContentLoaded', function () {
    const idiomaSelector = document.getElementById('idioma');
    
    // Obtener el idioma seleccionado del almacenamiento local, si está disponible
    let idiomaGuardado = localStorage.getItem('idioma');
    if (!idiomaGuardado) {
        idiomaGuardado = idiomaSelector.value;
        localStorage.setItem('idioma', idiomaGuardado);
    } else {
        idiomaSelector.value = idiomaGuardado;
    }
    
    // Objeto con las traducciones
    const traducciones = {
        es: {
            inicio: 'Inicio',
            acerca: 'Sobre Mi',
            proyectos: 'Proyectos',
            intereses: 'Intereses',
            contacto: 'Contacto',
            enlaces: 'Contacto',
            correo: 'Correo',
            frase: '"Especialista en programación backend. Dando vida a la funcionalidad detrás de cada aplicación"',
            titulo: 'Estudiante de Ingeniería en Sistemas y Redes Informáticas',
            descripcion1: 'Mi nombre es Walter Eliseo y actualmente estoy cursando el séptimo ciclo de la carrera de "Ingeniería en Sistemas y Redes Informáticas" en la Universidad Gerardo Barrios. Soy un joven apasionado por las tecnologías y el desarrollo de sitios y aplicaciones web, especialmente en el ámbito de backend. Desde mi etapa de bachillerato, comencé a adquirir gusto por los temas tecnológicos y con el paso del tiempo mi atención se centró en el área de desarrollo.',
            descripcion2: 'En la universidad, además, he adquirido conociminetos en áreas que han sido de mucho interés para mí, como las redes y la electrónica. En cada una de esta áreas he aprendido sobre temas como el enrutamiento dinámico, la creación de circuitos, el manejo de bases de datos y el desarrollo web. Además, junto con estos conocimientos, me desenvuelvo en el trabajo en equipo, el liderazgo y la toma de decisiones importantes.',
            descripcion3: 'Mi deseo de querer seguir aprendiendo me llevan a mantenerme actualizado con las últimas noticias tecnológicas para ampliar mis conocimientos en diversas areas.',
            habilidades: 'Habilidades',
            duras: 'Habilidades Duras',
            blandas: 'Habilidades Blandas',
            equipo: 'Trabajo en Equipo',
            problemas: 'Resolución de Problemas',
            comunicacion: 'Comunicación',
            liderazgo: 'Liderazgo',
            creatividad: 'Creatividad',
            aprendizaje: 'Aprendizaje Continuo',
            perfil: 'Perfil Profesional',
            perfildesc: 'Mi nombre es Walter Eliseo y actualmente soy estudiante del 7mo ciclo de la carrera "Ingeniería en Sistemas y Redes Informáticas" en la Universidad Gerardo Barrios.',
            areas: 'Areas de Interes',
            redes: 'Redes',
            bd: 'Bases de Datos',
            electronica: 'Electrónica',
            redesD: 'Realizar conexiones ya sea de forma virtual o físico resulta apasionante ya que es un área de vital importancia en la seguridad informática y que me genera de forma constante las ganas de seguir aprendiendo sobre el tema.',
            bdD: 'Además de la programación, el manejo de los datos es otro de los temas que me genera más atención ya que mayormente va de la mano con el desarrollo web, específicamente en el back-end.',
            electronicaD: 'La electrónica es, aunque en menor medida, otro de los temas que me han generado interés en mi carrera ya que nos permiten construir diversos circuitos que pueden ser plasmados en proyectos reales.',
            valores: 'Valores Profesionales',
            compromiso: 'Compromiso',
            etica: 'Ética Profesional',
            respeto: 'Respeto',
            responsabilidad: 'Responsabilidad',
            valor1: 'Me esfuerzo constantemente en mejorar mis habilidades y conocimientos para poder contribuir de manera significativa en el éxito de mis proyectos.',
            valor2: 'Me comprometo a seguir principios morales sólidos en todas mis interacciones profesionales, respetando los derechos, las decisiones y dignidad de todas las personas.',
            valor3: 'Valoro la diversidad de opiniones de mi ambiente de trabajo, trato a los demás con cortesía, consideración y empatía.',
            valor4: 'Asumo la responsabilidad de mis acciones y decisiones. Me comprometo a cumplir los compromisos adquiridos y trabajo para cumplir las expectativas de mis trabajos.',
            projects: 'Proyectos',
            path: 'Sitio web que permite el intercambio, donación y petición de juguetes.',
            limpieza: 'Aplicación móvil para la gestión de las tareas de limpieza de la Universidad Gerardo Barrios.',
            encantos: 'Sistema de inventario y tienda online para el negocio "Encantos Giselle".',
            git: 'Ver en GitHub',
            mas: 'Ver más',
            mas1: 'Ver más',
            mas2: 'Ver más',
            cv: 'Descargar CV!',
            pathtoy: 'PathToy es una plataforma que surge de un proyecto universitario. Es una Aplicación Web diseñada para facilitar la donación, el intercambio y la petición de juguetes entre usuarios de diversas comunidades. La idea principal detrás de PathToy es fomentar la solidaridad y promover la reutilización de juguetes en buen estado, contribuyendo así a la reducción del desperdicio y al bienestar de niños de todas las edades.'
        },
        en: {
            inicio: 'Home',
            acerca: 'About Me',
            proyectos: 'Projects',
            intereses: 'Interests',
            contacto: 'Contact',
            enlaces: 'Contact',
            correo: 'Email',
            frase: '"Specialist in backend programming. Bringing the functionality behind each application to life"',
            titulo: 'Computer Systems and Network Engineering Student',
            descripcion1: 'My name is Walter Eliseo and I am currently studying the seventh cycle of the “Computer Systems and Network Engineering” degree at Gerardo Barrios University. I am a young man passionate about technologies and the development of websites and web applications, especially in the backend area. Since my high school, I began to acquire a taste for technological issues and over time my attention focused on the area of development.',
            descripcion2: 'At the university, I have also acquired knowledge in areas that have been of great interest to me, such as networks and electronics. In each of these areas I have learned about topics such as dynamic routing, circuit creation, database management and web development. In addition, along with this knowledge, I am skilled in teamwork, leadership and making important decisions.',
            descripcion3: 'My desire to keep learning leads me to keep updated with the latest technological news to expand my knowledge in different areas.',
            habilidades: 'Skills',
            duras: 'Hard Skills',
            blandas: 'Soft Skills',
            equipo: 'Teamwork',
            problemas: 'Problem Solving',
            comunicacion: 'Communication',
            liderazgo: 'Leadership',
            creatividad: 'Creativity',
            aprendizaje: 'Continuous Learning',
            perfil: 'Professional Profile',
            perfildesc: 'My name is Walter Eliseo and I am currently a student of the 7th cycle of the “Computer Systems and Network Engineering” course at the Gerardo Barrios University.',
            areas: 'Areas of Interest',
            redes: 'Networks',
            bd: 'Databases',
            electronica: 'Electronics',
            redesD: 'Making connections either virtually or physically is exciting because it is an area of vital importance in computer security and that constantly generates in me the desire to continue learning about the subject.',
            bdD: 'In addition to programming, data management is another topic that generates me more attention since it mostly goes hand in hand with web development, specifically in the back-end.',
            electronicaD: 'Electronics is, although to a lesser extent, another of the subjects that have generated interest in my career because they allow us to build various circuits that can be embodied in real projects.',
            valores: 'Professional Values',
            compromiso: 'Commitment',
            etica: 'Professional Ethics',
            respeto: 'Respect',
            responsabilidad: 'Responsibility',
            valor1: 'I constantly strive to improve my skills and knowledge in order to contribute significantly to the success of my projects.',
            valor2: 'I am committed to following sound moral principles in all my professional interactions, respecting the rights, decisions and dignity of all people.',
            valor3: 'I value the diversity of opinions in my work environment, treat others with courtesy, consideration and empathy.',
            valor4: 'I take responsibility for my actions and decisions. I am committed to fulfill my commitments and work to meet the expectations of my jobs.',
            projects: 'Projects',
            path: 'Website that allows the exchange, donation and request of toys.',
            limpieza: 'Mobile application for the management of cleaning tasks at Gerardo Barrios University.',
            encantos: 'Inventory system and online store for the business “Encantos Giselle”.',
            git: 'View on GitHub',
            mas: 'See more',
            mas1: 'See more',
            mas2: 'See more',
            cv: 'Download CV!',
            pathtoy: 'PathToy is a platform that arises from a university project. It is a Web Application designed to facilitate the donation, exchange and request of toys between users from different communities. The main idea behind PathToy is to encourage solidarity and promote the reuse of toys in good condition, thus contributing to the reduction of waste and the welfare of children of all ages.'
        }
    };
    
    // Función para cambiar el idioma
    function cambiarIdioma() {
        const idiomaSeleccionado = idiomaSelector.value;
        
        // Actualizar las opciones del menú de navegación si existen
        const inicioLink = document.querySelector('nav ul li:nth-child(1) a');
        const acercaLink = document.querySelector('nav ul li:nth-child(2) a');
        const proyectosLink = document.querySelector('nav ul li:nth-child(3) a');
        const interesesLink = document.querySelector('nav ul li:nth-child(4) a');
        const contactoLink = document.querySelector('nav ul li:nth-child(5) a');
        
        if (inicioLink) inicioLink.textContent = traducciones[idiomaSeleccionado].inicio;
        if (acercaLink) acercaLink.textContent = traducciones[idiomaSeleccionado].acerca;
        if (proyectosLink) proyectosLink.textContent = traducciones[idiomaSeleccionado].proyectos;
        if (interesesLink) interesesLink.textContent = traducciones[idiomaSeleccionado].intereses;
        if (contactoLink) contactoLink.textContent = traducciones[idiomaSeleccionado].contacto;
        
        // Actualizar el contenido de la página si existen los elementos
        const frase = document.getElementById('frase');
        const titulo = document.getElementById('titulo');
        const descripcion1 = document.getElementById('descripcion1');
        const descripcion2 = document.getElementById('descripcion2');
        const descripcion3 = document.getElementById('descripcion3');
        const enlaces = document.getElementById('enlaces');
        const correo = document.getElementById('correo');
        const habilidades = document.getElementById('habilidades');
        const duras = document.getElementById('duras');
        const blandas = document.getElementById('blandas');
        const equipo = document.getElementById('equipo');
        const problemas = document.getElementById('problemas');
        const comunicacion = document.getElementById('comunicacion');
        const liderazgo = document.getElementById('liderazgo');
        const creatividad = document.getElementById('creatividad');
        const aprendizaje = document.getElementById('aprendizaje');
        const perfil = document.getElementById('perfil');
        const perfildesc = document.getElementById('perfildesc');
        const areas = document.getElementById('areas');
        const redes = document.getElementById('redes');
        const bd = document.getElementById('bd');
        const electronica = document.getElementById('electronica');
        const redesD = document.getElementById('redesD');
        const bdD = document.getElementById('bdD');
        const electronicaD = document.getElementById('electronicaD');
        const valores = document.getElementById('valores');
        const valor1 = document.getElementById('valor1');
        const valor2 = document.getElementById('valor2');
        const valor3 = document.getElementById('valor3');
        const valor4 = document.getElementById('valor4');
        const projects = document.getElementById('projects');
        const path = document.getElementById('path');
        const limpieza = document.getElementById('limpieza');
        const encantos = document.getElementById('encantos');
        const git = document.getElementById('git');
        const mas = document.getElementById('mas');
        const mas1 = document.getElementById('mas1');
        const mas2 = document.getElementById('mas2');
        const cv = document.getElementById('cv');
        const pathtoy = document.getElementById('pathtoy');

        if (frase) frase.textContent = traducciones[idiomaSeleccionado].frase;
        if (titulo) titulo.textContent = traducciones[idiomaSeleccionado].titulo;
        if (descripcion1) descripcion1.textContent = traducciones[idiomaSeleccionado].descripcion1;
        if (descripcion2) descripcion2.textContent = traducciones[idiomaSeleccionado].descripcion2;
        if (descripcion3) descripcion3.textContent = traducciones[idiomaSeleccionado].descripcion3;
        if (enlaces) enlaces.textContent = traducciones[idiomaSeleccionado].enlaces;
        if (correo) correo.textContent = traducciones[idiomaSeleccionado].correo;
        if (habilidades) habilidades.textContent = traducciones[idiomaSeleccionado].habilidades;
        if (duras) duras.textContent = traducciones[idiomaSeleccionado].duras;
        if (blandas) blandas.textContent = traducciones[idiomaSeleccionado].blandas;
        if (equipo) equipo.innerHTML = `<span class="fa-li"><i class="fas fa-check"></i></span>${traducciones[idiomaSeleccionado].equipo}`;
        if (problemas) problemas.innerHTML = `<span class="fa-li"><i class="fas fa-check"></i></span>${traducciones[idiomaSeleccionado].problemas}`;
        if (comunicacion) comunicacion.innerHTML = `<span class="fa-li"><i class="fas fa-check"></i></span>${traducciones[idiomaSeleccionado].comunicacion}`;
        if (liderazgo) liderazgo.innerHTML = `<span class="fa-li"><i class="fas fa-check"></i></span>${traducciones[idiomaSeleccionado].liderazgo}`;
        if (creatividad) creatividad.innerHTML = `<span class="fa-li"><i class="fas fa-check"></i></span>${traducciones[idiomaSeleccionado].creatividad}`;
        if (aprendizaje) aprendizaje.innerHTML = `<span class="fa-li"><i class="fas fa-check"></i></span>${traducciones[idiomaSeleccionado].aprendizaje}`;
        if (perfil) perfil.textContent = traducciones[idiomaSeleccionado].perfil;
        if (perfildesc) perfildesc.textContent = traducciones[idiomaSeleccionado].perfildesc;
        if (areas) areas.textContent = traducciones[idiomaSeleccionado].areas;
        if (redes) redes.textContent = traducciones[idiomaSeleccionado].redes;
        if (bd) bd.textContent = traducciones[idiomaSeleccionado].bd;
        if (electronica) electronica.textContent = traducciones[idiomaSeleccionado].electronica;
        if (redesD) redesD.textContent = traducciones[idiomaSeleccionado].redesD;
        if (bdD) bdD.textContent = traducciones[idiomaSeleccionado].bdD;
        if (electronicaD) electronicaD.textContent = traducciones[idiomaSeleccionado].electronicaD;
        if (valores) valores.textContent = traducciones[idiomaSeleccionado].valores;
        if (valor1) valor1.textContent = traducciones[idiomaSeleccionado].valor1;
        if (valor2) valor2.textContent = traducciones[idiomaSeleccionado].valor2;
        if (valor3) valor3.textContent = traducciones[idiomaSeleccionado].valor3;
        if (valor4) valor4.textContent = traducciones[idiomaSeleccionado].valor4;
        if (projects) projects.textContent = traducciones[idiomaSeleccionado].projects;
        if (path) path.innerHTML = `${traducciones[idiomaSeleccionado].path}<br>`;
        if (limpieza) limpieza.textContent = traducciones[idiomaSeleccionado].limpieza;
        if (encantos) encantos.textContent = traducciones[idiomaSeleccionado].encantos;
        if (git) git.textContent = traducciones[idiomaSeleccionado].git;
        if (mas) mas.textContent = traducciones[idiomaSeleccionado].mas;
        if (mas1) mas1.textContent = traducciones[idiomaSeleccionado].mas1;
        if (mas2) mas2.textContent = traducciones[idiomaSeleccionado].mas2;
        if (cv) cv.textContent = traducciones[idiomaSeleccionado].cv;
        if (pathtoy) pathtoy.textContent = traducciones[idiomaSeleccionado].pathtoy;
        
        // Guardar el idioma seleccionado en el almacenamiento local
        localStorage.setItem('idioma', idiomaSeleccionado);
    }
    
    // Event listener para cambiar el idioma cuando se seleccione otro
    idiomaSelector.addEventListener('change', cambiarIdioma);
    
    // Inicializar con el idioma actual
    cambiarIdioma();
});
