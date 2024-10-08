function multiplicarArgumentos(arguments) {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  
  if (arguments.length > 0){
    resultado = 1;
    for (let i = 0; i < arguments.length; i++){
      resultado = resultado * arguments[i];
    }
    return resultado;
  } else {
    return 0;
  }
}

module.exports = multiplicarArgumentos;
