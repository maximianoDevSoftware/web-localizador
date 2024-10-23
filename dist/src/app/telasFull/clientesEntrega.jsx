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
import estilo from "@/styles/telasFull.module.css";
import estiloFade from "@/styles/fades/fadesSty.module.css";
import estiloFullCliente from "@/styles/telasFull.module.css";
import { MdFindReplace } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegWindowClose } from "react-icons/fa";
import { MdOutlineGroupRemove } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import { useContext, useEffect, useRef, useState } from "react";
import { GiConfirmed } from "react-icons/gi";
import { end4Coords, gerandoDia } from "@/utils/enderecoCoords";
import { ContextEntregasClientes } from "@/contexts/entregasClientesContext";
import { contextAutenticacao } from "@/contexts/contextoUsuario";
import getSocket from "@/socket/socketCliente";
var controlerRotaClientes = true;
export default function ClientesEntregas() {
    var _this = this;
    var _a = useContext(ContextEntregasClientes), todosClientes = _a.todosClientes, atualizandoClientes = _a.atualizandoClientes, atualizandoEntregas = _a.atualizandoEntregas;
    var socket = getSocket();
    var usuarioLogado = useContext(contextAutenticacao).usuarioLogado;
    var _b = useState({
        valor: "",
        pagamento: "Dinheiro",
        entregador: "Marcos",
        volume: "Carro",
    }), editData = _b[0], setEditData = _b[1];
    var _c = useState({
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
    var _d = useState({
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
    var telaEditClient = useRef(null);
    var telaFullClient = useRef(null);
    var areaClientes = useRef(null);
    var fechandoTela = function () {
        if (telaFullClient.current) {
            var fundoFosco_1 = telaFullClient.current;
            var infsClientEl = fundoFosco_1.children[0].children[1].children[0];
            var entregaClientEl = fundoFosco_1.children[0].children[1].children[1];
            var buttonClientEl = fundoFosco_1.children[0].children[1].children[2];
            var sideBar = fundoFosco_1.children[0].children[2];
            /**O formulario inicialmente recebera a classe "esfumaçandoParaCima" */
            // formCliente.classList.toggle(estilo.esfumacandoCima);
            infsClientEl.classList.toggle(estiloFade.saiEsquerda);
            entregaClientEl.classList.toggle(estiloFade.saiDireita);
            buttonClientEl.classList.toggle(estiloFade.saiBaixo);
            sideBar.classList.toggle(estiloFade.saiBaixo);
            /**Depois de aguardar 2 segundos, o fundo do formulário deve receber a classe "saiFundoTela" */
            setTimeout(function () {
                fundoFosco_1.classList.toggle(estilo.retiraNaEsquerda);
            }, 300);
        }
    };
    var removendoCheckedClientese = function () {
        if (areaClientes.current) {
            var clientesElements = areaClientes.current.children;
            for (var i = 0; i < clientesElements.length; i++) {
                clientesElements[i].classList.remove(estilo.areaClientesSelecionado);
            }
        }
    };
    var abrindoTelaNovoCliente = function () {
        var telaFundorForm = document.querySelector("#telaNovoClientesForm");
        if (telaFundorForm) {
            var infsCliente_1 = telaFundorForm.children[0].children[0].children[0];
            var infsEntrega_1 = telaFundorForm.children[0].children[0].children[1];
            var sideBar_1 = telaFundorForm.children[0].children[1];
            telaFundorForm.classList.toggle(estiloFullCliente.retiraNaEsquerda);
            setTimeout(function () {
                infsCliente_1.classList.toggle(estiloFade.saiEsquerda);
                infsEntrega_1.classList.toggle(estiloFade.saiCima);
                sideBar_1.classList.toggle(estiloFade.saiBaixo);
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
                    diaAtual = gerandoDia();
                    return [4 /*yield*/, end4Coords(endereco)];
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
                editTela.classList.toggle(estilo.telaInfAbertoEdit);
                editTelaInps.classList.toggle(estilo.telaEditClienteFora);
            }
            return [2 /*return*/];
        });
    }); };
    useEffect(function () {
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
          <div className={"".concat(estilo.retiraNaEsquerda, " ").concat(estilo.telaFullUsuario)} ref={telaFullClient} id="telaClientesForm">
            <div className={"".concat(estilo.areaForm)}>
              {/* Sessão responsável por exibir os clientes disponíves no bd para entrega */}
              <div className={estilo.escolhaClienteComp}>
                <div className={estilo.areaBuscaCliente}>
                  <input type="text" placeholder="Encontrar cliente"/>
                  <button>
                    <MdFindReplace className="inline-block size-10"/> Pesquisar
                  </button>
                </div>

                <div className={estilo.areaClientes} ref={areaClientes}>
                  {todosClientes === null || todosClientes === void 0 ? void 0 : todosClientes.map(function (cliente) {
                return (<p key={cliente.nome + cliente.id} onClick={function (ev) {
                        removendoCheckedClientese();
                        ev.currentTarget.classList.toggle(estilo.areaClientesSelecionado);
                        setSelectCliente(cliente);
                        setDadosNovosClientes(cliente);
                    }}>
                        {cliente.nome}
                        <span className={"".concat(estilo.iconeCheckedCliente)}>
                          <GiConfirmed />
                        </span>
                      </p>);
            })}
                </div>
              </div>

              <div className={"".concat(estilo.clienteTelaInform)}>
                <div className={"".concat(estiloFade.saiEsquerda, " ").concat(estilo.telaInformsCliente)} ref={telaEditClient}>
                  <div>
                    <h3>Informações do cliente:</h3>
                    <p>Nome: {selectCliente.nome}</p>
                    <p>Cidade: {selectCliente.cidade}</p>
                    <p>Bairro: {selectCliente.bairro}</p>
                    <p>Rua: {selectCliente.rua}</p>
                    <p>Número: {selectCliente.numero}</p>
                  </div>
                  {/* Essa div aqui contem porta todas as modificações que podem ser feitas em um cliente do banco de dados */}
                  <div className={"".concat(estilo.telaEditClienteFora, " ").concat(estilo.telaEditCliente)}>
                    <form onSubmit={function (ev) {
                ev.preventDefault();
            }}>
                      <h3 className={estiloFullCliente.tituloEdit}>
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
                      <div className={estilo.areaButtonsUpdateUser}>
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
                <div className={"".concat(estiloFade.saiDireita, " ").concat(estilo.areaInformsEntrega)}>
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
                <button className={"".concat(estiloFade.saiBaixo, " ").concat(estilo.botaoGerarEntregaCliente)} onClick={function () {
                genrandoEntrega();
            }}>
                  GERAR ROTA DE ENTREGA
                  <TbTruckDelivery className="size-10 absolute right-1"/>
                </button>
              </div>

              <div className={"".concat(estiloFade.saiBaixo, " ").concat(estilo.navLateral)}>
                <button onClick={function (ev) {
                console.log("Clique para fechar ");
                fechandoTela();
            }}>
                  <FaRegWindowClose className={estilo.fecharTela}/>
                </button>

                <button onClick={function () {
                socket.emit("Deletar Cliente", selectCliente);
            }}>
                  <MdOutlineGroupRemove />
                </button>

                <button onClick={function () {
                alternandoEditClientTela();
            }}>
                  <FaUserEdit />
                </button>

                <button onClick={function () {
                fechandoTela();
                setTimeout(function () {
                    abrindoTelaNovoCliente();
                }, 500);
            }}>
                  <IoPersonAdd />
                </button>
              </div>
            </div>
          </div>
        </>)}
    </>);
}
