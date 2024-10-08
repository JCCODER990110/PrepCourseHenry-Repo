function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:

  /* 
  CASO ARRAY DE STRING:

  array.sort(); Ascendente
  array.reverse(); Descendentes

  CASO ARRAY DE NÚMERO:

  Orden Ascendente:
  return  array.sort(function(a, b){return a - b});

  Orden Descendente:
  numeros.sort(function(a, b){return b - a});
  */

  var letras = array.every( ( letra ) => { typeof letra == "string" } );

  if (letras = true){
    return array.sort();
  } else {
    return array.sort(function(a, b){return a - b});
  }

}

module.exports = ordenarArray;
