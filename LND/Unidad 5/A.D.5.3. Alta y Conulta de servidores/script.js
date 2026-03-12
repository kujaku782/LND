// Se crea un array llamado servidores que contiene datos de tres servidores 
// diferentes para ir inicializando el array con datos de ejemplo

let servidores = [
        { 
            nombreHost: "SRV-WEB-01", 
            direccionIP: "192.168.1.10", 
            sistemaOperativo: "Ubuntu Server" 
        },

        { 
            nombreHost: "SRV-DB-01", 
            direccionIP: "192.168.1.11", 
            sistemaOperativo: "CentOS" 
        },

        { 
            nombreHost: "SRV-APP-01", 
            direccionIP: "192.168.1.12", 
            sistemaOperativo: "Windows Server" 
        }
]; 

//se le pide al usuario que introduzca los datos de un nuevo servidor a trav de alertas en el navegadort 
// y se gurdan en sus variables correspondientes

let nuevoNombreHost = prompt("Introduce el nombre del nuevo servidor:");
let nuevaDireccionIP = prompt("Introduce la dirección IP del nuevo servidor:");
let nuevoSistemaOperativo = prompt("Introduce el sistema operativo del nuevo servidor:");

//se usa el método push para añadir los datos que introdujo el usuario en las variables 
// y añadirlas al array de servidores con sus respectivos datos

servidores.push({ 
    nombreHost: nuevoNombreHost,
    direccionIP: nuevaDireccionIP,
    sistemaOperativo: nuevoSistemaOperativo
});

//se muestra en forma de una alerta los datos del segundo servidor del array de servidores al usuario 

alert(
    "Datos del segundo servidor" + 
    "\n" + "       Nombre: " + servidores[1].nombreHost +
    "\n" + "       Dirección IP: " + servidores[1].direccionIP +
    "\n" + "       Sistema Operativo: " + servidores[1].sistemaOperativo
);
