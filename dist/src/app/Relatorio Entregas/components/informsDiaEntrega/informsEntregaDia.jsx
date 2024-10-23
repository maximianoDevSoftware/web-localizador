"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponenteRelatDia = ComponenteRelatDia;
var tb_1 = require("react-icons/tb");
var diaInfo_module_css_1 = __importDefault(require("./diaInfo.module.css"));
var react_1 = require("react");
var entregasClientesContext_1 = require("@/contexts/entregasClientesContext");
function ComponenteRelatDia() {
    var entregasRelatorio = (0, react_1.useContext)(entregasClientesContext_1.ContextEntregasClientes).entregasRelatorio;
    var entregasDisponiveis = entregasRelatorio === null || entregasRelatorio === void 0 ? void 0 : entregasRelatorio.filter(function (entrega) {
        if (entrega.status === "Disponível") {
            return entrega;
        }
    });
    var entregasAndamento = entregasRelatorio === null || entregasRelatorio === void 0 ? void 0 : entregasRelatorio.filter(function (entrega) {
        if (entrega.status === "Entregando") {
            return entrega;
        }
    });
    // Obter a data de hoje dinamicamente
    var hoje = new Date();
    var diaHoje = [hoje.getDate(), hoje.getMonth() + 1, hoje.getFullYear()];
    var entregasConcluidas = entregasRelatorio === null || entregasRelatorio === void 0 ? void 0 : entregasRelatorio.filter(function (entrega) {
        if (entrega.status === "Concluída") {
            if (entrega.dia[0] === diaHoje[0] && entrega.dia[1] === diaHoje[1]) {
                return entrega;
            }
        }
    });
    var FaturamentoDoDia = function () {
        if (entregasConcluidas) {
            var valorTotalDoDia_1 = 0;
            entregasConcluidas.map(function (entrega) {
                if (entrega.valor) {
                    var valorAdapt = Number(entrega.valor.replace(",", "."));
                    valorTotalDoDia_1 += valorAdapt;
                    console.log(valorAdapt);
                }
            });
            console.log("O valor total do dia foi de: " + valorTotalDoDia_1);
            var stringValorTotal = "R$ ".concat(valorTotalDoDia_1.toFixed(2));
            return stringValorTotal;
        }
        else {
            return "R$ 0,00";
        }
    };
    (0, react_1.useEffect)(function () {
        console.log("Número de entregas dispnníveis: " + (entregasDisponiveis === null || entregasDisponiveis === void 0 ? void 0 : entregasDisponiveis.length));
        console.log("Número de entregas andamento: " + (entregasAndamento === null || entregasAndamento === void 0 ? void 0 : entregasAndamento.length));
        console.log("Número de entregas concluidas: " + (entregasConcluidas === null || entregasConcluidas === void 0 ? void 0 : entregasConcluidas.length));
    }, [entregasRelatorio]);
    return (<div className={"".concat(diaInfo_module_css_1.default.areaInfoEntregaDia)}>
      <div className={"".concat(diaInfo_module_css_1.default.dispInfoDia)}>
        <div className={"".concat(diaInfo_module_css_1.default.areaFotoEntregaDia)}>
          <div className={"".concat(diaInfo_module_css_1.default.fotoEntregasDia, " ").concat(diaInfo_module_css_1.default.fotoMarcosEntregasDia)}></div>
          <div className={"".concat(diaInfo_module_css_1.default.motoraEntregasDia)}>
            1 <tb_1.TbTruckDelivery className="inline size-5"/>
          </div>
        </div>
        <div className={"".concat(diaInfo_module_css_1.default.areaFotoEntregaDia)}>
          <div className={"".concat(diaInfo_module_css_1.default.fotoEntregasDia, " ").concat(diaInfo_module_css_1.default.fotoUeneEntregasDia)}></div>
          <div className={"".concat(diaInfo_module_css_1.default.motoraEntregasDia)}>
            3 <tb_1.TbTruckDelivery className="inline size-5"/>
          </div>
        </div>
        <div className={"".concat(diaInfo_module_css_1.default.areaFotoEntregaDia)}>
          <div className={"".concat(diaInfo_module_css_1.default.fotoEntregasDia, " ").concat(diaInfo_module_css_1.default.fotoLeoEntregasDia)}></div>
          <div className={"".concat(diaInfo_module_css_1.default.motoraEntregasDia)}>
            4 <tb_1.TbTruckDelivery className="inline size-5"/>
          </div>
        </div>
        <div className={"".concat(diaInfo_module_css_1.default.areaFotoEntregaDia)}>
          <div className={"".concat(diaInfo_module_css_1.default.fotoEntregasDia, " ").concat(diaInfo_module_css_1.default.fotoJoaoEntregasDia)}></div>
          <div className={"".concat(diaInfo_module_css_1.default.motoraEntregasDia)}>
            5 <tb_1.TbTruckDelivery className="inline size-5"/>
          </div>
        </div>
      </div>

      <div className={"".concat(diaInfo_module_css_1.default.dispInfoDia)}>
        <h3>
          Entregas Disponíveis:{" "}
          <span>{entregasDisponiveis ? entregasDisponiveis.length : "0"}</span>
        </h3>
        <h3>
          Entregas em Andamento:{" "}
          <span>{entregasAndamento ? entregasAndamento.length : "0"}</span>
        </h3>
        <h3>
          Entregas Concluídas:{" "}
          <span>{entregasConcluidas ? entregasConcluidas.length : "0"}</span>
        </h3>
      </div>

      <div className={"".concat(diaInfo_module_css_1.default.dispInfoDia)}>
        <h3>Faturamento do dia:</h3>
        <div className={"".concat(diaInfo_module_css_1.default.spamFaturamento)}>{FaturamentoDoDia()}</div>
      </div>
    </div>);
}
