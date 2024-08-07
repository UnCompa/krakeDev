const calcularValorDescuento = (monto, porcentajeDescuento) => {
  const descuento = (monto * porcentajeDescuento) / 100
  return descuento
}
const calcularIva = (monto) => {
  const iva = calcularValorDescuento(monto, 12) //IVA actual
  return iva
}
const calcularSubtotal = (precio, cantidad) => {
  const subtotal = precio * cantidad
  return subtotal
}
const calcularTotal = (subtotal, descuento, iva) => {
  const total = (subtotal - descuento) + iva
  return total
}

