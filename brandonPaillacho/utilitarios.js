const mostrarImagen = (idComponente, rutaImagen) => {
  let componente;
  componente = document.getElementById(idComponente);
  componente.src = rutaImagen;
};
const mostrarTexto = (idComponente, mensaje) => {
  let componente;
  componente = document.getElementById(idComponente);
  componente.innerText = mensaje;
};
mostrarTextoEnCaja = function (idComponente, mensaje) {
  let componente;
  componente = document.getElementById(idComponente);
  componente.value = mensaje;
};

const recuperarTexto = (idComponente) => {
  let componente;
  let valorIngresado;
  componente = document.getElementById(idComponente);
  valorIngresado = componente.value;
  return valorIngresado;
};

recuperarInt = function (idComponente) {
  let valorCaja = recuperarTexto(idComponente);
  let valorEntero = parseInt(valorCaja);
  return valorEntero;
};

recuperarFloat = function (idComponente) {
  let valorCaja = recuperarTexto(idComponente);
  let valorFlotante = parseFloat(valorCaja);
  return valorFlotante;
};
