const probarAtributos = () => {
  let persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 24,
    estaVivo: true,
  };

  console.log(persona.nombre);
  console.log(persona.edad);
  if (persona.estaVivo == false) {
    console.log("No esta vivo");
  } else {
    console.log("Si esta vivo");
  }
};

const modificarAtributos = () => {
  let cuenta = {
    numero: "123214345",
    saldo: 0.0,
  };
  cuenta.saldo = 100;
  cuenta.saldo += 10;
  console.log(cuenta.saldo);
};

const crearProducto = () => {
  let producto1 = {
    nombre: "Laptop",
    precio: 129.99,
    stock: 10,
  };
  let producto2 = {
    nombre: "Teclado Gamer",
    precio: 89.99,
    stock: 5,
  };
  console.log(producto1.nombre);
  console.log(producto2.precio);
  if (producto1.stock == producto2.stock) {
    console.log("Ambos productos tiene el mismo stock");
  } else if (producto1.stock > producto2.stock) {
    console.log("El producto 1 tiene mas stock");
  } else {
    console.log("El producto 2 tiene mas stock");
  }
};

const crearCliente = () => {
  let cliente = {
    cedula: "1720097228",
    nombre: "Pepe",
  };
  let cliente2 = {};
  cliente2.nombre = "Juan";
  cliente2.cedula = "1704239";
};

const probarIncrementoSaldo = () => {
  let cuenta = {
    numero: "234234",
    saldo: 34.0,
  };
  incrementarSaldo(cuenta, 200);
  console.log(cuenta.saldo);
  
};
const probarDeterminarMayor = () => {
  let persona1 = {
    nombre: "Juan",
    edad: 42,
  };
  let persona2 = {
    nombre: "Luis",
    edad: 56,
  };
  mayor = determinarMayor(persona1, persona2);
  if (mayor != null) {
    console.log("El mayor es: " + mayor.nombre);
  }
};
const incrementarSaldo = (cuenta, monto) => {
  cuenta.saldo += monto;
};
const determinarMayor = (persona1, persona2) => {
  if (persona1.edad > persona2.edad) {
    return persona1;
  } else if (persona2.edad > persona1.edad) {
    return persona2;
  } else {
    return null;
  }
};
