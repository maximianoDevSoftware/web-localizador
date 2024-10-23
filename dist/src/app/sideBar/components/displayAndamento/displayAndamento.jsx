"use client";
import { ContextEntregasClientes } from "@/contexts/entregasClientesContext";
import { contextMapa } from "@/app/mapa/meuMapa";
import estilo from "@/styles/sideBar.module.css";
import { useContext } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { RiUserLocationFill } from "react-icons/ri";
export default function DisplayAndamento() {
    var entregasAndamento = useContext(ContextEntregasClientes).entregasAndamento;
    var mapaPronto = useContext(contextMapa).mapaPronto;
    return (<div className={estilo.displayEntregas}>
      <h1 className={estilo.titulosDisplay} onClick={function (ev) {
            var _a;
            (_a = ev.currentTarget.parentElement) === null || _a === void 0 ? void 0 : _a.classList.toggle(estilo.displayEntregasAberto);
        }}>
        Entregas Andamento:
        <span className={estilo.quantidadeTitulo}>
          {entregasAndamento ? entregasAndamento.length : "0"}
        </span>
      </h1>

      <div className={estilo.areaInformsDisp}>
        {entregasAndamento === null || entregasAndamento === void 0 ? void 0 : entregasAndamento.map(function (entrega) {
            return (<div className={"".concat(estilo.caixaEntrega, " ")} /**${estilo.caixaAberta} */ key={entrega.nome + entrega.id}>
              <div className={estilo.tituloCaixa} onClick={function (ev) {
                    console.log("Peguei o click no titulo da entrega");
                    var boxInfoEntrega = ev.currentTarget.parentElement;
                    boxInfoEntrega === null || boxInfoEntrega === void 0 ? void 0 : boxInfoEntrega.classList.toggle(estilo.caixaAberta);
                }}>
                <h3>{entrega.nome}</h3>
              </div>

              <div className={estilo.informCaixa}>
                <p>Bairro: {entrega.bairro}</p>
                <p>Rua: {entrega.rua}</p>
                <p>Número: {entrega.numero}</p>
                <p>Valor: R$ {entrega.valor}</p>
                <p>Entregador: {entrega.entregador}</p>
                <p>Volume: {entrega.volume}</p>
                <p>Pagamento: {entrega.pagamento}</p>
              </div>

              <div className={"".concat(estilo.botoesCaixa, " ").concat(estilo.botoesCaixaDisp)}>
                {/**Interação para localizar o endereço do motorista da entrega */}
                <button className={estilo.iterLocationMorist} onClick={function (ev) {
                    var esteBTN = ev.currentTarget;
                    console.log(esteBTN);
                }}>
                  <RiUserLocationFill className="size-8"/>
                </button>
                {/* Iteração para localizar o endereço do cliente da entrega*/}
                <button className={estilo.iterLocationEntrega} onClick={function (ev) {
                    var esteBTN = ev.currentTarget;
                    console.log(esteBTN);
                    mapaPronto === null || mapaPronto === void 0 ? void 0 : mapaPronto.flyTo([
                        entrega.coordenadas.latitude,
                        entrega.coordenadas.longitude,
                    ], 16, {
                        duration: 2,
                    });
                }}>
                  <FaMapLocationDot className="size-8"/>
                </button>
              </div>
            </div>);
        })}
      </div>
    </div>);
}
