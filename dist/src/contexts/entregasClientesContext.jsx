"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextEntregasClientes = void 0;
exports.EntregasClientesProvedor = EntregasClientesProvedor;
var react_1 = require("react");
var contextoUsuario_1 = require("./contextoUsuario");
var socketCliente_1 = __importDefault(require("@/socket/socketCliente"));
exports.ContextEntregasClientes = (0, react_1.createContext)({});
function EntregasClientesProvedor(_a) {
    var children = _a.children;
    /**Defininindo os states que poderão ser posteriormente acessados */
    var usuarioLogado = (0, react_1.useContext)(contextoUsuario_1.contextAutenticacao).usuarioLogado;
    var _b = (0, react_1.useState)(), entregasDia = _b[0], setEntregasDia = _b[1];
    var _c = (0, react_1.useState)(), entregasAndamento = _c[0], setEntregasAndamento = _c[1];
    var _d = (0, react_1.useState)(), entregasConcluidas = _d[0], setEntregasConcluidas = _d[1];
    var _e = (0, react_1.useState)(), todosClientes = _e[0], setTodosClientes = _e[1];
    var _f = (0, react_1.useState)(), entregasRelatorio = _f[0], setEntregasRelatorio = _f[1];
    var _g = (0, react_1.useState)(), rotaEntregasMarcos = _g[0], setRotaEntregaMarcos = _g[1];
    var _h = (0, react_1.useState)(), rotaEntregasUene = _h[0], setRotaEntregaUene = _h[1];
    var _j = (0, react_1.useState)(), rotaEntregasLeo = _j[0], setRotaEntregaLeo = _j[1];
    var _k = (0, react_1.useState)(), rotaEntregasJoao = _k[0], setRotaEntregaJoao = _k[1];
    var socket = (0, socketCliente_1.default)();
    var atualizandoEntregas = function () {
        socket.emit("Buscar Entregas", function (response) {
            if (response) {
                var todasEntregas = response;
                console.log(todasEntregas);
                var dataEntregasDisponiveis = todasEntregas.filter(function (entrega) { return entrega.status === "Disponível"; });
                var dataEntregasAndamento = todasEntregas.filter(function (entrega) { return entrega.status === "Entregando"; });
                var dataEntregasConcluidas = todasEntregas.filter(function (entrega) { return entrega.status === "Concluída"; });
                setEntregasDia(dataEntregasDisponiveis);
                setEntregasAndamento(dataEntregasAndamento);
                setEntregasConcluidas(dataEntregasConcluidas);
            }
        });
    };
    var atualizandoEntregasEffect = function (entregasRecebidas) {
        if (entregasRecebidas) {
            var todasEntregas = entregasRecebidas;
            console.log(todasEntregas);
            var dataEntregasDisponiveis = todasEntregas.filter(function (entrega) { return entrega.status === "Disponível"; });
            var dataEntregasAndamento = todasEntregas.filter(function (entrega) { return entrega.status === "Entregando"; });
            var dataEntregasConcluidas = todasEntregas.filter(function (entrega) { return entrega.status === "Concluída"; });
            setEntregasDia(dataEntregasDisponiveis);
            setEntregasAndamento(dataEntregasAndamento);
            setEntregasConcluidas(dataEntregasConcluidas);
        }
    };
    var atualizandoClientes = function () {
        socket.emit("Buscar Clientes", function (response) {
            setTodosClientes(response);
        });
    };
    var rotasEntregasMotoristas = function (nomeMotorista, conjuntoEntregas) {
        if (nomeMotorista === "Marcos") {
            setRotaEntregaMarcos(conjuntoEntregas);
        }
        else if (nomeMotorista === "Uene") {
            setRotaEntregaUene(conjuntoEntregas);
        }
        else if (nomeMotorista === "Leo") {
            setRotaEntregaLeo(conjuntoEntregas);
        }
        else if (nomeMotorista === "João") {
            setRotaEntregaJoao(conjuntoEntregas);
        }
    };
    var atualizandoEntregasRelatorio = function () {
        socket.emit("Buscar Entregas Relatorio", function (response) {
            setEntregasRelatorio(response);
        });
    };
    (0, react_1.useEffect)(function () {
        socket.on("Entregas Atualizadas", function (entregasDoDia) {
            atualizandoEntregasEffect(entregasDoDia);
        });
        return function () {
            socket.off("Entregas Atualizadas");
        };
    }, []);
    return (<exports.ContextEntregasClientes.Provider value={{
            entregasDia: entregasDia,
            entregasRelatorio: entregasRelatorio,
            entregasAndamento: entregasAndamento,
            entregasConcluidas: entregasConcluidas,
            atualizandoEntregas: atualizandoEntregas,
            atualizandoEntregasRelatorio: atualizandoEntregasRelatorio,
            todosClientes: todosClientes,
            atualizandoClientes: atualizandoClientes,
            rotasEntregasMotoristas: rotasEntregasMotoristas,
            rotaEntregasMarcos: rotaEntregasMarcos,
            rotaEntregasUene: rotaEntregasUene,
            rotaEntregasLeo: rotaEntregasLeo,
            rotaEntregasJoao: rotaEntregasJoao,
        }}>
      {children}
    </exports.ContextEntregasClientes.Provider>);
}
