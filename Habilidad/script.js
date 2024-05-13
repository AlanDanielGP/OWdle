const datosAlmacenados = [
  {
    id: 1,
    Imagen: "..\\img_heroes\\Ana.png",
    Nombre: "Ana",
    Q: "..\\Habilidades-Todas\\Ana-Q.png",
    E: "..\\Habilidades-Todas\\Ana-E.png",
    Shift: "..\\Habilidades-Todas\\Ana-Shift.png",
  },
  {
    id: 2,
    Imagen: "..\\img_heroes\\Ashe.png",
    Nombre: "Ashe",
    Q: "..\\Habilidades-Todas\\Ashe-Q.png",
    E: "..\\Habilidades-Todas\\Ashe-E.png",
    Shift: "..\\Habilidades-Todas\\Ashe-Shift.png",
  },
  {
    id: 3,
    Imagen: "..\\img_heroes\\Baptiste.png",
    Nombre: "Babtiste",
    Q: "..\\Habilidades-Todas\\Babtiste-Q.png",
    E: "..\\Habilidades-Todas\\Babtiste-E.png",
    Shift: "..\\Habilidades-Todas\\Babtiste-Shift.png",
    Pasiva: "..\\Habilidades-Todas\\Babtiste-Pasiva.png",
  },
  {
    id: 4,
    Imagen: "..\\img_heroes\\Bastion.png",
    Nombre: "Bastion",
    Q: "..\\Habilidades-Todas\\Bastion-Q.png",
    Shift: "..\\Habilidades-Todas\\Bastion-Shift.png",
    DSecundario: "..\\Habilidades-Todas\\Bastion-DSecundario.png",
  },
  {
    id: 5,
    Imagen: "..\\img_heroes\\Brigitte.png",
    Nombre: "Brigitte",
    Q: "..\\Habilidades-Todas\\Brigitte-Q.png",
    E: "..\\Habilidades-Todas\\Brigitte-E.png",
    Shift: "..\\Habilidades-Todas\\Brigitte-Shift.png",
    DSecundario: "..\\Habilidades-Todas\\Brigitte-DSecundario.png",
    Pasiva: "..\\Habilidades-Todas\\Brigitte-Pasiva.png",
    Extra: "..\\Habilidades-Todas\\Brigitte-CargaConEscudo.png",
  },
  {
    id: 6,
    Imagen: "..\\img_heroes\\Cassidy.png",
    Nombre: "Cassidy",
    Q: "..\\Habilidades-Todas\\Cassidy-Q.png",
    E: "..\\Habilidades-Todas\\Cassidy-E.png",
    Shift: "..\\Habilidades-Todas\\Cassidy-Shift.png",
  },
  {
    id: 7,
    Imagen: "..\\img_heroes\\Doomfist.png",
    Nombre: "Doomfist",
    Q: "..\\Habilidades-Todas\\Doomfist-Q.png",
    E: "..\\Habilidades-Todas\\Doomfist-E.png",
    Shift: "..\\Habilidades-Todas\\Doomfist-Shift.png",
    DSecundario: "..\\Habilidades-Todas\\Doomfist-DSecundario.png",
  },
  {
    id: 8,
    Imagen: "..\\img_heroes\\Dva.png",
    Nombre: "Dva",
    Q: "..\\Habilidades-Todas\\Dva-Q.png",
    E: "..\\Habilidades-Todas\\Dva-E.png",
    Shift: "..\\Habilidades-Todas\\Dva-Shift.png",
    DSecundario: "..\\Habilidades-Todas\\Dva-DSecundario.png",
    Pasiva: "..\\Habilidades-Todas\\Dva-Pasiva.png",
    Extra: "..\\Habilidades-Todas\\Dva-Q2.png",
  },
  {
    id: 9,
    Imagen: "..\\img_heroes\\Echo.png",
    Nombre: "Echo",
    Q: "..\\Habilidades-Todas\\Echo-Q.png",
    E: "..\\Habilidades-Todas\\Echo-E.png",
    Shift: "..\\Habilidades-Todas\\Echo-Shift.png",
    DSecundario: "..\\Habilidades-Todas\\Echo-DSecundario.png",
    Pasiva: "..\\Habilidades-Todas\\Echo-Pasiva.png",
  },
  {
    id: 10,
    Imagen: "..\\img_heroes\\Genji.png",
    Nombre: "Genji",
    Q: "..\\Habilidades-Todas\\Genji-Q.png",
    E: "..\\Habilidades-Todas\\Genji-E.png",
    Shift: "..\\Habilidades-Todas\\Genji-Shift.png",
    Pasiva: "..\\Habilidades-Todas\\Genji-Pasiva.png",
  },
  {
    id: 11,
    Imagen: "..\\img_heroes\\Hanzo.png",
    Nombre: "Hanzo",
    Q: "..\\Habilidades-Todas\\Hanzo-Q.png",
    E: "..\\Habilidades-Todas\\Hanzo-E.png",
    Shift: "..\\Habilidades-Todas\\Hanzo-Shift.png",
    Extra: "..\\Habilidades-Todas\\Hanzo-DobleSalto.png",
  },
  {
    id: 12,
    Imagen: "..\\img_heroes\\Illari.png",
    Nombre: "Illari",
    Q: "..\\Habilidades-Todas\\Illari-Q.png",
    E: "..\\Habilidades-Todas\\Illari-E.png",
    Shift: "..\\Habilidades-Todas\\Illari-Shift.png",
  },
  {
    id: 13,
    Imagen: "..\\img_heroes\\JunkerQueen.png",
    Nombre: "Junker Queen",
    Q: "..\\Habilidades-Todas\\JunkerQueen-Q.png",
    E: "..\\Habilidades-Todas\\JunkerQueen-E.png",
    Shift: "..\\Habilidades-Todas\\JunkerQueen-Shift.png",
    DSecundario: "..\\Habilidades-Todas\\JunkerQueen-DSecundario.png",
    Pasiva: "..\\Habilidades-Todas\\JunkerQueen-Pasiva.png",
  },
  {
    id: 14,
    Imagen: "..\\img_heroes\\Junkrat.png",
    Nombre: "Junkrat",
    Q: "..\\Habilidades-Todas\\Junkrat-Q.png",
    E: "..\\Habilidades-Todas\\Junkrat-E.png",
    Shift: "..\\Habilidades-Todas\\Junkrat-Shift.png",
    Pasiva: "..\\Habilidades-Todas\\Junkrat-Pasiva.png",
  },
  {
    id: 15,
    Imagen: "..\\img_heroes\\Kiriko.png",
    Nombre: "Kiriko",
    Q: "..\\Habilidades-Todas\\Kiriko-Q.png",
    E: "..\\Habilidades-Todas\\Kiriko-E.png",
    Shift: "..\\Habilidades-Todas\\Kiriko-Shift.png",
  },
  {
    id: 16,
    Imagen: "..\\img_heroes\\Lifeweaver.png",
    Nombre: "Lifeweaver",
    Q: "..\\Habilidades-Todas\\Lifeweaver-Q.png",
    E: "..\\Habilidades-Todas\\Lifeweaver-E.png",
    Shift: "..\\Habilidades-Todas\\Lifeweaver-Shift.png",
    Extra: "..\\Habilidades-Todas\\Lifeweaver-DobleSalto.png",
  },
  {
    id: 17,
    Imagen: "..\\img_heroes\\Lucio.png",
    Nombre: "Lucio",
    Q: "..\\Habilidades-Todas\\Lucio-Q.png",
    E: "..\\Habilidades-Todas\\Lucio-E.png",
    Shift: "..\\Habilidades-Todas\\Lucio-Shift.png",
    DSecundario: "..\\Habilidades-Todas\\Lucio-DSecundario.png",
  },
  {
    id: 18,
    Imagen: "..\\img_heroes\\Mauga.png",
    Nombre: "Mauga",
    Q: "..\\Habilidades-Todas\\Mauga-Q.png",
    E: "..\\Habilidades-Todas\\Mauga-E.png",
    Shift: "..\\Habilidades-Todas\\Mauga-Shift.png",
    Pasiva: "..\\Habilidades-Todas\\Mauga-Pasiva.png",
  },
  {
    id: 19,
    Imagen: "..\\img_heroes\\Mei.png",
    Nombre: "Mei",
    Q: "..\\Habilidades-Todas\\Mei-Q.png",
    E: "..\\Habilidades-Todas\\Mei-E.png",
    Shift: "..\\Habilidades-Todas\\Mei-Shift.png",
  },
  {
    id: 20,
    Imagen: "..\\img_heroes\\Mercy.png",
    Nombre: "Mercy",
    Q: "..\\Habilidades-Todas\\Mercy-Q.png",
    E: "..\\Habilidades-Todas\\Mercy-E.png",
    Shift: "..\\Habilidades-Todas\\Mercy-Shift.png",
    Pasiva: "..\\Habilidades-Todas\\Mercy-Pasiva.png",
  },
  {
    id: 21,
    Imagen: "..\\img_heroes\\Moira.png",
    Nombre: "Moira",
    Q: "..\\Habilidades-Todas\\Moira-Q.png",
    E: "..\\Habilidades-Todas\\Moira-E.png",
    Shift: "..\\Habilidades-Todas\\Moira-Shift.png",
  },
  {
    id: 22,
    Imagen: "..\\img_heroes\\Orisa.png",
    Nombre: "Orisa",
    Q: "..\\Habilidades-Todas\\Orisa-Q.png",
    E: "..\\Habilidades-Todas\\Orisa-E.png",
    Shift: "..\\Habilidades-Todas\\Orisa-Shift.png",
    DSecundario: "..\\Habilidades-Todas\\Orisa-DSecundario.png",
  },
  {
    id: 23,
    Imagen: "..\\img_heroes\\Pharah.png",
    Nombre: "Pharah",
    Q: "..\\Habilidades-Todas\\Pharah-Q.png",
    E: "..\\Habilidades-Todas\\Pharah-E.png",
    Shift: "..\\Habilidades-Todas\\Pharah-Shift.png",
    DSecundario: "..\\Habilidades-Todas\\Pharah-DSecundario.png",
  },
  {
    id: 24,
    Imagen: "..\\img_heroes\\Ramattra.png",
    Nombre: "Ramattra",
    Q: "..\\Habilidades-Todas\\Ramattra-Q.png",
    E: "..\\Habilidades-Todas\\Ramattra-E.png",
    DSecundario: "..\\Habilidades-Todas\\Ramattra-DSecundario.png",
  },
  {
    id: 25,
    Imagen: "..\\img_heroes\\Reaper.png",
    Nombre: "Reaper",
    Q: "..\\Habilidades-Todas\\Reaper-Q.png",
    E: "..\\Habilidades-Todas\\Reaper-E.png",
    Shift: "..\\Habilidades-Todas\\Reaper-Shift.png",
    Pasiva: "..\\Habilidades-Todas\\Reaper-Pasiva.png",
  },
  {
    id: 26,
    Imagen: "..\\img_heroes\\Reinhardt.png",
    Nombre: "Reinhardt",
    Q: "..\\Habilidades-Todas\\Reinhardt-Q.png",
    E: "..\\Habilidades-Todas\\Reinhardt-E.png",
    Shift: "..\\Habilidades-Todas\\Reinhardt-Shift.png",
    DSecundario: "..\\Habilidades-Todas\\Reinhardt-DSecundario.png",
  },
  {
    id: 27,
    Imagen: "..\\img_heroes\\Roadhog.png",
    Nombre: "Roadhog",
    Q: "..\\Habilidades-Todas\\Roadhog-Q.png",
    E: "..\\Habilidades-Todas\\Roadhog-E.png",
    Shift: "..\\Habilidades-Todas\\Roadhog-Shift.png",
    DSecundario: "..\\Habilidades-Todas\\Roadhog-DSecundario.png",
  },
  {
    id: 28,
    Imagen: "..\\img_heroes\\Sigma.png",
    Nombre: "Sigma",
    Q: "..\\Habilidades-Todas\\Sigma-Q.png",
    E: "..\\Habilidades-Todas\\Sigma-E.png",
    Shift: "..\\Habilidades-Todas\\Sigma-Shift.png",
    DSecundario: "..\\Habilidades-Todas\\Sigma-DSecundario.png",
  },
  {
    id: 29,
    Imagen: "..\\img_heroes\\Sojourn.png",
    Nombre: "Sojourn",
    Q: "..\\Habilidades-Todas\\Sojourn-Q.png",
    E: "..\\Habilidades-Todas\\Sojourn-E.png",
    Shift: "..\\Habilidades-Todas\\Sojourn-Shift.png",
  },
  {
    id: 30,
    Imagen: "..\\img_heroes\\Soldado76.png",
    Nombre: "Soldado76",
    Q: "..\\Habilidades-Todas\\Soldado76-Q.png",
    E: "..\\Habilidades-Todas\\Soldado76-E.png",
    Shift: "..\\Habilidades-Todas\\Soldado76-Shift.png",
    DSecundario: "..\\Habilidades-Todas\\Soldado76-DSecundario.png",
  },
  {
    id: 31,
    Imagen: "..\\img_heroes\\Sombra.png",
    Nombre: "Sombra",
    Q: "..\\Habilidades-Todas\\Sombra-Q.png",
    E: "..\\Habilidades-Todas\\Sombra-E.png",
    Shift: "..\\Habilidades-Todas\\Sombra-Shift.png",
    DSecundario: "..\\Habilidades-Todas\\Sombra-DSecundario.png",
    Pasiva: "..\\Habilidades-Todas\\Sombra-Pasiva.png",
  },
  {
    id: 32,
    Imagen: "..\\img_heroes\\Symmetra.png",
    Nombre: "Symmetra",
    Q: "..\\Habilidades-Todas\\Symmetra-Q.png",
    E: "..\\Habilidades-Todas\\Symmetra-E.png",
    Shift: "..\\Habilidades-Todas\\Symmetra-Shift.png",
  },
  {
    id: 33,
    Imagen: "..\\img_heroes\\Torbjörn.png",
    Nombre: "Torbjörn",
    Q: "..\\Habilidades-Todas\\Torbjörn-Q.png",
    E: "..\\Habilidades-Todas\\Torbjörn-E.png",
    Shift: "..\\Habilidades-Todas\\Torbjörn-Shift.png",
  },
  {
    id: 34,
    Imagen: "..\\img_heroes\\Tracer.png",
    Nombre: "Tracer",
    Q: "..\\Habilidades-Todas\\Tracer-Q.png",
    E: "..\\Habilidades-Todas\\Tracer-E.png",
    Shift: "..\\Habilidades-Todas\\Tracer-Shift.png",
  },
  {
    id: 35,
    Imagen: "..\\img_heroes\\Venture.png",
    Nombre: "Venture",
    Q: "..\\Habilidades-Todas\\Venture-Q.png",
    Shift: "..\\Habilidades-Todas\\Venture-Shift.png",
    DSecundario: "..\\Habilidades-Todas\\Venture-DSecundario.png",
  },
  {
    id: 36,
    Imagen: "..\\img_heroes\\Widowmaker.png",
    Nombre: "Widowmaker",
    Q: "..\\Habilidades-Todas\\Widowmaker-Q.png",
    E: "..\\Habilidades-Todas\\Widowmaker-E.png",
    Shift: "..\\Habilidades-Todas\\Widowmaker-Shift.png",
  },
  {
    id: 37,
    Imagen: "..\\img_heroes\\Winston.png",
    Nombre: "Winston",
    Q: "..\\Habilidades-Todas\\Winston-Q.png",
    E: "..\\Habilidades-Todas\\Winston-E.png",
    Shift: "..\\Habilidades-Todas\\Winston-Shift.png",
  },
  {
    id: 38,
    Imagen: "..\\img_heroes\\WreckingBall.png",
    Nombre: "WreckingBall",
    Q: "..\\Habilidades-Todas\\WreckingBall-Q.png",
    E: "..\\Habilidades-Todas\\WreckingBall-E.png",
    Shift: "..\\Habilidades-Todas\\WreckingBall-Shift.png",
    DSecundario: "..\\Habilidades-Todas\\WreckingBall-DSecundario.png",
    Extra: "..\\Habilidades-Todas\\WreckingBall-Ctrl.png",
  },
  {
    id: 39,
    Imagen: "..\\img_heroes\\Zarya.png",
    Nombre: "Zarya",
    Q: "..\\Habilidades-Todas\\Zarya-Q.png",
    E: "..\\Habilidades-Todas\\Zarya-E.png",
    Shift: "..\\Habilidades-Todas\\Zarya-Shift.png",
    Pasiva: "..\\Habilidades-Todas\\Zarya-Pasiva.png",
  },
  {
    id: 40,
    Imagen: "..\\img_heroes\\Zenyatta.png",
    Nombre: "Zenyatta",
    Q: "..\\Habilidades-Todas\\Zenyatta-Q.png",
    E: "..\\Habilidades-Todas\\Zenyatta-E.png",
    Shift: "..\\Habilidades-Todas\\Zenyatta-Shift.png",
    Pasiva: "..\\Habilidades-Todas\\Zenyatta-Pasiva.png",
  },
];

