function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:

  i = 1;
  divisiones = 0;

  while (i <= numero){
    if (numero % i == 0 ){
      divisiones = divisiones + 1;
    }
    i = i + 1;
  }

  if (divisiones !== 2) return false;
  else return true;

}

module.exports = esNumeroPrimo;
