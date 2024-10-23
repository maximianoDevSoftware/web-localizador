"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TabelaEntregasDaSemana;
var react_1 = require("react");
var tabelasSty_module_css_1 = __importDefault(require("./tabelasSty.module.css"));
var entregasClientesContext_1 = require("@/contexts/entregasClientesContext");
function TabelaEntregasDaSemana() {
    var entregasRelatorio = (0, react_1.useContext)(entregasClientesContext_1.ContextEntregasClientes).entregasRelatorio;
    var hoje = new Date();
    var diaHoje = [hoje.getDate(), hoje.getMonth() + 1, hoje.getFullYear()];
    var entregasConcluidas = entregasRelatorio === null || entregasRelatorio === void 0 ? void 0 : entregasRelatorio.filter(function (entrega) {
        if ((entrega.dia[0] === diaHoje[0] && entrega.dia[1] === diaHoje[1]) ||
            entrega.status == "Disponível") {
            return entrega;
        }
    });
    return (<table className={"".concat(tabelasSty_module_css_1.default.tabelaSemana)}>
      <thead>
        <tr>
          <th>Nome da entrega:</th>
          <th>Status da entrega:</th>
          <th>Motorista:</th>
          <th>Valor:</th>
        </tr>
      </thead>
      <tbody>
        {entregasConcluidas === null || entregasConcluidas === void 0 ? void 0 : entregasConcluidas.map(function (entrega, index) {
            return (<tr key={index}>
              <td className={"".concat(tabelasSty_module_css_1.default.campoNome)}>{entrega.nome}</td>
              <td className={"".concat(tabelasSty_module_css_1.default.campoStatus)}>{entrega.status}</td>
              <td className={"".concat(tabelasSty_module_css_1.default.campoMotorista)}>
                {entrega.entregador}
              </td>
              <td className={"".concat(tabelasSty_module_css_1.default.campoValor)}>R$ {entrega.valor}</td>
            </tr>);
        })}
      </tbody>
    </table>);
}
