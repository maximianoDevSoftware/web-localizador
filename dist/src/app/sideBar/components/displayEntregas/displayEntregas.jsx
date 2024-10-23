"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DisplayEntregas;
var sideBar_module_css_1 = __importDefault(require("@/styles/sideBar.module.css"));
var cadaEntrega_1 = __importDefault(require("./components/cadaEntrega"));
var react_1 = require("react");
var entregasClientesContext_1 = require("@/contexts/entregasClientesContext");
function DisplayEntregas() {
    var entregasDia = (0, react_1.useContext)(entregasClientesContext_1.ContextEntregasClientes).entregasDia;
    return (<div className={sideBar_module_css_1.default.displayEntregas}>
      <h1 className={sideBar_module_css_1.default.titulosDisplay} onClick={function (ev) {
            var _a;
            (_a = ev.currentTarget.parentElement) === null || _a === void 0 ? void 0 : _a.classList.toggle(sideBar_module_css_1.default.displayEntregasAberto);
        }}>
        Entregas Disponíveis:
        <span className={sideBar_module_css_1.default.quantidadeTitulo}>
          {entregasDia ? entregasDia.length : "0"}
        </span>
      </h1>

      <div className={sideBar_module_css_1.default.areaInformsDisp}>
        <cadaEntrega_1.default></cadaEntrega_1.default>
      </div>
    </div>);
}
