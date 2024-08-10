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
const esDigitoEspecial = (caracter) => {
  let char = caracter.charCodeAt(0);
  if (char == 45 || char == 42 || char == 95) {
    return true;
  } else {
    return false;
  }
};
