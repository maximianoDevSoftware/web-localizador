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
exports.default = NovoClienteEntregas;
var telasFull_module_css_1 = __importDefault(require("@/styles/telasFull.module.css"));
var fadesSty_module_css_1 = __importDefault(require("@/styles/fades/fadesSty.module.css"));
var telasFull_module_css_2 = __importDefault(require("@/styles/telasFull.module.css"));
var fa_1 = require("react-icons/fa");
var io5_1 = require("react-icons/io5");
var react_1 = require("react");
var tb_1 = require("react-icons/tb");
var fa6_1 = require("react-icons/fa6");
var enderecoCoords_1 = require("@/utils/enderecoCoords");
var entregasClientesContext_1 = require("@/contexts/entregasClientesContext");
var contextoUsuario_1 = require("@/contexts/contextoUsuario");
var socketCliente_1 = __importDefault(require("@/socket/socketCliente"));
function NovoClienteEntregas() {
    var _this = this;
    var _a = (0, react_1.useContext)(entregasClientesContext_1.ContextEntregasClientes), atualizandoClientes = _a.atualizandoClientes, atualizandoEntregas = _a.atualizandoEntregas;
    var usuarioLogado = (0, react_1.useContext)(contextoUsuario_1.contextAutenticacao).usuarioLogado;
    var telaFullClient = (0, react_1.useRef)(null);
    var _b = (0, react_1.useState)({
        nome: "",
        cidade: "",
        telefone: "",
        bairro: "",
        rua: "",
        numero: "",
        valor: "",
        pagamento: "Dinheiro",
        entregador: "Marcos",
        volume: "Carro",
    }), formData = _b[0], setFormData = _b[1];
    var socket = (0, socketCliente_1.default)();
    var modificandoInputs = function (event) {
        var _a;
        setFormData(__assign(__assign({}, formData), (_a = {}, _a[event.target.name] = event.target.value, _a)));
    };
    var genrandoEntrega = function (ev) { return __awaiter(_this, void 0, void 0, function () {
        var endereco, coordenadas, diaAtual, entregaNova;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    console.log("iniciando processo de gerar entrega...");
                    endereco = "".concat(formData.cidade, ", ").concat(formData.bairro, ", ").concat(formData.rua, ", ").concat(formData.numero);
                    return [4 /*yield*/, (0, enderecoCoords_1.end4Coords)(endereco)];
                case 1:
                    coordenadas = _a.sent();
                    diaAtual = (0, enderecoCoords_1.gerandoDia)();
                    entregaNova = {
                        dia: diaAtual,
                        nome: formData.nome,
                        telefone: formData.telefone,
                        cidade: formData.cidade,
                        status: "Disponível",
                        bairro: formData.bairro,
                        rua: formData.rua,
                        numero: formData.numero,
                        coordenadas: {
                            latitude: coordenadas[0],
                            longitude: coordenadas[1],
                        },
                        valor: formData.valor,
                        pagamento: formData.pagamento,
                        entregador: formData.entregador,
                        volume: formData.volume,
                    };
                    socket.emit("Criar Entrega", entregaNova);
                    console.log(formData);
                    return [2 /*return*/];
            }
        });
    }); };
    var adicionarCliente = function () { return __awaiter(_this, void 0, void 0, function () {
        var endereco, coordenadas, clienteNovo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("iniciando processo de adicionar cliente...");
                    endereco = "".concat(formData.cidade, ", ").concat(formData.bairro, ", ").concat(formData.rua, ", ").concat(formData.numero);
                    return [4 /*yield*/, (0, enderecoCoords_1.end4Coords)(endereco)];
                case 1:
                    coordenadas = _a.sent();
                    clienteNovo = {
                        nome: formData.nome,
                        telefone: formData.telefone,
                        cidade: formData.cidade,
                        bairro: formData.bairro,
                        rua: formData.rua,
                        numero: formData.numero,
                        coordenadas: {
                            latitude: coordenadas[0],
                            longitude: coordenadas[1],
                        },
                    };
                    socket.emit("Criar Cliente", clienteNovo);
                    return [2 /*return*/];
            }
        });
    }); };
    /**********************          FUNÇOES DE ESTILIZAÇÃO E INTERAÇÃO */
    var fechandoTela = function () {
        if (telaFullClient.current) {
            var fundoFosco_1 = telaFullClient.current;
            var infsCliente = fundoFosco_1.children[0].children[0].children[0];
            var infsEntrega = fundoFosco_1.children[0].children[0].children[1];
            var sideBar = fundoFosco_1.children[0].children[1];
            /**O formulario inicialmente recebera a classe "esfumaçandoParaCima" */
            infsCliente.classList.toggle(fadesSty_module_css_1.default.saiEsquerda);
            infsEntrega.classList.toggle(fadesSty_module_css_1.default.saiCima);
            sideBar.classList.toggle(fadesSty_module_css_1.default.saiBaixo);
            /**Depois de aguardar 2 segundos, o fundo do formulário deve receber a classe "saiFundoTela" */
            setTimeout(function () {
                fundoFosco_1.classList.toggle(telasFull_module_css_1.default.retiraNaEsquerda);
            }, 300);
        }
    };
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
            telaFundorForm.classList.toggle(telasFull_module_css_2.default.retiraNaEsquerda);
            setTimeout(function () {
                // formCliente.classList.toggle(estiloFullCliente.esfumacandoCima);
                infsClientEl.classList.toggle(fadesSty_module_css_1.default.saiEsquerda);
                entregaClientEl.classList.toggle(fadesSty_module_css_1.default.saiDireita);
                buttonClientEl.classList.toggle(fadesSty_module_css_1.default.saiBaixo);
                sideBar.classList.toggle(fadesSty_module_css_1.default.saiBaixo);
            }, 500);
        }
    };
    (0, react_1.useEffect)(function () { }, [usuarioLogado]);
    return (<>
      {(usuarioLogado === null || usuarioLogado === void 0 ? void 0 : usuarioLogado.userName) === "Administradores" && (<div className={"".concat(telasFull_module_css_1.default.retiraNaEsquerda, "  ").concat(telasFull_module_css_1.default.telaFullUsuario)} ref={telaFullClient} id="telaNovoClientesForm">
          <div className={"".concat(telasFull_module_css_1.default.areaForm)}>
            {/* Sessão responsável por exibir os clientes disponíves no bd para entrega */}

            <form className={"".concat(telasFull_module_css_1.default.formNovoCliente)} onSubmit={function (ev) {
                genrandoEntrega(ev);
            }}>
              <div className={"".concat(fadesSty_module_css_1.default.saiEsquerda, " ").concat(telasFull_module_css_1.default.areaInformsCliente)}>
                <h2 className={"".concat(telasFull_module_css_1.default.tituloArea)}>
                  Informações do cliente:
                </h2>
                <h3>
                  Nome:{" "}
                  <input type="text" name="nome" onChange={modificandoInputs}/>
                </h3>

                <h3>
                  Telefone:{" "}
                  <input type="text" name="telefone" placeholder="(41) 9999-9999" onChange={modificandoInputs}/>
                </h3>

                <h3>
                  Cidade:{" "}
                  <input type="text" name="cidade" onChange={modificandoInputs}/>
                </h3>

                <h3>
                  Bairro:{" "}
                  <input type="text" name="bairro" onChange={modificandoInputs}/>
                </h3>

                <h3>
                  Rua:{" "}
                  <input type="text" name="rua" onChange={modificandoInputs}/>
                </h3>
                <h3>
                  Número:{" "}
                  <input type="text" name="numero" onChange={modificandoInputs}/>
                </h3>
              </div>

              <div className={"".concat(fadesSty_module_css_1.default.saiCima, " ").concat(telasFull_module_css_1.default.areaEntregaInfosNC)}>
                <div className={"".concat(telasFull_module_css_1.default.areaInformsEntrega)}>
                  <h3>Informações da entrega:</h3>
                  <p>
                    Valor:{" "}
                    <input type="text" placeholder="R$ 278,90" name="valor" onChange={modificandoInputs}/>
                  </p>
                  <p>
                    Pagamento:{" "}
                    <select name="pagamento" onChange={modificandoInputs}>
                      <option value="Dinheiro">Dinheiro</option>
                      <option value="Cartão">Cartão</option>
                      <option value="Pix">Pix</option>
                      <option value="Boleto">Boleto</option>
                      <option value='"Vou lembrar dessa..."'>
                        "Vou lembrar dessa..."
                      </option>
                    </select>
                  </p>
                  <p>
                    Entregador:{" "}
                    <select name="entregador" onChange={modificandoInputs}>
                      <option value="Marcos">Marcos</option>
                      <option value="Uene">Uene</option>
                      <option value="Leo">Leo</option>
                    </select>
                  </p>
                  <p>
                    Volume:{" "}
                    <select name="volume" onChange={modificandoInputs}>
                      <option value="Carro">Carro</option>
                      <option value="Moto">Moto</option>
                    </select>
                  </p>
                </div>

                <button className={"".concat(telasFull_module_css_1.default.botaoGerarEntregaCliente)} type="submit">
                  GERAR ROTA DE ENTREGA
                  <tb_1.TbTruckDelivery className="size-10 absolute right-1"/>
                </button>
              </div>
            </form>

            <div className={"".concat(fadesSty_module_css_1.default.saiBaixo, " ").concat(telasFull_module_css_1.default.navLateral)}>
              <button onClick={function (ev) {
                console.log("Clique para fechar ");
                fechandoTela();
            }}>
                <fa_1.FaRegWindowClose className={telasFull_module_css_1.default.fecharTela}/>
              </button>

              <div className={"".concat(telasFull_module_css_1.default.buttonDiv, " ").concat(telasFull_module_css_1.default.adcClienteNewForm)} onClick={adicionarCliente}>
                <io5_1.IoPersonAdd />
              </div>

              <div className={"".concat(telasFull_module_css_1.default.buttonDiv, " ").concat(telasFull_module_css_1.default.buscaClienteNewForm)} onClick={function () {
                fechandoTela();
                setTimeout(function () {
                    abrindoTelaClientes();
                }, 800);
            }}>
                <fa6_1.FaUsersViewfinder />
              </div>
            </div>
          </div>
        </div>)}
    </>);
}
