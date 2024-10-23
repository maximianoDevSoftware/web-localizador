"use client";
import estilo from "@/styles/sideBar.module.css";
import DisplayEntregas from "./components/displayEntregas/displayEntregas";
import DisplayAndamento from "./components/displayAndamento/displayAndamento";
import BotoesAdministrarEntregas from "./components/admEntregas/btnsAdmEntrega";
import { useContext } from "react";
import { contextAutenticacao } from "@/contexts/contextoUsuario";
export function SideBar() {
    var usuarioLogado = useContext(contextAutenticacao).usuarioLogado;
    return (<>
      {(usuarioLogado === null || usuarioLogado === void 0 ? void 0 : usuarioLogado.userName) === "Administradores" && (<div className={estilo.sideBarArea}>
          <>
            <DisplayEntregas />
            <DisplayAndamento />
            <BotoesAdministrarEntregas />
          </>
        </div>)}
    </>);
}
