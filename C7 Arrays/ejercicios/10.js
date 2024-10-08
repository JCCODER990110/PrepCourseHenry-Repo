function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  
  /*
  var masCinco = [];

  for (let i = 0; i < array.length; i++){
    if (typeof array[i] == "string"){
      n = array[i].split('');
      if (n.length > 5){
        masCinco.push(array[i]);
      }
    }
  };

  return masCinco[0];
  */
  
  return array.map( (palabra) => { 
    if (typeof palabra == "string" && palabra.length > 5){
      return palabra;
    }
  });

}

module.exports = obtenerPrimerStringLargo;
