let clientes = [
  {
    cedula: "1231238",
    nombre: "Juan",
    edad: 20,
  },
  {
    cedula: "1231237",
    nombre: "Mario",
    edad: 50,
  },
  {
    cedula: "1231234",
    nombre: "Pepe",
    edad: 22,
  },
];

const guardarCliente = () => {
  let cedula = recuperarTexto("txtCedula");
  let nombre = recuperarTexto("txtNombre");
  let edad = recuperarTexto("txtEdad");
  let datosCliente = {};
  datosCliente.nombre = nombre;
  datosCliente.cedula = cedula;
  datosCliente.edad = edad;

  modificarCLiente(datosCliente);
  mostrarClientes();
};

const modificarCLiente = (cliente) => {
  let clienteEncontrado = buscarCliente(cliente.cedula);
  if (clienteEncontrado != null) {
    clienteEncontrado.nombre = cliente.nombre;
    clienteEncontrado.edad = cliente.edad;
  }
};
const ejecutarBusqueda = () => {
  let valorCedula = recuperarTexto("txtBuscarCedula");
  let respuesta = buscarCliente(valorCedula);
  if (respuesta == null) {
    alert("Cliente no encontrado");
  } else {
    mostrarTextoEnCaja("txtCedula", respuesta.cedula);
    mostrarTextoEnCaja("txtNombre", respuesta.nombre);
    mostrarTextoEnCaja("txtEdad", respuesta.edad);
  }
};
const crearCliente = () => {
  let cedula = recuperarTexto("txtCedula");
  let nombre = recuperarTexto("txtNombre");
  let edad = recuperarTexto("txtEdad");
  let nuevoCliente = {};
  nuevoCliente.nombre = nombre;
  nuevoCliente.cedula = cedula;
  nuevoCliente.edad = edad;

  agregarCliente(nuevoCliente);
};
const agregarCliente = (cliente) => {
  let resultado;
  resultado = buscarCliente(cliente.cedula);
  if (resultado == null) {
    clientes.push(cliente);
    alert("Cliente agregado");
    mostrarClientes();
  } else {
    alert("Ya existe el cliente con la cedula" + cliente.cedula);
  }
};
const buscarCliente = (cedula) => {
  let elementoCliente;
  let clienteEncontrado = null;
  for (let i = 0; i < clientes.length; i++) {
    elementoCliente = clientes[i];
    if (elementoCliente.cedula == cedula) {
      clienteEncontrado = elementoCliente;
      break;
    }
  }
  return clienteEncontrado;
};
const mostrarClientes = () => {
  let componenteTabla = document.getElementById("tablaClientes");
  let contenidoTabla = `<table><tr>
    <th>CEDULA</th>
    <th>NOMBRE</th>
    <th>EDAD</th>
  </tr>`;
  let elementoCliente;
  for (let i = 0; i < clientes.length; i++) {
    elementoCliente = clientes[i];
    contenidoTabla += `<tr><td>${elementoCliente.cedula}</td><td>${elementoCliente.nombre}</td><td>${elementoCliente.edad}</td></tr>`;
  }
  contenidoTabla += "</table>";
  componenteTabla.innerHTML = contenidoTabla;
};
