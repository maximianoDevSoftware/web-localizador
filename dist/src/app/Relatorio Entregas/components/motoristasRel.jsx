"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotoristasRelatorio = MotoristasRelatorio;
var react_1 = require("react");
var telaRel_module_css_1 = __importDefault(require("../telaRel.module.css"));
var contextoUsuario_1 = require("@/contexts/contextoUsuario");
function MotoristasRelatorio() {
    var _a = (0, react_1.useContext)(contextoUsuario_1.contextAutenticacao), usuarioLogado = _a.usuarioLogado, marcosUser = _a.marcosUser, ueneUser = _a.ueneUser, leoUser = _a.leoUser, joaoUser = _a.joaoUser;
    var _b = (0, react_1.useState)(), entregasRelatorio = _b[0], setEntregasRelatorio = _b[1];
    var buscandoEntregasRelatorio = function () {
        /**Aqui dentro eu desenvolvo o metodo que vai buscar as entregas necessárias para redigir um relatório */
    };
    var calculoRelatorioMotorista = function () {
        var entregasMarcos;
        var entregasUene;
        var entregasLeo;
        var entregasJoao;
        entregasRelatorio === null || entregasRelatorio === void 0 ? void 0 : entregasRelatorio.map(function (entregaUnica) {
            if (entregaUnica.entregador === "Marcos") {
                entregasMarcos.push(entregaUnica);
            }
            else if (entregaUnica.entregador === "Uene") {
                entregasUene.push(entregaUnica);
            }
            else if (entregaUnica.entregador === "Leo") {
                entregasLeo.push(entregaUnica);
            }
            else if (entregaUnica.entregador === "João") {
                entregasJoao.push(entregaUnica);
            }
        });
    };
    return (<div className={telaRel_module_css_1.default.telaInfosMotoristaRel}>
      <h1 className={telaRel_module_css_1.default.tituloRelatorioMotoristas}>
        Entregas por Motoristas
      </h1>
    </div>);
}
