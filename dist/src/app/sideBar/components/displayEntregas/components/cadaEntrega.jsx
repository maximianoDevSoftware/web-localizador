"use strict";
"use client";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EntregaSingular;
var sideBar_module_css_1 = __importDefault(require("@/styles/sideBar.module.css"));
var md_1 = require("react-icons/md");
var md_2 = require("react-icons/md");
var cg_1 = require("react-icons/cg");
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var entregasClientesContext_1 = require("@/contexts/entregasClientesContext");
var socketCliente_1 = __importDefault(require("@/socket/socketCliente"));
var meuMapa_1 = require("@/app/mapa/meuMapa");
var controladorInicialEntregas = true;
var socket = (0, socketCliente_1.default)();
function EntregaSingular() {
    // const { mapaPronto, marcadores } = useContext(contextMapa);
    var _a = (0, react_1.useContext)(entregasClientesContext_1.ContextEntregasClientes), entregasDia = _a.entregasDia, atualizandoEntregas = _a.atualizandoEntregas;
    var mapaPronto = (0, react_1.useContext)(meuMapa_1.contextMapa).mapaPronto;
    var _b = (0, react_1.useState)(), dadosUpdate = _b[0], setDadosUpdate = _b[1];
    var _c = (0, react_1.useState)({
        nome: "",
        telefone: "",
        cidade: "",
        bairro: "",
        rua: "",
        numero: "",
        valor: "",
        pagamento: "",
        entregador: "",
        volume: "",
    }), dadosFormUpdate = _c[0], setDadosFormUpdate = _c[1];
    var removendoEntrega = function (entrega) {
        socket.emit("Deletar Entrega", entrega);
    };
    (0, react_1.useEffect)(function () {
        if (controladorInicialEntregas) {
            controladorInicialEntregas = false;
            atualizandoEntregas();
        }
        if (entregasDia) {
            console.log("Ouvindo modificações nos clientes, atualizado: ", entregasDia.length + " clientes.");
        }
    }, [entregasDia]);
    return entregasDia === null || entregasDia === void 0 ? void 0 : entregasDia.map(function (entrega) {
        var modificandoInputs = function (event) {
            var _a;
            setDadosFormUpdate(__assign(__assign({}, dadosFormUpdate), (_a = {}, _a[event.target.name] = event.target.value, _a)));
        };
        return (<div className={"".concat(sideBar_module_css_1.default.caixaEntrega, " ")} /**${estilo.caixaAberta} */ key={entrega.nome + entrega.id}>
        <div className={sideBar_module_css_1.default.tituloCaixa} onClick={function (ev) {
                console.log("Peguei o click no titulo da entrega");
                var boxInfoEntrega = ev.currentTarget.parentElement;
                boxInfoEntrega === null || boxInfoEntrega === void 0 ? void 0 : boxInfoEntrega.classList.toggle(sideBar_module_css_1.default.caixaAberta);
                setDadosUpdate(entrega);
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

        <div className={sideBar_module_css_1.default.botoesCaixa}>
          {/**Interação de enviar mensagem para o cliente */}
          <button className={sideBar_module_css_1.default.interMensagens} onClick={function (ev) {
                var esteBTN = ev.currentTarget;
                esteBTN.classList.add(sideBar_module_css_1.default.executandoMensagem);
                enviarMinhaMsgDisplay(entrega).then(function () {
                    console.log("ouvindo quando enviad");
                    esteBTN.classList.remove(sideBar_module_css_1.default.executandoMensagem);
                    esteBTN.classList.add(sideBar_module_css_1.default.mensagemEnviada);
                });
            }}>
            <md_1.MdOutlineMessage className="size-8"/>
          </button>
          {/* Botão para centralizar no mapa o marcador da entrega */}
          <button className={sideBar_module_css_1.default.editLocationBTN} onClick={function () {
                mapaPronto === null || mapaPronto === void 0 ? void 0 : mapaPronto.flyTo([entrega.coordenadas.latitude, entrega.coordenadas.longitude], 17, {
                    duration: 3,
                });
            }}>
            <fa_1.FaSearchLocation className="size-8"/>
          </button>
          {/**Botão de interação para editar a entrega */}
          <button className={sideBar_module_css_1.default.interEdit} onClick={function (ev) {
                var _a, _b, _c;
                var cxEntrega = (_a = ev.currentTarget.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
                var cxEditando = (_c = (_b = ev.currentTarget.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.lastElementChild;
                cxEntrega === null || cxEntrega === void 0 ? void 0 : cxEntrega.classList.toggle(sideBar_module_css_1.default.caixaEditando);
                cxEditando === null || cxEditando === void 0 ? void 0 : cxEditando.classList.toggle(sideBar_module_css_1.default.areaBotoesEditFora);
                setDadosFormUpdate({
                    nome: entrega.nome,
                    cidade: entrega.cidade,
                    bairro: entrega.bairro,
                    rua: entrega.rua,
                    numero: entrega.numero,
                    valor: entrega.valor,
                    pagamento: entrega.pagamento,
                    entregador: entrega.entregador,
                    volume: entrega.volume,
                    telefone: entrega.telefone ? entrega.telefone : "",
                });
            }}>
            <md_2.MdEditSquare className="size-8"/>
          </button>
          {/**Interação de remover a entrega das entregas do dia*/}
          <button className={sideBar_module_css_1.default.interRemove} onClick={function () {
                removendoEntrega(entrega);
            }}>
            <cg_1.CgExtensionRemove className="size-8"/>
          </button>
        </div>

        <div className={" ".concat(sideBar_module_css_1.default.caixaEditEntrega, " ").concat(sideBar_module_css_1.default.areaBotoesEditFora)} id={entrega.id}>
          <h3>
            Nome:{" "}
            <input defaultValue={entrega.nome} name="nome" onChange={modificandoInputs}/>
          </h3>

          <h3>
            Telefone:{" "}
            <input defaultValue={entrega.telefone} name="telefone" onChange={modificandoInputs}/>
          </h3>

          <h3>
            Cidade:{" "}
            <input defaultValue={entrega.cidade} name="cidade" onChange={modificandoInputs}/>
          </h3>

          <h3>
            Bairro:{" "}
            <input defaultValue={entrega.bairro} name="bairro" onChange={modificandoInputs}/>
          </h3>

          <h3>
            Rua:{" "}
            <input defaultValue={entrega.rua} name="rua" onChange={modificandoInputs}/>
          </h3>

          <h3>
            Número:{" "}
            <input defaultValue={entrega.numero} name="numero" onChange={modificandoInputs}/>
          </h3>

          <h3>
            Valor:{" "}
            <input defaultValue={entrega.valor} name="valor" onChange={modificandoInputs}/>
          </h3>

          <h3>
            Pagamento:{" "}
            <input defaultValue={entrega.pagamento} name="pagamento" onChange={modificandoInputs}/>
          </h3>

          <h3>
            Motorista:{" "}
            <input defaultValue={entrega.entregador} name="entregador" onChange={modificandoInputs}/>
          </h3>

          <div className={"".concat(sideBar_module_css_1.default.areaBotoesEditEntrega)}>
            <button onClick={function (ev) {
                var _a, _b, _c, _d;
                (_b = (_a = ev.currentTarget.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.classList.toggle(sideBar_module_css_1.default.areaBotoesEditFora);
                var cxEntrega = (_d = (_c = ev.currentTarget.parentElement) === null || _c === void 0 ? void 0 : _c.parentElement) === null || _d === void 0 ? void 0 : _d.parentElement;
                cxEntrega === null || cxEntrega === void 0 ? void 0 : cxEntrega.classList.toggle(sideBar_module_css_1.default.caixaEditando);
            }}>
              Cancelar
            </button>
            <button onClick={function () {
                console.log(dadosFormUpdate);
                if (entrega.id) {
                    var telaUpdateEntrega = document.getElementById(entrega.id);
                    var novosDadosDefinidos = {
                        id: entrega.id,
                        nome: (telaUpdateEntrega === null || telaUpdateEntrega === void 0 ? void 0 : telaUpdateEntrega.children[0].children[0]).value,
                        telefone: (telaUpdateEntrega === null || telaUpdateEntrega === void 0 ? void 0 : telaUpdateEntrega.children[1].children[0]).value,
                        cidade: (telaUpdateEntrega === null || telaUpdateEntrega === void 0 ? void 0 : telaUpdateEntrega.children[2].children[0]).value,
                        bairro: (telaUpdateEntrega === null || telaUpdateEntrega === void 0 ? void 0 : telaUpdateEntrega.children[3].children[0]).value,
                        rua: (telaUpdateEntrega === null || telaUpdateEntrega === void 0 ? void 0 : telaUpdateEntrega.children[4].children[0]).value,
                        numero: (telaUpdateEntrega === null || telaUpdateEntrega === void 0 ? void 0 : telaUpdateEntrega.children[5].children[0]).value,
                        valor: (telaUpdateEntrega === null || telaUpdateEntrega === void 0 ? void 0 : telaUpdateEntrega.children[6].children[0]).value,
                        pagamento: (telaUpdateEntrega === null || telaUpdateEntrega === void 0 ? void 0 : telaUpdateEntrega.children[7].children[0]).value,
                        entregador: (telaUpdateEntrega === null || telaUpdateEntrega === void 0 ? void 0 : telaUpdateEntrega.children[8].children[0]).value,
                        volume: (telaUpdateEntrega === null || telaUpdateEntrega === void 0 ? void 0 : telaUpdateEntrega.children[9].children[0]).value,
                        dia: entrega.dia,
                        coordenadas: entrega.coordenadas,
                    };
                    console.log(novosDadosDefinidos);
                    socket.emit("Atualizar Entrega", novosDadosDefinidos);
                }
            }}>
              Atualizar Entrega
            </button>
          </div>
        </div>
      </div>);
    });
}
var enviarMinhaMsgDisplay = function (entrega) { return __awaiter(void 0, void 0, void 0, function () {
    var meuDadoMsg;
    return __generator(this, function (_a) {
        console.log("Iniciando Mensagem Display");
        meuDadoMsg = {
            numero: "aaaa",
            mensagem: "\nOla, temos uma entrega indo at\u00E9 voc\u00EA.\nA entrega est\u00E1 no nome de:\n*".concat(entrega === null || entrega === void 0 ? void 0 : entrega.nome, "*\n\nO valor total do seu pedido \u00E9 de:\nR$ ").concat(entrega === null || entrega === void 0 ? void 0 : entrega.valor, "\n\nN\u00E3o se esque\u00E7a de receber nosso entregador, ele est\u00E1 ansioso em ver voc\u00EA com todos os seus novos produtinhos ").concat(String.fromCodePoint(0x1f60a), "\n\nEquipe Eco Clean agradece sua prefer\u00EAncia! \n    "),
        };
        console.log(meuDadoMsg);
        socket.emit("enviarMensagem", meuDadoMsg);
        return [2 /*return*/, meuDadoMsg];
    });
}); };
