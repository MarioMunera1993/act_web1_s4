let saludar = function(nombre) {
  if (nombre === undefined) {
    nombre = "Invitado";
  }
  console.log("Hola " + nombre);
};

saludar("Mario");
saludar();       