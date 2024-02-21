//1 Verificar se um numero pertence a sequencia de Fibonacci
function FibonacciSequencia(numero){
   let a = 0, b = 1;
   while (b <  numero){
    let temp = b;
    b = a + b;
    a = temp;
   }
  return b === numero;
}

export default FibonacciSequencia;