function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:

  resp = [];
  
  for (let i = 0; i < array.length; i++){
    resp.push(array[i] * 2);
  };

  return resp;

}

module.exports = duplicarElementos;
