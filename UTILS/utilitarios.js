const recuperarTexto = (idComponente) => {
  let componente = document.getElementById(idComponente)
  let valor = componente.value
  return valor
}
const recuperarInt = (id) => {
  let valor = recuperarTexto(id)
  let valorEntero = parseInt(valor)
  return valorEntero
}
const recuperarFloat = (id) => {
  let valor = recuperarTexto(id)
  let valorEntero = parseFloat(valor)
  return valorEntero
}
const mostrarTexto = (idComponente,mensaje) => {
  let componente = document.getElementById(idComponente)
  componente.innerText = mensaje
}
const mostrarImagen = (idComponente,rutaImagen) => {
  let componente = document.getElementById(idComponente)
  componente.src = rutaImagen
}
const mostrarTextoEnCaja = (idComponente,mensaje) => {
  let componente = document.getElementById(idComponente)
  componente.value = mensaje
}
