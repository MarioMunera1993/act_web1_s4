let invertirCadena = function(cadena) {
  if (cadena === '') {
    return '';
  }
  return invertirCadena(cadena.substring(1)) + cadena.charAt(0);
};

console.log(invertirCadena('Hola soy mario'));