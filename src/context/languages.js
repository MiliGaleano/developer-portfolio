import ProjImg1 from '../assets/blessed2.png'
import ProjImg2 from '../assets/vacunAr2.png'
import ProjImg3 from '../assets/pronostico2.png'
import ProjImg4 from '../assets/piedrapapeltijera.png'
import ProjImg6 from '../assets/turismo.png'
import ProjImg5 from '../assets/pomodoro.png'
import blessed1 from '../assets/blessed1.png'
import blessed3 from '../assets/blessed3.png'
import blessed4 from '../assets/blessed4.gif'
import blessed5 from '../assets/blessed5.gif'
import vacunar1 from '../assets/vacunAr1.png'
import vacunar3 from '../assets/vacunAr3.png'
import vacunar4 from '../assets/vacunAr4.png'
import vacunar5 from '../assets/vacunAr5.png'
import pronostico1 from '../assets/pronostico1.png'
import pronostico3 from '../assets/pronostico3.png'
import pronostico4 from '../assets/pronostico4.png'
import pronostico5 from '../assets/pronostico5.png'


export const EN = {
    language: "English",
    headerComponent: {
      Menu: ['About me', 'Projects', 'Contact', 'ES'],
      SetLanTo:'es'
    },
    homeComponent: {
        Presentation: ['<span>Hello!</span>', "I'm Mili", 'graphic designer and <span>frontend developer</span>']
    },
    SecondSectionComponent: {
        Title: 'About me',
        Description: ["I'm a frontend developer and ","graphic designer", ". I enjoy doing projects that challenge me to learn new things. I'm currently looking for a full-time role where I can continue to learn and use my skills in real projects."]
    },
    SkillsSectionComponent: {
        Title: 'Skills',
    },
    ProjectsSectionComponent: {
        Title: 'Projects',
        Projects: [{img:`${ProjImg1}`, name:'BLessed App', text:'A watchlist app where you can keep track of the movies and series you have watched, make your favourites list and find new things to watch.', urltype: 'VIEW PROJECT ➟', src:'/projects/Blessed'},
                    {img:`${ProjImg2}`, name:'VacunAr App', text:'An app to keep your Immunization registry organized. Save your vaccination records and find the nearest place to take your next vaccine.', urltype: 'VIEW PROJECT ➟', src:'/projects/Vacunar'},
                    {img:`${ProjImg3}`, name:'Weather App', text:'In this web app you can check the weather info for your current position or for any city in the world for today or the next few days.', urltype: 'VIEW PROJECT ➟', src:'/projects/Pronostico'},
                    {img:`${ProjImg4}`, name:'Rock-Paper-Scissors', text:"Play against the computer this classic game or follow Sheldon Cooper's advice and try the new version of rock paper scissors lizard spock.", urltype: 'DEMO', src:'https://miligaleano.github.io/Rock-Paper-Scissors/'},
                    {img:`${ProjImg5}`, name:'Pomodoro & ToDo', text:'This web app will help you organice your day. Build your todo list and set your pomodoro clock to make your day more productive.', urltype: 'DEMO', src:'https://miligaleano.github.io/Todo-React-App/'},
                    {img:`${ProjImg6}`, name:'Turismo', text:'Web page where you can find where to go and what to do while travelling in Argentina. Check maps and currently and extended weather info.', urltype: 'DEMO', src:'https://miligaleano.github.io/Turismo/'},
                ]
    },
    ContactSectionComponent: {
        Title: 'Contact',
        Text:"If you'd like to work with me or have any questions about my work let's get in touch!"
    },
    ProjectsPage: {
        Links: ['View app', 'Repository'],
        Thanks: 'Thanks for watching!',
        Next: 'NEXT PROJECT ➟',
        Blessed: {
            Title: 'BLessed',
            Subtitle: 'Your BL watchlist app',
            About: 'BLessed is a React Application created as a personal project. You can keep track of the series and movies you have watched, make your favourites list and find new things to watch. I update the database every week and there are already more than 200 series. I built this project from scratch using JavaScript, HTML and CSS and recently was redone with React and Firebase.',
            Tools: ['React', 'Firebase Auth', 'Firestore & Storage'],
            Links: ['https://miligaleano.github.io/BLessed-React-App', 'https://github.com/MiliGaleano/BLessed-React-App'],
            Challenges: {
                Title: 'Challenges faced',
                Subtitles: ['Responsive design', 'Create a database', 'Search'],
                Content:["As this project was my first approach to React I faced a lot of challenges, such as how to apply styles. I decided to use a style sheet for each component, but being my first time using this methodology I ended up making mistakes and some classes started to override others, specially when applying media queries. I ended up having to check every component's CSS many times. For future projects I will try different styles methods till I find what suits me better.",
                "I found Firestore easy to use and didn't have a lot of problems updating the data, but the really tricky part was to decide how to organice the collections and documents so it would be easy to modify every time users make changes in their lists. Once I had the design of the database I started looking for the info needed, but as this series are not very popular there wasn't much info put together so I had to do it myself. There are currently over 200 series and every week I add some more.",
                "This was the first functionality I applied to the project, it introduced me to the concept of component's state and led me to learn about React Hooks. With the help of useState and useEffect I ended up having a quick and efficient search bar. Once I understood the theory it was easy to figure it out, actually, what took me more time was to get that simple animation working. 😅"]
            },
            Learned:{
                Title: 'Things I learned',
                Content: "React! It was my first time using it after watching some tutorials, but getting hands in code is what works best for me when it comes to learning. I understood a lot of things that in the theory I didn't totally get. Functional components, Props, States, Hooks, Context!, I was convinced that context was way too much for me, so I tried to avoid it at all costs, spent like a week trying to figure out how to pass some info between components till I decided to give it a chance. And it was not easy to understand how it worked but once I did a lot of my problems got solved! I also learned that there are some things regarding code structure and organization that I need to improve, so I will try to do better in future projects and come back to improve this app once I got it figured out."
            },
            NextProj: '/projects/Vacunar',
            img:[`${blessed1}`,`${ProjImg1}`,`${blessed3}`,`${blessed4}`,`${blessed5}`]
        },
        Vacunar: {
            Title: 'VacunAr',
            Subtitle: 'Keep your vaccination records in your phone',
            About: 'VacunAr is a React Application created as a personal project. You can save your vaccination records, download them in PDF, add appointments, read news about health and find the nearest place to take your next vaccine. This was my first project ever, I built it from scratch using JavaScript, HTML and CSS and recently was redone with React. I keep adding functionalities, the most recent one is the implementation of Google Calendar API.',
            Tools: ['React & Bootstrap', 'Firebase', 'Here Maps & jsPDF'],
            Links: ['https://miligaleano.github.io/VacunAr', 'https://github.com/MiliGaleano/VacunAr'],
            Challenges: {
                Title: 'Challenges faced',
                Subtitles: ['React Bootstrap', 'Here Maps & Buenos Aires Data', 'jsPDF & Google Calendar'],
                Content:["This was my first time using this library and it was a little tricky. The documentation is so good that the implementation was smooth, and the fact that I didn't have to worry about responsive design was great. The trouble was that I wanted to do some things that Bootstrap doesn't include and I ended up adding some inline styles, that I have come to learn are not good practice.",
                "I was fine initialazing the map and getting the user coordenates to center it. The problem came trying to personalize the mark icon and bubble for every vaccination center. I retrieved the data from two places, Buenos Aires Data API and a list of National hospitals created by myself. I had a problem with cors that I couldn't figure out, and that error made the map stop working altogether. I managed to find a solution but in some devices is still not working properly so I created a new list to use in those cases.",
                "Probably the most challenging part in all the project was to connect the Google Calendar API, not because it was difficult to implement the code but because I had to made a lot of registrations and wait for it to be approved to start using it. The download as PDF part was kind of problematic when trying to add images but in the end I managed to make it work, although it probably could use a little improvement in the styles part."]
            },
            Learned:{
                Title: 'Things I learned',
                Content: "VacunAr is really close to my heart because it was what introduced me to programming. I have changed the project entirely a few times. This last version helped to solidify a lot my React knowledge, such as using hooks or updating the states, and I worked hard to keep components as reusable as possible. I also got a lot of great practice with API integrations."
            },
            NextProj: '/projects/Pronostico',
            img:[`${vacunar1}`,`${ProjImg2}`,`${vacunar3}`,`${vacunar4}`,`${vacunar5}`]
        },
        Pronostico: {
            Title: 'Weather',
            Subtitle: 'Check the weather around the world',
            About: 'This is a React Application created as a personal project. You can check the weather in your current position or search for any city around the world. It uses Open Weather API for the info and Unsplash API for the beautiful photos.',
            Tools: ['React & Styled Components', 'OpenWeather API', 'Unsplash API'],
            Links: ['https://miligaleano.github.io/Pronostico', 'https://github.com/MiliGaleano/Pronostico'],
            Challenges: {
                Title: 'Challenges faced',
                Subtitles: ['Unsplash API', 'Current position', 'OpenWeather API'],
                Content:["This API is super easy to implement and helps you make your pages bautiful with the great photos it provides. Once I fetch the weather API the info is passed to the photo component where I call the Unsplash API using the weather description as a filter. At first, I was calling for a random photo using this weather description as the query, but the results were not always accurate so I ended up selecting photos and creating an array of IDs and filtering those.",
                "When you first open the page the app shows you the weather info for your current position thank you to the geolocation current position method which allows you to get the device coordinates. Once the app got lat and lon for the device, it's passed to the function fetching the weather. There is a default position in case the user doesn't allow the app to get the location.",
                "Openweather gives you a lot of info about the weather around the world. I decided to use two of their services, the 'current weather' for info about the exact moment of the API call and the '5 day forecast', which gives you a list of info for every 3 hours for the next 5 days. It also provides you with the weather icons which saves us a lot of time!"]
            },
            Learned:{
                Title: 'Things I learned',
                Content: "This project helped to solidify a lot my React knowledge, such as using hooks or updating the states and I had a lot of great practice with API integrations. This was my first time using Styled Components and I worked hard to keep components as reusable as possible."
            },
            NextProj: '/projects/Blessed',
            img:[`${pronostico1}`,`${ProjImg3}`,`${pronostico3}`,`${pronostico4}`,`${pronostico5}`]
        },
    }
  };
  
  export const ES = {
    language: "Español",
    headerComponent: {
      Menu: ['Sobre mí', 'Proyectos', 'Contacto', 'EN'],
      SetLanTo:'en'
    },
    homeComponent: {
        Presentation: ['<span>Hola!</span>', "soy Mili", 'diseñadora gráfica y <span>frontend developer</span>']
    },
    SecondSectionComponent: {
        Title: 'Sobre mí',
        Description: ["Soy desarrolladora frontend y ", "diseñadora gráfica", ". Me gusta trabajar en proyectos que me desafíen a aprender cosas nuevas. Estoy en busca de una oportunidad que me permita aplicar mis conocimientos en proyectos reales y al mismo tiempo seguir aprendiendo."]
    },
    SkillsSectionComponent: {
        Title: 'Skills',
    },
    ProjectsSectionComponent: {
        Title: 'Proyectos',
        Projects: [{img:`${ProjImg1}`, name:'BLessed App', text:'Aplicación que te permite llevar registro de las series que miraste, armar tu lista de favoritas y encontrar nuevas cosas para mirar.', urltype: 'VER PROYECTO ➟', src:'/projects/Blessed'},
                    {img:`${ProjImg2}`, name:'VacunAr App', text:'Aplicación que te ayuda a llevar la libreta de vacunación encima, leer novedades sobre salud y encontrar el centro de vacunación más cercano.', urltype: 'VER PROYECTO ➟', src:'/projects/Vacunar'},
                    {img:`${ProjImg3}`, name:'Weather App', text:'En esta aplicación web puedes chequear la info del clima de hoy y de los próximos días, de tu posición actual o de cualquier ciudad del mundo.', urltype: 'VIEW PROJECT ➟', src:'/projects/Pronostico'},
                    {img:`${ProjImg4}`, name:'Rock-Paper-Scissors', text:'Juega contra la computadora al clásico piedra, papel o tijera, o redobla la apuesta jugando la versión de Sheldon Cooper.', urltype: 'DEMO', src:'https://miligaleano.github.io/Rock-Paper-Scissors/'},
                    {img:`${ProjImg5}`, name:'Pomodoro & ToDo', text:'Esta aplicación web te ayudará a organizar mejor tus tiempos. Crea listas de actividades y activa el reloj pomodoro.', urltype: 'DEMO', src:'https://miligaleano.github.io/Todo-React-App/'},
                    {img:`${ProjImg6}`, name:'Turismo', text:'Web de turismo Argentino. Descubre a dónde ir y qué hacer mientras recorres el país. Encuentra mapas e información del clima actual y extendido.', urltype: 'DEMO', src:'https://miligaleano.github.io/Turismo/'},
                ]
    },
    ContactSectionComponent: {
        Title: 'Contacto',
        Text:"Si quieres trabajar conmigo o tienes alguna duda sobre mi trabajo no dudes en contactarme!"
    },
    ProjectsPage: {
        Links: ['Abrir app', 'Repositorio'],
        Thanks: 'Gracias por leer!',
        Next: 'PRÓXIMO PROYECTO ➟',
        Blessed: {
            Title: 'BLessed',
            Subtitle: 'Tu aplicación BL',
            About: 'BLessed es una aplicación web creada como proyecto personal. Te permite llevar registro de las series y películas que viste, armar tu lista de favoritas y encontrar nuevas cosas para mirar. La base de datos se actualiza todas las semanas y actualmente cuenta con más de 200 series. El proyecto se empezó usando solo HTML, CSS y JavaScript vanilla y recientemente fue reconstruído utilizando React y Firebase.',
            Tools: ['React', 'Firebase Auth', 'Firestore & Storage'],
            Links: ['https://miligaleano.github.io/BLessed-React-App', 'https://github.com/MiliGaleano/BLessed-React-App'],
            Challenges: {
                Title: 'Desafíos afrontados',
                Subtitles: ['Hojas de estilo', 'Base de datos', 'Barra de búsqueda'],
                Content:["Ya que este proyecto fué mi primer aproximación a React, me enfrenté a muchos desafíos, uno de ellos fué la manera de incorporar estilos. Decidí utilizar una hoja de estilo para cada componente, pero al ser la primera vez usando esta metodología terminé cometiendo errores y algunas clases comenzaron a superponer otras, especialmente cuando apliqué medias queries. Tuve que controlar y modificar cada componente muchas veces hasta conseguir un buen resultado. En próximos proyectos voy a probar diferentes formas de aplicar estilos para encontrar con cuál me siento más cómoda.",
                "Firestore me resultó fácil de entender y no afronté muchos problemas a la hora de utilizarlo, la parte complicada fué la de decidir cómo organizar las colecciones y documentos para que puedan ser fácilmente modificados cada vez que un usuario realiza un cambio en sus listas. Una vez que definí el diseño de la base de datos, comencé a buscar la información necesaria, pero ya que estas series no son muy populares no encontré mucha información organizada y tuve que hacerlo yo misma. Actualmente hay más de 200 series y todas las semanas sumo algunas.",
                'Esta fué la primera funcionalidad que le sumé al proyecto, me introdujo al concepto de "estado del componente" y me llevó a aprender sobre React Hooks. Con la ayuda de UseState y UseEffect logré conseguir de manera rápida y eficiente una barra de búsqueda. Una vez que entendí la teoría fué fácil de aplicar y replicarla en otros sectores con distintos filtros. No tuve grandes dificultades, de hecho me terminó llevando más tiempo hacer esa pequeña animación en el ícono de búsqueda que la funcionalidad en sí. 😅']
            },
            Learned:{
                Title: 'Lo que aprendí',
                Content: "React! Fué mi primera vez usandolo después de aprender mediante tutoriales, pero meter las manos en el código es la mejor forma de terminar de aprender. Entendí un monton de cosas que en la teoría no había terminado de comprender. Componentes funcionales, props, estados, Hooks, Context!, estaba convencida que usar el contexto era demasiado dificíl para mi nivel así que intenté esquivarlo hasta último momento, perdí una semana intentando pasar información entre algunos componentes hasta que decidí probarlo. Al principio me costó entender como funciona, pero una vez que logré aplicarlo me resolvió un montón de problemas. También aprendí que hay muchas cosas, como estructura y organización, que necesito seguir mejorando, así que voy a seguir estudiando y practicando en diferentes proyectos y volver a este una vez que sepa más para mejorarlo."
            },
            NextProj: '/projects/Vacunar',
            img:[`${blessed1}`,`${ProjImg1}`,`${blessed3}`,`${blessed4}`,`${blessed5}`]
        },
        Vacunar: {
            Title: 'VacunAr',
            Subtitle: 'Llevá la libreta de vacunación en el celular',
            About: 'VacunAr es una aplicación web creada como proyecto personal. Te permite llevar el registro de vacunación de toda la familia, descargarlos en PDF, guardar eventos, leer las últimas noticias de salud y encontrar los centros de vacunación cercanos a tu ubicación. Este proyecto fué mi primer acercamiento a la programación y desde entonces fué creciendo y mutando constantemente, en la última versión se implementó el uso de Google Calendar.',
            Tools: ['React & Bootstrap', 'Firebase', 'Here Maps & jsPDF'],
            Links: ['https://miligaleano.github.io/VacunAr', 'https://github.com/MiliGaleano/VacunAr'],
            Challenges: {
                Title: 'Desafíos afrontados',
                Subtitles: ['React Bootstrap', 'Here Maps y Buenos Aires Data', 'jsPDF y Google Calendar'],
                Content:["Al ser la primera vez que utilizaba esta librería me encontré con algunas complicaciones. La documentación es muy buena por lo que la implementación fué bastante simple, y el no tener que preocuparme por el diseño responsive fué un gran plus. El problema fue que quería implementar algunos estilos extra a los que ofrece Bootstrap y terminé recurriendo a los estilos en líneas, que no estoy segura sean una buena práctica.",
                "La inicialización del mapa y la obtención de coordenadas del usuario para centrarlo fué sencilla, el problema se me presentó al personalizar los marcadores y las burbujas desplegables de cada centro de vacunación. Al intentar obtener la info desde Buenos Aires Data se me presentaron problemas de cors, lo que llevaba al mapa a dejar de funcionar completamente. Si bien encontré una solución, también agregué una lista creada por mí por si algún dispositivo sigue encontrándose con el problema.",
                "Probablemente la implementación de Google Calendar API fué lo que más desafíos me presentó, no la parte de incluirla en el código sino la cantidad de registros necesarios para aprobar su uso. Por último, al implementar jsPDF me resultó complicada la inclusión de imágenes y la ubicación de los elementos en el documento, y los estilos necesitan una actualización porque quedaron muy básicos, así que tengo en que seguir trabajando. 😅"]
            },
            Learned:{
                Title: 'Lo que aprendí',
                Content: "VacunAr es un proyecto al que le tengo mucho cariño porque fue lo que me acercó a la programación. Esta es la tercera vez que creo la aplicación de cero, esta última versión me ayudó a solidificar mis conocimientos de React, como el uso de Hooks y la actualización de estados. Me enfoqué mucho en tratar de mantener los componentes lo más reusables posible. También gané un montón de práctica en integración de APIs."
            },
            NextProj: '/projects/Pronostico',
            img:[`${vacunar1}`,`${ProjImg2}`,`${vacunar3}`,`${vacunar4}`,`${vacunar5}`]
        },
        Pronostico: {
            Title: 'Weather',
            Subtitle: 'Chequea el clima de cualquier ciudad del mundo',
            About: 'Aplicación web creada con React como proyecto personal. Puedes consultar el clima en tu posición actual o buscar cualquier ciudad del mundo. Utiliza la API de OpenWeather para los datos del tiempo y la API de Unsplash para las hermosas fotos que acompañan cada pronóstico.',
            Tools: ['React & Styled Components', 'OpenWeather API', 'Unsplash API'],
            Links: ['https://miligaleano.github.io/Pronostico', 'https://github.com/MiliGaleano/Pronostico'],
            Challenges: {
                Title: 'Desafíos afrontados',
                Subtitles: ['Unsplash API', 'Current position', 'OpenWeather API'],
                Content:["Esta API es super fácil de implementar y te brinda una enorme cantidad de fotos de muy buena calidad que te ayudan a dejar más lindas tus páginas. Una vez que se obtiene la información del clima, esta se pasa al componente que se encarga de las fotos, donde se llama a la API utilizando como parámetro de filtro la descripción del clima actual. En un primer momento el llamado realizado era para obtener una foto random, pero a pesar de los filtros de búsqueda los resultados no eran siempre muy acertados, por lo que creé una lista de IDs de posibles fotos y se filtra a través de ellos.",
                "Cuando el usuario ingresa a la página por primera vez, la aplicación le devuelve los resultados del clima de acuerdo a su posición acutal. Esto es gracias al método de 'geolocation current position', que te permite obtener las coordenadas del dispositivo utilizado. Una vez que se obtienen la latitud y longitud, se pasa la info a la función encargada de conseguir los datos del clima. En caso de que el usuario no autorice a la aplicación a ver su posición actual, hay coordenadas establecidas por defecto.",
                "Openweather brinda una gran cantidad de información sobre el clima alrededor del mundo. En este caso se utilizaron dos de los servicios, 'current weather' que te devuelve información de el preciso momento en que se realiza la llamada, y '5 day forecast', que brinda una lista con la información del clima de los próximos 5 días, agrupados en períodos de 3 horas. Una de las grandes ventajas de esta API es que te permite realizar las llamadas tanto por el nombre de la ciudad como por las coordenadas. También te provee los íconos del clima."]
            },
            Learned:{
                Title: 'Lo que aprendí',
                Content: "Este proyecto me ayudó principalmente a solidificar mis conocimientos de React, principalmente el uso de hooks y las actualizaciones de estado, también fué una gran oportunidad para practicar integración de APIs. Fué también mi primera vez utilizando Styled Components y trabajé enfocada en mantener los componentes simples y reutilizables."
            },
            NextProj: '/projects/Blessed',
            img:[`${pronostico1}`,`${ProjImg3}`,`${pronostico3}`,`${pronostico4}`,`${pronostico5}`]
        },
    }
  };