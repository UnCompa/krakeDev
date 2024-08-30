let personas = [
  { nombre: "Marcos", edad: 18 },
  { nombre: "Roberto", edad: 15 },
  { nombre: "Kate", edad: 25 },
  { nombre: "Diana", edad: 12 },
  { nombre: "Benja", edad: 5 },
];

const agregarPersona = () => {
  let nombre = recuperarTexto("txtNombre");
  let nombreErrorDiv = document.getElementById("lblErrorNombre");
  let edad = recuperarTexto("txtEdad");

  //TODO: Variables para verificar el error

  let edadErrorDiv = document.getElementById("lblErrorEdad");
  let errorNombre = null;
  let errorEdad = null;
  if (nombre.length < 4) {
    nombreErrorDiv.innerHTML = "El nombre debe ser mayor a 3 digitos";
    errorNombre = true;
  } else {
    nombreErrorDiv.innerHTML = "";
    errorNombre = false;
  }
  console.log(edad);
  console.log(edad.length);

  if (parseInt(edad) < 0 || parseInt(edad) > 100 || edad.length == 0) {
    edadErrorDiv.innerHTML = "Edad permitida de 1 al 100";
    errorEdad = true;
  } else {
    edadErrorDiv.innerHTML = "";
    errorEdad = false;
  }
  console.log(errorEdad);
  console.log(errorNombre);

  console.log(errorEdad == false && errorNombre == false);

  if (errorEdad == false && errorNombre == false) {
    let nuevaPersona = {};
    nuevaPersona.nombre = nombre;
    nuevaPersona.edad = edad;
    personas.push(nuevaPersona);
    generarTabla();
    alert("Persona agregada");
  } else {
    //TODO: Mostrar el error cuando se intenta agregar una persona
    if (errorEdad == true && errorNombre == true) {
      alert("Error al agregar la persona - Edad Incorrecta, Nombre Icnorrecto");
    } else if (errorEdad == true) {
      alert("Error al agregar la persona - Edad Incorrecta");
    } else if (errorNombre == true) {
      alert("Error al agregar la persona - Nombre incorrecto");
    }
  }
};

const generarTabla = () => {
  const tabla = document.getElementById("tablaPersonas");
  let contenidoTabla = `
  <tr>
    <th>Edad</th>
    <th>Nombre</th>
  </tr>
  `;

  for (let i = 0; i < personas.length; i++) {
    const persona = personas[i];
    contenidoTabla += `
    <tr>
    <td>${persona.edad}</td>
    <td>${persona.nombre}</td>
    </tr>
    `;
  }
  tabla.innerHTML = contenidoTabla;
};

const encontrarMayor = () => {
  let personaMayor = personas[0];
  let elementoPersona = personas;
  for (let i = 1; i < elementoPersona.length; i++) {
    const persona = personas[i];
    console.log(persona.nombre);
    console.log(persona.edad);
    if (persona.edad > personaMayor.edad) {
      personaMayor = persona;
    }
  }
  return personaMayor;
};
const determinarMayor = () => {
  let mayor = encontrarMayor();
  mostrarTexto("lblMayor", "La persona mayor es: " + mayor.nombre);
};
const encontrarMenor = () => {
  let personaMenor = personas[0];
  let elementoPersona = personas;
  for (let i = 1; i < elementoPersona.length; i++) {
    const persona = personas[i];
    console.log(persona.nombre);
    console.log(persona.edad);
    if (persona.edad < personaMenor.edad) {
      personaMenor = persona;
    }
  }
  return personaMenor;
};
const determinarMenor = () => {
  let mayor = encontrarMenor();
  mostrarTexto("lblMenor", "La persona mayor es: " + mayor.nombre);
};
