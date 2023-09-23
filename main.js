const divProyectos = document.querySelector("#proyecto");

const IHTML = "img/icons8-html-64.png";
const ICSS = "./img/icons8-css/64.png";
const IJS = "./img/icons8-javascript-64.png";


const proyectos = [
  {
    img: "./img/bob.jpg",
    title: "PetShop",
    description: "Este es mi primer proyecto en el curso de programación",
    iconos: [IJS, IHTML, ICSS],
  },
  {
    img: "./img/verte_divina.jpg",
    title: "Verte Divina - Estetica",
    description: "Este es mi primer proyecto en el curso de programación",
    iconos: [IJS, IHTML, ICSS],
  },
  {
    img: "./img/caminos.jpg",
    title: "Elige tu propia aventura",
    description: "Este es mi primer proyecto en el curso de programación",
    iconos: [IHTML, ICSS],
  },
  {
    img: "./img/mendoza.jpg",
    title: "Lugares turisticos de Mendoza",
    description: "Este es mi primer proyecto en el curso de programación",
    iconos: [IHTML, ICSS],
  },
];

const getCArds = proyectos.map((obj) => {
  
  divProyectos.innerHTML += `<article>
  <section id="items" class="seccion">
            <div class="container">
                <div class="fila fila-centrada">
                    <div class="fila">
                        <div class="columna columna-33 columna-mb-100 sin-padding contenedor-cuadrado">
                            <div class="contenedor-mas">
                                <img src="${obj.img }">
                                <div class="contenido-cuadrado">
                                    <div class="descripcion">
                                        <h3>${obj.title }</h3>
                                        <p>${obj.description }</p>
                                    </div>
                                    <div>
                                        <ul class="iconos">
                                            <li>${obj.iconos[0] }</li>
                                            <li>${ obj.iconos[1]}</li>
                                            <li>${obj.iconos[2] }</li>                                        
                                        </ul>
                                    </div>
                                    
                                </div>
                                
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </article>`;
});

/* AGREGAR ELEMENTO */
/* divProyectos.innerHTML += `<h1>Hola mundo! Estoy conectado</h1>` */
const setCards = () => {
  if (divProyectos.style.display === "none") {
    divProyectos.style.display = "flex";
  } else {
    divProyectos.style.display = "none";
  }
};

const btnMC = document.querySelector("#btn-m-c");
btnMC.addEventListener("click", setCards);

//CHAT-BOT
//Botón-1
// Obtener una referencia al botón y al elemento del mensaje
var boton = document.getElementById("btn-edad");
var mensajeElemento = document.getElementById("msj-edad");

// Agregar un evento de clic al botón
boton.addEventListener("click", function () {
  // Crear un nuevo elemento de párrafo para mostrar el mensaje
  var mensajeNuevo = document.createElement("p");
  mensajeNuevo.textContent = "Tengo 36 años";

  // Agregar el elemento de mensaje debajo del botón
  mensajeElemento.appendChild(mensajeNuevo);
});
//Botón-
// Obtener una referencia al botón y al elemento del mensaje
var boton = document.getElementById("btn-hobbies");
var mensajeElemento = document.getElementById("msj-hobbies");

// Agregar un evento de clic al botón
boton.addEventListener("click", function () {
  // Crear un nuevo elemento de párrafo para mostrar el mensaje
  var mensajeNuevo = document.createElement("p");
  mensajeNuevo.textContent = "Me gusta entrenar, hago funcional y amo patinar";

  // Agregar el elemento de mensaje debajo del botón
  mensajeElemento.appendChild(mensajeNuevo);
});
//Botón-1
// Obtener una referencia al botón y al elemento del mensaje
var boton = document.getElementById("btn-vivo");
var mensajeElemento = document.getElementById("msj-vivo");

