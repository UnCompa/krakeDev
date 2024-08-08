const esMayuscula = (caracter) => {
  let codigo = caracter.charCodeAt(0);
  if (codigo >= 65 && codigo <= 90) {
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
const esGuion = (caracter) => {
  let digito = caracter.charCodeAt(0);
    if (digito == 45) {
    return true
  } else {
    return false
  }
};
