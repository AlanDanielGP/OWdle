const datos = [
    { id: 1, Imagen: 'img_heroes\\Ana.png', Nombre: 'Ana', Genero: 'Femenino', Especie: 'Humano', Rol: 'Apoyo', Disparo_Principal: 'Proyectil', Continente: 'África', Pais: 'Egipto', Afiliacion: 'Overwatch', Edad: 62 },
    { id: 2, Imagen: 'img_heroes\\Ashe.png', Nombre: 'Ashe', Genero: 'Femenino', Especie: 'Humano', Rol: 'DPS', Disparo_Principal: 'Hitscan', Continente: 'America', Pais: 'EUA', Afiliacion: 'Deadlock', Edad: 41 },
    { id: 3, Imagen: 'img_heroes\\Baptiste.png', Nombre: 'Babtiste', Genero: 'Masculino', Especie: 'Humano', Rol: 'Apoyo', Disparo_Principal: 'Hitscan', Continente: 'America', Pais: 'Haiti', Afiliacion: 'Overwatch', Edad: 38 },
    { id: 4, Imagen: 'img_heroes\\Bastion.png', Nombre: 'Bastion', Genero: 'Otro', Especie: 'Omnico', Rol: 'DPS', Disparo_Principal: 'Hitscan', Continente: 'Europa', Pais: 'Suecia', Afiliacion: 'Ironclad', Edad: 32 },
    { id: 5, Imagen: 'img_heroes\\Brigitte.png', Nombre: 'Brigitte', Genero: 'Femenino', Especie: 'Humano', Rol: 'Apoyo', Disparo_Principal: 'Melee', Continente: 'Europa', Pais: 'Suecia', Afiliacion: 'Overwatch', Edad: 25 },
    { id: 6, Imagen: 'img_heroes\\Cassidy.png', Nombre: 'Cassidy', Genero: 'Masculino', Especie: 'Humano', Rol: 'DPS', Disparo_Principal: 'Hitscan', Continente: 'America', Pais: 'EUA', Afiliacion: 'Overwatch', Edad: 39 },
    { id: 7, Imagen: 'img_heroes\\Doomfist.png', Nombre: 'Doomfist', Genero: 'Masculino', Especie: 'Humano', Rol: 'Tanque', Disparo_Principal: 'Proyectil', Continente: 'África', Pais: 'Nigeria', Afiliacion: 'Talon', Edad: 47 },
    { id: 8, Imagen: 'img_heroes\\Dva.png', Nombre: 'Dva', Genero: 'Femenino', Especie: 'Humano', Rol: 'Tanque', Disparo_Principal: 'Hitscan', Continente: 'Asia', Pais: 'Surcorea', Afiliacion: 'MEKA', Edad: 21 },
    { id: 9, Imagen: 'img_heroes\\Echo.png', Nombre: 'Echo', Genero: 'Otro', Especie: 'Omnico', Rol: 'DPS', Disparo_Principal: 'Proyectil', Continente: 'Europa', Pais: 'Suiza', Afiliacion: 'Overwatch', Edad: 14 },
    { id: 10, Imagen: 'img_heroes\\Genji.png', Nombre: 'Genji', Genero: 'Masculino', Especie: 'Humano', Rol: 'DPS', Disparo_Principal: 'Proyectil', Continente: 'Asia', Pais: 'Japón', Afiliacion: 'Overwatch', Edad: 37 },
    { id: 11, Imagen: 'img_heroes\\Hanzo.png', Nombre: 'Hanzo', Genero: 'Masculino', Especie: 'Humano', Rol: 'DPS', Disparo_Principal: 'Proyectil', Continente: 'Asia', Pais: 'Japón', Afiliacion: 'Shimadas', Edad: 40 },
    { id: 12, Imagen: 'img_heroes\\Illari.png', Nombre: 'Illari', Genero: 'Femenino', Especie: 'Humano', Rol: 'Apoyo', Disparo_Principal: 'Hitscan', Continente: 'America', Pais: 'Perú', Afiliacion: 'Intis', Edad: 18 },
    { id: 13, Imagen: 'img_heroes\\JunkerQueen.png', Nombre: 'Junker Queen', Genero: 'Femenino', Especie: 'Humano', Rol: 'Tanque', Disparo_Principal: 'Hitscan', Continente: 'Oceanía', Pais: 'Australia', Afiliacion: 'Chatarreros', Edad: 31 },
    { id: 14, Imagen: 'img_heroes\\Junkrat.png', Nombre: 'Junkrat', Genero: 'Masculino', Especie: 'Humano', Rol: 'DPS', Disparo_Principal: 'Proyectil', Continente: 'Oceanía', Pais: 'Australia', Afiliacion: 'Chatarreros', Edad: 27 },
    { id: 15, Imagen: 'img_heroes\\Kiriko.png', Nombre: 'Kiriko', Genero: 'Femenino', Especie: 'Humano', Rol: 'Apoyo', Disparo_Principal: 'Proyectil', Continente: 'Asia', Pais: 'Japón', Afiliacion: 'Yōkai', Edad: 21 },
    { id: 16, Imagen: 'img_heroes\\Lifeweaver.png', Nombre: 'Lifeweaver', Genero: 'Masculino', Especie: 'Humano', Rol: 'Apoyo', Disparo_Principal: 'Proyectil', Continente: 'Asia', Pais: 'Tailandia', Afiliacion: 'Vishkar', Edad: 31 },
    { id: 17, Imagen: 'img_heroes\\Lucio.png', Nombre: 'Lucio', Genero: 'Masculino', Especie: 'Humano', Rol: 'Apoyo', Disparo_Principal: 'Proyectil', Continente: 'America', Pais: 'Brasil', Afiliacion: 'Overwatch', Edad: 28 },
    { id: 18, Imagen: 'img_heroes\\Mauga.png', Nombre: 'Mauga', Genero: 'Masculino', Especie: 'Humano', Rol: 'Tanque', Disparo_Principal: 'Hitscan', Continente: 'Oceanía', Pais: 'Samoa', Afiliacion: 'Talon', Edad: 37 },
    { id: 19, Imagen: 'img_heroes\\Mei.png', Nombre: 'Mei', Genero: 'Femenino', Especie: 'Humano', Rol: 'DPS', Disparo_Principal: 'Rayo', Continente: 'Asia', Pais: 'China', Afiliacion: 'Overwatch', Edad: 33 },
    { id: 20, Imagen: 'img_heroes\\Mercy.png', Nombre: 'Mercy', Genero: 'Femenino', Especie: 'Humano', Rol: 'Apoyo', Disparo_Principal: 'Rayo', Continente: 'Europa', Pais: 'Suiza', Afiliacion: 'Overwatch', Edad: 39 },
    { id: 21, Imagen: 'img_heroes\\Moira.png', Nombre: 'Moira', Genero: 'Femenino', Especie: 'Humano', Rol: 'Apoyo', Disparo_Principal: 'Rayo', Continente: 'Europa', Pais: 'Irlanda', Afiliacion: 'Talon', Edad: 50 },
    { id: 22, Imagen: 'img_heroes\\Orisa.png', Nombre: 'Orisa', Genero: 'Otro', Especie: 'Omnico', Rol: 'Tanque', Disparo_Principal: 'Proyectil', Continente: 'África', Pais: 'Numbani', Afiliacion: 'Numbani', Edad: 1 },
    { id: 23, Imagen: 'img_heroes\\Pharah.png', Nombre: 'Pharah', Genero: 'Femenino', Especie: 'Humano', Rol: 'DPS', Disparo_Principal: 'Proyectil', Continente: 'África', Pais: 'Egipto', Afiliacion: 'Overwatch', Edad: 34 },
    { id: 24, Imagen: 'img_heroes\\Ramattra.png', Nombre: 'Ramattra', Genero: 'Otro', Especie: 'Omnico', Rol: 'Tanque', Disparo_Principal: 'Proyectil', Continente: 'Asia', Pais: 'Nepal', Afiliacion: 'Null Sector', Edad: 28 },
    { id: 25, Imagen: 'img_heroes\\Reaper.png', Nombre: 'Reaper', Genero: 'Masculino', Especie: 'Humano', Rol: 'DPS', Disparo_Principal: 'Hitscan', Continente: 'America', Pais: 'EUA', Afiliacion: 'Talon', Edad: 60 },
    { id: 26, Imagen: 'img_heroes\\Reinhardt.png', Nombre: 'Reinhardt', Genero: 'Masculino', Especie: 'Humano', Rol: 'Tanque', Disparo_Principal: 'Melee', Continente: 'Europa', Pais: 'Alemania', Afiliacion: 'Overwatch', Edad: 63 },
    { id: 27, Imagen: 'img_heroes\\Roadhog.png', Nombre: 'Roadhog', Genero: 'Masculino', Especie: 'Humano', Rol: 'Tanque', Disparo_Principal: 'Proyectil', Continente: 'Oceanía', Pais: 'Australia', Afiliacion: 'Chatarreros', Edad: 50 },
    { id: 28, Imagen: 'img_heroes\\Sigma.png', Nombre: 'Sigma', Genero: 'Masculino', Especie: 'Humano', Rol: 'Tanque', Disparo_Principal: 'Proyectil', Continente: 'Europa', Pais: 'Holanda', Afiliacion: 'Talon', Edad: 64 },
    { id: 29, Imagen: 'img_heroes\\Sojourn.png', Nombre: 'Sojourn', Genero: 'Femenino', Especie: 'Humano', Rol: 'DPS', Disparo_Principal: 'Proyectil', Continente: 'America', Pais: 'Canada', Afiliacion: 'Overwatch', Edad: 51 },
    { id: 30, Imagen: 'img_heroes\\Soldado76.png', Nombre: 'Soldado76', Genero: 'Masculino', Especie: 'Humano', Rol: 'DPS', Disparo_Principal: 'Hitscan', Continente: 'America', Pais: 'EUA', Afiliacion: 'Overwatch', Edad: 58 },
    { id: 31, Imagen: 'img_heroes\\Sombra.png', Nombre: 'Sombra', Genero: 'Femenino', Especie: 'Humano', Rol: 'DPS', Disparo_Principal: 'Hitscan', Continente: 'America', Pais: 'Mexico', Afiliacion: 'Talon', Edad: 32 },
    { id: 32, Imagen: 'img_heroes\\Symmetra.png', Nombre: 'Symmetra', Genero: 'Femenino', Especie: 'Humano', Rol: 'DPS', Disparo_Principal: 'Rayo', Continente: 'Asia', Pais: 'India', Afiliacion: 'Vishkar', Edad: 30 },
    { id: 33, Imagen: 'img_heroes\\Torbjörn.png', Nombre: 'Torbjörn', Genero: 'Masculino', Especie: 'Humano', Rol: 'DPS', Disparo_Principal: 'Proyectil', Continente: 'Europa', Pais: 'Suecia', Afiliacion: 'Overwatch', Edad: 59 },
    { id: 34, Imagen: 'img_heroes\\Tracer.png', Nombre: 'Tracer', Genero: 'Femenino', Especie: 'Humano', Rol: 'DPS', Disparo_Principal: 'Hitscan', Continente: 'Europa', Pais: 'Inglaterra', Afiliacion: 'Overwatch', Edad: 28 },
    { id: 35, Imagen: 'img_heroes\\Widowmaker.png', Nombre: 'Widowmaker', Genero: 'Femenino', Especie: 'Humano', Rol: 'DPS', Disparo_Principal: 'Hitscan', Continente: 'Europa', Pais: 'Francia', Afiliacion: 'Talon', Edad: 35 },
    { id: 36, Imagen: 'img_heroes\\Winston.png', Nombre: 'Winston', Genero: 'Masculino', Especie: 'Animal', Rol: 'Tanque', Disparo_Principal: 'Rayo', Continente: 'La luna', Pais: 'Horizon', Afiliacion: 'Overwatch', Edad: 31 },
    { id: 37, Imagen: 'img_heroes\\WreckingBall.png', Nombre: 'WreckingBall', Genero: 'Masculino', Especie: 'Animal', Rol: 'Tanque', Disparo_Principal: 'Hitscan', Continente: 'La luna', Pais: 'Horizon', Afiliacion: 'Chatarreros', Edad: 16 },
    { id: 38, Imagen: 'img_heroes\\Zarya.png', Nombre: 'Zarya', Genero: 'Femenino', Especie: 'Humano', Rol: 'Tanque', Disparo_Principal: 'Rayo', Continente: 'Asia', Pais: 'Rusia', Afiliacion: 'Overwatch', Edad: 30 },
    { id: 39, Imagen: 'img_heroes\\Zenyatta.png', Nombre: 'Zenyatta', Genero: 'Otro', Especie: 'Omnico', Rol: 'Apoyo', Disparo_Principal: 'Proyectil', Continente: 'Asia', Pais: 'Nepal', Afiliacion: 'Shambali', Edad: 33 }
];

