const obtenerAleatorio = () => {
  const random = Math.random() * 3 + 1;
  const randomInt = parseInt(random);
  return randomInt;
};
obtenerAleatorio();

const generarElemento = () => {
  const numRandom = obtenerAleatorio();
  if (numRandom == 1) {
    return "piedra";
  } else if (numRandom == 2) {
    return "papel";
  } else if (numRandom == 3) {
    return "tijera";
  }
};

const determinarGanador = (eleccionJugador1, eleccionJugador2) => {
  if (eleccionJugador1 == eleccionJugador2) {
    return 0;
    //Piedra
  } else if (
    (eleccionJugador1 == "piedra" && eleccionJugador2 == "tijera") ||
    (eleccionJugador1 == "tijera" && eleccionJugador2 == "papel") ||
    (eleccionJugador1 == "papel" && eleccionJugador2 == "piedra")
  ) {
    return 1;
  } else {
    return 2;
  }
};

const generarRuta = (nombre) => {
  let ruta;
  if (nombre == "piedra") {
    ruta = "./imgs/piedra.png";
  } else if (nombre == "papel") {
    ruta = "./imgs/papel.png";
  } else if (nombre == "tijera") {
    ruta = "./imgs/tijera.png";
  }
  return ruta;
};
