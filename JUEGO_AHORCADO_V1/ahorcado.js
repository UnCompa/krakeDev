//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta; //Paso 1
let intentos = 0; // Paso 5
let coincidencias = 0; // Paso 5
let errores = 0; // Paso 5
// PASO 0
const esMayuscula = (caracter) => {
  let codigo = caracter.charCodeAt(0);
  if (codigo >= 65 && codigo <= 90) {
    return true;
  } else {
    return false;
  }
};

//Paso 1
const guardarPalabra = () => {
  let sonMayusculas;
  const secreta = recuperarTexto("txtSecreta");
  for (let posicion = 0; posicion < secreta.length; posicion++) {
    if (esMayuscula(secreta.charAt(posicion))) {
      sonMayusculas = true;
    } else {
      sonMayusculas = false;
    }
  }
  if (secreta.length != 5 || !sonMayusculas) {
    alert("Las 5 palabras deben ser mayusculas");
  } else {
    palabraSecreta = secreta;
  }
};

//Paso 2
const mostrarLetra = (letra, posicion) => {
  const div = document.getElementById(`div${posicion}`);
  div.innerHTML = letra;
};

//Paso 3
const validar = (letra) => {
  let letrasEncontradas = 0;
  for (let char = 0; char < palabraSecreta.length; char++) {
    const letras = palabraSecreta.charAt(char);
    if (letras == letra) {
      mostrarLetra(letra, char);
      letrasEncontradas += 1;
    }
  }
  if(letrasEncontradas < 1) {
    alert("La letra no es parte de la palabra")
    errores += 1
  }
};
//Paso 4
const ingreseLetra = () => {
  const letra = recuperarTexto("txtLetra");
  if (esMayuscula(letra)) {
    validar(letra);
    if(coincidencias == 5) {
      alert("Ha ganado")
    }
    if(intentos == 10) {
      alert("Ha perdido")
    }
  } else {
    alert("SOLO SE ACEPTAN MAYUSCULAS");
  }
};
