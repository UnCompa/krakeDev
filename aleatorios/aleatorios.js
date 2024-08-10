const numAleatorio = () => {
  const num = Math.random() * 100;
  return num.toFixed(0);
};
const generarAleatorio = () => {
  let aleatorios = [];
  let num = recuperarInt("txtNum");
  if (num >= 5 && num <= 20) {
    for (let i = 0; i < num; i++) {
      let aleatorio = numAleatorio();
      console.log(aleatorio);
      aleatorios.push(aleatorio);
    }
    mostrarResultados(aleatorios);
  }
};

const mostrarResultados = (arregloNumeros) => {
  let div = document.getElementById("divTabla");
  let header = `<th>
    <td>Aleatorios</td>
  </th>`;
  let rows = "";
  for (let i = 0; i < arregloNumeros.length; i++) {
    rows += `
    <tr><td>${arregloNumeros[i]}</td></tr>
  `;
  }
  let contenido = `<tr>
  ${rows}
  </tr>`;

  let tabla = `
  <table>
    ${header}
    ${contenido}
  </table>
  `;
  div.innerHTML = tabla;
};
