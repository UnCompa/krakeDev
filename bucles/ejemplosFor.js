const mostrarNumeros = () => {
  console.log("antes del for");

  for (let i = 0; i < 4; i++) {
    console.log(i);
  }

  console.log("despues del for");
};
const mostrarNumeros2 = () => {
  console.log("antes del for");

  for (let indice = 1; indice <= 5; indice++) {
    console.log(indice);
  }

  console.log("despues del for");
};
const mostrarPares = () => {
  console.log("antes del for");

  for (let x = 2; x <= 10; x += 2) {
    console.log(x);
  }

  console.log("despues del for");
};
const mostrarInverso = () => {
  console.log("antes del for");
  
  for (let i = 10; i > 0; i--) {
    console.log(i);
  }

  console.log("despues del for");
};
const hackearPelisNasa = () => {
  for (let porcentaje = 0; porcentaje <= 100; porcentaje++) {
    console.log("Hackeado la nasa " + porcentaje + "%");
  }
  
  console.log("La nasa a sido hackeada");
};

const mostrarImpares = () => {
  console.log("antes del for");

  for (let x = 1; x <= 21; x+=2) {
    console.log(x);
  }

  console.log("despues del for");
};