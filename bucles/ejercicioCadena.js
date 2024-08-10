const ejecutarPrueba1 = () => {
  let mensaje = recuperarTexto("txtCadena");
  recorrerCadena(mensaje);
};
const ejecutarPrueba2 = () => {
  let mensaje = recuperarTexto("txtCadena");
  const res = invertirCadena(mensaje);
  console.log(res);

  mostrarTexto("lblResultado", res);
};
const invertirCadena = (cadena) => {
  let resultado = "";
  for (let caracter = cadena.length - 1; caracter > -1; caracter--) {
    resultado += cadena.charAt(caracter);
  }
  return resultado;
};
const recorrerCadena = (cadena) => {
  let caracter;
  for (let posicion = 0; posicion < cadena.length; posicion++) {
    caracter = cadena.charAt(posicion);
    console.log("Caracter: " + caracter + " Posicion: " + posicion);
  }
  for (let posicion = 0; posicion <= cadena.length - 1; posicion++) {
    caracter = cadena.charAt(posicion);
    console.log("Caracter: " + caracter + " Posicion: " + posicion);
  }
};
