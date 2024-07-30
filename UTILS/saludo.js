const recuperarTexto = (idComponente) => {
  let componente = document.getElementById(idComponente)
  let valor = componente.value
  return valor
}

const saludar = () => {
  let nombre = recuperarTexto("txtTexto")
  let apellido = recuperarTexto("txtTexto")
}