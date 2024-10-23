"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { contextAutenticacao } from "./contextoUsuario";
import getSocket from "@/socket/socketCliente";
export var ContextEntregasClientes = createContext({});
export function EntregasClientesProvedor(_a) {
    var children = _a.children;
    /**Defininindo os states que poderão ser posteriormente acessados */
    var usuarioLogado = useContext(contextAutenticacao).usuarioLogado;
    var _b = useState(), entregasDia = _b[0], setEntregasDia = _b[1];
    var _c = useState(), entregasAndamento = _c[0], setEntregasAndamento = _c[1];
    var _d = useState(), entregasConcluidas = _d[0], setEntregasConcluidas = _d[1];
    var _e = useState(), todosClientes = _e[0], setTodosClientes = _e[1];
    var _f = useState(), entregasRelatorio = _f[0], setEntregasRelatorio = _f[1];
    var _g = useState(), rotaEntregasMarcos = _g[0], setRotaEntregaMarcos = _g[1];
    var _h = useState(), rotaEntregasUene = _h[0], setRotaEntregaUene = _h[1];
    var _j = useState(), rotaEntregasLeo = _j[0], setRotaEntregaLeo = _j[1];
    var _k = useState(), rotaEntregasJoao = _k[0], setRotaEntregaJoao = _k[1];
    var socket = getSocket();
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
    useEffect(function () {
        socket.on("Entregas Atualizadas", function (entregasDoDia) {
            atualizandoEntregasEffect(entregasDoDia);
        });
        return function () {
            socket.off("Entregas Atualizadas");
        };
    }, []);
    return (<ContextEntregasClientes.Provider value={{
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
    </ContextEntregasClientes.Provider>);
}
