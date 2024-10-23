"use client";
import { TbTruckDelivery } from "react-icons/tb";
import estilo from "./diaInfo.module.css";
import { useContext, useEffect } from "react";
import { ContextEntregasClientes } from "@/contexts/entregasClientesContext";
export function ComponenteRelatDia() {
    var entregasRelatorio = useContext(ContextEntregasClientes).entregasRelatorio;
    var entregasDisponiveis = entregasRelatorio === null || entregasRelatorio === void 0 ? void 0 : entregasRelatorio.filter(function (entrega) {
        if (entrega.status === "Disponível") {
            return entrega;
        }
    });
    var entregasAndamento = entregasRelatorio === null || entregasRelatorio === void 0 ? void 0 : entregasRelatorio.filter(function (entrega) {
        if (entrega.status === "Entregando") {
            return entrega;
        }
    });
    // Obter a data de hoje dinamicamente
    var hoje = new Date();
    var diaHoje = [hoje.getDate(), hoje.getMonth() + 1, hoje.getFullYear()];
    var entregasConcluidas = entregasRelatorio === null || entregasRelatorio === void 0 ? void 0 : entregasRelatorio.filter(function (entrega) {
        if (entrega.status === "Concluída") {
            if (entrega.dia[0] === diaHoje[0] && entrega.dia[1] === diaHoje[1]) {
                return entrega;
            }
        }
    });
    var FaturamentoDoDia = function () {
        if (entregasConcluidas) {
            var valorTotalDoDia_1 = 0;
            entregasConcluidas.map(function (entrega) {
                if (entrega.valor) {
                    var valorAdapt = Number(entrega.valor.replace(",", "."));
                    valorTotalDoDia_1 += valorAdapt;
                    console.log(valorAdapt);
                }
            });
            console.log("O valor total do dia foi de: " + valorTotalDoDia_1);
            var stringValorTotal = "R$ ".concat(valorTotalDoDia_1.toFixed(2));
            return stringValorTotal;
        }
        else {
            return "R$ 0,00";
        }
    };
    useEffect(function () {
        console.log("Número de entregas dispnníveis: " + (entregasDisponiveis === null || entregasDisponiveis === void 0 ? void 0 : entregasDisponiveis.length));
        console.log("Número de entregas andamento: " + (entregasAndamento === null || entregasAndamento === void 0 ? void 0 : entregasAndamento.length));
        console.log("Número de entregas concluidas: " + (entregasConcluidas === null || entregasConcluidas === void 0 ? void 0 : entregasConcluidas.length));
    }, [entregasRelatorio]);
    return (<div className={"".concat(estilo.areaInfoEntregaDia)}>
      <div className={"".concat(estilo.dispInfoDia)}>
        <div className={"".concat(estilo.areaFotoEntregaDia)}>
          <div className={"".concat(estilo.fotoEntregasDia, " ").concat(estilo.fotoMarcosEntregasDia)}></div>
          <div className={"".concat(estilo.motoraEntregasDia)}>
            1 <TbTruckDelivery className="inline size-5"/>
          </div>
        </div>
        <div className={"".concat(estilo.areaFotoEntregaDia)}>
          <div className={"".concat(estilo.fotoEntregasDia, " ").concat(estilo.fotoUeneEntregasDia)}></div>
          <div className={"".concat(estilo.motoraEntregasDia)}>
            3 <TbTruckDelivery className="inline size-5"/>
          </div>
        </div>
        <div className={"".concat(estilo.areaFotoEntregaDia)}>
          <div className={"".concat(estilo.fotoEntregasDia, " ").concat(estilo.fotoLeoEntregasDia)}></div>
          <div className={"".concat(estilo.motoraEntregasDia)}>
            4 <TbTruckDelivery className="inline size-5"/>
          </div>
        </div>
        <div className={"".concat(estilo.areaFotoEntregaDia)}>
          <div className={"".concat(estilo.fotoEntregasDia, " ").concat(estilo.fotoJoaoEntregasDia)}></div>
          <div className={"".concat(estilo.motoraEntregasDia)}>
            5 <TbTruckDelivery className="inline size-5"/>
          </div>
        </div>
      </div>

      <div className={"".concat(estilo.dispInfoDia)}>
        <h3>
          Entregas Disponíveis:{" "}
          <span>{entregasDisponiveis ? entregasDisponiveis.length : "0"}</span>
        </h3>
        <h3>
          Entregas em Andamento:{" "}
          <span>{entregasAndamento ? entregasAndamento.length : "0"}</span>
        </h3>
        <h3>
          Entregas Concluídas:{" "}
          <span>{entregasConcluidas ? entregasConcluidas.length : "0"}</span>
        </h3>
      </div>

      <div className={"".concat(estilo.dispInfoDia)}>
        <h3>Faturamento do dia:</h3>
        <div className={"".concat(estilo.spamFaturamento)}>{FaturamentoDoDia()}</div>
      </div>
    </div>);
}
