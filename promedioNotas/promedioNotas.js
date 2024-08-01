const calcularPromedioNotas = () => {
  const nota1 = recuperarFlotante("txtNota1");
  const nota2 = recuperarFlotante("txtNota2");
  const nota3 = recuperarFlotante("txtNota3");
  const promedio = calcularPromedio(nota1, nota2, nota3);
  cambiarTexto("lblResultado", promedio.toFixed(2));
};
