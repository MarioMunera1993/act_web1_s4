function filtrarMayoresADiez(arr) {
  return arr.filter(function(numero) {
    return numero > 10;
  });
}

let datos = [3, 11, 8, 25, 10, 13];
let resultado = filtrarMayoresADiez(datos);
console.log(resultado);