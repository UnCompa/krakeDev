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
