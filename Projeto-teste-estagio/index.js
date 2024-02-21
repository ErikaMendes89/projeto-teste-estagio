import dadosFaturamento   from './dados.js';
import FibonacciSequencia from './FibonacciSequencia.js';
import calcularfaturamento from './calcularfaturamento.js';
import calcularRepresentacaoEstados from './calcularRepresentacaoEstados.js';
import inverterString from './inverterString.js';



console.log("5 pertence a sequencia de Fibonacci?", FibonacciSequencia(5));
console.log("8 pertence a sequencia de Fibonacci?", FibonacciSequencia(8));

console.log(calcularfaturamento(dadosFaturamento));

const faturamentoEstados = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

console.log(calcularRepresentacaoEstados(faturamentoEstados));
console.log(inverterString("Erika Mendes"));

