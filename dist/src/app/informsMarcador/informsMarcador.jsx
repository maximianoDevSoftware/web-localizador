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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TelaMarcadorInform;
var react_1 = __importStar(require("react"));
var meuMapa_1 = require("../mapa/meuMapa");
var telaInfMarker_module_css_1 = __importDefault(require("@/styles/telaInfMarcador/telaInfMarker.module.css"));
var ri_1 = require("react-icons/ri");
var bi_1 = require("react-icons/bi");
var fa6_1 = require("react-icons/fa6");
var entregasClientesContext_1 = require("@/contexts/entregasClientesContext");
var contextoUsuario_1 = require("@/contexts/contextoUsuario");
var socketCliente_1 = __importDefault(require("@/socket/socketCliente"));
var socket = (0, socketCliente_1.default)();
function TelaMarcadorInform() {
    var _a = (0, react_1.useContext)(meuMapa_1.contextMapa), mapaPronto = _a.mapaPronto, marcadores = _a.marcadores;
    var _b = (0, react_1.useContext)(entregasClientesContext_1.ContextEntregasClientes), entregasDia = _b.entregasDia, atualizandoEntregas = _b.atualizandoEntregas;
    var usuarioLogado = (0, react_1.useContext)(contextoUsuario_1.contextAutenticacao).usuarioLogado;
    var telaInformMR = (0, react_1.useRef)(null);
    var _c = (0, react_1.useState)(), entregaEvidencia = _c[0], setEntregaEvidencia = _c[1];
    var _d = (0, react_1.useState)(), marcadorEvidencia = _d[0], setMarcadorEvidencia = _d[1];
    marcadores === null || marcadores === void 0 ? void 0 : marcadores.map(function (minhaMark, indexMark) {
        minhaMark.novoMarcador.addEventListener("click", function () {
            adicionandoTelaInform();
            if (entregasDia) {
                setEntregaEvidencia(minhaMark.entregaMarcador);
                setMarcadorEvidencia(minhaMark.novoMarcador);
            }
        });
    });
    var elementoMapa = document.querySelector("#meuMapaId");
    var enviarMinhaMSG = function () {
        console.log("Iniciando MENSAGEM");
        var meuDadoMsg = {
            numero: "aaaa",
            mensagem: "\nOla, ".concat(entregaEvidencia === null || entregaEvidencia === void 0 ? void 0 : entregaEvidencia.entregador, ".\nVoc\u00EA tem uma entrega para:\n*").concat(entregaEvidencia === null || entregaEvidencia === void 0 ? void 0 : entregaEvidencia.nome, "*\n\nBairro: ").concat(entregaEvidencia === null || entregaEvidencia === void 0 ? void 0 : entregaEvidencia.bairro, "\n\nRua: ").concat(entregaEvidencia === null || entregaEvidencia === void 0 ? void 0 : entregaEvidencia.rua, "\n\nN\u00FAmero: ").concat(entregaEvidencia === null || entregaEvidencia === void 0 ? void 0 : entregaEvidencia.numero, "\n      "),
        };
        console.log(meuDadoMsg);
        socket.emit("enviarMensagem", meuDadoMsg);
    };
    var removendoTelaInform = function () {
        if (telaInformMR.current) {
            telaInformMR.current.classList.add(telaInfMarker_module_css_1.default.telaInformMarcadorFora);
        }
    };
    var adicionandoTelaInform = function () {
        if (telaInformMR.current) {
            telaInformMR.current.classList.remove(telaInfMarker_module_css_1.default.telaInformMarcadorFora);
        }
    };
    elementoMapa === null || elementoMapa === void 0 ? void 0 : elementoMapa.addEventListener("click", function (ev) {
        if (ev.target === ev.currentTarget) {
            removendoTelaInform();
        }
    });
    var liberandoPontoMarcador = function (btnClick) {
        var _a, _b, _c, _d;
        var elementoMarcadorFoto = (_a = marcadorEvidencia === null || marcadorEvidencia === void 0 ? void 0 : marcadorEvidencia.getElement()) === null || _a === void 0 ? void 0 : _a.children[0].children[1];
        var elementoMarcadorTexto = (_b = marcadorEvidencia === null || marcadorEvidencia === void 0 ? void 0 : marcadorEvidencia.getElement()) === null || _b === void 0 ? void 0 : _b.children[0].children[0];
        if ((_c = marcadorEvidencia === null || marcadorEvidencia === void 0 ? void 0 : marcadorEvidencia.dragging) === null || _c === void 0 ? void 0 : _c.enabled()) {
            marcadorEvidencia.dragging.disable();
            var novaCoord = marcadorEvidencia.getLatLng();
            btnClick.classList.toggle(telaInfMarker_module_css_1.default.btnLocationAtivo);
            elementoMarcadorFoto === null || elementoMarcadorFoto === void 0 ? void 0 : elementoMarcadorFoto.classList.toggle(telaInfMarker_module_css_1.default.marcadorEstaAtivo);
            if (entregaEvidencia) {
                if (entregaEvidencia.id) {
                    var updateEntregaCoords = {
                        id: entregaEvidencia.id,
                        nome: entregaEvidencia.nome,
                        telefone: entregaEvidencia.telefone,
                        status: entregaEvidencia.status,
                        cidade: entregaEvidencia.cidade,
                        bairro: entregaEvidencia.bairro,
                        rua: entregaEvidencia.rua,
                        numero: entregaEvidencia.numero,
                        coordenadas: {
                            latitude: novaCoord.lat,
                            longitude: novaCoord.lng,
                        },
                        dia: entregaEvidencia.dia,
                        entregador: entregaEvidencia.entregador,
                        pagamento: entregaEvidencia.pagamento,
                        valor: entregaEvidencia.valor,
                        volume: entregaEvidencia.volume,
                    };
                    socket.emit("Atualizar Entrega", updateEntregaCoords);
                }
            }
            elementoMarcadorTexto === null || elementoMarcadorTexto === void 0 ? void 0 : elementoMarcadorTexto.classList.toggle(telaInfMarker_module_css_1.default.nomeComMarcadorAtivo);
        }
        else {
            (_d = marcadorEvidencia === null || marcadorEvidencia === void 0 ? void 0 : marcadorEvidencia.dragging) === null || _d === void 0 ? void 0 : _d.enable();
            btnClick.classList.toggle(telaInfMarker_module_css_1.default.btnLocationAtivo);
            elementoMarcadorFoto === null || elementoMarcadorFoto === void 0 ? void 0 : elementoMarcadorFoto.classList.toggle(telaInfMarker_module_css_1.default.marcadorEstaAtivo);
            elementoMarcadorTexto === null || elementoMarcadorTexto === void 0 ? void 0 : elementoMarcadorTexto.classList.toggle(telaInfMarker_module_css_1.default.nomeComMarcadorAtivo);
        }
    };
    (0, react_1.useEffect)(function () { }, [usuarioLogado]);
    return (<>
      <div className={"".concat(telaInfMarker_module_css_1.default.telaInformMarcador, " ").concat(telaInfMarker_module_css_1.default.telaInformMarcadorFora)} ref={telaInformMR}>
        <div className={telaInfMarker_module_css_1.default.areaBTNSinfMR}>
          <button onClick={function (ev) {
            liberandoPontoMarcador(ev.currentTarget);
        }}>
            <ri_1.RiUserLocationFill />
          </button>

          <button onClick={function () {
            // enviarMensagemCliente();
            enviarMinhaMSG();
        }}>
            <bi_1.BiMessageCheck />
          </button>

          <button onClick={function () {
            if (entregaEvidencia) {
                mapaPronto === null || mapaPronto === void 0 ? void 0 : mapaPronto.flyTo([
                    entregaEvidencia === null || entregaEvidencia === void 0 ? void 0 : entregaEvidencia.coordenadas.latitude,
                    entregaEvidencia === null || entregaEvidencia === void 0 ? void 0 : entregaEvidencia.coordenadas.longitude,
                ], 17, {
                    animate: true,
                    duration: 1,
                });
            }
        }}>
            <fa6_1.FaMapLocationDot />
          </button>
        </div>

        <div className={telaInfMarker_module_css_1.default.areaInformacoesMR}>
          <h3>Entrega para: {entregaEvidencia === null || entregaEvidencia === void 0 ? void 0 : entregaEvidencia.nome}</h3>
          <h3>Contato: {entregaEvidencia === null || entregaEvidencia === void 0 ? void 0 : entregaEvidencia.telefone}</h3>
          <h3>Bairro: {entregaEvidencia === null || entregaEvidencia === void 0 ? void 0 : entregaEvidencia.bairro}</h3>
          <h3>Rua: {entregaEvidencia === null || entregaEvidencia === void 0 ? void 0 : entregaEvidencia.rua}</h3>
          <h3>Número: {entregaEvidencia === null || entregaEvidencia === void 0 ? void 0 : entregaEvidencia.numero}</h3>
          <h3>Valor: {entregaEvidencia === null || entregaEvidencia === void 0 ? void 0 : entregaEvidencia.valor}</h3>
          <h3>Pagamento: {entregaEvidencia === null || entregaEvidencia === void 0 ? void 0 : entregaEvidencia.pagamento}</h3>
          <h3>Entregador: {entregaEvidencia === null || entregaEvidencia === void 0 ? void 0 : entregaEvidencia.entregador}</h3>
        </div>
      </div>
    </>);
}
