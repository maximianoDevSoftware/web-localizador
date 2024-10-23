import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { ContextEntregasClientes } from "@/contexts/entregasClientesContext";
ChartJS.register(ArcElement, Tooltip, Legend);
var definirDadosGrafico = function (mes, semana, dia) {
    var data = {
        labels: ["Mês", "Semana", "Dia"],
        datasets: [
            {
                label: "My First Dataset",
                data: [mes, semana, dia],
                backgroundColor: ["#001D4A", "rgb(144, 70, 207)", "rgb(12, 206, 107)"],
                hoverOffset: 4,
            },
        ],
    };
    return data;
};
var data = {
    labels: ["Mês", "Semana", "Dia"],
    datasets: [
        {
            label: "My First Dataset",
            data: [300, 50, 100],
            backgroundColor: ["#001D4A", "rgb(144, 70, 207)", "rgb(12, 206, 107)"],
            hoverOffset: 4,
        },
    ],
};
var options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
            labels: {
                color: "white", // Adiciona esta linha para muda  r a cor do texto dos labels para preto
            },
        },
        tooltip: {
            enabled: true,
        },
    },
};
var DoughnutChart = function () {
    var entregasRelatorio = useContext(ContextEntregasClientes).entregasRelatorio;
    var hoje = new Date();
    var diaHoje = [hoje.getDate(), hoje.getMonth() + 1, hoje.getFullYear()];
    var entregasDoMes = entregasRelatorio === null || entregasRelatorio === void 0 ? void 0 : entregasRelatorio.filter(function (entrega) {
        if ((entrega.dia[1] == diaHoje[1] || entrega.dia[1] == diaHoje[1] - 1) &&
            entrega.dia[0] != diaHoje[0]) {
            return entrega;
        }
    });
    var entregasDaSemana = entregasRelatorio === null || entregasRelatorio === void 0 ? void 0 : entregasRelatorio.filter(function (entrega) {
        if ((entrega.dia[0] == diaHoje[0] - 1 ||
            entrega.dia[0] == diaHoje[0] - 2 ||
            entrega.dia[0] == diaHoje[0] - 3 ||
            entrega.dia[0] == diaHoje[0] - 4 ||
            entrega.dia[0] == diaHoje[0] - 5 ||
            entrega.dia[0] == diaHoje[0] - 6 ||
            entrega.dia[0] == diaHoje[0] - 7) &&
            entrega.dia[1] === diaHoje[1]) {
            return entrega;
        }
    });
    var entregasDoDia = entregasRelatorio === null || entregasRelatorio === void 0 ? void 0 : entregasRelatorio.filter(function (entrega) {
        if (entrega.status === "Concluída") {
            if (entrega.dia[0] === diaHoje[0] && entrega.dia[1] === diaHoje[1]) {
                return entrega;
            }
        }
    });
    var valorTotalEntregas = function (entregas) {
        var valorTotalFaturado = 0;
        for (var i = 0; i < entregas.length; i++) {
            valorTotalFaturado += Number(entregas[i].valor.replace(",", "."));
        }
        console.log(valorTotalFaturado);
        return valorTotalFaturado;
    };
    var definirDadosGrafico = function (mes, semana, dia) {
        var data = {
            labels: ["Mês", "Semana", "Dia"],
            datasets: [
                {
                    label: "My First Dataset",
                    data: [mes, semana, dia],
                    backgroundColor: [
                        "#001D4A",
                        "rgb(144, 70, 207)",
                        "rgb(12, 206, 107)",
                    ],
                    hoverOffset: 4,
                },
            ],
        };
        return data;
    };
    var entregasDoMesTotal = entregasDoMes
        ? valorTotalEntregas(entregasDoMes)
        : 0;
    var entregasDaSemanaTotal = entregasDaSemana
        ? valorTotalEntregas(entregasDaSemana)
        : 0;
    var entregasDoDiaTotal = entregasDoDia
        ? valorTotalEntregas(entregasDoDia)
        : 0;
    return (<div className={"chart-container2"}>
      <Doughnut data={definirDadosGrafico(entregasDoMesTotal, entregasDaSemanaTotal, entregasDoDiaTotal)} options={options}/>
    </div>);
};
export default DoughnutChart;
