let notas = [];

const agregarElementos = () => {
  notas.push(5);
  notas.push(10);
  console.log(notas.length);
};

const recorrerNotas = () => {
  let notaR;
  for (let i = 0; i < notas.length; i++) {
    notaR = notas[i];
    console.log(notaR);
  }
};
const ejecutarPromedio = () => {
  const promedio = calcularPromedio();
  mostrarTexto("lblPromedio", promedio);
};
const calcularPromedio = () => {
  let sumNotas = 0;
  let promedio = 0;
  for (let i = 0; i < notas.length; i++) {
    sumNotas += notas[i];
  }
  promedio = sumNotas / notas.length;
  return promedio;
};
const probarAgregar = () => {
  let notaRecuperada = recuperarInt("txtNota");
  agregarNota(notaRecuperada);
};
const agregarNota = (nota) => {
  notas.push(nota);
};
