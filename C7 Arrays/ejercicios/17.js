function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  var resp = 0;
  
  for (let i = 0; i < arrayOfNums.length; i++){
    resp = resp + arrayOfNums[i];
  };

  return resp;

}

module.exports = agregarNumeros;
