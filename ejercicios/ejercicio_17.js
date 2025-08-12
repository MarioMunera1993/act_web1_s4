let operacion = (a, b, callback) => callback(a, b);

console.log(operacion(5, 3, (x, y) => x + y));
console.log(operacion(5, 3, (x, y) => x - y));
console.log(operacion(5, 3, (x, y) => x * y));
console.log(operacion(5, 3, Math.max));