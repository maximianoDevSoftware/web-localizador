"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
var contextoUsuario_1 = require("@/contexts/contextoUsuario");
var entregasClientesContext_1 = require("@/contexts/entregasClientesContext");
var sideBar_1 = require("./sideBar/sideBar");
var dynamic_1 = __importDefault(require("next/dynamic"));
var clientesEntrega_1 = __importDefault(require("./telasFull/clientesEntrega"));
var novoClienteEntrega_1 = __importDefault(require("./telasFull/novoClienteEntrega"));
var telaRelEntregas_1 = require("./Relatorio Entregas/telaRelEntregas");
var informsMarcador_1 = __importDefault(require("./informsMarcador/informsMarcador"));
var motoristaLogin_1 = __importDefault(require("./usuariosLogados/motoristaLogin"));
var Mapa = (0, dynamic_1.default)(function () { return Promise.resolve().then(function () { return __importStar(require("./mapa/meuMapa")); }); }, { ssr: false });
function Home() {
    return (<div className="corpoProjeto">
      <contextoUsuario_1.ProvedorAutenticacao>
        <entregasClientesContext_1.EntregasClientesProvedor>
          <Mapa>
            <sideBar_1.SideBar></sideBar_1.SideBar>
            <clientesEntrega_1.default />
            <novoClienteEntrega_1.default />
            <telaRelEntregas_1.TelaFullRelatEntregas />
            <informsMarcador_1.default />
            <motoristaLogin_1.default />
          </Mapa>
        </entregasClientesContext_1.EntregasClientesProvedor>
      </contextoUsuario_1.ProvedorAutenticacao>
    </div>);
}