// Almacena los datos en localStorage
localStorage.setItem('datos', JSON.stringify(datos));

// Recupera los datos almacenados en localStorage
const datosAlmacenados = JSON.parse(localStorage.getItem('datos'));



// Heroes sin adivinar --------------------------------------------------------------------------------------=>
let heroes_sin_adivinar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38];

// Generar un índice aleatorio dentro del rango del array
let indiceAleatorio = Math.floor(Math.random() * heroes_sin_adivinar.length);

let selector_aleatorio = heroes_sin_adivinar[indiceAleatorio];
var heroe_a_adivinar = datosAlmacenados[selector_aleatorio];
var heroe_adivinado = false;
console.log(heroe_a_adivinar);



//Input. Concexion con datos----------------------------------------------------------------------------------=>
const inputBusqueda = document.getElementById('inputBusqueda');
const opciones = document.getElementById('opciones');

inputBusqueda.addEventListener('input', function() {
    const valorInput = inputBusqueda.value.trim().toLowerCase(); // trim() elimina espacios en blanco al inicio y al final
    const resultados = datosAlmacenados.filter(hero => hero.Nombre.toLowerCase().startsWith(valorInput));
    mostrarOpciones(resultados);
});

function mostrarOpciones(resultados) {
    opciones.innerHTML = '';

    if (inputBusqueda.value.trim() === '') {
        opciones.classList.remove('visible');
        return;
    }

    resultados.forEach(hero => {
        const opcion = document.createElement('div');
        opcion.classList.add('opcion');

        // Crear elemento de imagen
        const imagen = document.createElement('img');
        imagen.src = hero.Imagen; // La ruta de la imagen está en la propiedad 'Imagen' de cada héroe
        imagen.alt = hero.Nombre; // Establecer el atributo 'alt' para accesibilidad
        imagen.classList.add('imagen-opcion');
        opcion.appendChild(imagen);

        // Crear elemento de texto para el nombre del héroe
        const texto = document.createElement('span');
        texto.textContent = hero.Nombre;
        opcion.appendChild(texto);

        // Agregar evento de clic a la opción
        opcion.addEventListener('click', function() {
            inputBusqueda.value = hero.Nombre;
            opciones.innerHTML = '';
            opciones.classList.remove('visible');
        });

        // Agregar la opción a la lista desplegable
        opciones.appendChild(opcion);
    });

    if (resultados.length > 0) {
        opciones.classList.add('visible');
    } else {
        opciones.classList.remove('visible');
    }
}