let heroe_a_adivinar_f = datosAlmacenados[2];
let habilidad_a_adivinar = datosAlmacenados[2].Q;
var numero_de_intentos = 0;

//Input. Concexion con datos----------------------------------------------------------------------------------=>
let heroes_para_input = datosAlmacenados.slice(); // Crear una copia independiente
const inputBusqueda = document.getElementById("inputBusqueda");
const opciones = document.getElementById("opciones");

inputBusqueda.addEventListener("input", function () {
  const valorInput = inputBusqueda.value.trim().toLowerCase(); // trim() elimina espacios en blanco al inicio y al final
  const resultados = heroes_para_input.filter((hero) =>
    hero.Nombre.toLowerCase().startsWith(valorInput)
  );
  mostrarOpciones(resultados);
});

function mostrarOpciones(resultados) {
  opciones.innerHTML = "";

  if (inputBusqueda.value.trim() === "") {
    opciones.classList.remove("visible");
    return;
  }

  resultados.forEach((hero) => {
    const opcion = document.createElement("div");
    opcion.classList.add("opcion");

    // Crear elemento de imagen
    const imagen = document.createElement("img");
    imagen.src = hero.Imagen; // La ruta de la imagen está en la propiedad 'Imagen' de cada héroe
    imagen.alt = hero.Nombre; // Establecer el atributo 'alt' para accesibilidad
    imagen.classList.add("imagen-opcion");
    opcion.appendChild(imagen);

    // Crear elemento de texto para el nombre del héroe
    const texto = document.createElement("span");
    texto.textContent = hero.Nombre;
    opcion.appendChild(texto);

    // Agregar evento de clic a la opción
    opcion.addEventListener("click", function () {
      inputBusqueda.value = hero.Nombre;
      opciones.innerHTML = "";
      opciones.classList.remove("visible");
      crearTablaBtn.click();
    });

    // Agregar la opción a la lista desplegable
    opciones.appendChild(opcion);
  });

  if (resultados.length > 0) {
    opciones.classList.add("visible");
  } else {
    opciones.classList.remove("visible");
  }
}

