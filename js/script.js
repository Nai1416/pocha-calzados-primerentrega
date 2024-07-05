let nombredeEmpresa = 'Pocha calzados';
let direcciondeEmpresa = 'Moreno 4055';
let productos = ['Zapatillas', 'Borcegos', 'Botas', 'Sandalias'];
console.log(nombredeEmpresa);
console.log(direcciondeEmpresa);

const horarioDeAtencion = '8 a 20';
console.log(horarioDeAtencion);

let nombreDeUsuario = prompt('Ingrese su nombre y apellido');
let producto = prompt('Ingrese el producto que le interesa');
let talle = prompt('Ingrese su número de calzado');
console.log('El cliente ' + nombreDeUsuario + ' está interesado por ' + producto + ', su talle es ' + talle);

function saludarUsuario(nombreDeUsuario) {
    return "¡Hola, " + nombreDeUsuario + "! Bienvenido a " + nombredeEmpresa + ".";
}

let mensajeSaludo = saludarUsuario(nombreDeUsuario);
console.log(mensajeSaludo);


let confirmacion = confirm('¿Desea recibir más información sobre nuestros productos?');
if (confirmacion) {
    alert('¡Nos alegra tu interes en nuestros productos!. Pronto recibiras nuestras ofertas.');
} else {
    alert('Gracias por tu visita. ¡Te esperamos nuevamente! Pocha Calzados');
}