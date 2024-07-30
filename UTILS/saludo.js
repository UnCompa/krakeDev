const saludar = () => {
  let nombre = recuperarTexto("txtNombre")
  let apellido = recuperarTexto("txtApellido")
  let edad = recuperarInt("txtEdad")
  let estatura = recuperarFloat("txtEstatura")

  let mensajeBienenida = `Bienvenido ${nombre} ${apellido}`
  mostrarTexto("lblResultado", mensajeBienenida)
  mostrarImagen("imgSaludo", "./imgs/98855619a570b9cc42a3494f418cf22d.gif")
  mostrarTextoEnCaja("txtNombre", "")
}