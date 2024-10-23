"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { contextMapa } from "../mapa/meuMapa";
import estiloInform from "@/styles/telaInfMarcador/telaInfMarker.module.css";
import { RiUserLocationFill } from "react-icons/ri";
import { BiMessageCheck } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { ContextEntregasClientes } from "@/contexts/entregasClientesContext";
import { contextAutenticacao } from "@/contexts/contextoUsuario";
import getSocket from "@/socket/socketCliente";
var socket = getSocket();
export default function TelaMarcadorInform() {
    var _a = useContext(contextMapa), mapaPronto = _a.mapaPronto, marcadores = _a.marcadores;
    var _b = useContext(ContextEntregasClientes), entregasDia = _b.entregasDia, atualizandoEntregas = _b.atualizandoEntregas;
    var usuarioLogado = useContext(contextAutenticacao).usuarioLogado;
    var telaInformMR = useRef(null);
    var _c = useState(), entregaEvidencia = _c[0], setEntregaEvidencia = _c[1];
    var _d = useState(), marcadorEvidencia = _d[0], setMarcadorEvidencia = _d[1];
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
            telaInformMR.current.classList.add(estiloInform.telaInformMarcadorFora);
        }
    };
    var adicionandoTelaInform = function () {
        if (telaInformMR.current) {
            telaInformMR.current.classList.remove(estiloInform.telaInformMarcadorFora);
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
            btnClick.classList.toggle(estiloInform.btnLocationAtivo);
            elementoMarcadorFoto === null || elementoMarcadorFoto === void 0 ? void 0 : elementoMarcadorFoto.classList.toggle(estiloInform.marcadorEstaAtivo);
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
            elementoMarcadorTexto === null || elementoMarcadorTexto === void 0 ? void 0 : elementoMarcadorTexto.classList.toggle(estiloInform.nomeComMarcadorAtivo);
        }
        else {
            (_d = marcadorEvidencia === null || marcadorEvidencia === void 0 ? void 0 : marcadorEvidencia.dragging) === null || _d === void 0 ? void 0 : _d.enable();
            btnClick.classList.toggle(estiloInform.btnLocationAtivo);
            elementoMarcadorFoto === null || elementoMarcadorFoto === void 0 ? void 0 : elementoMarcadorFoto.classList.toggle(estiloInform.marcadorEstaAtivo);
            elementoMarcadorTexto === null || elementoMarcadorTexto === void 0 ? void 0 : elementoMarcadorTexto.classList.toggle(estiloInform.nomeComMarcadorAtivo);
        }
    };
    useEffect(function () { }, [usuarioLogado]);
    return (<>
      <div className={"".concat(estiloInform.telaInformMarcador, " ").concat(estiloInform.telaInformMarcadorFora)} ref={telaInformMR}>
        <div className={estiloInform.areaBTNSinfMR}>
          <button onClick={function (ev) {
            liberandoPontoMarcador(ev.currentTarget);
        }}>
            <RiUserLocationFill />
          </button>

          <button onClick={function () {
            // enviarMensagemCliente();
            enviarMinhaMSG();
        }}>
            <BiMessageCheck />
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
            <FaMapLocationDot />
          </button>
        </div>

        <div className={estiloInform.areaInformacoesMR}>
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
