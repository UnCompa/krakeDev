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

const mostrarOpcionEmpleado = () => {
  mostrarEmpleados();
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
