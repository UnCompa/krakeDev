//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
// PASO 0
const esMayuscula = (caracter) => {
  let codigo = caracter.charCodeAt(0);
  if (codigo >= 65 && codigo <= 90) {
    return true;
  } else {
    return false;
  }
};
