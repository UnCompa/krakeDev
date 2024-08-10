let frutas = ["pera", "manzana", "banana"];

const probarBusqueda = () => {
  let fruta = recuperarTexto("txtFruta");
  let res = buscar(fruta);
  if (res == null) {
    alert("No exite la fruta");
  } else {
    alert(fruta + "Encontrada ");
  }
};

const buscar = (fruta) => {
  let elemento;
  let frutasEncontrada = null;
  for (let i = 0; i < frutas.length; i++) {
    elemento = frutas[i];
    if (fruta == elemento) {
      frutasEncontrada = elemento;
      break;
    }
  }
  return frutasEncontrada;
};
