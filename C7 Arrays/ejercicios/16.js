function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

  resp = [];
  
  for (let i = 0; i < array.length; i++){
    resp.push(array[i] * i);
  };

  return resp;

}

module.exports = multiplicarElementosPorIndice;
