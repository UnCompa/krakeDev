const validarPlaca = () => {
  const placa = recuperarTexto("txtPlaca");
  const erroresEstructura = validarEstructura(placa);
  console.log(erroresEstructura);
  if (erroresEstructura == null) {
    console.log("hola");
    mostrarTexto("lblValido", "Valido");
    mostrarTexto("lblErrores", "");
    let provincia = obtenerProvincia(placa);
    if (provincia == null) {
      mostrarTexto("lblProvincia", "Provincia incorrecta");
    } else {
      mostrarTexto("lblProvincia", provincia);
    }
    let tipoVehiculo = obtenerTipoVehiculo(placa);
    if (tipoVehiculo == null) {
      mostrarTexto("lblVehiculo", "Vehiculo incorrecto");
    } else {
      mostrarTexto("lblVehiculo", tipoVehiculo);
    }
    const diaPicoYPlaca = obtenerDiaPicoYPlaca(placa)
    mostrarTexto("lblPlaca", diaPicoYPlaca)
  } else {
    mostrarTexto("lblValido", "Incorrecto");
    mostrarTexto("lblErrores", erroresEstructura);
  }
};

const limpiar = () => {
  mostrarTexto("lblValido", "");
  mostrarTexto("lblErrores", "");
  mostrarTexto("lblProvincia", "");
  mostrarTexto("lblVehiculo", "");
  mostrarTexto("lblPlaca", "")
  mostrarTextoEnCaja("txtPlaca", "")
}