// Cerrar la lista de opciones si se hace clic fuera de ella
document.addEventListener("click", function (event) {
  if (!opciones.contains(event.target) && event.target !== inputBusqueda) {
    opciones.classList.remove("visible");
  }
});

//Crear tabla personaje seleccionado-------------------------------------------------------------------------=>
document.addEventListener("DOMContentLoaded", function () {
  // Seleccionar el botón y el contenedor de la tabla
  var contenedorTabla = document.getElementById("contenedorTabla");
  var crearTablaBtn = document.getElementById("crearTablaBtn");

  // Función para crear la tabla y agregar información del héroe seleccionado
  function crearTabla() {
    var nombreHeroe = document
      .getElementById("inputBusqueda")
      .value.trim()
      .toLowerCase();
    let habilidad_adivinada = false;

    //Verificar si el nombre del héroe ingresado existe en los datos
    var heroeEncontrado = datosAlmacenados.find(
      (hero) => hero.Nombre.toLowerCase() === nombreHeroe
    );

    // Crear la estructura de la tabla con estilos CSS
    var tablaHTML = `
          <div class="tarjeta-habilidad-encontrada animate__animated animate__fadeIn" style="background-color: #d71611;">
            <div class="imagen-container"><img src="${heroeEncontrado.Imagen}"></div>
            <div class="nombre-heroe-a-adivinar">${heroeEncontrado.Nombre}</div>
          </div>
        `;

    if (
      habilidad_a_adivinar === heroeEncontrado.Q ||
      habilidad_a_adivinar === heroeEncontrado.E ||
      habilidad_a_adivinar === heroeEncontrado.Shift ||
      habilidad_a_adivinar === heroeEncontrado.DSecundario ||
      habilidad_a_adivinar === heroeEncontrado.Pasiva ||
      habilidad_a_adivinar === heroeEncontrado.Extra
    ) {
      tablaHTML = tablaHTML.replace(
        '<div class="tarjeta-habilidad-encontrada animate__animated animate__fadeIn" style="background-color: #d71611;">',
        '<div class="tarjeta-habilidad-encontrada animate__animated animate__fadeIn" style="background-color: #08bf2d;">'
      );
      habilidad_adivinada = true;
    }

    numero_de_intentos = numero_de_intentos + 1;
    document.getElementById("NumeroDeIntentosUsados").innerText =
      numero_de_intentos;

    //Acciones cuando se adivina habilidad
    if (habilidad_adivinada) {
      //Efecto confenti
      try {
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();
        const script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/npm/js-confetti@latest/dist/js-confetti.browser.js";
        document.head.appendChild(script);
      } catch (error) {
        console.error("Error al cargar confeti:", error);
      }

      let tarjeta_ganadora_aparecer = document.getElementById(
        "id-tarjeta-informacion-ganadora"
      );
      tarjeta_ganadora_aparecer.style.display = "block";
      tarjeta_ganadora_aparecer.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });

      let nombre_tarjeta_ganadora = document.getElementById(
        "NombreHeroeAdivinado"
      );
      nombre_tarjeta_ganadora.innerText = heroe_a_adivinar_f.Nombre;

      let imagen_tarjeta_gandora = document.getElementById(
        "ImagenHeroeAdivinado"
      );
      imagen_tarjeta_gandora.src = heroe_a_adivinar_f.Imagen;

      //Desactivar boton de adivinar heroe
      crearTablaBtn.disabled = true;
    }

    //Eliminando indicaciones inferiores
    const desaparecer_indicaciones = document.getElementById(
      "id-indicaciones-inferiores"
    );
    desaparecer_indicaciones.style.display = "none";

    //Eliminar heroe del input
    let index = heroes_para_input.indexOf(heroeEncontrado);
    if (index > -1) {
      heroes_para_input.splice(index, 1);
    }

    // Agregar la estructura de la tabla al contenedor en la parte superior sin borrar el contenido anterior
    contenedorTabla.insertAdjacentHTML("afterbegin", tablaHTML);

    let inputBusqueda = document.getElementById("inputBusqueda");
    inputBusqueda.value = "";
  }

  // Agregar un evento de clic al botón para llamar a la función de crear tabla
  crearTablaBtn.addEventListener("click", crearTabla);
});

