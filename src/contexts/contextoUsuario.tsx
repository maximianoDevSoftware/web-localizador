"use client";

import React, {
  createContext,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import estilo from "@/styles/telaAutenticacao.module.css";
import { usuarioTipo } from "@/types/userTypes";
import getSocket from "../socket/socketCliente"; // Importando o singleton do socket
import FotoUsuarioLogin from "./components/fotoUsuario";

/**Incializando conexão com webSocket */
const socket = getSocket(); // Obtendo a instância do socket

interface AuntenticInterface {
  usuarioLogado: usuarioTipo | undefined;
}
export const contextAutenticacao = createContext<AuntenticInterface>({} as any);

export function ProvedorAutenticacao({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const telaAutenticacao = useRef<HTMLDivElement>(null);

  const [usuarioLogado, setUsuarioLogado] = useState<usuarioTipo>({
    userName: "",
    senha: "",
    status: "",
    localizacao: {
      latitude: 0,
      longitude: 0,
    },
  });

  const [dadosForm, setDadosForm] = useState({
    usuario: "Administradores",
    senha: "",
  });

  const atualizandoFormulario = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setDadosForm({
      ...dadosForm,
      [event.target.name]: event.target.value,
    });
  };

  const autenticandoFormulario = (ev: FormEvent) => {
    ev.preventDefault();
    console.log(`Autenticando usuario: ${dadosForm.usuario}`);
    socket.emit("Autenticar Usuario", dadosForm);
  };

  useEffect(() => {
    socket.on("Usuario Autenticado", (usuarioAutenticadoServidor) => {
      if (usuarioAutenticadoServidor.userName)
        setUsuarioLogado(usuarioAutenticadoServidor);

      telaAutenticacao.current?.classList.toggle(estilo.telaAutenticFora);

      console.log(
        "Usuário autenticado com sucesso. Seu nome: " +
          usuarioAutenticadoServidor.userName
      );
    });

    return () => {
      socket.off("Usuario Autenticado");
    };
  }, []);

  return (
    <contextAutenticacao.Provider value={{ usuarioLogado }}>
      <>
        <div
          className={`${estilo.telaAutenticacao} ${estilo.telaAutenticForaaaaa}`}
          ref={telaAutenticacao}
        >
          <div className={estilo.areaLogin}>
            <FotoUsuarioLogin
              userSelectName={`${dadosForm.usuario}`}
            ></FotoUsuarioLogin>

            <form
              className={estilo.formAutent}
              onSubmit={autenticandoFormulario}
            >
              <select name="usuario" onChange={atualizandoFormulario}>
                <option value="Administradores">Administradores</option>
                <option value="Marcos">Marcos</option>
                <option value="Uene">Uene</option>
                <option value="Leo">Leo</option>
                <option value="João">João</option>
                <option value="Dev">Dev</option>
              </select>

              <input
                type="text"
                name="senha"
                placeholder="Sua senha"
                onChange={atualizandoFormulario}
              />

              <button type="submit">LOGIN</button>
            </form>
          </div>
        </div>
        {children}
      </>
    </contextAutenticacao.Provider>
  );
}