// Cerrar la lista de opciones si se hace clic fuera de ella
document.addEventListener('click', function(event) {
    if (!opciones.contains(event.target) && event.target !== inputBusqueda) {
        opciones.classList.remove('visible');
    }
});



//Crear tabla personaje seleccionado-------------------------------------------------------------------------=>
document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar el botón y el contenedor de la tabla
    var crearTablaBtn = document.getElementById("crearTablaBtn");
    var contenedorTabla = document.getElementById("contenedorTabla");

    // Función para crear la tabla y agregar información del héroe seleccionado
    function crearTabla() {
        // Obtener el nombre del héroe ingresado en el input
        var nombreHeroe = document.getElementById("inputBusqueda").value.trim().toLowerCase();

        // Verificar si el nombre del héroe ingresado existe en los datos
        var heroeEncontrado = datosAlmacenados.find(hero => hero.Nombre.toLowerCase() === nombreHeroe);

        // Si no se encontró el héroe, no se crea la tabla
        if (!heroeEncontrado) {
            alert("El héroe ingresado no existe. Por favor, ingresa un nombre válido.");
            return;
        }

        // Crear la estructura de la tabla con estilos CSS
        var tablaHTML = `
            <div class="contenedor-tabla">
                <div class="tabla-heroes-seleccionados">
                    <div class="imagen-container"><img src="${heroeEncontrado.Imagen}" alt="${heroeEncontrado.Nombre}"></div>
                    <div style="background-color: #08bf2d;">${heroeEncontrado.Genero}</div>
                    <div style="background-color: #08bf2d;">${heroeEncontrado.Especie}</div>
                    <div style="background-color: #08bf2d;">${heroeEncontrado.Rol}</div>
                    <div style="background-color: #08bf2d;">${heroeEncontrado.Disparo_Principal}</div>
                    <div style="background-color: #08bf2d;">${heroeEncontrado.Continente}</div>
                    <div style="background-color: #08bf2d;">${heroeEncontrado.Pais}</div>
                    <div style="background-color: #08bf2d;">${heroeEncontrado.Afiliacion}</div>
                    <div style="background-color: #08bf2d;">${heroeEncontrado.Edad}</div>
                </div>
            </div>
        `;

        if (heroe_a_adivinar.Genero !== heroeEncontrado.Genero) {
            tablaHTML = tablaHTML.replace('<div style="background-color: #08bf2d;">' + heroeEncontrado.Genero, '<div style="background-color: #d71611;">' + heroeEncontrado.Genero,);
        }

        if (heroe_a_adivinar.Especie !== heroeEncontrado.Especie) {
            tablaHTML = tablaHTML.replace('<div style="background-color: #08bf2d;">' + heroeEncontrado.Especie, '<div style="background-color: #d71611;">' + heroeEncontrado.Especie,);
        }

        if (heroe_a_adivinar.Rol !== heroeEncontrado.Rol) {
            tablaHTML = tablaHTML.replace('<div style="background-color: #08bf2d;">' + heroeEncontrado.Rol, '<div style="background-color: #d71611;">' + heroeEncontrado.Rol,);
        }

        if (heroe_a_adivinar.Disparo_Principal !== heroeEncontrado.Disparo_Principal) {
            tablaHTML = tablaHTML.replace('<div style="background-color: #08bf2d;">' + heroeEncontrado.Disparo_Principal, '<div style="background-color: #d71611;">' + heroeEncontrado.Disparo_Principal,);
        }

        if (heroe_a_adivinar.Continente !== heroeEncontrado.Continente) {
            tablaHTML = tablaHTML.replace('<div style="background-color: #08bf2d;">' + heroeEncontrado.Continente, '<div style="background-color: #d71611;">' + heroeEncontrado.Continente,);
        }

        if (heroe_a_adivinar.Pais !== heroeEncontrado.Pais) {
            tablaHTML = tablaHTML.replace('<div style="background-color: #08bf2d;">' + heroeEncontrado.Pais, '<div style="background-color: #d71611;">' + heroeEncontrado.Pais,);
        }

        if (heroe_a_adivinar.Afiliacion !== heroeEncontrado.Afiliacion) {
            tablaHTML = tablaHTML.replace('<div style="background-color: #08bf2d;">' + heroeEncontrado.Afiliacion, '<div style="background-color: #d71611;">' + heroeEncontrado.Afiliacion,);
        }

        if (heroe_a_adivinar.Edad > heroeEncontrado.Edad) {
            tablaHTML = tablaHTML.replace('<div style="background-color: #08bf2d;">' + heroeEncontrado.Edad, '<div style="background-color: #d71611; background-image: url(\'iconos/flecha-hacia-arriba.png\'); background-size: cover; background-position: center; text-align: center;">' + heroeEncontrado.Edad,);
        }else if (heroe_a_adivinar.Edad < heroeEncontrado.Edad) {
            tablaHTML = tablaHTML.replace('<div style="background-color: #08bf2d;">' + heroeEncontrado.Edad, '<div style="background-color: #d71611; background-image: url(\'iconos/flecha-hacia-abajo.png\'); background-size: cover; background-position: center; text-align: center;">' + heroeEncontrado.Edad,);
        }


        // Agregar la estructura de la tabla al contenedor en la parte superior sin borrar el contenido anterior
        contenedorTabla.insertAdjacentHTML('afterbegin', tablaHTML);

        // Obtener la tabla recién creada
        var tabla = contenedorTabla.firstElementChild.querySelector('.tabla-heroes-seleccionados');

        // Agregar la clase 'mostrar' después de un pequeño retraso para activar la transición
        setTimeout(function() {
            tabla.classList.add('mostrar');
        }, 1);

        let inputBusqueda = document.getElementById("inputBusqueda");
        inputBusqueda.value = "";
    }

    // Agregar un evento de clic al botón para llamar a la función de crear tabla
    crearTablaBtn.addEventListener("click", crearTabla);
});
