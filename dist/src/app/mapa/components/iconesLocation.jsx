"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.marcadorMotoristas = exports.markerEntregaAndamento = exports.markerTeste = exports.markerEntrega = void 0;
var leaflet_1 = __importDefault(require("leaflet"));
var entregaMarker_module_css_1 = __importDefault(require("@/styles/marcadores/entregaMarker.module.css"));
var markerEntrega = function (entrega) {
    if (entrega.status === "Disponível") {
        var motoristaDessaEntrega = meuEntregador(entrega);
        console.log(" Entrega no marcador: ", entrega.nome);
        var entregasIconLeaf = leaflet_1.default.divIcon({
            html: "<div class=".concat(entregaMarker_module_css_1.default.areaMark, ">\n                    <div class=").concat(entregaMarker_module_css_1.default.areaStatsEntrega, ">\n                      <div class=").concat(entregaMarker_module_css_1.default.iconeEntregaMapa, ">\n                        <div class=").concat(entregaMarker_module_css_1.default.fotoEntregadorIcone, ">\n                          ").concat(motoristaDessaEntrega, "\n                          <div class=").concat(entregaMarker_module_css_1.default.nomeEntregaIcone, ">\n                            <h3>Entrega para: ").concat(entrega.nome, "</h3>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=").concat(entregaMarker_module_css_1.default.entregaMarcador, "></div>\n                 </div>\n                 "),
            className: "bg-black bg-opacity-0 border-r-10",
        });
        return entregasIconLeaf;
    }
    else {
        var motoristaDessaEntrega = meuEntregador(entrega);
        var entregasIconLeaf = leaflet_1.default.divIcon({
            html: "<div class=".concat(entregaMarker_module_css_1.default.areaMark, ">\n                  <div class=").concat(entregaMarker_module_css_1.default.marcadorAndamento, ">\n                    <div class=").concat(entregaMarker_module_css_1.default.iconeEntregaMapa, ">\n                      <div class=").concat(entregaMarker_module_css_1.default.fotoEntregadorIcone, ">\n                        ").concat(motoristaDessaEntrega, "\n                        <div class=").concat(entregaMarker_module_css_1.default.nomeEntregaIcone, ">\n                          <h3>Entregando para: ").concat(entrega.nome, "</h3>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=").concat(entregaMarker_module_css_1.default.entregaMarcador, "></div>\n               </div>\n               "),
            className: "bg-black bg-opacity-0 border-r-10",
        });
        return entregasIconLeaf;
    }
};
exports.markerEntrega = markerEntrega;
var markerTeste = function () {
    var entregasIconLeaf = leaflet_1.default.divIcon({
        html: "<div class=".concat(entregaMarker_module_css_1.default.areaMark, ">\n                  <div class=").concat(entregaMarker_module_css_1.default.areaStatsEntrega, ">\n                    <div class=").concat(entregaMarker_module_css_1.default.iconeEntregaMapa, ">\n                      <div class=").concat(entregaMarker_module_css_1.default.fotoEntregadorIcone, ">\n                        <div class=").concat(entregaMarker_module_css_1.default.nomeEntregaIcone, ">\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=").concat(entregaMarker_module_css_1.default.entregaMarcador, "></div>\n               </div>\n               "),
        className: "bg-black bg-opacity-0 border-r-10",
    });
    return entregasIconLeaf;
};
exports.markerTeste = markerTeste;
var meuEntregador = function (entrega) {
    if (entrega.entregador == "Marcos") {
        return "<div class=".concat(entregaMarker_module_css_1.default.marcosIconeEntrega, "></div>");
    }
    else if (entrega.entregador == "Uene") {
        return "<div class=".concat(entregaMarker_module_css_1.default.ueneIconeEntrega, "></div>");
    }
    else if (entrega.entregador == "Leo") {
        return "<div class=".concat(entregaMarker_module_css_1.default.leoIconeEntrega, "></div>");
    }
    else if (entrega.entregador == "João") {
        return "<div class=".concat(entregaMarker_module_css_1.default.joaoIconeEntrega, "></div>");
    }
};
var markerEntregaAndamento = function (entrega) {
    var motoristaDessaEntrega = meuEntregador(entrega);
    var entregasIconLeaf = leaflet_1.default.divIcon({
        html: "<div class=".concat(entregaMarker_module_css_1.default.areaMark, ">\n                  <div class=").concat(entregaMarker_module_css_1.default.marcadorAndamento, ">\n                    <div class=").concat(entregaMarker_module_css_1.default.iconeEntregaMapa, ">\n                      <div class=").concat(entregaMarker_module_css_1.default.fotoEntregadorIcone, ">\n                        ").concat(motoristaDessaEntrega, "\n                        <div class=").concat(entregaMarker_module_css_1.default.nomeEntregaIcone, ">\n                          <h3>Entrega para: ").concat(entrega.nome, "</h3>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=").concat(entregaMarker_module_css_1.default.entregaMarcador, "></div>\n               </div>\n               "),
        className: "bg-black bg-opacity-0 border-r-10",
    });
    return entregasIconLeaf;
};
exports.markerEntregaAndamento = markerEntregaAndamento;
var marcadorMotoristas = function (nome) {
    var meuEntregadorInterno = function (nomeEntregador) {
        if (nomeEntregador == "Marcos") {
            return "<div class=".concat(entregaMarker_module_css_1.default.marcosIconeEntrega, "></div>");
        }
        else if (nomeEntregador == "Uene") {
            return "<div class=".concat(entregaMarker_module_css_1.default.ueneIconeEntrega, "></div>");
        }
        else if (nomeEntregador == "Leo") {
            return "<div class=".concat(entregaMarker_module_css_1.default.leoIconeEntrega, "></div>");
        }
        else if (nomeEntregador == "João") {
            return "<div class=".concat(entregaMarker_module_css_1.default.joaoIconeEntrega, "></div>");
        }
    };
    var entregasIconLeaf = leaflet_1.default.divIcon({
        html: "<div class=".concat(entregaMarker_module_css_1.default.areaMark, ">\n                  <div class=").concat(entregaMarker_module_css_1.default.areaEntregadoRota, ">\n                    ").concat(meuEntregadorInterno(nome), "\n                  </div>\n                  <div class=").concat(entregaMarker_module_css_1.default.entregaMarcador, "></div>\n               </div>\n               "),
        className: "bg-black bg-opacity-0 border-r-10",
    });
    return entregasIconLeaf;
};
exports.marcadorMotoristas = marcadorMotoristas;
