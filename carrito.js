alert("Bienvenido a wilgray ");

const compra = [];

// const remera = {
//   nombre: "remera",
//   color: "blanco",
//   talle: 16,
//   precio: 100,
//   cantidad: 1,
// };
// const pantalon = {
//   nombre: "pantalon",
//   color: "negro",
//   talle: 42,
//   precio: 200,
//   cantidad: 1,
// };

// compra.push(remera);
// compra.push(pantalon);
function agregar() {
  const nombreProducto = prompt(
    "Los productos que tenemos son \nremeras \npantalones \ny zapatillas"
  );
  const colorProducto = prompt("El color que usted busque lo tenemos:");
  const talleProducto = prompt("Tenemos talles en todos los numeros:");
  const precioProducto = prompt("Introduzca el precio:");

  const nuevoProducto = {
    nombre: nombreProducto,
    color: colorProducto,
    talle: parseInt(talleProducto),
    precio: parseInt(precioProducto),
    cantidad: 1,
  };
  compra.push(nuevoProducto);

  alert("El producto " + nombreProducto + " fue agregado al carrito.");
}

function quitar() {
  const nombrePrompt = prompt("¿Qué producto querés quitar?");

  const productoEncontrado = compra.find(
    (producto) => producto.nombre == nombrePrompt
  );

  if (productoEncontrado) {
    const indiceProducto = compra.indexOf(productoEncontrado);
    compra.splice(indiceProducto, 1);
    alert(
      "El producto " + productoEncontrado.nombre + " fue borrado del carrito."
    );
  } else {
    alert("No se encontró el producto " + nombrePrompt + " en el carrito.");
  }
}
function listar() {
  console.clear();
  console.log("Productos que hay en el carrito:");

  compra.forEach((elemento) => {
    console.log("----------");
    console.log("Nombre:", elemento.nombre);
    console.log("Color:", elemento.color);
    console.log("Talle:", elemento.talle);
    console.log("Precio:", elemento.precio);
    console.log("Cantidad:", elemento.cantidad);
  });
}
