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
exports.default = ClientesEntregas;
var telasFull_module_css_1 = __importDefault(require("@/styles/telasFull.module.css"));
var fadesSty_module_css_1 = __importDefault(require("@/styles/fades/fadesSty.module.css"));
var telasFull_module_css_2 = __importDefault(require("@/styles/telasFull.module.css"));
var md_1 = require("react-icons/md");
var tb_1 = require("react-icons/tb");
var fa_1 = require("react-icons/fa");
var md_2 = require("react-icons/md");
var fa_2 = require("react-icons/fa");
var io5_1 = require("react-icons/io5");
var react_1 = require("react");
var gi_1 = require("react-icons/gi");
var enderecoCoords_1 = require("@/utils/enderecoCoords");
var entregasClientesContext_1 = require("@/contexts/entregasClientesContext");
var contextoUsuario_1 = require("@/contexts/contextoUsuario");
var socketCliente_1 = __importDefault(require("@/socket/socketCliente"));
var controlerRotaClientes = true;
function ClientesEntregas() {
    var _this = this;
    var _a = (0, react_1.useContext)(entregasClientesContext_1.ContextEntregasClientes), todosClientes = _a.todosClientes, atualizandoClientes = _a.atualizandoClientes, atualizandoEntregas = _a.atualizandoEntregas;
    var socket = (0, socketCliente_1.default)();
    var usuarioLogado = (0, react_1.useContext)(contextoUsuario_1.contextAutenticacao).usuarioLogado;
    var _b = (0, react_1.useState)({
        valor: "",
        pagamento: "Dinheiro",
        entregador: "Marcos",
        volume: "Carro",
    }), editData = _b[0], setEditData = _b[1];
    var _c = (0, react_1.useState)({
        nome: "",
        telefone: "",
        cidade: "",
        bairro: "",
        rua: "",
        numero: "",
        coordenadas: {
            latitude: 0,
            longitude: 0,
        },
    }), selectCliente = _c[0], setSelectCliente = _c[1];
    var _d = (0, react_1.useState)({
        nome: "",
        telefone: "",
        cidade: "",
        bairro: "",
        rua: "",
        numero: "",
        coordenadas: {
            latitude: 0,
            longitude: 0,
        },
    }), dadosNovosClientes = _d[0], setDadosNovosClientes = _d[1];
    var telaEditClient = (0, react_1.useRef)(null);
    var telaFullClient = (0, react_1.useRef)(null);
    var areaClientes = (0, react_1.useRef)(null);
    var fechandoTela = function () {
        if (telaFullClient.current) {
            var fundoFosco_1 = telaFullClient.current;
            var infsClientEl = fundoFosco_1.children[0].children[1].children[0];
            var entregaClientEl = fundoFosco_1.children[0].children[1].children[1];
            var buttonClientEl = fundoFosco_1.children[0].children[1].children[2];
            var sideBar = fundoFosco_1.children[0].children[2];
            /**O formulario inicialmente recebera a classe "esfumaçandoParaCima" */
            // formCliente.classList.toggle(estilo.esfumacandoCima);
            infsClientEl.classList.toggle(fadesSty_module_css_1.default.saiEsquerda);
            entregaClientEl.classList.toggle(fadesSty_module_css_1.default.saiDireita);
            buttonClientEl.classList.toggle(fadesSty_module_css_1.default.saiBaixo);
            sideBar.classList.toggle(fadesSty_module_css_1.default.saiBaixo);
            /**Depois de aguardar 2 segundos, o fundo do formulário deve receber a classe "saiFundoTela" */
            setTimeout(function () {
                fundoFosco_1.classList.toggle(telasFull_module_css_1.default.retiraNaEsquerda);
            }, 300);
        }
    };
    var removendoCheckedClientese = function () {
        if (areaClientes.current) {
            var clientesElements = areaClientes.current.children;
            for (var i = 0; i < clientesElements.length; i++) {
                clientesElements[i].classList.remove(telasFull_module_css_1.default.areaClientesSelecionado);
            }
        }
    };
    var abrindoTelaNovoCliente = function () {
        var telaFundorForm = document.querySelector("#telaNovoClientesForm");
        if (telaFundorForm) {
            var infsCliente_1 = telaFundorForm.children[0].children[0].children[0];
            var infsEntrega_1 = telaFundorForm.children[0].children[0].children[1];
            var sideBar_1 = telaFundorForm.children[0].children[1];
            telaFundorForm.classList.toggle(telasFull_module_css_2.default.retiraNaEsquerda);
            setTimeout(function () {
                infsCliente_1.classList.toggle(fadesSty_module_css_1.default.saiEsquerda);
                infsEntrega_1.classList.toggle(fadesSty_module_css_1.default.saiCima);
                sideBar_1.classList.toggle(fadesSty_module_css_1.default.saiBaixo);
            }, 300);
        }
    };
    var modificandoInputs = function (event) {
        var _a;
        setEditData(__assign(__assign({}, editData), (_a = {}, _a[event.target.name] = event.target.value, _a)));
    };
    var genrandoEntrega = function () { return __awaiter(_this, void 0, void 0, function () {
        var endereco, diaAtual, coordenadas, entregaNova;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("iniciando processo de gerar entrega...");
                    endereco = "".concat(selectCliente.cidade, ", ").concat(selectCliente.bairro, ", ").concat(selectCliente.rua, ", ").concat(selectCliente.numero);
                    diaAtual = (0, enderecoCoords_1.gerandoDia)();
                    return [4 /*yield*/, (0, enderecoCoords_1.end4Coords)(endereco)];
                case 1:
                    coordenadas = _a.sent();
                    entregaNova = {
                        dia: diaAtual,
                        nome: selectCliente.nome,
                        status: "Disponível",
                        telefone: selectCliente.telefone,
                        cidade: selectCliente.cidade,
                        bairro: selectCliente.bairro,
                        rua: selectCliente.rua,
                        numero: selectCliente.numero,
                        coordenadas: {
                            latitude: coordenadas[0],
                            longitude: coordenadas[1],
                        },
                        valor: editData.valor,
                        pagamento: editData.pagamento,
                        entregador: editData.entregador,
                        volume: editData.volume,
                    };
                    socket.emit("Criar Entrega", entregaNova);
                    console.log("Entrega montada");
                    return [2 /*return*/];
            }
        });
    }); };
    var modificandoClientesInfs = function (event) {
        var _a;
        setDadosNovosClientes(__assign(__assign({}, dadosNovosClientes), (_a = {}, _a[event.target.name] = event.target.value, _a)));
    };
    var alternandoEditClientTela = function () { return __awaiter(_this, void 0, void 0, function () {
        var editTela, editTelaInps;
        return __generator(this, function (_a) {
            if (telaEditClient.current) {
                editTela = telaEditClient.current;
                editTelaInps = editTela.children[1];
                editTela.classList.toggle(telasFull_module_css_1.default.telaInfAbertoEdit);
                editTelaInps.classList.toggle(telasFull_module_css_1.default.telaEditClienteFora);
            }
            return [2 /*return*/];
        });
    }); };
    (0, react_1.useEffect)(function () {
        if (controlerRotaClientes) {
            controlerRotaClientes = false;
            atualizandoClientes();
        }
        if (todosClientes) {
            console.log("Ouvindo modificações nos clientes, atualizado: ", todosClientes.length + " clientes.");
        }
    }, [todosClientes, usuarioLogado]);
    return (<>
      {(usuarioLogado === null || usuarioLogado === void 0 ? void 0 : usuarioLogado.userName) === "Administradores" && (<>
          <div className={"".concat(telasFull_module_css_1.default.retiraNaEsquerda, " ").concat(telasFull_module_css_1.default.telaFullUsuario)} ref={telaFullClient} id="telaClientesForm">
            <div className={"".concat(telasFull_module_css_1.default.areaForm)}>
              {/* Sessão responsável por exibir os clientes disponíves no bd para entrega */}
              <div className={telasFull_module_css_1.default.escolhaClienteComp}>
                <div className={telasFull_module_css_1.default.areaBuscaCliente}>
                  <input type="text" placeholder="Encontrar cliente"/>
                  <button>
                    <md_1.MdFindReplace className="inline-block size-10"/> Pesquisar
                  </button>
                </div>

                <div className={telasFull_module_css_1.default.areaClientes} ref={areaClientes}>
                  {todosClientes === null || todosClientes === void 0 ? void 0 : todosClientes.map(function (cliente) {
                return (<p key={cliente.nome + cliente.id} onClick={function (ev) {
                        removendoCheckedClientese();
                        ev.currentTarget.classList.toggle(telasFull_module_css_1.default.areaClientesSelecionado);
                        setSelectCliente(cliente);
                        setDadosNovosClientes(cliente);
                    }}>
                        {cliente.nome}
                        <span className={"".concat(telasFull_module_css_1.default.iconeCheckedCliente)}>
                          <gi_1.GiConfirmed />
                        </span>
                      </p>);
            })}
                </div>
              </div>

              <div className={"".concat(telasFull_module_css_1.default.clienteTelaInform)}>
                <div className={"".concat(fadesSty_module_css_1.default.saiEsquerda, " ").concat(telasFull_module_css_1.default.telaInformsCliente)} ref={telaEditClient}>
                  <div>
                    <h3>Informações do cliente:</h3>
                    <p>Nome: {selectCliente.nome}</p>
                    <p>Cidade: {selectCliente.cidade}</p>
                    <p>Bairro: {selectCliente.bairro}</p>
                    <p>Rua: {selectCliente.rua}</p>
                    <p>Número: {selectCliente.numero}</p>
                  </div>
                  {/* Essa div aqui contem porta todas as modificações que podem ser feitas em um cliente do banco de dados */}
                  <div className={"".concat(telasFull_module_css_1.default.telaEditClienteFora, " ").concat(telasFull_module_css_1.default.telaEditCliente)}>
                    <form onSubmit={function (ev) {
                ev.preventDefault();
            }}>
                      <h3 className={telasFull_module_css_2.default.tituloEdit}>
                        Editando dados do Cliente:
                      </h3>
                      <h3>
                        Nome:{" "}
                        <input type="text" name="nome" defaultValue={dadosNovosClientes.nome} onChange={modificandoClientesInfs}/>
                      </h3>
                      <h3>
                        Telefone:{" "}
                        <input type="text" name="telefone" defaultValue={dadosNovosClientes.telefone} onChange={modificandoClientesInfs}/>
                      </h3>
                      <h3>
                        Cidade:{" "}
                        <input type="text" name="cidade" defaultValue={dadosNovosClientes.cidade} onChange={modificandoClientesInfs}/>
                      </h3>
                      <h3>
                        Bairro:{" "}
                        <input type="text" name="bairro" defaultValue={dadosNovosClientes.bairro} onChange={modificandoClientesInfs}/>
                      </h3>
                      <h3>
                        Rua:{" "}
                        <input type="text" name="rua" defaultValue={dadosNovosClientes.rua} onChange={modificandoClientesInfs}/>
                      </h3>
                      <h3>
                        Número:{" "}
                        <input type="text" name="numero" defaultValue={dadosNovosClientes.numero} onChange={modificandoClientesInfs}/>
                      </h3>
                      <div className={telasFull_module_css_1.default.areaButtonsUpdateUser}>
                        <button onClick={function () {
                alternandoEditClientTela();
            }}>
                          Cancelar
                        </button>
                        <button onClick={function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    console.log(selectCliente);
                    socket.emit("Atualizar Cliente", dadosNovosClientes);
                    return [2 /*return*/];
                });
            }); }}>
                          Atualizar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* Aqui é onde fica o botão para gerar a entrega com todas as informações do formulário preenchidas */}
                <div className={"".concat(fadesSty_module_css_1.default.saiDireita, " ").concat(telasFull_module_css_1.default.areaInformsEntrega)}>
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
                {/* Aqui esta o botão para gerar a entrega do cliente */}
                <button className={"".concat(fadesSty_module_css_1.default.saiBaixo, " ").concat(telasFull_module_css_1.default.botaoGerarEntregaCliente)} onClick={function () {
                genrandoEntrega();
            }}>
                  GERAR ROTA DE ENTREGA
                  <tb_1.TbTruckDelivery className="size-10 absolute right-1"/>
                </button>
              </div>

              <div className={"".concat(fadesSty_module_css_1.default.saiBaixo, " ").concat(telasFull_module_css_1.default.navLateral)}>
                <button onClick={function (ev) {
                console.log("Clique para fechar ");
                fechandoTela();
            }}>
                  <fa_1.FaRegWindowClose className={telasFull_module_css_1.default.fecharTela}/>
                </button>

                <button onClick={function () {
                socket.emit("Deletar Cliente", selectCliente);
            }}>
                  <md_2.MdOutlineGroupRemove />
                </button>

                <button onClick={function () {
                alternandoEditClientTela();
            }}>
                  <fa_2.FaUserEdit />
                </button>

                <button onClick={function () {
                fechandoTela();
                setTimeout(function () {
                    abrindoTelaNovoCliente();
                }, 500);
            }}>
                  <io5_1.IoPersonAdd />
                </button>
              </div>
            </div>
          </div>
        </>)}
    </>);
}
