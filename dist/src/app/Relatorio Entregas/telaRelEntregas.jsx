"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelaFullRelatEntregas = TelaFullRelatEntregas;
var react_1 = require("react");
var telaRel_module_css_1 = __importDefault(require("./telaRel.module.css"));
var doughnut_1 = __importDefault(require("./components/graficos/doughnut"));
var graficoLinha_1 = __importDefault(require("./components/graficos/graficoLinha"));
var tabelaSemana_1 = __importDefault(require("./components/tabelas/tabelaSemana"));
var formularioRlatorio_1 = __importDefault(require("./components/formRelatorio/formularioRlatorio"));
var informsEntregaDia_1 = require("./components/informsDiaEntrega/informsEntregaDia");
var contextoUsuario_1 = require("@/contexts/contextoUsuario");
function TelaFullRelatEntregas() {
    var usuarioLogado = (0, react_1.useContext)(contextoUsuario_1.contextAutenticacao).usuarioLogado;
    return ((usuarioLogado === null || usuarioLogado === void 0 ? void 0 : usuarioLogado.userName) === "Administradores" && (<div className={"".concat(telaRel_module_css_1.default.telaFullRelatorioEntregas, " ").concat(telaRel_module_css_1.default.telaFullRelatorioEntregasFora)} id="telaFullRelatorioId" onClick={function (ev) {
            if (ev.target === ev.currentTarget) {
                ev.currentTarget.classList.add(telaRel_module_css_1.default.telaFullRelatorioEntregasFora);
            }
        }}>
        <div className={"".concat(telaRel_module_css_1.default.containerMarrom, " ").concat(telaRel_module_css_1.default.containerGridRelatorios)}>
          <div className={"".concat(telaRel_module_css_1.default.tituloDisplay)}>
            Relatório de Entregas:
          </div>
          <div className={"".concat(telaRel_module_css_1.default.informsGraficoDisplay)}>
            <doughnut_1.default></doughnut_1.default>
            <graficoLinha_1.default></graficoLinha_1.default>
          </div>
          <div className={"".concat(telaRel_module_css_1.default.informsTabelaDisplay, " roalgemPers")}>
            <tabelaSemana_1.default></tabelaSemana_1.default>
          </div>
          <div className={"".concat(telaRel_module_css_1.default.informsFormularioDisplay)}>
            <formularioRlatorio_1.default></formularioRlatorio_1.default>
          </div>
          <div className={"".concat(telaRel_module_css_1.default.informsEntregasDiaDisplay)}>
            <informsEntregaDia_1.ComponenteRelatDia></informsEntregaDia_1.ComponenteRelatDia>
          </div>

          {/* Parte da tela responsável por definir as entregas relizadas, das entregas realizadas, quantas foram de determinado motorista, e quanto ele movimentou com entregas para este motorista em específico */}
          {/* <MotoristasRelatorio /> */}
          {/*Parte do código responsável por relacionar as entregas do mes em um gráfico e exibir essas entregas  */}
          {/* <div
          className={`flex items-center justify-around w-[750px] relative`}
        > */}
          {/* <DoughnutChart></DoughnutChart> */}
          {/*Parte do código responsável  por ter uma lista direta com as entregas realizadas nas ultimas 2 semanas. Todas as entregas nessta tabela*/}
          {/* <LineChart></LineChart> */}
          {/* </div> */}
          {/* <div */}
          {/* className={`max-h-[280px] overflow-y-scroll absolute top-[20px] right-[10px] overflow-x-visible px-[50px]  roalgemPers`} */}
          {/* > */}
          {/* <TabelaEntregasDaSemana></TabelaEntregasDaSemana> */}
          {/* </div> */}
          {/* <FormularioRelatorio></FormularioRelatorio> */}
        </div>
      </div>));
}
