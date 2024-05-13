const datosAlmacenados = [
  {
    id: 1,
    Imagen: "..\\img_heroes\\Ana.png",
    Nombre: "Ana",
    Genero: "Femenino",
    Especie: "Humano",
    Rol: "Apoyo",
    Disparo_Principal: "Proyectil",
    Continente: "África",
    Pais: "Egipto",
    Afiliacion: "Overwatch",
    Edad: 62,
    Voz: "..\\lineasDeVoz_heroes\\Ana_ADormir.mp3",
    Skin: "..\\skins\\Ana.jpg",
    Habilidad: "..\\Habilidades\\Ana.png",
  },
  {
    id: 2,
    Imagen: "..\\img_heroes\\Ashe.png",
    Nombre: "Ashe",
    Genero: "Femenino",
    Especie: "Humano",
    Rol: "DPS",
    Disparo_Principal: "Hitscan",
    Continente: "America",
    Pais: "EUA",
    Afiliacion: "Deadlock",
    Edad: 41,
    Voz: "..\\lineasDeVoz_heroes\\Ashe_QueAlguienBusqueAMiMayordomo.mp3",
    Skin: "..\\skins\\Ashe.jpg",
    Habilidad: "..\\Habilidades\\Ashe.png",
  },
  {
    id: 3,
    Imagen: "..\\img_heroes\\Baptiste.png",
    Nombre: "Babtiste",
    Genero: "Masculino",
    Especie: "Humano",
    Rol: "Apoyo",
    Disparo_Principal: "Hitscan",
    Continente: "America",
    Pais: "Haiti",
    Afiliacion: "Overwatch",
    Edad: 38,
    Voz: "..\\lineasDeVoz_heroes\\Baptiste_DetrasDeTi.mp3",
    Skin: "..\\skins\\Baptiste.jpg",
    Habilidad: "..\\Habilidades\\Baptiste.png",
  },
  {
    id: 4,
    Imagen: "..\\img_heroes\\Bastion.png",
    Nombre: "Bastion",
    Genero: "Otro",
    Especie: "Omnico",
    Rol: "DPS",
    Disparo_Principal: "Hitscan",
    Continente: "Europa",
    Pais: "Suecia",
    Afiliacion: "Ironclad",
    Edad: 32,
    Voz: "..\\lineasDeVoz_heroes\\Bastion_JiiJooJoo.mp3",
    Skin: "..\\skins\\Bastion.jpg",
    Habilidad: "..\\Habilidades\\Bastion.png",
  },
  {
    id: 5,
    Imagen: "..\\img_heroes\\Brigitte.png",
    Nombre: "Brigitte",
    Genero: "Femenino",
    Especie: "Humano",
    Rol: "Apoyo",
    Disparo_Principal: "Melee",
    Continente: "Europa",
    Pais: "Suecia",
    Afiliacion: "Overwatch",
    Edad: 25,
    Voz: "..\\lineasDeVoz_heroes\\Brigitte_NadaDeAtajos.mp3",
    Skin: "..\\skins\\Brigitte.jpg",
    Habilidad: "..\\Habilidades\\Brigitte.png",
  },
  {
    id: 6,
    Imagen: "..\\img_heroes\\Cassidy.png",
    Nombre: "Cassidy",
    Genero: "Masculino",
    Especie: "Humano",
    Rol: "DPS",
    Disparo_Principal: "Hitscan",
    Continente: "America",
    Pais: "EUA",
    Afiliacion: "Overwatch",
    Edad: 39,
    Voz: "..\\lineasDeVoz_heroes\\Cassidy_DefinitivamenteNoSoyElFeo.mp3",
    Skin: "..\\skins\\Cassidy.jpg",
    Habilidad: "..\\Habilidades\\Cassidy.png",
  },
  {
    id: 7,
    Imagen: "..\\img_heroes\\Doomfist.png",
    Nombre: "Doomfist",
    Genero: "Masculino",
    Especie: "Humano",
    Rol: "Tanque",
    Disparo_Principal: "Proyectil",
    Continente: "África",
    Pais: "Nigeria",
    Afiliacion: "Talon",
    Edad: 47,
    Voz: "..\\lineasDeVoz_heroes\\Doomfist_NoSirvesNiDeEstorbo.mp3",
    Skin: "..\\skins\\Doomfist.jpg",
    Habilidad: "..\\Habilidades\\Doomfist.png",
  },
  {
    id: 8,
    Imagen: "..\\img_heroes\\Dva.png",
    Nombre: "Dva",
    Genero: "Femenino",
    Especie: "Humano",
    Rol: "Tanque",
    Disparo_Principal: "Hitscan",
    Continente: "Asia",
    Pais: "Surcorea",
    Afiliacion: "MEKA",
    Edad: 21,
    Voz: "..\\lineasDeVoz_heroes\\Dva_ModoFacil.mp3",
    Skin: "..\\skins\\Dva.jpg",
    Habilidad: "..\\Habilidades\\Dva.png",
  },
  {
    id: 9,
    Imagen: "..\\img_heroes\\Echo.png",
    Nombre: "Echo",
    Genero: "Otro",
    Especie: "Omnico",
    Rol: "DPS",
    Disparo_Principal: "Proyectil",
    Continente: "Europa",
    Pais: "Suiza",
    Afiliacion: "Overwatch",
    Edad: 14,
    Voz: "..\\lineasDeVoz_heroes\\Echo_Alamak.mp3",
    Skin: "..\\skins\\Echo.jpg",
    Habilidad: "..\\Habilidades\\Echo.png",
  },
  {
    id: 10,
    Imagen: "..\\img_heroes\\Genji.png",
    Nombre: "Genji",
    Genero: "Masculino",
    Especie: "Humano",
    Rol: "DPS",
    Disparo_Principal: "Proyectil",
    Continente: "Asia",
    Pais: "Japón",
    Afiliacion: "Overwatch",
    Edad: 37,
    Voz: "..\\lineasDeVoz_heroes\\Genji_MadaMada.mp3",
    Skin: "..\\skins\\Genji.jpg",
    Habilidad: "..\\Habilidades\\Genji.png",
  },
  {
    id: 11,
    Imagen: "..\\img_heroes\\Hanzo.png",
    Nombre: "Hanzo",
    Genero: "Masculino",
    Especie: "Humano",
    Rol: "DPS",
    Disparo_Principal: "Proyectil",
    Continente: "Asia",
    Pais: "Japón",
    Afiliacion: "Clan<br>Shimada",
    Edad: 40,
    Voz: "..\\lineasDeVoz_heroes\\Hanzo_PuraGeometria.mp3",
    Skin: "..\\skins\\Hanzo.jpg",
    Habilidad: "..\\Habilidades\\Hanzo.png",
  },
  {
    id: 12,
    Imagen: "..\\img_heroes\\Illari.png",
    Nombre: "Illari",
    Genero: "Femenino",
    Especie: "Humano",
    Rol: "Apoyo",
    Disparo_Principal: "Hitscan",
    Continente: "America",
    Pais: "Perú",
    Afiliacion: "Guerreros<br>Intis",
    Edad: 18,
    Voz: "..\\lineasDeVoz_heroes\\Illari_QuePalta.mp3",
    Skin: "..\\skins\\Illari.jpg",
    Habilidad: "..\\Habilidades\\Illari.png",
  },
  {
    id: 13,
    Imagen: "..\\img_heroes\\JunkerQueen.png",
    Nombre: "Junker Queen",
    Genero: "Femenino",
    Especie: "Humano",
    Rol: "Tanque",
    Disparo_Principal: "Hitscan",
    Continente: "Oceanía",
    Pais: "Australia",
    Afiliacion: "Chatarreros",
    Edad: 31,
    Voz: "..\\lineasDeVoz_heroes\\JunkerQueen_Ejecucion.mp3",
    Skin: "..\\skins\\JunkerQueen.jpg",
    Habilidad: "..\\Habilidades\\JunkerQueen.png",
  },
  {
    id: 14,
    Imagen: "..\\img_heroes\\Junkrat.png",
    Nombre: "Junkrat",
    Genero: "Masculino",
    Especie: "Humano",
    Rol: "DPS",
    Disparo_Principal: "Proyectil",
    Continente: "Oceanía",
    Pais: "Australia",
    Afiliacion: "Chatarreros",
    Edad: 27,
    Voz: "..\\lineasDeVoz_heroes\\Junkrat_ExplotaloOtraVez.mp3",
    Skin: "..\\skins\\Junkrat.jpg",
    Habilidad: "..\\Habilidades\\Junkrat.png",
  },
  {
    id: 15,
    Imagen: "..\\img_heroes\\Kiriko.png",
    Nombre: "Kiriko",
    Genero: "Femenino",
    Especie: "Humano",
    Rol: "Apoyo",
    Disparo_Principal: "Proyectil",
    Continente: "Asia",
    Pais: "Japón",
    Afiliacion: "Yōkai",
    Edad: 21,
    Voz: "..\\lineasDeVoz_heroes\\Kiriko_Juventud.mp3",
    Skin: "..\\skins\\Kiriko.jpg",
    Habilidad: "..\\Habilidades\\Kiriko.png",
  },
  {
    id: 16,
    Imagen: "..\\img_heroes\\Lifeweaver.png",
    Nombre: "Lifeweaver",
    Genero: "Masculino",
    Especie: "Humano",
    Rol: "Apoyo",
    Disparo_Principal: "Proyectil",
    Continente: "Asia",
    Pais: "Tailandia",
    Afiliacion: "Vishkar",
    Edad: 31,
    Voz: "..\\lineasDeVoz_heroes\\Lifeweaver_LosPerrosMuerden.mp3",
    Skin: "..\\skins\\Lifeweaver.jpg",
    Habilidad: "..\\Habilidades\\Lifeweaver.png",
  },
  {
    id: 17,
    Imagen: "..\\img_heroes\\Lucio.png",
    Nombre: "Lucio",
    Genero: "Masculino",
    Especie: "Humano",
    Rol: "Apoyo",
    Disparo_Principal: "Proyectil",
    Continente: "America",
    Pais: "Brasil",
    Afiliacion: "Overwatch",
    Edad: 28,
    Voz: "..\\lineasDeVoz_heroes\\Lucio_Tinnitus.mp3",
    Skin: "..\\skins\\Lucio.jpg",
    Habilidad: "..\\Habilidades\\Lucio.png",
  },
  {
    id: 18,
    Imagen: "..\\img_heroes\\Mauga.png",
    Nombre: "Mauga",
    Genero: "Masculino",
    Especie: "Humano",
    Rol: "Tanque",
    Disparo_Principal: "Hitscan",
    Continente: "Oceanía",
    Pais: "Samoa",
    Afiliacion: "Talon",
    Edad: 37,
    Voz: "..\\lineasDeVoz_heroes\\Mauga_MientrasMePaguen.mp3",
    Skin: "..\\skins\\Mauga.jpg",
    Habilidad: "..\\Habilidades\\Mauga.png",
  },
  {
    id: 19,
    Imagen: "..\\img_heroes\\Mei.png",
    Nombre: "Mei",
    Genero: "Femenino",
    Especie: "Humano",
    Rol: "DPS",
    Disparo_Principal: "Rayo",
    Continente: "Asia",
    Pais: "China",
    Afiliacion: "Overwatch",
    Edad: 33,
    Voz: "..\\lineasDeVoz_heroes\\Mei_ElFrioEsParteDeMi.mp3",
    Skin: "..\\skins\\Mei.jpg",
    Habilidad: "..\\Habilidades\\Mei.png",
  },
  {
    id: 20,
    Imagen: "..\\img_heroes\\Mercy.png",
    Nombre: "Mercy",
    Genero: "Femenino",
    Especie: "Humano",
    Rol: "Apoyo",
    Disparo_Principal: "Rayo",
    Continente: "Europa",
    Pais: "Suiza",
    Afiliacion: "Overwatch",
    Edad: 39,
    Voz: "..\\lineasDeVoz_heroes\\Mercy_Buambulancia.mp3",
    Skin: "..\\skins\\Mercy.jpg",
    Habilidad: "..\\Habilidades\\Mercy.png",
  },
  {
    id: 21,
    Imagen: "..\\img_heroes\\Moira.png",
    Nombre: "Moira",
    Genero: "Femenino",
    Especie: "Humano",
    Rol: "Apoyo",
    Disparo_Principal: "Rayo",
    Continente: "Europa",
    Pais: "Irlanda",
    Afiliacion: "Talon",
    Edad: 50,
    Voz: "..\\lineasDeVoz_heroes\\Moira_LaEstupidez.mp3",
    Skin: "..\\skins\\Moira.jpg",
    Habilidad: "..\\Habilidades\\Moira.png",
  },
  {
    id: 22,
    Imagen: "..\\img_heroes\\Orisa.png",
    Nombre: "Orisa",
    Genero: "Otro",
    Especie: "Omnico",
    Rol: "Tanque",
    Disparo_Principal: "Proyectil",
    Continente: "África",
    Pais: "Numbani",
    Afiliacion: "Numbani",
    Edad: 1,
    Voz: "..\\lineasDeVoz_heroes\\Orisa_NecesitasUnAbrazo.mp3",
    Skin: "..\\skins\\Orisa.jpg",
    Habilidad: "..\\Habilidades\\Orisa.png",
  },
  {
    id: 23,
    Imagen: "..\\img_heroes\\Pharah.png",
    Nombre: "Pharah",
    Genero: "Femenino",
    Especie: "Humano",
    Rol: "DPS",
    Disparo_Principal: "Proyectil",
    Continente: "África",
    Pais: "Egipto",
    Afiliacion: "Overwatch",
    Edad: 34,
    Voz: "..\\lineasDeVoz_heroes\\Pharah_SaltoDeCohete.mp3",
    Skin: "..\\skins\\Pharah.jpg",
    Habilidad: "..\\Habilidades\\Pharah.png",
  },
  {
    id: 24,
    Imagen: "..\\img_heroes\\Ramattra.png",
    Nombre: "Ramattra",
    Genero: "Otro",
    Especie: "Omnico",
    Rol: "Tanque",
    Disparo_Principal: "Proyectil",
    Continente: "Asia",
    Pais: "Nepal",
    Afiliacion: "Null<br>Sector",
    Edad: 28,
    Voz: "..\\lineasDeVoz_heroes\\Ramattra_NoPodemosFallarEstandoUnidos.mp3",
    Skin: "..\\skins\\Ramattra.jpg",
    Habilidad: "..\\Habilidades\\Ramattra.png",
  },
  {
    id: 25,
    Imagen: "..\\img_heroes\\Reaper.png",
    Nombre: "Reaper",
    Genero: "Masculino",
    Especie: "Humano",
    Rol: "DPS",
    Disparo_Principal: "Hitscan",
    Continente: "America",
    Pais: "EUA",
    Afiliacion: "Talon",
    Edad: 60,
    Voz: "..\\lineasDeVoz_heroes\\Reaper_SiEstaVivoPuedoMatarlo.mp3",
    Skin: "..\\skins\\Reaper.jpg",
    Habilidad: "..\\Habilidades\\Reaper.png",
  },
  {
    id: 26,
    Imagen: "..\\img_heroes\\Reinhardt.png",
    Nombre: "Reinhardt",
    Genero: "Masculino",
    Especie: "Humano",
    Rol: "Tanque",
    Disparo_Principal: "Melee",
    Continente: "Europa",
    Pais: "Alemania",
    Afiliacion: "Overwatch",
    Edad: 63,
    Voz: "..\\lineasDeVoz_heroes\\Reinhardt_TienesMiedo.mp3",
    Skin: "..\\skins\\Reinhardt.jpg",
    Habilidad: "..\\Habilidades\\Reinhardt.png",
  },
  {
    id: 27,
    Imagen: "..\\img_heroes\\Roadhog.png",
    Nombre: "Roadhog",
    Genero: "Masculino",
    Especie: "Humano",
    Rol: "Tanque",
    Disparo_Principal: "Proyectil",
    Continente: "Oceanía",
    Pais: "Australia",
    Afiliacion: "Chatarreros",
    Edad: 50,
    Voz: "..\\lineasDeVoz_heroes\\Roadhog_YaSeDesatoElPuerco.mp3",
    Skin: "..\\skins\\Roadhog.jpg",
    Habilidad: "..\\Habilidades\\Roadhog.png",
  },
  {
    id: 28,
    Imagen: "..\\img_heroes\\Sigma.png",
    Nombre: "Sigma",
    Genero: "Masculino",
    Especie: "Humano",
    Rol: "Tanque",
    Disparo_Principal: "Proyectil",
    Continente: "Europa",
    Pais: "Holanda",
    Afiliacion: "Talon",
    Edad: 64,
    Voz: "..\\lineasDeVoz_heroes\\Sigma_EscuchasEsaMelodia.mp3",
    Skin: "..\\skins\\Sigma.jpg",
    Habilidad: "..\\Habilidades\\Sigma.png",
  },
  {
    id: 29,
    Imagen: "..\\img_heroes\\Sojourn.png",
    Nombre: "Sojourn",
    Genero: "Femenino",
    Especie: "Humano",
    Rol: "DPS",
    Disparo_Principal: "Proyectil",
    Continente: "America",
    Pais: "Canada",
    Afiliacion: "Overwatch",
    Edad: 51,
    Voz: "..\\lineasDeVoz_heroes\\Sojourn_QuieresUnCroissant.mp3",
    Skin: "..\\skins\\Sojourn.jpg",
    Habilidad: "..\\Habilidades\\Sojourn.png",
  },
  {
    id: 30,
    Imagen: "..\\img_heroes\\Soldado76.png",
    Nombre: "Soldado76",
    Genero: "Masculino",
    Especie: "Humano",
    Rol: "DPS",
    Disparo_Principal: "Hitscan",
    Continente: "America",
    Pais: "EUA",
    Afiliacion: "Overwatch",
    Edad: 58,
    Voz: "..\\lineasDeVoz_heroes\\Soldado76_SoyEjercitoDeUnoSolo.mp3",
    Skin: "..\\skins\\Soldado76.jpg",
    Habilidad: "..\\Habilidades\\Soldado76.png",
  },
  {
    id: 31,
    Imagen: "..\\img_heroes\\Sombra.png",
    Nombre: "Sombra",
    Genero: "Femenino",
    Especie: "Humano",
    Rol: "DPS",
    Disparo_Principal: "Hitscan",
    Continente: "America",
    Pais: "Mexico",
    Afiliacion: "Talon",
    Edad: 32,
    Voz: "..\\lineasDeVoz_heroes\\Sombra_AsustamePanteon.mp3",
    Skin: "..\\skins\\Sombra.jpg",
    Habilidad: "..\\Habilidades\\Sombra.png",
  },
  {
    id: 32,
    Imagen: "..\\img_heroes\\Symmetra.png",
    Nombre: "Symmetra",
    Genero: "Femenino",
    Especie: "Humano",
    Rol: "DPS",
    Disparo_Principal: "Rayo",
    Continente: "Asia",
    Pais: "India",
    Afiliacion: "Vishkar",
    Edad: 30,
    Voz: "..\\lineasDeVoz_heroes\\Symmetra_QueFaltaDeImaginacion.mp3",
    Skin: "..\\skins\\Symmetra.jpg",
    Habilidad: "..\\Habilidades\\Symmetra.png",
  },
  {
    id: 33,
    Imagen: "..\\img_heroes\\Torbjörn.png",
    Nombre: "Torbjörn",
    Genero: "Masculino",
    Especie: "Humano",
    Rol: "DPS",
    Disparo_Principal: "Proyectil",
    Continente: "Europa",
    Pais: "Suecia",
    Afiliacion: "Overwatch",
    Edad: 59,
    Voz: "..\\lineasDeVoz_heroes\\TorbjörnSiempreSubestimanALosIngenieros.mp3",
    Skin: "..\\skins\\Torbjörn.jpg",
    Habilidad: "..\\Habilidades\\Torbjörn.png",
  },
  {
    id: 34,
    Imagen: "..\\img_heroes\\Tracer.png",
    Nombre: "Tracer",
    Genero: "Femenino",
    Especie: "Humano",
    Rol: "DPS",
    Disparo_Principal: "Hitscan",
    Continente: "Europa",
    Pais: "Inglaterra",
    Afiliacion: "Overwatch",
    Edad: 28,
    Voz: "..\\lineasDeVoz_heroes\\Tracer_MuyLento.mp3",
    Skin: "..\\skins\\Tracer.jpg",
    Habilidad: "..\\Habilidades\\Tracer.png",
  },
  {
    id: 35,
    Imagen: "..\\img_heroes\\Venture.png",
    Nombre: "Venture",
    Genero: "No<br>Binario",
    Especie: "Humano",
    Rol: "DPS",
    Disparo_Principal: "Proyectil",
    Continente: "America",
    Pais: "Canada",
    Afiliacion: "Sociedad<br>Wayfinder",
    Edad: 26,
    Voz: "..\\lineasDeVoz_heroes\\Venture_AbranCancha.mp3",
    Skin: "..\\skins\\Venture.jpg",
    Habilidad: "..\\Habilidades\\Venture.png",
  },
  {
    id: 36,
    Imagen: "..\\img_heroes\\Widowmaker.png",
    Nombre: "Widowmaker",
    Genero: "Femenino",
    Especie: "Humano",
    Rol: "DPS",
    Disparo_Principal: "Hitscan",
    Continente: "Europa",
    Pais: "Francia",
    Afiliacion: "Talon",
    Edad: 35,
    Voz: "..\\lineasDeVoz_heroes\\Widowmaker_OuhLaLa.mp3",
    Skin: "..\\skins\\Widowmaker.jpg",
    Habilidad: "..\\Habilidades\\Widowmaker.png",
  },
  {
    id: 37,
    Imagen: "..\\img_heroes\\Winston.png",
    Nombre: "Winston",
    Genero: "Masculino",
    Especie: "Animal",
    Rol: "Tanque",
    Disparo_Principal: "Rayo",
    Continente: "La luna",
    Pais: "Horizon:<br>Colonia<br>Lunar",
    Afiliacion: "Overwatch",
    Edad: 31,
    Voz: "..\\lineasDeVoz_heroes\\Winstone_NoNoQuieroUnaBanana.mp3",
    Skin: "..\\skins\\Winstone.jpg",
    Habilidad: "..\\Habilidades\\Winstone.png",
  },
  {
    id: 38,
    Imagen: "..\\img_heroes\\WreckingBall.png",
    Nombre: "WreckingBall",
    Genero: "Masculino",
    Especie: "Animal",
    Rol: "Tanque",
    Disparo_Principal: "Hitscan",
    Continente: "La luna",
    Pais: "Horizon:<br>Colonia<br>Lunar",
    Afiliacion: "Chatarreros",
    Edad: 16,
    Voz: "..\\lineasDeVoz_heroes\\WreckingBall_DiceLoSiento.mp3",
    Skin: "..\\skins\\WreckingBall.jpg",
    Habilidad: "..\\Habilidades\\WreckingBall.png",
  },
  {
    id: 39,
    Imagen: "..\\img_heroes\\Zarya.png",
    Nombre: "Zarya",
    Genero: "Femenino",
    Especie: "Humano",
    Rol: "Tanque",
    Disparo_Principal: "Rayo",
    Continente: "Asia",
    Pais: "Rusia",
    Afiliacion: "Overwatch",
    Edad: 30,
    Voz: "..\\lineasDeVoz_heroes\\Zarya_SoyLaMadreRusia.mp3",
    Skin: "..\\skins\\Zarya.jpg",
    Habilidad: "..\\Habilidades\\Zarya.png",
  },
  {
    id: 40,
    Imagen: "..\\img_heroes\\Zenyatta.png",
    Nombre: "Zenyatta",
    Genero: "Otro",
    Especie: "Omnico",
    Rol: "Apoyo",
    Disparo_Principal: "Proyectil",
    Continente: "Asia",
    Pais: "Nepal",
    Afiliacion: "Monjes<br>Shambali",
    Edad: 33,
    Voz: "..\\lineasDeVoz_heroes\\Zenyatta_SoñeQueEraUnaMariposa.mp3",
    Skin: "..\\skins\\Zenyatta.jpg",
    Habilidad: "..\\Habilidades\\Zenyatta.png",
  }
];

