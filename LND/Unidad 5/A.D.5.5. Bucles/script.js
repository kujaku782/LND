let contactos = [
    {
        nombre: "Ana Martínez",
        telefono: "612345678",
        correo: "ana.martinez@example.com"
    },
    {
        nombre: "Carlos Pérez",
        telefono: "698765432",
        correo: "carlos.perez@example.com"
    },
    {
        nombre: "Lucía Gómez",
        telefono: "623987451",
        correo: "lucia.gomez@example.com"
    }
];

let bandera = 0;

while (bandera === 0) {


    let opcion = parseInt(prompt(
        "Elija una de la sigiente opciones con los numeros del (1-5)" +
        "\n" + "            1.- Mostrar el primer contacto" +
        "\n" + "            2.- Mostrar el último contacto" +
        "\n" + "            3.- Mostrar todos los contactos" +
        "\n" + "            4.- Añadir un nuevo contacto" +
        "\n" + "            5.- Salir del programa"
    ));

    switch (opcion) {
        case 1:

            if (contactos.length > 0) {
                alert(
                    "El primer contacto es:" +
                    "\n" + "            Nombre: " + contactos[0].nombre +
                    "\n" + "            Telefono: " + contactos[0].telefono +
                    "\n" + "            Correo: " + contactos[0].correo
                );

            } else {
                alert("Error: la lista de contactos está vacía.")
            }
            break;



        case 2:

            if (contactos.length > 0) {
                alert(
                    "El último contacto:" +
                    "\n" + "            Nombre: " + contactos[contactos.length - 1].nombre +
                    "\n" + "            Telefono: " + contactos[contactos.length - 1].telefono +
                    "\n" + "            Correo: " + contactos[contactos.length - 1].correo
                );

            } else {
                alert("Error: la lista de contactos está vacía.")

            }
            break;



        case 3:
            if (contactos.length > 0) {

                for (let i = 0; i < contactos.length; i++) {
                    alert(
                        "Mostrando todos los contactos:" +
                        "\n" + "Contacto numero " + i +
                        "\n" + "            Nombre: " + contactos[i].nombre +
                        "\n" + "            Telefono: " + contactos[i].telefono +
                        "\n" + "            Correo: " + contactos[i].correo
                    );
                }


            } else {
                alert("Error: la lista de contactos está vacía.")
            }
            break;


        case 4:
            let nombreNuevo = prompt("Escriba su nombre: ");
            let telefonoNuevo = prompt("Escriba su telefono: ");
            let correoNuevo = prompt("Escriba su correo: ");

            contactos.push({
                nombre: nombreNuevo,
                telefono: telefonoNuevo,
                correo: correoNuevo
            });

            alert(
                "El último contacto añadido es:" +
                "\n" + "            Nombre: " + contactos[contactos.length - 1].nombre +
                "\n" + "            Telefono: " + contactos[contactos.length - 1].telefono +
                "\n" + "            Correo: " + contactos[contactos.length - 1].correo
            );

            break;

        case 5:
            bandera = 1;
            alert("has salido del programa")

            break;

        default:
            alert("Error solo se adimten las opciones validas")
            break;
    }

}
