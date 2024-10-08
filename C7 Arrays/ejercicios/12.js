function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  resp = [];
  
  for (let i = 0; i < array.length; i++){
    if (typeof array[i] == "string"){
      resp.push(array[i].toUpperCase());
    }
  };

  return resp;


}

module.exports = convertirStringAMayusculas;
