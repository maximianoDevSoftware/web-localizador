"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FormularioRelatorio;
var estiloFormRelatorio_module_css_1 = __importDefault(require("./estiloFormRelatorio.module.css"));
function FormularioRelatorio() {
    return (<form className={"".concat(estiloFormRelatorio_module_css_1.default.stFormRelatorio)} onSubmit={function (ev) {
            ev.preventDefault();
        }}>
      <div>
        <div className={"".concat(estiloFormRelatorio_module_css_1.default.informsLabel)}>
          <input type="date" name="dataInicio" id="initDataId"/>
          <label htmlFor="dataInicio">Data de inicio do relatório.</label>
        </div>
        <div className={"".concat(estiloFormRelatorio_module_css_1.default.informsLabel)}>
          <input type="date" name="dataFim" id="initFimId"/>
          <label htmlFor="dataFim">Data do fim do relatório.</label>
        </div>
        <div className={"".concat(estiloFormRelatorio_module_css_1.default.informsLabel)}>
          <select name="motoristaRelatorio" id="idMotoraRelatorio">
            <option value="todos">Todos os Motoristas</option>
            <option value="Marcos">Marcos</option>
            <option value="Uene">Uene</option>
            <option value="Leo">Leo</option>
            <option value="João">João</option>
          </select>
          <label htmlFor="motoristaRelatorio">Entregador</label>
        </div>
        <div className={"".concat(estiloFormRelatorio_module_css_1.default.informsLabel)}>
          <input type="number" name="valorMinimoEntregaRelatorio" id="idValorRelatorio" placeholder="R$ 100,00"/>
          <label htmlFor="valorMinimoEntregaRelatorio">
            Valor mínimo da Entrega
          </label>
        </div>
        <div className={"".concat(estiloFormRelatorio_module_css_1.default.informsLabel)}>
          <input type="number" name="valorMaximoEntregaRelatorio" id="idValorMaxRelatorio" placeholder="R$ 0,00"/>
          <label htmlFor="valorMinimoEntregaRelatorio">
            Valor Máximo da Entrega
          </label>
        </div>
        <button className={"".concat(estiloFormRelatorio_module_css_1.default.informsButtonInitRel)}>
          GERAR RELATÓRIO DE ENTREGAS
        </button>
      </div>
      {/*
        <div className={`${estilo.areaButtonsRelatorio}`}>
          <button className={``}>
            Atualizar tabela com dados{" "}
            <MdUpdateDisabled className={`${estilo.iconRel}`} />
          </button>
          <button className={``}>
            Gerar PDF do relatório <FaFilePdf className={`${estilo.iconRel}`} />
          </button>
          <button className={``}>
            Limpar relatório
            <MdClearAll className={`${estilo.iconRel}`} />
          </button>
        </div> */}
    </form>);
}
