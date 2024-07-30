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

const saludar = () => {
  let nombre = recuperarTexto("txtNombre")
  let apellido = recuperarTexto("txtApellido")
  let edad = recuperarInt("txtEdad")
  let estatura = recuperarFloat("txtEstatura")
}