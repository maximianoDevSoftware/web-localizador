"use client";
import estilo from "@/styles/sideBar.module.css";
import EntregaSingular from "./components/cadaEntrega";
import { useContext } from "react";
import { ContextEntregasClientes } from "@/contexts/entregasClientesContext";
export default function DisplayEntregas() {
    var entregasDia = useContext(ContextEntregasClientes).entregasDia;
    return (<div className={estilo.displayEntregas}>
      <h1 className={estilo.titulosDisplay} onClick={function (ev) {
            var _a;
            (_a = ev.currentTarget.parentElement) === null || _a === void 0 ? void 0 : _a.classList.toggle(estilo.displayEntregasAberto);
        }}>
        Entregas Disponíveis:
        <span className={estilo.quantidadeTitulo}>
          {entregasDia ? entregasDia.length : "0"}
        </span>
      </h1>

      <div className={estilo.areaInformsDisp}>
        <EntregaSingular></EntregaSingular>
      </div>
    </div>);
}
