let contactos = [
    { nombre: "Ana", telefono: "600123123", email: "ana@example.com" },
    { nombre: "Luis", telefono: "611456456", email: "luis@example.com" },
    { nombre: "María", telefono: "622789789", email: "maria@example.com" }
];


 let nombreNuevo = prompt("Introduce el nombre del nuevo contacto:");
 let telefonoNuevo = prompt("Introduce el teléfono del nuevo contacto:");
 let emailNuevo = prompt("Introduce el email del nuevo contacto:");


contactos.push({
     nombre: nombreNuevo,
     telefono: telefonoNuevo,
     email: emailNuevo
});


alert(
    "Datos del primer contacto: " + 
    "\n\tNombre: " + contactos[1].nombre +
    "\n\tTelefono: " + contactos[1].telefono +
    "\n\tEmail: " + contactos[1].email
);

alert(
    "Datos del ultimo contacto" + 
    "\n" + "       Nombre: " + contactos[contactos.length-1].nombre +
    "\n" + "       Teléfono: " + contactos[contactos.length-1].telefono +
    "\n" + "       Email: " + contactos[contactos.length-1].email
)



//Muestra en consola el array de contactos una vez se haya introducido el nuevo usuario.

console.log(contactos.length);
console.log(contactos[0]);
console.log(contactos[1]);
console.log(contactos[2]);