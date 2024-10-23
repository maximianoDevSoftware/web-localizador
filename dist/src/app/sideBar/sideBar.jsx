"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SideBar = SideBar;
var sideBar_module_css_1 = __importDefault(require("@/styles/sideBar.module.css"));
var displayEntregas_1 = __importDefault(require("./components/displayEntregas/displayEntregas"));
var displayAndamento_1 = __importDefault(require("./components/displayAndamento/displayAndamento"));
var btnsAdmEntrega_1 = __importDefault(require("./components/admEntregas/btnsAdmEntrega"));
var react_1 = require("react");
var contextoUsuario_1 = require("@/contexts/contextoUsuario");
function SideBar() {
    var usuarioLogado = (0, react_1.useContext)(contextoUsuario_1.contextAutenticacao).usuarioLogado;
    return (<>
      {(usuarioLogado === null || usuarioLogado === void 0 ? void 0 : usuarioLogado.userName) === "Administradores" && (<div className={sideBar_module_css_1.default.sideBarArea}>
          <>
            <displayEntregas_1.default />
            <displayAndamento_1.default />
            <btnsAdmEntrega_1.default />
          </>
        </div>)}
    </>);
}