//Funciones para botones de navegacion
function irAInicio() {
  var urlInicio = "../index.html";
  window.location.href = urlInicio;
}

function irAClasico() {
  var urlClasico = "../Clasico/index.html";
  window.location.href = urlClasico;
}

function irADailyMode() {
  var urlClasico = "../DailyMode/index.html";
  window.location.href = urlClasico;
}

//Funcion para el boton de "Ko-Fi"
function irAKoFi() {
  // URL que quieres abrir en la nueva pestaña
  var urlKofi = "https://ko-fi.com/eldany";

  // Abrir la URL en una nueva pestaña
  window.open(urlKofi, "_blank");
}

//Funciones de tiempo
function actualizarCuentaRegresiva() {
  // Obtén la hora actual
  var ahora = new Date();

  // Calcula la hora de medianoche
  var medianoche = new Date(ahora);
  medianoche.setHours(24, 0, 0, 0);

  // Calcula la diferencia entre la hora actual y la medianoche
  var diferencia = medianoche - ahora;

  // Convierte la diferencia a horas, minutos y segundos
  var horas = Math.floor(diferencia / (1000 * 60 * 60));
  var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  // Muestra la cuenta regresiva en algún elemento HTML
  var cuentaRegresivaElemento = document.getElementById("cuenta-regresiva");
  cuentaRegresivaElemento.textContent = horas + ":" + minutos + ":" + segundos;

  // Actualiza la cuenta regresiva cada segundo
  setTimeout(actualizarCuentaRegresiva, 1000);
}
// Inicia la cuenta regresiva al cargar la página
actualizarCuentaRegresiva();

