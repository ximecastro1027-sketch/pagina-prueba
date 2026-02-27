function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

function validarTelefono(telefono) {
    const regex = /^[0-9]{10}$/;
    return regex.test(telefono);
}

function esMayorDeEdad(edad) {
    return edad >= 18;
}

function validarPassword(pass) {
    const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W]).{8,}$/;
    return regex.test(pass);
}

function soloLetras(texto) {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
    return regex.test(texto);
}

function soloNumeros(numero) {
    const regex = /^[0-9]+$/;
    return regex.test(numero);
}