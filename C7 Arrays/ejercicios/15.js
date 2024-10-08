function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  /*

    var arr = [1, 2, 3];
    var max = arr.reduce(function (a, b) {
      return Math.max(a, b);
    }, -Infinity);

  */
  
  copia = array;  
  array.sort(function(a, b){return a - b});
  mayor = array[array.length - 1];

  for (let i = 0; i < copia.length; i++){
    if (copia[i] == mayor){return i};
  };

}

module.exports = encontrarIndiceMayor;
