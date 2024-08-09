let puntosUsuario = 0;
let puntosComputador = 0;
const jugar = (seleccionado) => {
  const elemento = generarElemento();
  const ruta = generarRuta(elemento);
  const ganador = determinarGanador(seleccionado, elemento);
  mostrarImagen("imgCompu", ruta);
  if (ganador == 0) {
    mostrarTexto("lblGanador", "Empate");
  } else if (ganador == 1) {
    puntosUsuario += 1;
    mostrarTexto("lblGanador", "Ganaste la partida");
    mostrarTexto("lblPuntajeJugador", puntosUsuario);
  } else if (ganador == 2) {
    puntosComputador += 1;
    mostrarTexto("lblPuntajeComputadora", puntosComputador);
    mostrarTexto("lblGanador", "Perdiste la partida");
  }
  if (puntosUsuario == 5) {
    mostrarTexto("lblPartidaGanada", "Has ganado el juego");
  } else if (puntosComputador == 5) {
    mostrarTexto("lblPartidaGanada", "El computador te a vencido");
  }
};

const limpiar = () => {
  mostrarImagen("imgCompu", "");
  mostrarTexto("lblGanador", "");
  mostrarTexto("lblPuntajeJugador", "");
  mostrarTexto("lblPuntajeComputadora", "");
  mostrarTexto("lblPartidaGanada", "");
  puntosUsuario = 0;
  puntosComputador = 0;
};
