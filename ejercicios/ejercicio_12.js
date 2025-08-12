function multiplicarArreglo(arr) {
  return arr.reduce(function(acumulador, numero) {
    return acumulador * numero;
  }, 1);
}

let entrada = prompt('Ingresa números separados por comas:');
let arr = entrada.split(',').map(function(n) {
  return parseFloat(n);
});
let resultado = multiplicarArreglo(arr);
console.log(resultado);