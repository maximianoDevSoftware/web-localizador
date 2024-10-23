"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DisplayAndamento;
var entregasClientesContext_1 = require("@/contexts/entregasClientesContext");
var meuMapa_1 = require("@/app/mapa/meuMapa");
var sideBar_module_css_1 = __importDefault(require("@/styles/sideBar.module.css"));
var react_1 = require("react");
var fa6_1 = require("react-icons/fa6");
var ri_1 = require("react-icons/ri");
function DisplayAndamento() {
    var entregasAndamento = (0, react_1.useContext)(entregasClientesContext_1.ContextEntregasClientes).entregasAndamento;
    var mapaPronto = (0, react_1.useContext)(meuMapa_1.contextMapa).mapaPronto;
    return (<div className={sideBar_module_css_1.default.displayEntregas}>
      <h1 className={sideBar_module_css_1.default.titulosDisplay} onClick={function (ev) {
            var _a;
            (_a = ev.currentTarget.parentElement) === null || _a === void 0 ? void 0 : _a.classList.toggle(sideBar_module_css_1.default.displayEntregasAberto);
        }}>
        Entregas Andamento:
        <span className={sideBar_module_css_1.default.quantidadeTitulo}>
          {entregasAndamento ? entregasAndamento.length : "0"}
        </span>
      </h1>

      <div className={sideBar_module_css_1.default.areaInformsDisp}>
        {entregasAndamento === null || entregasAndamento === void 0 ? void 0 : entregasAndamento.map(function (entrega) {
            return (<div className={"".concat(sideBar_module_css_1.default.caixaEntrega, " ")} /**${estilo.caixaAberta} */ key={entrega.nome + entrega.id}>
              <div className={sideBar_module_css_1.default.tituloCaixa} onClick={function (ev) {
                    console.log("Peguei o click no titulo da entrega");
                    var boxInfoEntrega = ev.currentTarget.parentElement;
                    boxInfoEntrega === null || boxInfoEntrega === void 0 ? void 0 : boxInfoEntrega.classList.toggle(sideBar_module_css_1.default.caixaAberta);
                }}>
                <h3>{entrega.nome}</h3>
              </div>

              <div className={sideBar_module_css_1.default.informCaixa}>
                <p>Bairro: {entrega.bairro}</p>
                <p>Rua: {entrega.rua}</p>
                <p>Número: {entrega.numero}</p>
                <p>Valor: R$ {entrega.valor}</p>
                <p>Entregador: {entrega.entregador}</p>
                <p>Volume: {entrega.volume}</p>
                <p>Pagamento: {entrega.pagamento}</p>
              </div>

              <div className={"".concat(sideBar_module_css_1.default.botoesCaixa, " ").concat(sideBar_module_css_1.default.botoesCaixaDisp)}>
                {/**Interação para localizar o endereço do motorista da entrega */}
                <button className={sideBar_module_css_1.default.iterLocationMorist} onClick={function (ev) {
                    var esteBTN = ev.currentTarget;
                    console.log(esteBTN);
                }}>
                  <ri_1.RiUserLocationFill className="size-8"/>
                </button>
                {/* Iteração para localizar o endereço do cliente da entrega*/}
                <button className={sideBar_module_css_1.default.iterLocationEntrega} onClick={function (ev) {
                    var esteBTN = ev.currentTarget;
                    console.log(esteBTN);
                    mapaPronto === null || mapaPronto === void 0 ? void 0 : mapaPronto.flyTo([
                        entrega.coordenadas.latitude,
                        entrega.coordenadas.longitude,
                    ], 16, {
                        duration: 2,
                    });
                }}>
                  <fa6_1.FaMapLocationDot className="size-8"/>
                </button>
              </div>
            </div>);
        })}
      </div>
    </div>);
}
