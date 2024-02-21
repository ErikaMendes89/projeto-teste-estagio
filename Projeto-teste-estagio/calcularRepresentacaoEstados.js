//3 Calcular o percentual de representação de cada estado no faturamento

function calcularRepresentacaoEstados(faturamentoEstados){
    const valores = Object.values(faturamentoEstados);
    const total = valores.reduce((acc, curr)=> acc + curr, 0);
    const percentuais = {};
    for (let estado in faturamentoEstados){
        percentuais[estado]=(faturamentoEstados[estado]/total)*100;
    }
    return percentuais;
}


export default calcularRepresentacaoEstados;