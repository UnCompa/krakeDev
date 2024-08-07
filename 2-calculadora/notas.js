calcularPromedio = function (nota1, nota2, nota3) {
  let promedio;
  promedio = (nota1 + nota2 + nota3) / 3;
  return promedio;
};

calcular1 = function () {
  let nota1;
  let nota2;
  let nota3;
  let resultado;
  let resultadoFormato;
  nota1 = recuperarFloat("txtNota1");
  if (isNaN(nota1)) {
    alert("Error");
  } else {
    nota2 = recuperarFloat("txtNota2");
    if (isNaN(nota2)) {
      alert("Error");
    } else {
      nota3 = recuperarFloat("txtNota3");
      if (isNaN(nota3)) {
        alert("Error");
      } else {
        resultado = calcularPromedio(nota1, nota2, nota3);
        resultadoFormato = resultado.toFixed(2);
        mostrarTexto("lblResultado", resultadoFormato);
      }
    }
  }
};

calcular2 = function () {
  let nota1;
  let nota2;
  let nota3;
  let resultado;
  let resultadoFormato;
  let existeError = false;
  nota1 = recuperarFloat("txtNota1");
  if (isNaN(nota1)) {
    alert("Error");
    existeError = true;
  }
  nota2 = recuperarFloat("txtNota2");
  if (isNaN(nota2)) {
    alert("Error");
    existeError = true;
  }
  nota3 = recuperarFloat("txtNota3");
  if (isNaN(nota3)) {
    alert("Error");
    existeError = true;
  }
  if (existeError === false) {
    resultado = calcularPromedio(nota1, nota2, nota3);
    resultadoFormato = resultado.toFixed(2);
    mostrarTexto("lblResultado", resultadoFormato);
  }
};
calcular = function () {
  let nota1;
  let nota2;
  let nota3;
  let resultado;
  let resultadoFormato;
  let existeError = false; // Ya no se usa
  nota1 = recuperarFloat("txtNota1");

  nota2 = recuperarFloat("txtNota2");
  esNotaValida(nota2, "lblError2");
  nota3 = recuperarFloat("txtNota3");
  esNotaValida(nota3, "lblError3");

  if (
    esNotaValida(nota1, "lblError1") &
    esNotaValida(nota2, "lblError2") &
    esNotaValida(nota3, "lblError3")
  )
    resultado = calcularPromedio(nota1, nota2, nota3);
  resultadoFormato = resultado.toFixed(2);
  mostrarTexto("lblResultado", resultadoFormato);
};

const esNotaValida = (nota, idComponenteError) => {
  let hayErrores = false;
  if (isNaN(nota)) {
    mostrarTexto(idComponenteError, "Debe ingresar un numero");
    hayErrores = true;
  }
  if (nota < 0 || nota > 10) {
    mostrarTexto(idComponenteError, "El numero debe estar entre 0 y 10");
    hayErrores = true;
  }
  if (hayErrores == false) {
    mostrarTexto(idComponenteError, "");
  }
  return !hayErrores;
};
