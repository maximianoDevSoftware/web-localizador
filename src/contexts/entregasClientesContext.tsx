"use client";

import { clientesTipo } from "@/types/clientesType";
import { entregasTipo } from "@/types/entregasTypes";
import { createContext, useContext, useEffect, useState } from "react";
import { contextAutenticacao } from "./contextoUsuario";
import getSocket from "@/socket/socketCliente";

interface EntregasContextProps {
  todosClientes: clientesTipo[] | undefined;

  entregasDia: entregasTipo[] | undefined;
  entregasAndamento: entregasTipo[] | undefined;
  entregasConcluidas: entregasTipo[] | undefined;
  entregasRelatorio: entregasTipo[] | undefined;

  rotaEntregasMarcos: entregasTipo[] | undefined;
  rotaEntregasUene: entregasTipo[] | undefined;
  rotaEntregasLeo: entregasTipo[] | undefined;
  rotaEntregasJoao: entregasTipo[] | undefined;
  rotasEntregasMotoristas: (
    nomeMotorista: string,
    conjuntoEntregas: entregasTipo[]
  ) => void;

  atualizandoEntregas: () => void;
  atualizandoEntregasRelatorio: () => void;
  atualizandoClientes: () => void;
}

export const ContextEntregasClientes = createContext<EntregasContextProps>(
  {} as any
);

export function EntregasClientesProvedor({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /**Defininindo os states que poderão ser posteriormente acessados */
  const { usuarioLogado } = useContext(contextAutenticacao);
  const [entregasDia, setEntregasDia] = useState<entregasTipo[]>();
  const [entregasAndamento, setEntregasAndamento] = useState<entregasTipo[]>();
  const [entregasConcluidas, setEntregasConcluidas] =
    useState<entregasTipo[]>();
  const [todosClientes, setTodosClientes] = useState<clientesTipo[]>();
  const [entregasRelatorio, setEntregasRelatorio] = useState<entregasTipo[]>();

  const [rotaEntregasMarcos, setRotaEntregaMarcos] = useState<entregasTipo[]>();
  const [rotaEntregasUene, setRotaEntregaUene] = useState<entregasTipo[]>();
  const [rotaEntregasLeo, setRotaEntregaLeo] = useState<entregasTipo[]>();
  const [rotaEntregasJoao, setRotaEntregaJoao] = useState<entregasTipo[]>();

  const socket = getSocket();

  const atualizandoEntregas = () => {
    socket.emit("Buscar Entregas", (response: entregasTipo[]) => {
      if (response) {
        let todasEntregas: entregasTipo[] = response;
        console.log(todasEntregas);

        let dataEntregasDisponiveis = todasEntregas.filter(
          (entrega) => entrega.status === "Disponível"
        );
        let dataEntregasAndamento = todasEntregas.filter(
          (entrega) => entrega.status === "Entregando"
        );
        let dataEntregasConcluidas = todasEntregas.filter(
          (entrega) => entrega.status === "Concluída"
        );

        setEntregasDia(dataEntregasDisponiveis);
        setEntregasAndamento(dataEntregasAndamento);
        setEntregasConcluidas(dataEntregasConcluidas);
      }
    });
  };

  const atualizandoEntregasEffect = (entregasRecebidas: entregasTipo[]) => {
    if (entregasRecebidas) {
      let todasEntregas: entregasTipo[] = entregasRecebidas;
      console.log(todasEntregas);

      let dataEntregasDisponiveis = todasEntregas.filter(
        (entrega) => entrega.status === "Disponível"
      );
      let dataEntregasAndamento = todasEntregas.filter(
        (entrega) => entrega.status === "Entregando"
      );
      let dataEntregasConcluidas = todasEntregas.filter(
        (entrega) => entrega.status === "Concluída"
      );

      setEntregasDia(dataEntregasDisponiveis);
      setEntregasAndamento(dataEntregasAndamento);
      setEntregasConcluidas(dataEntregasConcluidas);
    }
  };

  const atualizandoClientes = () => {
    socket.emit("Buscar Clientes", (response: clientesTipo[]) => {
      setTodosClientes(response);
    });
  };

  const rotasEntregasMotoristas = (
    nomeMotorista: string,
    conjuntoEntregas: entregasTipo[]
  ) => {
    if (nomeMotorista === "Marcos") {
      setRotaEntregaMarcos(conjuntoEntregas);
    } else if (nomeMotorista === "Uene") {
      setRotaEntregaUene(conjuntoEntregas);
    } else if (nomeMotorista === "Leo") {
      setRotaEntregaLeo(conjuntoEntregas);
    } else if (nomeMotorista === "João") {
      setRotaEntregaJoao(conjuntoEntregas);
    }
  };

  const atualizandoEntregasRelatorio = () => {
    socket.emit("Buscar Entregas Relatorio", (response: entregasTipo[]) => {
      setEntregasRelatorio(response);
    });
  };

  useEffect(() => {
    socket.on("Entregas Atualizadas", (entregasDoDia) => {
      atualizandoEntregasEffect(entregasDoDia);
    });

    return () => {
      socket.off("Entregas Atualizadas");
    };
  }, []);

  return (
    <ContextEntregasClientes.Provider
      value={{
        entregasDia,
        entregasRelatorio,
        entregasAndamento,
        entregasConcluidas,
        atualizandoEntregas,
        atualizandoEntregasRelatorio,
        todosClientes,
        atualizandoClientes,
        rotasEntregasMotoristas,
        rotaEntregasMarcos,
        rotaEntregasUene,
        rotaEntregasLeo,
        rotaEntregasJoao,
      }}
    >
      {children}
    </ContextEntregasClientes.Provider>
  );
}
