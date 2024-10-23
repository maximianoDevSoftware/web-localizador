"use client";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { createContext, useContext, useEffect, useRef, useState, } from "react";
import estilo from "@/styles/mapa.module.css";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import { MarcadoresMapaonSide } from "./components/marcadoresOnMap";
import { ContextEntregasClientes } from "@/contexts/entregasClientesContext";
import { contextAutenticacao } from "@/contexts/contextoUsuario";
export var contextMapa = createContext({});
/********************** Váriaveis para serem usadas na execução do mapa pelo código. */
var coordsMatinhos = [-25.8175, -48.5428];
var urlTile = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
var attributionTx = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
var controlMapVar = true;
export default function Mapa(_a) {
    var children = _a.children;
    var mapaElemento = useRef(null);
    var _b = useState(), mapaPronto = _b[0], setMapaPronto = _b[1];
    var _c = useState(), telaMapaMarcadores = _c[0], setTelaMapaMarcadores = _c[1];
    var _d = useState([]), marcadores = _d[0], setMarcadores = _d[1];
    var _e = useContext(ContextEntregasClientes), entregasDia = _e.entregasDia, entregasAndamento = _e.entregasAndamento, atualizandoClientes = _e.atualizandoClientes;
    var usuarioLogado = useContext(contextAutenticacao).usuarioLogado;
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
            var mapaGerado = leaflet
                .map(mapaElemento.current)
                .setView(coordsMatinhos, 13);
            leaflet
                .tileLayer(urlTile, {
                maxZoom: 19,
                attribution: attributionTx,
            })
                .addTo(mapaGerado);
            var layerMarcadores = leaflet.layerGroup().addTo(mapaGerado);
            setTelaMapaMarcadores(layerMarcadores);
            setMapaPronto(mapaGerado);
            atualizandoClientes();
            return mapaGerado;
        }
    };
    /**************************************** useEffect para definir quem são os marcadores das entregas disponíveis */
    useEffect(function () {
        gerandoMapa();
    }, [entregasDia, usuarioLogado]);
    /**************************************** useEffect para definir quem são os marcadores das entregas em andamento */
    /**************************************** useEffect para definir quem são os marcadores dos motoristas
     *
     *
     */
    return (<contextMapa.Provider value={{
            mapaPronto: mapaPronto,
            marcadores: marcadores,
            adicionandoMarcadores: adicionandoMarcadores,
            telaMapaMarcadores: telaMapaMarcadores,
        }}>
      {(usuarioLogado === null || usuarioLogado === void 0 ? void 0 : usuarioLogado.userName) === "Administradores" && (<div ref={mapaElemento} className={estilo.mapaElemento} id="meuMapaId">
          <MarcadoresMapaonSide></MarcadoresMapaonSide>
        </div>)}
      {children}
    </contextMapa.Provider>);
}
