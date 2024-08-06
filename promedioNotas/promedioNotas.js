const calcularPromedioNotas = () => {
  const nota1 = recuperarFlotante("txtNota1");
  const nota2 = recuperarFlotante("txtNota2");
  const nota3 = recuperarFlotante("txtNota3");
  const promedio = calcularPromedio(nota1, nota2, nota3);
  if (promedio < 5 && promedio > 0) {
    cambiarTexto("lblMensaje", "- REPROBADO");
    cambiarTexto("lblResultado", promedio.toFixed(2));
    cambiarImagen("imgResultado", "./Fracaso.gif");
  } else if (promedio >= 5 && promedio <= 8) {
    cambiarTexto("lblMensaje", "- Buen trabajo");
    cambiarTexto("lblResultado", promedio.toFixed(2));
    cambiarImagen("imgResultado", "./Good.gif");
  } else if (promedio > 8 && promedio <= 10) {
    cambiarTexto("lblMensaje", "- EXCELENTE");
    cambiarTexto("lblResultado", promedio.toFixed(2));
    cambiarImagen("imgResultado", "./Exito.gif");
  } else {
    cambiarTexto("lblMensaje", "- DATOS INCORRECTOS");
    cambiarTexto("lblResultado", promedio.toFixed(2));
    cambiarImagen("imgResultado", "./SinDatos.gif");
  }
};