// Heroes sin adivinar --------------------------------------------------------------------------------------=>
let heroes_sin_adivinar = datosAlmacenados.slice(); // Crear una copia independiente
let heroes_para_input = datosAlmacenados.slice(); // Crear una copia independiente

var heroe_adivinado = false;
var numero_de_intentos = 0;
var crearTablaBtn = document.getElementById("crearTablaBtn");
let heroes_sin_adivinar_en_el_cache;

//Dejando los datos en el cache
if (localStorage.length === 0) {
  localStorage.setItem(
    "heroes_sin_adivinar_cache",
    JSON.stringify(heroes_sin_adivinar)
  );
  heroes_sin_adivinar_en_el_cache = JSON.parse(
    localStorage.getItem("heroes_sin_adivinar_cache")
  );
} else {
  heroes_sin_adivinar_en_el_cache = JSON.parse(
    localStorage.getItem("heroes_sin_adivinar_cache")
  );
}

// Función para eliminar un número específico del array
function eliminar_heroe(heroe_objeto) {
  const datosFiltrados = heroes_sin_adivinar_en_el_cache.filter(
    (elemento) => elemento.id !== heroe_objeto.id
  );
  heroes_sin_adivinar_en_el_cache = datosFiltrados;
  localStorage.setItem(
    "heroes_sin_adivinar_cache",
    JSON.stringify(heroes_sin_adivinar_en_el_cache)
  );
  if (heroes_sin_adivinar_en_el_cache.length === 0) {
    localStorage.setItem(
      "heroes_sin_adivinar_cache",
      JSON.stringify(heroes_sin_adivinar)
    );
  }
}

