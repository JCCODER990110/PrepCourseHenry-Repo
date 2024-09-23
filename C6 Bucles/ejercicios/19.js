function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:

  i = 1;
  suma = 0;

  while (i <= n){
    suma = suma + i;
    i = i + 1
  }

  return suma;

}

module.exports = sumarHastaN;
