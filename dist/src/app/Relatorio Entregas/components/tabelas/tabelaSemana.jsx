"use client";
import { useContext } from "react";
import estilo from "./tabelasSty.module.css";
import { ContextEntregasClientes } from "@/contexts/entregasClientesContext";
export default function TabelaEntregasDaSemana() {
    var entregasRelatorio = useContext(ContextEntregasClientes).entregasRelatorio;
    var hoje = new Date();
    var diaHoje = [hoje.getDate(), hoje.getMonth() + 1, hoje.getFullYear()];
    var entregasConcluidas = entregasRelatorio === null || entregasRelatorio === void 0 ? void 0 : entregasRelatorio.filter(function (entrega) {
        if ((entrega.dia[0] === diaHoje[0] && entrega.dia[1] === diaHoje[1]) ||
            entrega.status == "Disponível") {
            return entrega;
        }
    });
    return (<table className={"".concat(estilo.tabelaSemana)}>
      <thead>
        <tr>
          <th>Nome da entrega:</th>
          <th>Status da entrega:</th>
          <th>Motorista:</th>
          <th>Valor:</th>
        </tr>
      </thead>
      <tbody>
        {entregasConcluidas === null || entregasConcluidas === void 0 ? void 0 : entregasConcluidas.map(function (entrega, index) {
            return (<tr key={index}>
              <td className={"".concat(estilo.campoNome)}>{entrega.nome}</td>
              <td className={"".concat(estilo.campoStatus)}>{entrega.status}</td>
              <td className={"".concat(estilo.campoMotorista)}>
                {entrega.entregador}
              </td>
              <td className={"".concat(estilo.campoValor)}>R$ {entrega.valor}</td>
            </tr>);
        })}
      </tbody>
    </table>);
}
