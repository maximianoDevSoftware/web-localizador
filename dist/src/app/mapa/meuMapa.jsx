"use strict";
"use client";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contextMapa = void 0;
exports.default = Mapa;
var react_1 = __importStar(require("react"));
var mapa_module_css_1 = __importDefault(require("@/styles/mapa.module.css"));
var leaflet_1 = __importDefault(require("leaflet"));
require("leaflet/dist/leaflet.css");
var marcadoresOnMap_1 = require("./components/marcadoresOnMap");
var entregasClientesContext_1 = require("@/contexts/entregasClientesContext");
var contextoUsuario_1 = require("@/contexts/contextoUsuario");
exports.contextMapa = (0, react_1.createContext)({});
/********************** Váriaveis para serem usadas na execução do mapa pelo código. */
var coordsMatinhos = [-25.8175, -48.5428];
var urlTile = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
var attributionTx = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
var controlMapVar = true;
function Mapa(_a) {
    var children = _a.children;
    var mapaElemento = (0, react_1.useRef)(null);
    var _b = (0, react_1.useState)(), mapaPronto = _b[0], setMapaPronto = _b[1];
    var _c = (0, react_1.useState)(), telaMapaMarcadores = _c[0], setTelaMapaMarcadores = _c[1];
    var _d = (0, react_1.useState)([]), marcadores = _d[0], setMarcadores = _d[1];
    var _e = (0, react_1.useContext)(entregasClientesContext_1.ContextEntregasClientes), entregasDia = _e.entregasDia, entregasAndamento = _e.entregasAndamento, atualizandoClientes = _e.atualizandoClientes;
    var usuarioLogado = (0, react_1.useContext)(contextoUsuario_1.contextAutenticacao).usuarioLogado;
    var adicionandoMarcadores = function (_a) {
        var novoMarcador = _a.novoMarcador, entregaMarcador = _a.entregaMarcador;
        setMarcadores(function (marcadoresAnteriores) {
            if (marcadoresAnteriores) {
                return __spreadArray(__spreadArray([], marcadoresAnteriores, true), [{ novoMarcador: novoMarcador, entregaMarcador: entregaMarcador }], false);
            }
            else {
                return [{ novoMarcador: novoMarcador, entregaMarcador: entregaMarcador }];
            }
        });
    };
    var gerandoMapa = function () {
        if (typeof window === "undefined")
            return;
        if (!mapaElemento.current)
            return;
        if (controlMapVar) {
            controlMapVar = false;
            var mapaGerado = leaflet_1.default
                .map(mapaElemento.current)
                .setView(coordsMatinhos, 13);
            leaflet_1.default
                .tileLayer(urlTile, {
                maxZoom: 19,
                attribution: attributionTx,
            })
                .addTo(mapaGerado);
            var layerMarcadores = leaflet_1.default.layerGroup().addTo(mapaGerado);
            setTelaMapaMarcadores(layerMarcadores);
            setMapaPronto(mapaGerado);
            atualizandoClientes();
            return mapaGerado;
        }
    };
    /**************************************** useEffect para definir quem são os marcadores das entregas disponíveis */
    (0, react_1.useEffect)(function () {
        gerandoMapa();
    }, [entregasDia, usuarioLogado]);
    /**************************************** useEffect para definir quem são os marcadores das entregas em andamento */
    /**************************************** useEffect para definir quem são os marcadores dos motoristas
     *
     *
     */
    return (<exports.contextMapa.Provider value={{
            mapaPronto: mapaPronto,
            marcadores: marcadores,
            adicionandoMarcadores: adicionandoMarcadores,
            telaMapaMarcadores: telaMapaMarcadores,
        }}>
      {(usuarioLogado === null || usuarioLogado === void 0 ? void 0 : usuarioLogado.userName) === "Administradores" && (<div ref={mapaElemento} className={mapa_module_css_1.default.mapaElemento} id="meuMapaId">
          <marcadoresOnMap_1.MarcadoresMapaonSide></marcadoresOnMap_1.MarcadoresMapaonSide>
        </div>)}
      {children}
    </exports.contextMapa.Provider>);
}
