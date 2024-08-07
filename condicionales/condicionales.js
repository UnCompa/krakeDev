const calcularTasaInteres = (ingresoAnual) => {
  if (ingresoAnual < 300000) {
    return 16;
  } else if (ingresoAnual >= 300000 && ingresoAnual < 500000) {
    return 15;
  } else if (ingresoAnual >= 500000 && ingresoAnual < 1000000) {
    return 14;
  } else if (ingresoAnual >= 1000000 && ingresoAnual < 2000000) {
    return 13;
  } else if (ingresoAnual >= 2000000) {
    return 12; //Antes era 15
  }
};
const calcularCapacidadPago = (edad, ingresos, egresos) => {
  if (edad > 50) {
    let capacidad = ingresos - egresos; //Antes era egresos - ingresos
    let cuota = (capacidad * 30) / 100;
    return cuota;
  } else if (edad > 0 && edad <= 50) {
    let capacidad = egresos - ingresos;
    let cuota = (capacidad * 40) / 100;
    return cuota;
  }
};
const calcularDescuento = (precio, cantidad) => {
  if (cantidad < 3) {
    return precio; //Antes devolvia 0
  } else if (cantidad >= 3 && cantidad <= 5) {
    let descuento = (precio * 2) / 100;
    let total = precio - descuento;
    return total;
  } else if (cantidad >= 6 && cantidad <= 11) {
    let descuento = (precio * 3) / 100;
    let total = precio - descuento;
    return total;
  } else if (cantidad >= 12) {
    let descuento = (precio * 4) / 100;
    let total = precio - descuento;
    return total;
  }
};
// Float
const determinarColesterolLDL = (nivelColesterol) => {
  if (nivelColesterol < 100) {
    return "Optimo";
  } else if (nivelColesterol >= 100 && nivelColesterol < 130) {
    return "Casi optimo";
  } else if (nivelColesterol >= 130 && nivelColesterol < 160) {
    return "Limite superior del rango normal";
  } else if (nivelColesterol >= 160 && nivelColesterol < 190) {
    return "Alto";
  } else if (nivelColesterol >= 190) {
    //Antes mala declaracion "nivelColestol"
    return "Muy alto";
  }
};
const validarClave = (clave) => {
  // Antes validadClave
  let tamanioClave = clave.length;
  if (tamanioClave >= 8 && tamanioClave <= 16) {
    return true;
  } else {
    return false;
  }
};
const esMayuscula = (caracter) => {
  let codigo = caracter.charCodeAt(0);
  if (codigo >= 65 && codigo <= 90) {
    return true;
  } else {
    return false;
  }
};
// 1. Minusculas sin tilde, 2. a i o u  con tilde, 3. la e con tilde
const esMinuscula = (caracter) => {
  let codigo = caracter.charCodeAt(0);
  if (
    // SE usaba && en todo
    (codigo >= 97 && codigo <= 122) ||
    (codigo >= 160 && codigo <= 163) ||
    codigo == 130
  ) {
    return true;
  } else {
    return false;
  }
};
const esDigito = (caracter) => {
  let digito = caracter.charCodeAt(0);
  if (digito >= 48 && digito <= 57) {
    return true;
  } else {
    return false;
  }
};
const darPermiso = (notaMatematica, notaFisica, notaGeometria) => {
  if (notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) {
    return true;
  } else {
    return false;
  }
};
const otorgarPermiso = (notaMatematica, notaFisica, notaGeometria) => {
  if ((notaMatematica > 90 || notaFisica > 90) && notaGeometria > 80) {
    return true;
  } else {
    return false;
  }
};
const dejarSalir = (notaMatematica, notaFisica, notaGeometria) => {
  if (
    (notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) &&
    notaFisica > notaMatematica
  ) {
    return true;
  } else {
    return false;
  }
};