let indiceAleatorio = Math.floor(
  Math.random() * heroes_sin_adivinar_en_el_cache.length
);
let heroe_a_adivinar = heroes_sin_adivinar_en_el_cache[indiceAleatorio];
let imagen_heroe_adivinado = heroe_a_adivinar.Imagen;
let nombre_heroe_adivinado = heroe_a_adivinar.Nombre;
document.getElementById("ImagenHeroeAdivinado").src = imagen_heroe_adivinado;
document.getElementById("NombreHeroeAdivinado").innerText =
  nombre_heroe_adivinado;

//Input. Concexion con datos----------------------------------------------------------------------------------=>
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

  // Función para crear la tabla y agregar información del héroe seleccionado
  function crearTabla() {
    const imagenBotonMic = document.getElementById("id-boton-microfono");
    const textoBotonoMic = document.getElementById("id-texto-boton-microfono");

    const imagenBotonMando = document.getElementById("id-boton-mando");
    const textoBotonoMando = document.getElementById("id-texto-boton-mando");

    const imagenBotonUsuario = document.getElementById("id-boton-usuario");
    const textoBotonoUsuario = document.getElementById(
      "id-texto-boton-usuario"
    );

    // Obtener el nombre del héroe ingresado en el input
    var nombreHeroe = document
      .getElementById("inputBusqueda")
      .value.trim()
      .toLowerCase();

    // Verificar si el nombre del héroe ingresado existe en los datos
    var heroeEncontrado = heroes_para_input.find(
      (hero) => hero.Nombre.toLowerCase() === nombreHeroe
    );

    // Crear la estructura de la tabla con estilos CSS
    var tablaHTML = `
            <div class="contenedor-tabla-heroes animate__animated animate__fadeIn">
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
      tablaHTML = tablaHTML.replace(
        '<div style="background-color: #08bf2d;">' + heroeEncontrado.Genero,
        '<div style="background-color: #d71611;">' + heroeEncontrado.Genero
      );
    }

    if (heroe_a_adivinar.Especie !== heroeEncontrado.Especie) {
      tablaHTML = tablaHTML.replace(
        '<div style="background-color: #08bf2d;">' + heroeEncontrado.Especie,
        '<div style="background-color: #d71611;">' + heroeEncontrado.Especie
      );
    }

    if (heroe_a_adivinar.Rol !== heroeEncontrado.Rol) {
      tablaHTML = tablaHTML.replace(
        '<div style="background-color: #08bf2d;">' + heroeEncontrado.Rol,
        '<div style="background-color: #d71611;">' + heroeEncontrado.Rol
      );
    }

    if (
      heroe_a_adivinar.Disparo_Principal !== heroeEncontrado.Disparo_Principal
    ) {
      tablaHTML = tablaHTML.replace(
        '<div style="background-color: #08bf2d;">' +
          heroeEncontrado.Disparo_Principal,
        '<div style="background-color: #d71611;">' +
          heroeEncontrado.Disparo_Principal
      );
    }

    if (heroe_a_adivinar.Continente !== heroeEncontrado.Continente) {
      tablaHTML = tablaHTML.replace(
        '<div style="background-color: #08bf2d;">' + heroeEncontrado.Continente,
        '<div style="background-color: #d71611;">' + heroeEncontrado.Continente
      );
    }

    if (heroe_a_adivinar.Pais !== heroeEncontrado.Pais) {
      tablaHTML = tablaHTML.replace(
        '<div style="background-color: #08bf2d;">' + heroeEncontrado.Pais,
        '<div style="background-color: #d71611;">' + heroeEncontrado.Pais
      );
    }

    if (heroe_a_adivinar.Afiliacion !== heroeEncontrado.Afiliacion) {
      tablaHTML = tablaHTML.replace(
        '<div style="background-color: #08bf2d;">' + heroeEncontrado.Afiliacion,
        '<div style="background-color: #d71611;">' + heroeEncontrado.Afiliacion
      );
    }

    if (heroe_a_adivinar.Edad > heroeEncontrado.Edad) {
      tablaHTML = tablaHTML.replace(
        '<div style="background-color: #08bf2d;">' + heroeEncontrado.Edad,
        "<div style=\"background-color: #d71611; background-image: url('../iconos/flecha-hacia-arriba.png'); background-size: cover; background-position: center; text-align: center;\">" +
          heroeEncontrado.Edad
      );
    } else if (heroe_a_adivinar.Edad < heroeEncontrado.Edad) {
      tablaHTML = tablaHTML.replace(
        '<div style="background-color: #08bf2d;">' + heroeEncontrado.Edad,
        "<div style=\"background-color: #d71611; background-image: url('../iconos/flecha-hacia-abajo.png'); background-size: cover; background-position: center; text-align: center;\">" +
          heroeEncontrado.Edad
      );
    }

    //Intentos totales
    numero_de_intentos = numero_de_intentos + 1;
    document.getElementById("NumeroDeIntentosUsados").innerText =
      numero_de_intentos;

    //Funciones cuando se presiona el boton por primera vez
    const aparecer_texto_pista = document.getElementById("texto_pistas");
    const desaparecer_indicaciones = document.getElementById(
      "id-indicaciones-inferiores"
    );
    const aparecer_turnos_para_pistas = document.getElementById(
      "id-turnos-para-pistas"
    );
    const aparecer_contenedor_tabla_heroes_leyenda = document.getElementById(
      "contenedorTablaScroll"
    );
    if (numero_de_intentos == 1) {
      const aparecer_botones_de_pista = document.getElementById(
        "id-contenedor-de-botones"
      );
      aparecer_botones_de_pista.style.display = "flex";
      aparecer_botones_de_pista.scrollIntoView({ behavior: "smooth" });

      aparecer_texto_pista.style.display = "block";
      aparecer_texto_pista.scrollIntoView({ behavior: "smooth" });

      aparecer_turnos_para_pistas.style.display = "block";

      desaparecer_indicaciones.style.display = "none";

      aparecer_contenedor_tabla_heroes_leyenda.style.display = "block";
    }

    // Agregar la estructura de la tabla al contenedor en la parte superior sin borrar el contenido anterior
    contenedorTabla.insertAdjacentHTML("afterbegin", tablaHTML);

    // Obtener la tabla recién creada
    var tabla = contenedorTabla.firstElementChild.querySelector(
      ".tabla-heroes-seleccionados"
    );
    tabla.classList.add("mostrar");

    let inputBusqueda = document.getElementById("inputBusqueda");
    inputBusqueda.value = "";

    if (numero_de_intentos < 4) {
      document.getElementById("id-turnos-para-pistas-entero").innerText =
        3 - numero_de_intentos;
    } else {
      document.getElementById("id-turnos-para-pistas-entero").innerText = 0;
    }

    //Eliminar heroe del input
    let index = heroes_para_input.indexOf(heroeEncontrado);
    if (index > -1) {
      heroes_para_input.splice(index, 1);
    }

    if (numero_de_intentos == 3) {
      textoBotonoMic.style.color = "#f06414";
      imagenBotonMic.style.backgroundImage =
        "url('../iconos/microfono-circularNaranja.png')";
      imagenBotonMic.classList.add("animate__animated", "animate__heartBeat");
      imagenBotonMic.disabled = false;
      aparecer_texto_pista.style.color = "#f06414";
      aparecer_texto_pista.classList.add(
        "animate__animated",
        "animate__heartBeat"
      );
    } else if (numero_de_intentos == 4) {
      textoBotonoMando.style.color = "#f06414";
      imagenBotonMando.style.backgroundImage = "url('../iconos/mandoNaranja.png')";
      imagenBotonMando.classList.add("animate__animated", "animate__heartBeat");
      imagenBotonMando.disabled = false;
    } else if (numero_de_intentos == 5) {
      textoBotonoUsuario.style.color = "#f06414";
      imagenBotonUsuario.style.backgroundImage =
        "url('../iconos/usuarioNaranja.png')";
      imagenBotonUsuario.classList.add(
        "animate__animated",
        "animate__heartBeat"
      );
      imagenBotonUsuario.disabled = false;
    }

    //Funciones cuando se adivina el heroe aleatorio
    if (heroe_a_adivinar.id == heroeEncontrado.id) {
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

      //Desactivar boton de adivinar heroe
      crearTablaBtn.disabled = true;

      //Aparecer tabla con informacion al ganar-------------------------------------------->
      if (heroes_sin_adivinar_en_el_cache.length === 1) {
        const aparecer_tarjeta_ganadora = document.getElementById(
          "id-tarjeta-informacion-ganadora"
        );
        const aparecer_felicitacion = document.getElementById(
          "contenedor-final-ganador"
        );
        const boton_final_ganador = document
          .getElementById("boton-final-ganador")
          .querySelector("button");
        aparecer_felicitacion.innerHTML =
          "¡Felicidades! Haz adivinado todos los heroes, presiona el boton para reiniciar";
        boton_final_ganador.textContent = "Reiniciar";
        aparecer_tarjeta_ganadora.style.display = "block";
        aparecer_tarjeta_ganadora.scrollIntoView({
          behavior: "smooth",
          inline: "start",
        });
      } else {
        const aparecer_tarjeta_ganadora = document.getElementById(
          "id-tarjeta-informacion-ganadora"
        );
        aparecer_tarjeta_ganadora.style.display = "block";
        aparecer_tarjeta_ganadora.scrollIntoView({
          behavior: "smooth",
          inline: "start",
        });
      }
      eliminar_heroe(heroe_a_adivinar);
    }
  }

  // Agregar un evento de clic al botón para llamar a la función de crear tabla
  crearTablaBtn.addEventListener("click", crearTabla);
});

//Botones Pista Voz ------------------------------------------------------------------------------=>
document.addEventListener("DOMContentLoaded", function () {
  const botonLineaDeVoz = document.getElementById("id-boton-microfono");
  const textoBotonLineaDeVoz = document.getElementById(
    "id-texto-boton-microfono"
  );
  const contenedorLineaDeVoz = document.getElementById("contenedorLineaDeVoz");
  const contenedorHabilidad = document.getElementById("contenedorHabilidad");
  const contenedorSkin = document.getElementById("contenedorSkin");
  let cantidadClicks = 0;

  function lineaDeVoz() {
    let htmlLineaDeVoz = `
        <audio controls>
            <source src="${heroe_a_adivinar.Voz}" type="audio/mpeg">
            Tu navegador no soporta la reproducción de audio.
        </audio>
    `;

    if (cantidadClicks == 0) {
      contenedorLineaDeVoz.insertAdjacentHTML("afterbegin", htmlLineaDeVoz);
      cantidadClicks = 1;
      contenedorLineaDeVoz.style.display = "block";
      contenedorHabilidad.style.display = "none";
      contenedorSkin.style.display = "none";
    } else {
      contenedorLineaDeVoz.style.display = "block";
      contenedorHabilidad.style.display = "none";
      contenedorSkin.style.display = "none";
    }
  }
  botonLineaDeVoz.addEventListener("click", lineaDeVoz);
  textoBotonLineaDeVoz.addEventListener("click", lineaDeVoz);
});

//Botones Pista Habilidad ------------------------------------------------------------------------------=>
document.addEventListener("DOMContentLoaded", function () {
  const botonMando = document.getElementById("id-boton-mando");
  const textoBotonMando = document.getElementById("id-texto-boton-mando");
  const contenedorLineaDeVoz = document.getElementById("contenedorLineaDeVoz");
  const contenedorHabilidad = document.getElementById("contenedorHabilidad");
  const contenedorSkin = document.getElementById("contenedorSkin");
  let cantidadClicks = 0;

  function habilidad() {
    let htmlHabilidad = `
        <div>
            <img class="habilidad-pista" src="${heroe_a_adivinar.Habilidad}" alt="Ultimate">
        </div>
    `;

    if (cantidadClicks == 0) {
      contenedorHabilidad.insertAdjacentHTML("afterbegin", htmlHabilidad);
      cantidadClicks = 1;
      contenedorLineaDeVoz.style.display = "none";
      contenedorHabilidad.style.display = "block";
      contenedorSkin.style.display = "none";
    } else {
      contenedorLineaDeVoz.style.display = "none";
      contenedorHabilidad.style.display = "block";
      contenedorSkin.style.display = "none";
    }
  }
  botonMando.addEventListener("click", habilidad);
  textoBotonMando.addEventListener("click", habilidad);
});

//Botones Pista Skin ------------------------------------------------------------------------------=>
document.addEventListener("DOMContentLoaded", function () {
  const botonUsuario = document.getElementById("id-boton-usuario");
  const textoBotonUsuario = document.getElementById("id-texto-boton-usuario");
  const contenedorLineaDeVoz = document.getElementById("contenedorLineaDeVoz");
  const contenedorHabilidad = document.getElementById("contenedorHabilidad");
  const contenedorSkin = document.getElementById("contenedorSkin");
  let cantidadClicks = 0;

  function usuario() {
    let htmlUsuario = `
        <div>
            <img class="skin-pista" src="${heroe_a_adivinar.Skin}" alt="Skin">
        </div>
    `;

    if (cantidadClicks == 0) {
      contenedorSkin.insertAdjacentHTML("afterbegin", htmlUsuario);
      cantidadClicks = 1;
      contenedorLineaDeVoz.style.display = "none";
      contenedorHabilidad.style.display = "none";
      contenedorSkin.style.display = "block";
    } else {
      contenedorLineaDeVoz.style.display = "none";
      contenedorHabilidad.style.display = "none";
      contenedorSkin.style.display = "block";
    }
  }
  botonUsuario.addEventListener("click", usuario);
  textoBotonUsuario.addEventListener("click", usuario);
});

//Funcion para el boton "Siguiente heroe"
function reloadPage() {
  location.reload();
}

//Funciones para botones de navegacion
function irAInicio() {
  var urlInicio = "../index.html";
  window.location.href = urlInicio;
}

function irAHabilidad() {
  var urlInicio = "../Habilidad/index.html";
  window.location.href = urlInicio;
}

function irADailyMode() {
  var urlClasico = "../DailyMode/index.html";
  window.location.href = urlClasico;
}

//Funcion para el boton de "Ko-Fi"
function irAKoFi() {
  // URL que quieres abrir en la nueva pestaña
  var url = "https://ko-fi.com/eldany";

  // Abrir la URL en una nueva pestaña
  window.open(url, "_blank");
}
