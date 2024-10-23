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
Object.defineProperty(exports, "__esModule", { value: true });
exports.conexoesSocket = conexoesSocket;
var controlesBDServer_1 = __importStar(require("./controlesBDServer"));
function conexoesSocket(io) {
    var _this = this;
    io.on("connection", function (socket) {
        console.log("Cliente conectado, seu socket foi criado com sucesso.");
        socket.on("Autenticar Usuario", function (usuario) {
            console.log("Um usuário tentando logar...");
            console.log(usuario);
            (0, controlesBDServer_1.default)(usuario).then(function (objetoAutenticate) {
                console.log("Usuario autenticado pronto para uso");
                socket.emit("Usuario Autenticado", objetoAutenticate.usuarioLogado);
            });
        });
        socket.on("Desconectar Usuario", function () {
            socket.disconnect();
            console.log("Um usuário abandonou a conexão");
        });
        socket.on("Buscar Entregas", function (callBack) { return __awaiter(_this, void 0, void 0, function () {
            var minhasEntregas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, controlesBDServer_1.entregasDoDia)()];
                    case 1:
                        minhasEntregas = _a.sent();
                        callBack(minhasEntregas);
                        return [2 /*return*/];
                }
            });
        }); });
        socket.on("Buscar Clientes", function (callBack) { return __awaiter(_this, void 0, void 0, function () {
            var meusClientes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, controlesBDServer_1.todosClientes)()];
                    case 1:
                        meusClientes = _a.sent();
                        callBack(meusClientes);
                        return [2 /*return*/];
                }
            });
        }); });
        socket.on("Buscar Entregas Relatorio", function (retorno) { return __awaiter(_this, void 0, void 0, function () {
            var todasEntregasRel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, controlesBDServer_1.todasEntregasRelatorio)()];
                    case 1:
                        todasEntregasRel = _a.sent();
                        retorno(todasEntregasRel);
                        return [2 /*return*/];
                }
            });
        }); });
        socket.on("Atualizar Entrega", function (entregaUpdate) { return __awaiter(_this, void 0, void 0, function () {
            var todasEntregas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, controlesBDServer_1.atualziandoEntregas)(entregaUpdate)];
                    case 1:
                        todasEntregas = _a.sent();
                        socket.emit("Entregas Atualizadas", todasEntregas);
                        return [2 /*return*/];
                }
            });
        }); });
        socket.on("Deletar Entrega", function (entregaDelete) { return __awaiter(_this, void 0, void 0, function () {
            var todasEntregas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, controlesBDServer_1.deletandoEntrega)(entregaDelete)];
                    case 1:
                        todasEntregas = _a.sent();
                        socket.emit("Entregas Atualizadas", todasEntregas);
                        return [2 /*return*/];
                }
            });
        }); });
        // socket.on("Mensagem Chegada Cliente", (dadosMensagem) => {
        //   enviandoMensagem(dadosMensagem);
        // });
        // socket.on("Localizacao Entrega", (dadosObj) => {
        //   localzacaoEntrega(dadosObj.entrega, dadosObj.dadosMensagem);
        // });
        socket.on("Criar Entrega", function (entregaGerada) { return __awaiter(_this, void 0, void 0, function () {
            var todasEntregas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, controlesBDServer_1.criandoEntrega)(entregaGerada)];
                    case 1:
                        todasEntregas = _a.sent();
                        socket.emit("Entregas Atualizadas", todasEntregas);
                        return [2 /*return*/];
                }
            });
        }); });
        socket.on("Criar Cliente", function (clienteGerado) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, controlesBDServer_1.criandoCliente)(clienteGerado)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        socket.on("Alterar Cliente", function (clienteUpdate) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, controlesBDServer_1.atualizandoCliente)(clienteUpdate)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        socket.on("Deletar Cliente", function (clienteDelete) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, controlesBDServer_1.deletandoCliente)(clienteDelete)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        socket.on("Localizar Entregador", function (usuario) {
            console.log("Usuário conectando localização pelo socket");
            var usuarioAtualizado = usuario;
            console.log("Emitindo localizando-motoristas com: ", usuarioAtualizado);
            socket.emit("localizando-motoristas", usuarioAtualizado);
        });
        socket.on("solicitar-usuarios", function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                (0, controlesBDServer_1.todosUsuariosBanco)().then(function (dados) {
                    socket.emit("todos-usuarios", dados);
                });
                return [2 /*return*/];
            });
        }); });
        socket.on("Informar Admnistrador Localização", function () { });
    });
}
