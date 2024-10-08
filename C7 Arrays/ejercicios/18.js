function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  var resp = 0;
  
  for (let i = 0; i < resultadosTest.length; i++){
    resp = resp + resultadosTest[i];
  };

  return resp/resultadosTest.length;

}

module.exports = promedioResultadosTest;
