"use client";
import { RiAdminLine } from "react-icons/ri";
import estilo from "./telaAutenticacao.module.css";
import { useEffect, useState } from "react";
export default function FotoUsuarioLogin(_a) {
    var userSelectName = _a.userSelectName;
    var _b = useState("Administradores"), clienteFoto = _b[0], setClienteFoto = _b[1];
    useEffect(function () {
        console.log(userSelectName);
        if (userSelectName)
            setClienteFoto(userSelectName);
    }, [userSelectName]);
    return (<div className={"".concat(estilo.areaComFotoUsuarioSelect)}>
      <div className={"".concat(estilo.fotoUsuarioParaLogin)}>
        {clienteFoto == "Marcos" && (<>
            <div className={estilo.fotoMarcosUsuarioLogin}></div>
          </>)}
        {clienteFoto == "Uene" && (<>
            <div className={estilo.fotoUeneUsuarioLogin}></div>
          </>)}

        {clienteFoto == "Leo" && (<>
            <div className={estilo.fotoLeoUsuarioLogin}></div>
          </>)}

        {clienteFoto == "João" && (<>
            <div className={estilo.fotoJoaoUsuarioLogin}></div>
          </>)}

        {clienteFoto == "Administradores" && (<div className={estilo.fotoAdmnistradoresLogin}>
            <RiAdminLine />
          </div>)}
      </div>
    </div>);
}
