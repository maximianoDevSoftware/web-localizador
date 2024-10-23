"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_chartjs_2_1 = require("react-chartjs-2");
var chart_js_1 = require("chart.js");
var entregasClientesContext_1 = require("@/contexts/entregasClientesContext");
chart_js_1.Chart.register(chart_js_1.ArcElement, chart_js_1.Tooltip, chart_js_1.Legend);
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
    var entregasRelatorio = (0, react_1.useContext)(entregasClientesContext_1.ContextEntregasClientes).entregasRelatorio;
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
      <react_chartjs_2_1.Doughnut data={definirDadosGrafico(entregasDoMesTotal, entregasDaSemanaTotal, entregasDoDiaTotal)} options={options}/>
    </div>);
};
exports.default = DoughnutChart;
