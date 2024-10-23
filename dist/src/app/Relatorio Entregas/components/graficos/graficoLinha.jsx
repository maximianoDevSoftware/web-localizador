import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from "chart.js";
import { ContextEntregasClientes } from "@/contexts/entregasClientesContext";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
var valorTotalEntregas = function (entregas) {
    var valorTotalFaturado = 0;
    for (var i = 0; i < entregas.length; i++) {
        valorTotalFaturado += Number(entregas[i].valor.replace(",", "."));
    }
    console.log(valorTotalFaturado);
    return valorTotalFaturado;
};
var LineChart = function () {
    var entregasRelatorio = useContext(ContextEntregasClientes).entregasRelatorio;
    var hoje = new Date();
    var diaHoje = [hoje.getDate(), hoje.getMonth() + 1, hoje.getFullYear()];
    var options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
                labels: {
                    color: "white", // Cor do texto da legenda
                },
            },
            tooltip: {
                titleColor: "white", // Cor do texto do título do tooltip
                bodyColor: "white", // Cor do texto do corpo do tooltip
                footerColor: "white", // Cor do texto do rodapé do tooltip
            },
        },
        scales: {
            x: {
                ticks: {
                    color: "white", // Cor dos textos do eixo X
                },
            },
            y: {
                ticks: {
                    color: "white", // Cor dos textos do eixo Y
                },
            },
        },
    };
    var calcularValoresUltimos7Dias = function (entregasRelatorio) {
        var hoje = new Date();
        var diaHoje = [hoje.getDate(), hoje.getMonth() + 1, hoje.getFullYear()];
        var decrementarDia = function (data) {
            var dia = data[0], mes = data[1], ano = data[2];
            dia -= 1;
            if (dia === 0) {
                mes -= 1;
                if (mes === 0) {
                    mes = 12;
                    ano -= 1;
                }
                dia = new Date(ano, mes, 0).getDate(); // Último dia do mês anterior
            }
            return [dia, mes, ano];
        };
        var valoresUltimos7Dias = [];
        var dataAtual = diaHoje;
        for (var i = 0; i < 7; i++) {
            var entregasDoDia = entregasRelatorio.filter(function (entrega) {
                var _a = entrega.dia, dia = _a[0], mes = _a[1], ano = _a[2];
                return (dia === dataAtual[0] && mes === dataAtual[1] && ano === dataAtual[2]);
            });
            var valorTotal = valorTotalEntregas(entregasDoDia);
            valoresUltimos7Dias.unshift(valorTotal); // Adiciona no início do array
            dataAtual = decrementarDia(dataAtual);
        }
        return valoresUltimos7Dias;
    };
    var contarEntregasUltimos7Dias = function (entregasRelatorio) {
        var hoje = new Date();
        var diaHoje = [hoje.getDate(), hoje.getMonth() + 1, hoje.getFullYear()];
        var decrementarDia = function (data) {
            var dia = data[0], mes = data[1], ano = data[2];
            dia -= 1;
            if (dia === 0) {
                mes -= 1;
                if (mes === 0) {
                    mes = 12;
                    ano -= 1;
                }
                dia = new Date(ano, mes, 0).getDate(); // Último dia do mês anterior
            }
            return [dia, mes, ano];
        };
        var contagemUltimos7Dias = [];
        var dataAtual = diaHoje;
        for (var i = 0; i < 7; i++) {
            var entregasDoDia = entregasRelatorio.filter(function (entrega) {
                var _a = entrega.dia, dia = _a[0], mes = _a[1], ano = _a[2];
                return (dia === dataAtual[0] && mes === dataAtual[1] && ano === dataAtual[2]);
            });
            var contagem_1 = entregasDoDia.length;
            contagemUltimos7Dias.unshift(contagem_1); // Adiciona no início do array
            dataAtual = decrementarDia(dataAtual);
        }
        return contagemUltimos7Dias;
    };
    // Exemplo de uso
    var contagem = entregasRelatorio
        ? contarEntregasUltimos7Dias(entregasRelatorio)
        : 0;
    console.log(contagem);
    // Exemplo de uso
    var valores = entregasRelatorio
        ? calcularValoresUltimos7Dias(entregasRelatorio)
        : 0;
    console.log(valores);
    var data = {
        labels: [
            "Segunda",
            "Terça",
            "Quarta",
            "Quinta",
            "Sexta",
            "Sábado",
            "Domingo",
        ],
        datasets: [
            {
                label: "My First Dataset",
                data: valores,
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
            },
            {
                label: "My Second Dataset",
                data: contagem,
                fill: false,
                borderColor: "rgb(255, 99, 132)",
                tension: 0.1,
            },
        ],
    };
    return (<div className="chart-container">
      <Line data={data} options={options}/>
    </div>);
};
export default LineChart;
