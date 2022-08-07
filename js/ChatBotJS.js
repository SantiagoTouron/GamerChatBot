import { MY_API_KEY } from './config.js';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'e1b110e909mshca2a9a40e46a2e9p1c2ef5jsn52d898687e68',
// 		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
// 	}
// };
var respuestaJuego = document.getElementById("chatbox") 
function buscarJuego(nombreJuego) {
  fetch('https://api.rawg.io/api/games?key=8201ac67a8a94177be2cb949512a113b&search=' + nombreJuego)
  .then(response => response.json())
  .then(response => {
    console.log(response)
    return response
  })
  
  .catch(err => console.error(err));
}


// Variables
var mensajes = [], 
  ultimoMensaje = "", 
  mensajeBot = "", 
  nombreBot = 'Bot'; 

// Respuestas Predeterminadas
function respuestaBot() {
  const defaultResp = ["No entiendo lo que dices :(", "¿Puedes repetir?", "Prueba con otro mensaje!", "Intenta preguntar algo mas!"]; 
  mensajeBot = defaultResp[Math.floor(Math.random()*(defaultResp.length))];;

  // if (ultimoMensaje === 'Hola' || ultimoMensaje =='Buenas') {
  //   const hola = ['hola','que tal','buenas']
  //   mensajeBot = hola[Math.floor(Math.random()*(hola.length))];;
  // }

// Respuetas Personalizadas
var n = 0
      n = ultimoMensaje.search(/\b(hola|buenas|que tal)\b/i); 
  if (n !== -1) {
    const hola = ["¡Buenas! ¿En que puedo ayudarte?", "¡Bienvenido! ¿En que puedo ayudarte?", "Hola! ¿En que puedo ayudarte?"];
    mensajeBot = hola[Math.floor(Math.random()*(hola.length))];;
}

var n = 0
      n = ultimoMensaje.search(/\b(q(ue)? haces|quien eres|funcion)\b/i); 
  if (n !== -1) {
    const preg = ["¡Soy un Bot Gamer!", "¡Se todo sobre juegos!"];
    mensajeBot = preg[Math.floor(Math.random()*(preg.length))];;
}

  if (ultimoMensaje === 'Cual es tu nombre?') {
    mensajeBot = 'Mi Nombre es ' + nombreBot + " y soy un Bot Gamer!";
  }

// Expresiones
expReg(/\b(juego(s)?|jugar?)\b/i, "¿En que juego estas interesado?");
buscarJuego(ultimoMensaje)


n = ultimoMensaje.search(/(?=.*\b(juego(s)?|jugar?|en|sobre|acerca)\b).*\b(fall guys|fallguys|fallguy|fall guy)\b/i);
  if (n !== -1) {
    mensajeBot = 'Informacion sobre:' + respuestaJuego;
  }

function expReg(input, output) {
  var result = input.exec(ultimoMensaje);
    if (result) {
      mensajeBot = output;
    }
  }
}


function newEntry() {
  if (document.getElementById("chatbox").value != "") {
    ultimoMensaje = document.getElementById("chatbox").value;
    document.getElementById("chatbox").value = "";
    mensajes.push(ultimoMensaje);
    respuestaBot();
    mensajes.push("<b>" + nombreBot + ":</b> " + mensajeBot);
    for (var i = 1; i < 8; i++) {
      if (mensajes[mensajes.length - i])
        document.getElementById("chatlog" + i).innerHTML = mensajes[mensajes.length - i];
    }
  }
}


document.onkeydown = keyPress;
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    newEntry();
  }
  if (key == 38) {
    console.log('hola')
      document.getElementById("chatbox").value = ultimoMensaje;
  }
}

function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}
