"use client";

import estilo from "@/styles/sideBar.module.css";
import DisplayEntregas from "./components/displayEntregas/displayEntregas";
import DisplayAndamento from "./components/displayAndamento/displayAndamento";
import BotoesAdministrarEntregas from "./components/admEntregas/btnsAdmEntrega";
import { useContext, useEffect } from "react";
import { contextAutenticacao } from "@/contexts/contextoUsuario";
import getSocket from "@/socket/socketCliente";
import { usuarioTipo } from "@/types/userTypes";

export function SideBar() {
  const { usuarioLogado } = useContext(contextAutenticacao);

  return (
    <>
      {usuarioLogado?.userName === "Administradores" && (
        <div className={estilo.sideBarArea}>
          <>
            <DisplayEntregas />
            <DisplayAndamento />
            <BotoesAdministrarEntregas />
          </>
        </div>
      )}
    </>
  );
}
