calcularValorTotal = function () {
  //variables para recuperar los valores de las cajas de texto
  let nombreProducto;
  let precioProducto; // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
  let cantidad; // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
  let porcentajeDescuento;

  //variables para almacenar los retornos de las funciones
  let valorSubtotal;
  let valorDescuento;
  let valorIVA;
  let valorTotal;

  //1. Recuperar el nombre del producto como String
  nombreProducto = recuperarTexto("txtProducto");
  //2. Recuperar el precio como float
  precioProducto = recuperarFloat("txtPrecio");

  //3. Recuperar cantidad como int
  cantidad = recuperarInt("txtCantidad");

  if (
    esProductoValido(nombreProducto, "lblErrorProducto") &
    esPrecioValido(precioProducto, "lblErrorPrecio") &
    esCantidadValido(cantidad, "lblErrorCantidad")
  ) {
    //4. Recuperar el porcentaje de descuento como int
    // Tomar en cuenta el orden de como pasa los parametos de la funcion y colocar bien
    // los parametros cuando invoca la funcion.
    valorSubtotal = calcularSubtotal(precioProducto, cantidad);
    //5. Mostrar valorSubtotal en el componente lblSubtotal
    // Utilizar mostrarTexto
    /*
        Caso de prueba: 
            - cantidad: 10
            - precioProducto: 5.4  
            Subtotal esperado: 54
        Si el caso de prueba es exitoso, hacer un commit
     */
    mostrarTexto("lblSubtotal", valorSubtotal);
    //6. Invocar a calcularValorDescuento y lo que devuelve guardar en la variable valorDescuento
    valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);
    //7. Mostrar el resultado en el componente lblDescuento
    mostrarTexto("lblDescuento", valorDescuento);
    /*
    Caso de prueba: 
    - cantidad: 10 
    - precioProducto: 5.4  
    - descuento: 10
            - Descuento esperado: 5.4
        Si el caso de prueba es exitoso, hacer un commit
        */
    //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
    // El IVA debe calcularse sobre el valor del subtotal menos el descuento
    let subTotal = valorSubtotal - valorDescuento;
    valorIVA = calcularIva(subTotal);
    //9. Mostrar el resultado en el componente lblValorIVA
    mostrarTexto("lblValorIVA", valorIVA);
    /*
            Caso de prueba: 
                - cantidad: 10 
                - precioProducto: 5.4  
                - descuento: 10

                    - valorSubtotal: 54
                    - descuento:5.4
                    - valorSubtotal 
                    - descuento: 48.6

                IVA esperado: 5.832

            Si el caso de prueba es exitoso, hacer un commit
        */
    //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
    valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
    //11. Mostrar el resultado en el componente lblTotal
    mostrarTexto("lblTotal", valorTotal);

    /*
        Caso de prueba: 
            - cantidad: 10
            - precioProducto: 5.4 
            - descuento: 10

                --valorSubtotal: 5.4
                --descuento: 5.4
                --IVA: 5.832

                Total esperado: 54.432

                Si el caso de prueba es exitoso, hacer un commit
       */
  }
};
limpiar = function () {
  /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
  mostrarTextoEnCaja("txtProducto", "");
  mostrarTextoEnCaja("txtPrecio", 0);
  mostrarTextoEnCaja("txtCantidad", 0);
  mostrarTexto("lblSubtotal", "0.0");
  mostrarTexto("lblDescuento", "0.0");
  mostrarTexto("lblValorIVA", "0.0");
  mostrarTexto("lblTotal", "0.0");
};
/* SI TODO FUNCIONA, HACER UN PUSH */

calcularDescuentoPorVolumen = function (subtotal, cantidad) {
  if (cantidad < 3) {
    return subtotal;
  } else if (cantidad >= 3 && cantidad <= 5) {
    let total = (subtotal * 3) / 100;
    return total;
  } else if (cantidad >= 6 && cantidad <= 11) {
    let total = (subtotal * 4) / 100;
    return total;
  } else if (cantidad >= 12) {
    let total = (subtotal * 5) / 100;
    return total;
  }
};

esProductoValido = function (producto, lblError) {
  let hayErrores = false;
  let tamanioText = producto.length;

  if (tamanioText == 0) {
    mostrarTexto(lblError, "Campo requerido");
    hayErrores = true;
  }
  if (tamanioText >= 10) {
    mostrarTexto(lblError, "El nombre no puede tener mas de 10 caracteres");
    hayErrores = true;
  }
  return !hayErrores;
};
esCantidadValido = function (cantidad, lblError) {
  let hayErrores = false;
  if (isNaN(cantidad)) {
    mostrarTexto(lblError, "Campo numerico requerido");
    hayErrores = true;
  }
  if (cantidad < 0 || cantidad > 100) {
    mostrarTexto(lblError, "La cantidad debe ser entre 0 y 100");
    hayErrores = true;
  }
  return !hayErrores;
};
esPrecioValido = function (precio, lblError) {
  let hayErrores = false;
  if (isNaN(precio)) {
    mostrarTexto(lblError, "Campo numerico requerido");
    hayErrores = true;
  }
  if (precio < 0 || precio > 50) {
    mostrarTexto(lblError, "La cantidad debe ser entre 0 y 50");
    hayErrores = true;
  }
  return !hayErrores;
};
