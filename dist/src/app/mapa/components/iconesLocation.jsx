import leaflet from "leaflet";
import estilo from "@/styles/marcadores/entregaMarker.module.css";
export var markerEntrega = function (entrega) {
    if (entrega.status === "Disponível") {
        var motoristaDessaEntrega = meuEntregador(entrega);
        console.log(" Entrega no marcador: ", entrega.nome);
        var entregasIconLeaf = leaflet.divIcon({
            html: "<div class=".concat(estilo.areaMark, ">\n                    <div class=").concat(estilo.areaStatsEntrega, ">\n                      <div class=").concat(estilo.iconeEntregaMapa, ">\n                        <div class=").concat(estilo.fotoEntregadorIcone, ">\n                          ").concat(motoristaDessaEntrega, "\n                          <div class=").concat(estilo.nomeEntregaIcone, ">\n                            <h3>Entrega para: ").concat(entrega.nome, "</h3>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=").concat(estilo.entregaMarcador, "></div>\n                 </div>\n                 "),
            className: "bg-black bg-opacity-0 border-r-10",
        });
        return entregasIconLeaf;
    }
    else {
        var motoristaDessaEntrega = meuEntregador(entrega);
        var entregasIconLeaf = leaflet.divIcon({
            html: "<div class=".concat(estilo.areaMark, ">\n                  <div class=").concat(estilo.marcadorAndamento, ">\n                    <div class=").concat(estilo.iconeEntregaMapa, ">\n                      <div class=").concat(estilo.fotoEntregadorIcone, ">\n                        ").concat(motoristaDessaEntrega, "\n                        <div class=").concat(estilo.nomeEntregaIcone, ">\n                          <h3>Entregando para: ").concat(entrega.nome, "</h3>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=").concat(estilo.entregaMarcador, "></div>\n               </div>\n               "),
            className: "bg-black bg-opacity-0 border-r-10",
        });
        return entregasIconLeaf;
    }
};
export var markerTeste = function () {
    var entregasIconLeaf = leaflet.divIcon({
        html: "<div class=".concat(estilo.areaMark, ">\n                  <div class=").concat(estilo.areaStatsEntrega, ">\n                    <div class=").concat(estilo.iconeEntregaMapa, ">\n                      <div class=").concat(estilo.fotoEntregadorIcone, ">\n                        <div class=").concat(estilo.nomeEntregaIcone, ">\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=").concat(estilo.entregaMarcador, "></div>\n               </div>\n               "),
        className: "bg-black bg-opacity-0 border-r-10",
    });
    return entregasIconLeaf;
};
var meuEntregador = function (entrega) {
    if (entrega.entregador == "Marcos") {
        return "<div class=".concat(estilo.marcosIconeEntrega, "></div>");
    }
    else if (entrega.entregador == "Uene") {
        return "<div class=".concat(estilo.ueneIconeEntrega, "></div>");
    }
    else if (entrega.entregador == "Leo") {
        return "<div class=".concat(estilo.leoIconeEntrega, "></div>");
    }
    else if (entrega.entregador == "João") {
        return "<div class=".concat(estilo.joaoIconeEntrega, "></div>");
    }
};
export var markerEntregaAndamento = function (entrega) {
    var motoristaDessaEntrega = meuEntregador(entrega);
    var entregasIconLeaf = leaflet.divIcon({
        html: "<div class=".concat(estilo.areaMark, ">\n                  <div class=").concat(estilo.marcadorAndamento, ">\n                    <div class=").concat(estilo.iconeEntregaMapa, ">\n                      <div class=").concat(estilo.fotoEntregadorIcone, ">\n                        ").concat(motoristaDessaEntrega, "\n                        <div class=").concat(estilo.nomeEntregaIcone, ">\n                          <h3>Entrega para: ").concat(entrega.nome, "</h3>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=").concat(estilo.entregaMarcador, "></div>\n               </div>\n               "),
        className: "bg-black bg-opacity-0 border-r-10",
    });
    return entregasIconLeaf;
};
export var marcadorMotoristas = function (nome) {
    var meuEntregadorInterno = function (nomeEntregador) {
        if (nomeEntregador == "Marcos") {
            return "<div class=".concat(estilo.marcosIconeEntrega, "></div>");
        }
        else if (nomeEntregador == "Uene") {
            return "<div class=".concat(estilo.ueneIconeEntrega, "></div>");
        }
        else if (nomeEntregador == "Leo") {
            return "<div class=".concat(estilo.leoIconeEntrega, "></div>");
        }
        else if (nomeEntregador == "João") {
            return "<div class=".concat(estilo.joaoIconeEntrega, "></div>");
        }
    };
    var entregasIconLeaf = leaflet.divIcon({
        html: "<div class=".concat(estilo.areaMark, ">\n                  <div class=").concat(estilo.areaEntregadoRota, ">\n                    ").concat(meuEntregadorInterno(nome), "\n                  </div>\n                  <div class=").concat(estilo.entregaMarcador, "></div>\n               </div>\n               "),
        className: "bg-black bg-opacity-0 border-r-10",
    });
    return entregasIconLeaf;
};
