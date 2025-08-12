let sumar = (...numeros) => {
  return numeros.reduce((acum, num) => acum + num, 0);
};


console.log(sumar(4, 5, 6));
console.log(sumar(10, 1, 3, 7));