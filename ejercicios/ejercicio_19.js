let retrasarMensaje = function(mensaje, tiempo) {
  setTimeout(function() {
    console.log(mensaje);
  }, tiempo);
};

retrasarMensaje('Un saludito depues de 3segundos', 3000);