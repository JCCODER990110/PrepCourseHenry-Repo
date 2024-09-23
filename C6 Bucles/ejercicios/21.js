function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:


  if (numero == 2){ 
    return true;
  } else if (numero % 2 == 0){
    cont = numero;
    while (true){
      cont = cont / 2;
      if (cont == 2){
        return true;
      } else if (cont % 2 == 0 && Number.isInteger(cont / 2)){
        true;         
      } else {
        return false;
      }
    }
  } else {
    return false
  }

}

module.exports = esPotenciaDeDos;
