let personas = [
  { nombre: "Marcos", edad: 18 },
  { nombre: "Roberto", edad: 15 },
  { nombre: "Kate", edad: 25 },
  { nombre: "Diana", edad: 12 },
  { nombre: "Benja", edad: 5 },
];

const agregarPersona = () => {
  let nombre = recuperarTexto("txtNombre");
  let nombreError = document.getElementById("lblErrorNombre");
  let edad = recuperarTexto("txtEdad");
  let edadError = document.getElementById("lblErrorEdad");
  let sinError = true;
  if (nombre.length < 4) {
    nombreError.innerHTML = "El nombre debe ser mayor a 3 digitos";
    sinError = false;
  } else {
    nombreError.innerHTML = "";
    sinError = true;
  }
  if (edad < 0 || edad > 100) {
    edadError.innerHTML = "Edad permitida de 1 al 100";
    sinError = false;
  } else {
    edadError.innerHTML = "";
    sinError = true;
  }

  if (sinError) {
    let nuevaPersona = {};
    nuevaPersona.nombre = nombre;
    nuevaPersona.edad = edad;
    personas.push(nuevaPersona);
    alert("Persona agregada");
  }
};
