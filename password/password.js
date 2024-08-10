const ejecutarValidacion = () => {
  let password = document.getElementById("txtPassword");
  let passwordValue = password.value;
  const resultado = document.getElementById("lblRes");
  const validacion = validarPassword(passwordValue);
  console.log(validacion);

  if (validacion == "") {
    resultado.innerText = "Password correcto";
  } else {
    resultado.innerText = validacion;
  }
};

const validarPassword = (password) => {
  let errores = "";
  if (password.length < 8) {
    errores += "Longitud mínima de 8 caracteres. ";
  }
  if (password.length > 16) {
    errores += "Longitud máxima de 16 caracteres. ";
  }

  let tieneMayuscula = false;
  let tieneDigito = false;
  let tieneDigitoEspecial = false;
  for (let posicion = 0; posicion < password.length; posicion++) {
    let caracter = password.charAt(posicion);

    if (esMayuscula(caracter)) {
      tieneMayuscula = true;
    }
    if (esDigito(caracter)) {
      tieneDigito = true;
    }
    if (esDigitoEspecial(caracter)) {
      tieneDigitoEspecial = true;
    }
  }

  if (!tieneMayuscula) {
    errores += "Debe tener al menos una mayúscula. ";
  }
  if (!tieneDigito) {
    errores += "Debe tener al menos un dígito. ";
  }
  if (!tieneDigitoEspecial) {
    errores += "Debe tener al menos un dígito especial. ";
  }

  return errores;
};
