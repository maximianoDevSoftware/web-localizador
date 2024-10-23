"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BotoesAdministrarEntregas;
var sideBar_module_css_1 = __importDefault(require("@/styles/sideBar.module.css"));
var fadesSty_module_css_1 = __importDefault(require("@/styles/fades/fadesSty.module.css"));
var telasFull_module_css_1 = __importDefault(require("@/styles/telasFull.module.css"));
var telaRel_module_css_1 = __importDefault(require("../../../Relatorio Entregas/telaRel.module.css"));
var react_1 = require("react");
var entregasClientesContext_1 = require("@/contexts/entregasClientesContext");
function BotoesAdministrarEntregas() {
    var _a = (0, react_1.useContext)(entregasClientesContext_1.ContextEntregasClientes), atualizandoClientes = _a.atualizandoClientes, atualizandoEntregasRelatorio = _a.atualizandoEntregasRelatorio;
    var abrindoTelaClientes = function () {
        var telaFundorForm = document.querySelector("#telaClientesForm");
        var infsClientEl = telaFundorForm === null || telaFundorForm === void 0 ? void 0 : telaFundorForm.children[0].children[1].children[0];
        var entregaClientEl = telaFundorForm === null || telaFundorForm === void 0 ? void 0 : telaFundorForm.children[0].children[1].children[1];
        var buttonClientEl = telaFundorForm === null || telaFundorForm === void 0 ? void 0 : telaFundorForm.children[0].children[1].children[2];
        var sideBar = telaFundorForm === null || telaFundorForm === void 0 ? void 0 : telaFundorForm.children[0].children[2];
        if (telaFundorForm &&
            infsClientEl &&
            entregaClientEl &&
            buttonClientEl &&
            sideBar) {
            telaFundorForm.classList.toggle(telasFull_module_css_1.default.retiraNaEsquerda);
            setTimeout(function () {
                // formCliente.classList.toggle(estiloFullCliente.esfumacandoCima);
                infsClientEl.classList.toggle(fadesSty_module_css_1.default.saiEsquerda);
                entregaClientEl.classList.toggle(fadesSty_module_css_1.default.saiDireita);
                buttonClientEl.classList.toggle(fadesSty_module_css_1.default.saiBaixo);
                sideBar.classList.toggle(fadesSty_module_css_1.default.saiBaixo);
            }, 500);
        }
        atualizandoClientes();
    };
    var abrindoTelaNovoCliente = function () {
        var telaFundorForm = document.querySelector("#telaNovoClientesForm");
        if (telaFundorForm) {
            var infsCliente_1 = telaFundorForm.children[0].children[0].children[0];
            var infsEntrega_1 = telaFundorForm.children[0].children[0].children[1];
            var sideBar_1 = telaFundorForm.children[0].children[1];
            telaFundorForm.classList.toggle(telasFull_module_css_1.default.retiraNaEsquerda);
            setTimeout(function () {
                infsCliente_1.classList.toggle(fadesSty_module_css_1.default.saiEsquerda);
                infsEntrega_1.classList.toggle(fadesSty_module_css_1.default.saiCima);
                sideBar_1.classList.toggle(fadesSty_module_css_1.default.saiBaixo);
            }, 300);
        }
    };
    var abrirTelaRelatorio = function () {
        var telaFullRelat = document.querySelector("#telaFullRelatorioId");
        console.log(telaFullRelat);
        if (telaFullRelat) {
            telaFullRelat.classList.remove(telaRel_module_css_1.default.telaFullRelatorioEntregasFora);
        }
        atualizandoEntregasRelatorio();
    };
    return (<div className={sideBar_module_css_1.default.admBtnEntregas}>
      <div className={sideBar_module_css_1.default.gerarEntregasBTN} onClick={function (ev) {
            console.log(ev.currentTarget);
            ev.currentTarget.classList.toggle(sideBar_module_css_1.default.abrirBotaoInicial);
        }}>
        <h1 className={sideBar_module_css_1.default.tituloGerarEntregas}>GERAR ROTAS DE ENTREGAS</h1>

        <button onClick={abrindoTelaClientes}>Meus Clientes</button>
        <button onClick={abrindoTelaNovoCliente}>Novos Clientes</button>
      </div>

      <div className={sideBar_module_css_1.default.gerarEntregasBTN}>
        <h1 className={sideBar_module_css_1.default.tituloGerarEntregas} onClick={abrirTelaRelatorio}>
          RELATÓRIO DE ENTREGAS
        </h1>
      </div>
    </div>);
}
