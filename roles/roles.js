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
let esNuevo = false
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

const ejecutarNuevo= () => {
  habilitarComponente("txtCedula");
  habilitarComponente("txtNombre");
  habilitarComponente("txtApellido");
  habilitarComponente("txtSueldo");
  habilitarComponente("btnGuardar");
  esNuevo = true
}

const mostrarOpcionEmpleado = () => {
  mostrarEmpleados();
  deshabilitarComponente("txtCedula");
  deshabilitarComponente("txtNombre");
  deshabilitarComponente("txtApellido");
  deshabilitarComponente("txtSueldo");
  deshabilitarComponente("btnGuardar");
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
