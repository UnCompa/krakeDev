const validarEstructura = (placa) => {
  let errores = "";
  let hayError = false;
  let tamanioPlaca = placa.length;
  console.log(tamanioPlaca);

  if (tamanioPlaca < 7 || tamanioPlaca > 8) {
    errores = "Solo se permite 7 o 8 caracteres ";
    hayError = true;
  }
  let primerCaracter = placa.charAt(0);
  let segundoCaracter = placa.charAt(1);
  let tercerCaracter = placa.charAt(2);
  if (esMayuscula(primerCaracter) == false) {
    errores += "Primer digito es mayusculas, ";
    hayError = true;
  }
  if (esMayuscula(segundoCaracter) == false) {
    errores += "Segundo digito es mayusculas, ";
    hayError = true;
  }
  if (esMayuscula(tercerCaracter) == false) {
    errores += "Tercer digito es mayusculas, ";
    hayError = true;
  }
  let cuartoCaracter = placa.charAt(3);
  if (esGuion(cuartoCaracter) == false) {
    errores += "Cuarto digito es guion, ";
    hayError = true;
  }
  let quintoCaracter = placa.charAt(4);
  let sextoCaracter = placa.charAt(5);
  let septimoCaracter = placa.charAt(6);
  if (esDigito(quintoCaracter) == false) {
    errores += "Quinto digito es un numero, ";
    hayError = true;
  }
  if (esDigito(sextoCaracter) == false) {
    errores += "Sexto digito es un numero, ";
    hayError = true;
  }
  if (esDigito(septimoCaracter) == false) {
    errores += "Septimo digito es un numero, ";
    hayError = true;
  }
  if (tamanioPlaca == 8) {
    let octavoCaracter = placa.charAt(7);
    if (esDigito(octavoCaracter) == false) {
      errores += "Octavo digito es un numero.";
      hayError = true;
    }
  }
  console.log(hayError);

  if (hayError == true) {
    return errores;
  } else {
    hayError = null;
    errores = "";
    return hayError;
  }
};

const obtenerProvincia = (placa) => {
  const provincia = placa.charAt(0).toUpperCase();

  if (provincia == "A") {
    return "Azuay";
  } else if (provincia == "B") {
    return "Bolívar";
  } else if (provincia == "U") {
    return "Cañar";
  } else if (provincia == "C") {
    return "Carchi";
  } else if (provincia == "X") {
    return "Cotopaxi";
  } else if (provincia == "H") {
    return "Chimborazo";
  } else if (provincia == "O") {
    return "El Oro";
  } else if (provincia == "E") {
    return "Esmeraldas";
  } else if (provincia == "W") {
    return "Galápagos";
  } else if (provincia == "G") {
    return "Guayas";
  } else if (provincia == "I") {
    return "Imbabura";
  } else if (provincia == "L") {
    return "Loja";
  } else if (provincia == "R") {
    return "Los Ríos";
  } else if (provincia == "M") {
    return "Manabí";
  } else if (provincia == "V") {
    return "Morona Santiago";
  } else if (provincia == "N") {
    return "Napo";
  } else if (provincia == "S") {
    return "Pastaza";
  } else if (provincia == "P") {
    return "Pichincha";
  } else if (provincia == "K") {
    return "Sucumbíos";
  } else if (provincia == "Q") {
    return "Orellana";
  } else if (provincia == "T") {
    return "Tungurahua";
  } else if (provincia == "Z") {
    return "Zamora Chinchipe";
  } else if (provincia == "Y") {
    return "Santa Elena";
  } else {
    return null;
  }
};

const obtenerTipoVehiculo = (placa) => {
  const tipo = placa.charAt(1);

  if (tipo == "A" || tipo == "Z") {
    return "Vehículos comerciales";
  } else if (tipo == "E") {
    return "Gubernamentales";
  } else if (tipo == "X") {
    return "Vehiculos de uso oficial";
  } else if (tipo == "S") {
    return "Vehiculos del gobierno provincial";
  } else if (tipo == "M") {
    return "Vehiculos municipales";
  } else {
    return "Vehiculo particular";
  }
};

const obtenerDiaPicoYPlaca = (placa) => {
  const tamanioPlaca = placa.length - 1;
  const diaPicoYPlaca = placa.charAt(tamanioPlaca);
  console.log(diaPicoYPlaca);

  if (diaPicoYPlaca == 1 || diaPicoYPlaca == 2) {
    return "Lunes";
  } else if (diaPicoYPlaca == 3 || diaPicoYPlaca == 4) {
    return "Martes";
  } else if (diaPicoYPlaca == 5 || diaPicoYPlaca == 6) {
    return "Miercoles";
  } else if (diaPicoYPlaca == 7 || diaPicoYPlaca == 8) {
    return "Jueves";
  } else if (diaPicoYPlaca == 9 || diaPicoYPlaca == 0) {
    return "Viernes";
  } else {
    return "Libre circulacion";
  }
};