// Función para ejecutar tu tarea
function miFuncion() {
  limpiarCache();
  heroe_a_adivinar_f = datosAlmacenados[21];
  habilidad_a_adivinar = datosAlmacenados[2].DSecundario;
}

// Función para programar la ejecución de miFuncion para el día siguiente
function programarEjecucion() {
  // Obtener la fecha actual
  const ahora = new Date();

  // Obtener la fecha objetivo (13 de mayo de 2024)
  const fechaObjetivo = new Date(2024, 4, 13); // El mes se indexa desde 0, por eso 4 representa mayo

  // Comprobar si la fecha actual es menor que la fecha objetivo
  if (ahora < fechaObjetivo) {
    // Calcular la diferencia de tiempo entre la fecha actual y la fecha objetivo
    const tiempoRestante = fechaObjetivo - ahora;

    // Programar la ejecución de miFuncion para la fecha objetivo
    setTimeout(function () {
      miFuncion();
    }, tiempoRestante);
  }
}
// Iniciar el proceso de programación
programarEjecucion();

function limpiarCache() {
  // Cambia la versión de los recursos agregando una cadena de consulta con la fecha actual
  var recursos = document.querySelectorAll("link[href], script[src], img[src]");
  recursos.forEach(function (recurso) {
    var url = recurso.getAttribute("href") || recurso.getAttribute("src");
    if (url) {
      var nuevaUrl = url + "?v=" + new Date().getTime();
      recurso.setAttribute("href", nuevaUrl);
      recurso.setAttribute("src", nuevaUrl);
    }
  });
}
