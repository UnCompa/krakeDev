let puntaje = 0;
let lazamientos = 5;
jugar = function () {
  let resultado;
  resultado = lanzarDado();
  mostrarCara(resultado);
  modificarPuntos(resultado);
  modificarLanzamientos();
};
const modificarPuntos = (num) => {
  puntaje = puntaje + num;
  cambiarTexto("txtPuntaje", puntaje);
  if (puntaje > 20) {
    cambiarTexto("lblMensaje", "Has GANADO");
    limpiar()
  }
};
const modificarLanzamientos = () => {
  lazamientos = lazamientos - 1;
  cambiarTexto("txtLanzamientos", lazamientos);
  if (lazamientos === 0) {
    cambiarTexto("lblMensaje", "Has PERDIDO");
    limpiar()
  }
};
const limpiar = () => {
    puntaje = 0
    lazamientos = 5
    cambiarTexto("txtPuntaje", 0);
    cambiarTexto("txtLanzamientos", 5);
    cambiarImagen("imgDados", "")
};
const mostrarCara = (numDado) => {
  if (numDado === 1) {
    cambiarImagen("imgDados", "./dados1.png");
  } else if (numDado === 2) {
    cambiarImagen("imgDados", "./dados2.png");
  } else if (numDado === 3) {
    cambiarImagen("imgDados", "./dados3.png");
  } else if (numDado === 4) {
    cambiarImagen("imgDados", "./dados4.png");
  } else if (numDado === 5) {
    cambiarImagen("imgDados", "./dados5.png");
  } else {
    cambiarImagen("imgDados", "./dados6.png");
  }
};

lanzarDado = function () {
  let aleatorio;
  let aleatorioMultiplicado;
  let aleatorioEntero;
  let valorDado;
  aleatorio = Math.random();
  aleatorioMultiplicado = aleatorio * 6;
  aleatorioEntero = parseInt(aleatorioMultiplicado);
  valorDado = aleatorioEntero + 1;
  return valorDado;
};
