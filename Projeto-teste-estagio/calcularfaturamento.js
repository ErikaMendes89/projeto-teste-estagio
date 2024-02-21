//2.Calcular informações sobre faturamento diário
function CalcularFaturamento (dadosFaturamento){
    const valores = dadosFaturamento.map(d => d.valor).filter(valor => valor > 0);
    const menorValor = Math.min(...valores);
    const maiorValor = Math.max(...valores);
    const mediaMensal = valores.reduce((acc, curr) => acc + curr, 0)
    const diasAcimaDaMedia = valores.filter (valor => valor > mediaMensal).length;
    return {menorValor, maiorValor, diasAcimaDaMedia};
}

export default  CalcularFaturamento;