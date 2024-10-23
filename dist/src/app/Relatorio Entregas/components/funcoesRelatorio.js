export function valorConjuntoEntrega(conjuntoEntregas) {
    var valorTotal = 0; // Inicializa valorTotal com 0
    conjuntoEntregas.forEach(function (entrega) {
        valorTotal += converterParaNumero(entrega.valor);
    });
    return valorTotal; // Retorna valorTotal
}
function converterParaNumero(valor) {
    try {
        // Tenta converter a string para float
        var numero = parseFloat(valor.replace(",", "."));
        // Verifica se a conversão foi bem-sucedida
        if (isNaN(numero)) {
            throw new Error("Não é um número");
        }
        // Retorna o número convertido
        return numero;
    }
    catch (error) {
        // Se não for possível converter, retorna 0
        return 0;
    }
}
