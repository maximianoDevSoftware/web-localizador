"use client";
import { useContext, useState } from "react";
import estilo from "../telaRel.module.css";
import { contextAutenticacao } from "@/contexts/contextoUsuario";
export function MotoristasRelatorio() {
    var _a = useContext(contextAutenticacao), usuarioLogado = _a.usuarioLogado, marcosUser = _a.marcosUser, ueneUser = _a.ueneUser, leoUser = _a.leoUser, joaoUser = _a.joaoUser;
    var _b = useState(), entregasRelatorio = _b[0], setEntregasRelatorio = _b[1];
    var buscandoEntregasRelatorio = function () {
        /**Aqui dentro eu desenvolvo o metodo que vai buscar as entregas necessárias para redigir um relatório */
    };
    var calculoRelatorioMotorista = function () {
        var entregasMarcos;
        var entregasUene;
        var entregasLeo;
        var entregasJoao;
        entregasRelatorio === null || entregasRelatorio === void 0 ? void 0 : entregasRelatorio.map(function (entregaUnica) {
            if (entregaUnica.entregador === "Marcos") {
                entregasMarcos.push(entregaUnica);
            }
            else if (entregaUnica.entregador === "Uene") {
                entregasUene.push(entregaUnica);
            }
            else if (entregaUnica.entregador === "Leo") {
                entregasLeo.push(entregaUnica);
            }
            else if (entregaUnica.entregador === "João") {
                entregasJoao.push(entregaUnica);
            }
        });
    };
    return (<div className={estilo.telaInfosMotoristaRel}>
      <h1 className={estilo.tituloRelatorioMotoristas}>
        Entregas por Motoristas
      </h1>
    </div>);
}
