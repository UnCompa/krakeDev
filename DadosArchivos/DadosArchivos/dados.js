// Da un numero entre 1 y 6
//Sin parametros
const lanzarDados = () => {
  const numAleatorio = Math.random() * 6;
  const numEntero = parseInt(numAleatorio);
  const valorDado = numEntero + 1;
  return valorDado;
};
const jugar = () => {
  const aleatorio = lanzarDados()
  cambiarTexto("lblNumero",aleatorio)
  if (aleatorio > 3) {
    cambiarTexto("lblResultado", "Has ganado ⭐")
  }else {
    cambiarTexto("lblResultado", "No has ganado 😢")
  }
};
