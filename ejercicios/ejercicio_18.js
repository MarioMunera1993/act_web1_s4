function validarCorreo(correo) {
  return correo.includes('@') && correo.endsWith('.com');
}


console.log(validarCorreo('mario@munera.com'));
console.log(validarCorreo('mario@munera.org'));
console.log(validarCorreo('mariomunera.com'));
console.log(validarCorreo('mario@muneracom'));