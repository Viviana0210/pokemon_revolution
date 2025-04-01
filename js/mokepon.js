let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
  document.getElementById("seleccionar-ataque").style.display = "none";

  document.getElementById("boton-mascota").addEventListener("click", seleccionarMascotaJugador);
  document.getElementById("boton-fuego").addEventListener("click", () => seleccionarAtaque("FUEGO"));
  document.getElementById("boton-agua").addEventListener("click", () => seleccionarAtaque("AGUA"));
  document.getElementById("boton-tierra").addEventListener("click", () => seleccionarAtaque("TIERRA"));
  document.getElementById("boton-reiniciar").addEventListener("click", reiniciarBatalla);
  document.getElementById("boton-volver").addEventListener("click", volverAlInicio);
}

function seleccionarMascotaJugador() {
  const mascota = document.querySelector("input[name='mascota']:checked");

  if (!mascota) {
    alert("Debes seleccionar una mascota.");
    return;
  }

  alert(`Has elegido a ${mascota.id}`); // Muestra la alerta con la mascota seleccionada

  document.getElementById("mascota-jugador").textContent = mascota.id;
  document.getElementById("seleccionar-mascota").style.display = "none";
  document.getElementById("seleccionar-ataque").style.display = "flex";
  
  seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
  const mascotas = ["hipodoge", "capipepo", "ratigueya", "dragonite", "fenix", "flamix", "aqua"];
  const mascotaAleatoria = mascotas[Math.floor(Math.random() * mascotas.length)];
  document.getElementById("mascota-enemigo").textContent = mascotaAleatoria;
}

function seleccionarAtaque(ataque) {
  ataqueJugador = ataque;
  const ataques = ["FUEGO", "AGUA", "TIERRA"];
  ataqueEnemigo = ataques[Math.floor(Math.random() * ataques.length)];
  combate();
}

function combate() {
  let resultado;
  if (ataqueJugador === ataqueEnemigo) {
    resultado = "EMPATE";
  } else if (
    (ataqueJugador === "FUEGO" && ataqueEnemigo === "TIERRA") ||
    (ataqueJugador === "AGUA" && ataqueEnemigo === "FUEGO") ||
    (ataqueJugador === "TIERRA" && ataqueEnemigo === "AGUA")
  ) {
    resultado = "GANASTE";
    vidasEnemigo--;
    document.getElementById("vidas-enemigo").textContent = vidasEnemigo;
  } else {
    resultado = "PERDISTE";
    vidasJugador--;
    document.getElementById("vidas-jugador").textContent = vidasJugador;
  }
  document.getElementById("resultado").textContent = resultado;
  revisarVidas();
}

function revisarVidas() {
  if (vidasEnemigo === 0) {
    document.getElementById("resultado").textContent = "¡FELICITACIONES, GANASTE!😃";
    deshabilitarAtaques();
  } else if (vidasJugador === 0) {
    document.getElementById("resultado").textContent = "LO SIENTO, PERDISTE SIGUE INTENTANDO";
    deshabilitarAtaques();
  }
}

function deshabilitarAtaques() {
  document.getElementById("boton-fuego").disabled = true;
  document.getElementById("boton-agua").disabled = true;
  document.getElementById("boton-tierra").disabled = true;
}

function reiniciarBatalla() {
  vidasJugador = 5;
  vidasEnemigo = 5;
  document.getElementById("vidas-jugador").textContent = vidasJugador;
  document.getElementById("vidas-enemigo").textContent = vidasEnemigo;
  document.getElementById("resultado").textContent = "¡Mucha suerte!";
  document.getElementById("boton-fuego").disabled = false;
  document.getElementById("boton-agua").disabled = false;
  document.getElementById("boton-tierra").disabled = false;
}

function volverAlInicio() {
  location.reload();
}

window.addEventListener("load", iniciarJuego);

function seleccionarMascotaJugador() {
  const mascota = document.querySelector("input[name='mascota']:checked");

  if (!mascota) {
      alert("Debes seleccionar una mascota.");
      return;
  }

  const nombreMascota = mascota.id;
  const imagenMascota = document.querySelector(`label[for="${nombreMascota}"] img`).src;

  document.getElementById("mascota-jugador").textContent = nombreMascota;
  document.getElementById("mensaje-mascota").textContent = "Has seleccionado: " + nombreMascota;
  document.getElementById("imagen-seleccionada").src = imagenMascota; // Cambia la imagen
  document.getElementById("seleccionar-mascota").style.display = "none";
  document.getElementById("seleccionar-ataque").style.display = "flex";

  seleccionarMascotaEnemigo();
}