// Agregar un evento de clic al botón
boton.addEventListener("click", function () {
  // Crear un nuevo elemento de párrafo para mostrar el mensaje
  var mensajeNuevo = document.createElement("p");
  mensajeNuevo.textContent = "Vivo con mis 4 perritos";

  // Agregar el elemento de mensaje debajo del botón
  mensajeElemento.appendChild(mensajeNuevo);
});

const input = document.querySelector("input");
const div = document.querySelector("#contenedor");
const btn = document.querySelector("#btn-send");

const enviarMsj = () => {
  let text = input.value;
  let h1 = document.createElement("p");
  h1.classList.add("text-final");
  h1.textContent = text;
  div.appendChild(h1);
  input.value = "";
  checkMsj(text);
};

const checkMsj = (res) => {
  resMin = res.toLowerCase();
  if (res === "s") {
    let h1 = document.createElement("p");
    h1.classList.add("resp-bot");
    h1.innerHTML = `Responde con el número de la opción que desees saber:
        <br>
        1- Trayectoria personal
        <br>
        2- Pasiones y hobbies
        <br>
        3- Metas y aspiraciones
        <br>
        4- Logros profesionales
        <br>
        5- Habilidades clave
        <br>
        6- Aprendizaje continuo
        <br>
        7- Innovación y creatividad
        <br>
        8- Adaptación al cambio
        `;
    div.appendChild(h1);
  } else if (resMin == 1) {
    let h1 = document.createElement("p");
    h1.classList.add("resp-bot");
    h1.textContent = `En el 2010 me recibí de diseñadora gráfica, no ejercí en su momento, aunque hice pequeños trabajos personales y para mi entorno.`;
    div.appendChild(h1);
  } else if (resMin == 2) {
    let h1 = document.createElement("p");
    h1.classList.add("resp-bot");
    h1.textContent = `Mi cable a tierra es levantarme para entrenar todos los días, hago funcional, me encanta patinar y pasar tiempo con mis perros.`;
    div.appendChild(h1);
  } else if (resMin == 3) {
    let h1 = document.createElement("p");
    h1.classList.add("resp-bot");
    h1.textContent = `Quiero dedicarme a la programación, seguir aprendiendo y tener estabilidad económica.`;
    div.appendChild(h1);
  } else if (resMin == 4) {
    let h1 = document.createElement("p");
    h1.classList.add("resp-bot");
    h1.textContent = `A lo largo de mi carrera en ventas, mi enfoque siempre ha sido proporcionar la mejor experiencia posible para mis clientes. Mi objetivo era asegurarme de que cada cliente se fuera completamente satisfecho con el producto que adquiría.

    Esta dedicación me llevó a ser la líder en ventas a nivel nacional. Trabajando de forma independiente y ofreciendo tratamientos a domicilio, obtuve valiosas recomendaciones de mis clientas por la atención personalizada y los resultados de mis tratamientos. Muchas de ellas han confiado en mí durante más de siete años, lo cual es un testimonio de la relación duradera que he construido.
    
    Ahora, estoy buscando canalizar mi pasión por la resolución de problemas y la creatividad en el campo de la programación. Estoy emocionada por la oportunidad de aplicar mi enfoque orientado al cliente y mi habilidad para establecer conexiones sólidas en este nuevo desafío.`;
    div.appendChild(h1);
  } else if (resMin == 5) {
    let h1 = document.createElement("p");
    h1.classList.add("resp-bot");
    h1.textContent = `Mis habilidades clave abarcan tanto el diseño gráfico como el desarrollo web. En el ámbito del diseño, soy experta en el uso de herramientas como Illustrator y Photoshop, lo que me permite crear gráficos y diseños visuales impactantes y efectivos.

    En el campo de la programación, tengo experiencia en HTML, CSS y JavaScript, lo que me permite construir sitios web interactivos y atractivos. Actualmente, estoy enfocada en aprender React para crear aplicaciones web modernas y dinámicas, además de estar en proceso de aprender sobre bases de datos y MySQL.
    
    Esta combinación de habilidades me permite abordar proyectos desde una perspectiva integral, fusionando diseño y desarrollo para crear experiencias digitales completas y atractivas..`;
    div.appendChild(h1);
  } else if (resMin == 6) {
    let h1 = document.createElement("p");
    h1.classList.add("resp-bot");
    h1.textContent = `Para mí, el aprendizaje continuo es una parte fundamental de mi enfoque profesional. Siempre estoy en busca de nuevas oportunidades para crecer y mejorar mis habilidades. Actualmente, estoy enfocada en expandir mis conocimientos en programación, especialmente en el uso de React para crear aplicaciones web dinámicas y modernas.

    Además, estoy explorando recursos en línea, participando en cursos y comunidades de desarrollo, y manteniéndome al tanto de las últimas tendencias y tecnologías en diseño y desarrollo web. También estoy abierto a recibir retroalimentación y consejos de profesionales en mi red de contactos.
    
    Creo firmemente que el aprendizaje continuo me permite mantenerme al día con las demandas cambiantes del campo y me brinda la oportunidad de ofrecer soluciones innovadoras y efectivas en mis proyectos..`;
    div.appendChild(h1);
  } else if (resMin == 7) {
    let h1 = document.createElement("p");
    h1.classList.add("resp-bot");
    h1.textContent = `"La innovación y la creatividad son pilares fundamentales en mi enfoque de trabajo. Siempre busco formas originales y frescas de abordar los proyectos que emprendo. En mi experiencia como diseñadora gráfica, he desarrollado una sensibilidad aguda para el diseño estético y funcional.

    En el campo de la programación, considero que la creatividad se traduce en la capacidad de encontrar soluciones eficaces y elegantes para los desafíos técnicos que se presentan. Además, busco constantemente maneras de mejorar la experiencia del usuario a través de interfaces intuitivas y atractivas.
    
    Además, me gusta mantenerme al tanto de las últimas tendencias y tecnologías emergentes, lo que me permite incorporar ideas innovadoras en mis proyectos. Estoy siempre dispuesta a explorar nuevas herramientas y enfoques para lograr resultados excepcionales.
    
    Creo que la combinación de innovación y creatividad no solo impulsa la calidad de mis trabajos, sino que también agrega un valor significativo al resultado final.`;
    div.appendChild(h1);
  } else if (resMin == 8) {
    let h1 = document.createElement("p");
    h1.classList.add("resp-bot");
    h1.textContent = `La capacidad de adaptación es esencial en cualquier entorno profesional en constante evolución. Personalmente, considero que la adaptabilidad es una fortaleza. He enfrentado diversos cambios a lo largo de mi carrera y he aprendido a verlos como oportunidades para crecer y mejorar.

    Estoy abierta a aprender nuevas tecnologías y herramientas, lo que me permite abordar proyectos de manera efectiva, incluso en entornos que evolucionan rápidamente. También valoro la comunicación efectiva y el trabajo en equipo, lo que facilita la colaboración y la adaptación a nuevos procesos o dinámicas de equipo.
    
    Además, estoy consciente de la importancia de mantenerme actualizada con las tendencias y avances en mi campo. Esto me permite estar preparada para enfrentar cualquier cambio y asegurarme de que mis habilidades estén al día.
    
    En resumen, considero que la adaptación al cambio es una habilidad crucial que me permite prosperar en entornos profesionales dinámicos y desafiantes.`;
    div.appendChild(h1);
  } else if (resMin === "n") {
    let h1 = document.createElement("p");
    h1.classList.add("resp-bot");
    h1.textContent = `Gracias por visitar mi portfolio :).`;
    div.appendChild(h1);
  } else {
    let h1 = document.createElement("p");
    h1.classList.add("resp-bot");
    h1.textContent = `La opción ingresada no es válida.`;
    div.appendChild(h1);
  }
};

btn.addEventListener("click", enviarMsj);

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    enviarMsj();
  }
});
