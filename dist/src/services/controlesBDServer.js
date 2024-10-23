"use strict";
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
exports.default = autenticandoUsuario;
exports.todosUsuariosBd = todosUsuariosBd;
exports.atualizandoUsuarios = atualizandoUsuarios;
exports.todasEntregasBancoDados = todasEntregasBancoDados;
exports.entregasDoDia = entregasDoDia;
exports.atualziandoEntregas = atualziandoEntregas;
exports.deletandoEntrega = deletandoEntrega;
exports.todasEntregas = todasEntregas;
exports.meusClientes = meusClientes;
exports.todasEntregasRelatorio = todasEntregasRelatorio;
exports.todosClientes = todosClientes;
exports.criandoEntrega = criandoEntrega;
exports.criandoCliente = criandoCliente;
exports.atualizandoCliente = atualizandoCliente;
exports.deletandoCliente = deletandoCliente;
exports.todosUsuariosBanco = todosUsuariosBanco;
var conectandoClientes_1 = __importDefault(require("@/database/conectandoClientes"));
var conectandoEntregas_1 = __importDefault(require("@/database/conectandoEntregas"));
var conectUsers_1 = __importDefault(require("@/database/conectUsers"));
function autenticandoUsuario(dados) {
    return __awaiter(this, void 0, void 0, function () {
        var conexaoUsuarios, modeloUsuarios, usuarioEncontrado, todosUsuarios;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, conectUsers_1.default)()];
                case 1:
                    conexaoUsuarios = _a.sent();
                    modeloUsuarios = conexaoUsuarios.model("usuarios");
                    return [4 /*yield*/, modeloUsuarios.findOne({
                            userName: dados.userName,
                            senha: dados.senha,
                        })];
                case 2:
                    usuarioEncontrado = (_a.sent());
                    console.log(usuarioEncontrado.userName + " foi autenticado com Sucesso!");
                    return [4 /*yield*/, modeloUsuarios.find({})];
                case 3:
                    todosUsuarios = (_a.sent());
                    return [2 /*return*/, { usuarioLogado: usuarioEncontrado, todosUsuarios: todosUsuarios }];
            }
        });
    });
}
function todosUsuariosBd() {
    return __awaiter(this, void 0, void 0, function () {
        var conexaoUsuarios, modeloUsuarios, allUsers;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, conectUsers_1.default)()];
                case 1:
                    conexaoUsuarios = _a.sent();
                    modeloUsuarios = conexaoUsuarios.model("usuarios");
                    return [4 /*yield*/, modeloUsuarios.find({})];
                case 2:
                    allUsers = _a.sent();
                    console.log("Pegando todos usuários do banco de dados.");
                    return [2 /*return*/, allUsers];
            }
        });
    });
}
function atualizandoUsuarios(usuarioUppdate) {
    return __awaiter(this, void 0, void 0, function () {
        var conexaoUsuarios, modeloUsuarios, userEntregaBD;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, conectUsers_1.default)()];
                case 1:
                    conexaoUsuarios = _a.sent();
                    modeloUsuarios = conexaoUsuarios.model("usuarios");
                    return [4 /*yield*/, modeloUsuarios.updateOne({ userName: usuarioUppdate.userName }, // Encontra o documento pelo ID
                        {
                            $set: usuarioUppdate,
                        })];
                case 2:
                    userEntregaBD = _a.sent();
                    console.log("Status da atualização da coordenada do usuário: " +
                        userEntregaBD.acknowledged);
                    return [2 /*return*/];
            }
        });
    });
}
function todasEntregasBancoDados() {
    return __awaiter(this, void 0, void 0, function () {
        var conexaoEntregas, modeloEntregas, todasEntregas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, conectandoEntregas_1.default)()];
                case 1:
                    conexaoEntregas = _a.sent();
                    modeloEntregas = conexaoEntregas.model("entregas");
                    return [4 /*yield*/, modeloEntregas.find({})];
                case 2:
                    todasEntregas = _a.sent();
                    console.log("Pegando todas entregas do Banco de Dados.");
                    return [2 /*return*/, todasEntregas];
            }
        });
    });
}
var dataDeHoje = function () {
    // Obter a data de hoje
    var hoje = new Date();
    var diaHoje = hoje.getDate();
    var mesHoje = hoje.getMonth() + 1; // Janeiro é 0!
    var anoHoje = hoje.getFullYear();
    var dataHoje = [diaHoje, mesHoje, anoHoje];
    return dataHoje;
};
function entregasDoDia() {
    return __awaiter(this, void 0, void 0, function () {
        var dataHoje, conexaoEntregas, modeloEntregas, todasEntregas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dataHoje = dataDeHoje();
                    return [4 /*yield*/, (0, conectandoEntregas_1.default)()];
                case 1:
                    conexaoEntregas = _a.sent();
                    modeloEntregas = conexaoEntregas.model("entregas");
                    return [4 /*yield*/, modeloEntregas.find({
                            dia: dataHoje,
                        })];
                case 2:
                    todasEntregas = _a.sent();
                    console.log("Pegando todas entregas do Banco de Dados.");
                    return [2 /*return*/, todasEntregas];
            }
        });
    });
}
function atualziandoEntregas(entregaUpdate) {
    return __awaiter(this, void 0, void 0, function () {
        var dataHoje, connEntrega, modelEntrega, entregaGerada, userEntregaBD, minhasEntregas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(entregaUpdate);
                    dataHoje = dataDeHoje();
                    return [4 /*yield*/, (0, conectandoEntregas_1.default)()];
                case 1:
                    connEntrega = _a.sent();
                    modelEntrega = connEntrega.model("entregas");
                    entregaGerada = new modelEntrega(entregaUpdate);
                    return [4 /*yield*/, modelEntrega.updateOne({ id: entregaUpdate.id }, // Encontra o documento pelo ID
                        {
                            $set: entregaUpdate,
                        })];
                case 2:
                    userEntregaBD = _a.sent();
                    if (userEntregaBD.matchedCount === 0) {
                        console.log("Nenhum documento encontrado com esse ID.");
                    }
                    else if (userEntregaBD.modifiedCount === 0) {
                        console.log("Nenhuma modificação foi feita.");
                    }
                    else {
                        console.log("Documento atualizado com sucesso.");
                    }
                    return [4 /*yield*/, modelEntrega.find({
                            dia: dataHoje,
                        })];
                case 3:
                    minhasEntregas = _a.sent();
                    return [2 /*return*/, minhasEntregas];
            }
        });
    });
}
function deletandoEntrega(entregaDelete) {
    return __awaiter(this, void 0, void 0, function () {
        var dataHoje, connEntrega, modelEntrega, entregaGerada, retornoDel, minhasEntregas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dataHoje = dataDeHoje();
                    console.log(entregaDelete);
                    return [4 /*yield*/, (0, conectandoEntregas_1.default)()];
                case 1:
                    connEntrega = _a.sent();
                    modelEntrega = connEntrega.model("entregas");
                    entregaGerada = new modelEntrega(entregaDelete);
                    return [4 /*yield*/, modelEntrega.deleteOne({ id: entregaDelete.id })];
                case 2:
                    retornoDel = _a.sent();
                    if (retornoDel.deletedCount === 0) {
                        console.log("Entrega não encontrada");
                    }
                    return [4 /*yield*/, modelEntrega.find({
                            dia: dataHoje,
                        })];
                case 3:
                    minhasEntregas = _a.sent();
                    return [2 /*return*/, minhasEntregas];
            }
        });
    });
}
/***ADAPTANDO CLIENTE E ENTREGAS CONTEXT */
function todasEntregas() {
    return __awaiter(this, void 0, void 0, function () {
        var dataHoje, conexaoEntregas, modeloEntregas, todasEntregas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dataHoje = dataDeHoje();
                    return [4 /*yield*/, (0, conectandoEntregas_1.default)()];
                case 1:
                    conexaoEntregas = _a.sent();
                    modeloEntregas = conexaoEntregas.model("entregas");
                    return [4 /*yield*/, modeloEntregas.find({
                            dia: dataHoje,
                        })];
                case 2:
                    todasEntregas = _a.sent();
                    console.log("Pegando todas entregas do Banco de Dados.");
                    return [2 /*return*/, todasEntregas];
            }
        });
    });
}
function meusClientes() {
    return __awaiter(this, void 0, void 0, function () {
        var connClientes, modelClientes, todosClientes;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, conectandoClientes_1.default)()];
                case 1:
                    connClientes = _a.sent();
                    modelClientes = connClientes.model("clientesEco");
                    console.log("Clientes solicitados do banco de dados");
                    return [4 /*yield*/, modelClientes.find({})];
                case 2:
                    todosClientes = _a.sent();
                    return [2 /*return*/, todosClientes];
            }
        });
    });
}
function todasEntregasRelatorio() {
    return __awaiter(this, void 0, void 0, function () {
        var connEntrega, modelEntrega, entregasRelatorio;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, conectandoEntregas_1.default)()];
                case 1:
                    connEntrega = _a.sent();
                    modelEntrega = connEntrega.model("entregas");
                    console.log("Entregas solicitadas do banco de dados para relatorio");
                    return [4 /*yield*/, modelEntrega.find({})];
                case 2:
                    entregasRelatorio = _a.sent();
                    return [2 /*return*/, entregasRelatorio];
            }
        });
    });
}
function todosClientes() {
    return __awaiter(this, void 0, void 0, function () {
        var conexaoClientes, modeloClientes, todosClientes;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, conectandoClientes_1.default)()];
                case 1:
                    conexaoClientes = _a.sent();
                    modeloClientes = conexaoClientes.model("clientesEco");
                    return [4 /*yield*/, modeloClientes.find({})];
                case 2:
                    todosClientes = _a.sent();
                    console.log("Pegando todos os Clientes do Banco de Dados.");
                    return [2 /*return*/, todosClientes];
            }
        });
    });
}
function criandoEntrega(entrega) {
    return __awaiter(this, void 0, void 0, function () {
        var connEntrega, modelEntrega, entregaGerada, dataHoje, todasEntregas;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, conectandoEntregas_1.default)()];
                case 1:
                    connEntrega = _a.sent();
                    modelEntrega = connEntrega.model("entregas");
                    entregaGerada = new modelEntrega(entrega);
                    return [4 /*yield*/, entregaGerada.save().then(function () {
                            console.log("salvo com sucesso!");
                        })];
                case 2:
                    _a.sent();
                    dataHoje = dataDeHoje();
                    return [4 /*yield*/, modelEntrega.find({
                            dia: dataHoje,
                        })];
                case 3:
                    todasEntregas = _a.sent();
                    console.log("Pegando todas entregas do Banco de Dados.");
                    return [2 /*return*/, todasEntregas];
            }
        });
    });
}
function criandoCliente(cliente) {
    return __awaiter(this, void 0, void 0, function () {
        var connClientes, modelClientes, clienteGerado, todosClientes;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, conectandoClientes_1.default)()];
                case 1:
                    connClientes = _a.sent();
                    modelClientes = connClientes.model("entregas");
                    clienteGerado = new modelClientes(cliente);
                    return [4 /*yield*/, clienteGerado.save().then(function () {
                            console.log("salvo com sucesso!");
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, modelClientes.find({})];
                case 3:
                    todosClientes = _a.sent();
                    console.log("Pegando todos os Clientes do Banco de Dados.");
                    return [2 /*return*/, todosClientes];
            }
        });
    });
}
function atualizandoCliente(cliente) {
    return __awaiter(this, void 0, void 0, function () {
        var connClientes, modelClientes, clienteGerado, userCliente, todosClientes;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(cliente);
                    return [4 /*yield*/, (0, conectandoClientes_1.default)()];
                case 1:
                    connClientes = _a.sent();
                    modelClientes = connClientes.model("entregas");
                    clienteGerado = new modelClientes(cliente);
                    return [4 /*yield*/, clienteGerado.updateOne({ id: cliente.id }, // Encontra o documento pelo ID
                        {
                            $set: cliente,
                        })];
                case 2:
                    userCliente = _a.sent();
                    if (userCliente.matchedCount === 0) {
                        console.log("Nenhum documento encontrado com esse ID.");
                    }
                    else if (userCliente.modifiedCount === 0) {
                        console.log("Nenhuma modificação foi feita.");
                    }
                    else {
                        console.log("Documento atualizado com sucesso.");
                    }
                    return [4 /*yield*/, modelClientes.find({})];
                case 3:
                    todosClientes = _a.sent();
                    console.log("Pegando todos os Clientes do Banco de Dados.");
                    return [2 /*return*/, todosClientes];
            }
        });
    });
}
function deletandoCliente(cliente) {
    return __awaiter(this, void 0, void 0, function () {
        var connClientes, modelClientes, clienteGerado, retornoDel, todosClientes;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(cliente);
                    return [4 /*yield*/, (0, conectandoClientes_1.default)()];
                case 1:
                    connClientes = _a.sent();
                    modelClientes = connClientes.model("entregas");
                    clienteGerado = new modelClientes(cliente);
                    return [4 /*yield*/, clienteGerado.deleteOne({ id: cliente.id })];
                case 2:
                    retornoDel = _a.sent();
                    if (retornoDel.deletedCount === 0) {
                        console.log("Entrega não encontrada");
                    }
                    return [4 /*yield*/, modelClientes.find({})];
                case 3:
                    todosClientes = _a.sent();
                    console.log("Pegando todos os Clientes do Banco de Dados.");
                    return [2 /*return*/, todosClientes];
            }
        });
    });
}
function todosUsuariosBanco() {
    return __awaiter(this, void 0, void 0, function () {
        var conexaoUsuarios, modeloUsuarios, allUsers;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, conectUsers_1.default)()];
                case 1:
                    conexaoUsuarios = _a.sent();
                    modeloUsuarios = conexaoUsuarios.model("usuarios");
                    return [4 /*yield*/, modeloUsuarios.find({})];
                case 2:
                    allUsers = _a.sent();
                    console.log("Pegando todos usuários do banco de dados.");
                    return [2 /*return*/, allUsers];
            }
        });
    });
}
