"use client";
import estilo from "@/styles/sideBar.module.css";
import estiloFade from "@/styles/fades/fadesSty.module.css";
import estiloFullCliente from "@/styles/telasFull.module.css";
import estiloRelatorio from "../../../Relatorio Entregas/telaRel.module.css";
import { useContext } from "react";
import { ContextEntregasClientes } from "@/contexts/entregasClientesContext";
export default function BotoesAdministrarEntregas() {
    var _a = useContext(ContextEntregasClientes), atualizandoClientes = _a.atualizandoClientes, atualizandoEntregasRelatorio = _a.atualizandoEntregasRelatorio;
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
            telaFundorForm.classList.toggle(estiloFullCliente.retiraNaEsquerda);
            setTimeout(function () {
                // formCliente.classList.toggle(estiloFullCliente.esfumacandoCima);
                infsClientEl.classList.toggle(estiloFade.saiEsquerda);
                entregaClientEl.classList.toggle(estiloFade.saiDireita);
                buttonClientEl.classList.toggle(estiloFade.saiBaixo);
                sideBar.classList.toggle(estiloFade.saiBaixo);
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
            telaFundorForm.classList.toggle(estiloFullCliente.retiraNaEsquerda);
            setTimeout(function () {
                infsCliente_1.classList.toggle(estiloFade.saiEsquerda);
                infsEntrega_1.classList.toggle(estiloFade.saiCima);
                sideBar_1.classList.toggle(estiloFade.saiBaixo);
            }, 300);
        }
    };
    var abrirTelaRelatorio = function () {
        var telaFullRelat = document.querySelector("#telaFullRelatorioId");
        console.log(telaFullRelat);
        if (telaFullRelat) {
            telaFullRelat.classList.remove(estiloRelatorio.telaFullRelatorioEntregasFora);
        }
        atualizandoEntregasRelatorio();
    };
    return (<div className={estilo.admBtnEntregas}>
      <div className={estilo.gerarEntregasBTN} onClick={function (ev) {
            console.log(ev.currentTarget);
            ev.currentTarget.classList.toggle(estilo.abrirBotaoInicial);
        }}>
        <h1 className={estilo.tituloGerarEntregas}>GERAR ROTAS DE ENTREGAS</h1>

        <button onClick={abrindoTelaClientes}>Meus Clientes</button>
        <button onClick={abrindoTelaNovoCliente}>Novos Clientes</button>
      </div>

      <div className={estilo.gerarEntregasBTN}>
        <h1 className={estilo.tituloGerarEntregas} onClick={abrirTelaRelatorio}>
          RELATÓRIO DE ENTREGAS
        </h1>
      </div>
    </div>);
}
