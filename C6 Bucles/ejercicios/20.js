function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:

   i = 1;
   suma = 0;

   while (i <= n){

      if (suma > 100) break;
      else suma = suma + i;
      i = i + 1
   }

   return suma;


}

module.exports = sumarHastaNConBreak;
