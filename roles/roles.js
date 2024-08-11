let empleados = [
  { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
  {
    cedula: "0914632123",
    nombre: "Luisa",
    apellido: "Gonzalez",
    sueldo: 900.0,
  },
  {
    cedula: "1729097238",
    nombre: "Brandon",
    apellido: "Paillacho",
    sueldo: 500.0,
  },
];
let esNuevo = false;
const mostrarEmpleados = () => {
  const div = document.getElementById("tablaEmpleados");
  let contenidoTabla = `<table>
    <tr>
      <th>CEDULA</th>
      <th>NOMBRE</th>
      <th>APELLIDO</th>
      <th>SUELDO</th>
    </tr>
    `;
  for (let i = 0; i < empleados.length; i++) {
    let elemento;
    elemento = empleados[i];
    contenidoTabla += `
      <tr>
      <td>${elemento.cedula}</td>
      <td>${elemento.nombre}</td>
      <td>${elemento.apellido}</td>
      <td>${elemento.sueldo}</td>
    </tr>`;
  }
  div.innerHTML = contenidoTabla;
};

const guardar = () => {
  let cedulaValor = recuperarTexto("txtCedula");
  let nombreValor = recuperarTexto("txtNombre");
  let apellidoValor = recuperarTexto("txtApellido");
  let sueldoValor = recuperarTexto("txtSueldo");
  //Para los errores
  let cedulaError = false;
  let nombreError = false;
  let apellidoError = false;
  let sueldoError = false;

  if (cedulaValor.length !== 10) {
    cedulaError = true;
    mostrarTexto("lblErrorCedula", "La cedula debe tener 10 dígitos");
  } else {
    for (let i = 0; i < cedulaValor.length; i++) {
      if (!esDigito(cedulaValor.charAt(i))) {
        cedulaError = true;
        mostrarTexto("lblErrorCedula", "La cedula debe contener solo dígitos");
        break;
      }
    }
  }
  if (nombreValor.length < 3) {
    nombreError = true;
    mostrarTexto(
      "lblErrorNombre",
      "El nombre debe tener al menos 3 caracteres"
    );
  } else {
    for (let i = 0; i < nombreValor.length; i++) {
      if (!esMayuscula(nombreValor.charAt(i))) {
        nombreError = true;
        mostrarTexto(
          "lblErrorNombre",
          "El nombre debe contener solo letras mayúsculas"
        );
        break;
      }
    }
  }
  if (apellidoValor.length < 3) {
    apellidoError = true;
    mostrarTexto(
      "lblErrorApellido",
      "El apellido debe tener al menos 3 caracteres"
    );
  } else {
    for (let i = 0; i < apellidoValor.length; i++) {
      if (!esMayuscula(apellidoValor.charAt(i))) {
        apellidoError = true;
        mostrarTexto(
          "lblErrorApellido",
          "El apellido debe contener solo letras mayúsculas"
        );
        break;
      }
    }
  }
  let sueldoFloat = parseFloat(sueldoValor);
  if (isNaN(sueldoFloat) || sueldoFloat < 400 || sueldoFloat > 5000) {
    sueldoError = true;
    mostrarTexto(
      "lblErrorSueldo",
      "El sueldo debe ser un numero entre 400 y 5000."
    );
  }

  if (!cedulaError && !nombreError && !apellidoError && !sueldoError) {
    if (esNuevo == true) {
      let empleado = {};
      empleado.cedula = cedulaValor;
      empleado.nombre = nombreValor;
      empleado.apellido = apellidoValor;
      empleado.sueldo = sueldoValor;
      const res = agregarEmpleado(empleado);
      if (res) {
        alert("EMPLEADO GUARDADO CORRECTAMENTE");
        mostrarEmpleados();
        deshabilitarCampos();
      } else {
        alert("YA EXISTE UN EMPLEADO CON LA CEDULA " + empleado.cedula);
        deshabilitarCampos();
      }
    }
  }
};

const agregarEmpleado = (empleado) => {
  const res = buscarEmpleado(empleado.cedula);
  if (res == null) {
    empleados.push(empleado);
    return true;
  } else {
    return false;
  }
};

const buscarEmpleado = (cedula) => {
  let empleado;
  let empleadoEncontrado = null;
  for (let i = 0; i < empleados.length; i++) {
    empleado = empleados[i];
    if (empleado.cedula == cedula) {
      empleadoEncontrado = empleado;
      break;
    }
  }
  return empleadoEncontrado;
};

const ejecutarNuevo = () => {
  habilitarComponente("txtCedula");
  habilitarComponente("txtNombre");
  habilitarComponente("txtApellido");
  habilitarComponente("txtSueldo");
  habilitarComponente("btnGuardar");
  esNuevo = true;
};

const deshabilitarCampos = () => {
  deshabilitarComponente("txtCedula");
  deshabilitarComponente("txtNombre");
  deshabilitarComponente("txtApellido");
  deshabilitarComponente("txtSueldo");
  deshabilitarComponente("btnGuardar");
};

const mostrarOpcionEmpleado = () => {
  mostrarEmpleados();
  deshabilitarCampos();
  mostrarComponente("divEmpleado");
  ocultarComponente("divRol");
  ocultarComponente("divResumen");
};
const mostrarOpcionRol = () => {
  mostrarComponente("divRol");
  ocultarComponente("divEmpleado");
  ocultarComponente("divResumen");
};
const mostrarOpcionResumen = () => {
  mostrarComponente("divResumen");
  ocultarComponente("divEmpleado");
  ocultarComponente("divRol");
};
