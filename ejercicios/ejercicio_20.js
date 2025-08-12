const calcularPromedio = arr => arr.reduce((sum, num) => sum + num, 0) / arr.length;

console.log(calcularPromedio([10, 20, 30, 40]));