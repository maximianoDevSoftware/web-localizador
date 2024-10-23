"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarcadoresMapaonSide = MarcadoresMapaonSide;
exports.categorizarEntregas = categorizarEntregas;
var leaflet_1 = __importDefault(require("leaflet"));
require("leaflet/dist/leaflet.css");
require("leaflet-routing-machine/dist/leaflet-routing-machine.css"); // Importando o estilo CSS do Leaflet Routing Machine
var react_1 = require("react");
var meuMapa_1 = require("../meuMapa");
require("leaflet-routing-machine"); // Importando o Leaflet Routing Machine
var iconesLocation_1 = require("./iconesLocation");
var contextoUsuario_1 = require("@/contexts/contextoUsuario");
var entregasClientesContext_1 = require("@/contexts/entregasClientesContext");
function MarcadoresMapaonSide() {
    var _a = (0, react_1.useContext)(meuMapa_1.contextMapa), mapaPronto = _a.mapaPronto, adicionandoMarcadores = _a.adicionandoMarcadores;
    var _b = (0, react_1.useContext)(contextoUsuario_1.contextAutenticacao), marcosUser = _b.marcosUser, ueneUser = _b.ueneUser, leoUser = _b.leoUser, joaoUser = _b.joaoUser;
    var _c = (0, react_1.useContext)(entregasClientesContext_1.ContextEntregasClientes), entregasDia = _c.entregasDia, entregasAndamento = _c.entregasAndamento, rotasEntregasMotoristas = _c.rotasEntregasMotoristas;
    // Inicialize o ref com o tipo correto
    var rotaControles = (0, react_1.useRef)({});
    function desenharRota(entregasOrdenadas, usuario, cor) {
        var waypoints = [
            leaflet_1.default.latLng(usuario.localizacao.latitude, usuario.localizacao.longitude),
        ];
        entregasOrdenadas.forEach(function (entrega) {
            waypoints.push(leaflet_1.default.latLng(entrega.coordenadas.latitude, entrega.coordenadas.longitude));
        });
        var plan = new leaflet_1.default.Routing.Plan(waypoints, {
            createMarker: function (i, wp) {
                var marcador = leaflet_1.default.marker(wp.latLng, {
                    icon: i === 0
                        ? (0, iconesLocation_1.marcadorMotoristas)(usuario.userName)
                        : (0, iconesLocation_1.markerEntrega)(entregasOrdenadas[i - 1]),
                });
                if (i !== 0) {
                    var dadosProntos = {
                        novoMarcador: marcador,
                        entregaMarcador: entregasOrdenadas[i - 1],
                    };
                    adicionandoMarcadores(dadosProntos);
                }
                return marcador;
            },
        });
        var valorUsuario = 0;
        if (usuario.userName === "Marcos") {
            valorUsuario = 0;
        }
        else if (usuario.userName === "Uene") {
            valorUsuario = 1;
        }
        else if (usuario.userName === "Leo") {
            valorUsuario = 2;
        }
        else if (usuario.userName === "João") {
            valorUsuario = 3;
        }
        if (mapaPronto) {
            // Remover a rota anterior, se existir
            if (rotaControles.current[valorUsuario]) {
                mapaPronto.removeControl(rotaControles.current[valorUsuario]);
            }
            // Adicionar a nova rota
            rotaControles.current[valorUsuario] = leaflet_1.default.Routing.control({
                show: false,
                waypoints: waypoints,
                routeWhileDragging: false,
                plan: plan,
                addWaypoints: false,
                lineOptions: {
                    styles: [{ weight: 4, color: cor, opacity: 1 }],
                    extendToWaypoints: true,
                    missingRouteTolerance: 1,
                },
            }).addTo(mapaPronto);
        }
    }
    (0, react_1.useEffect)(function () {
        if (entregasDia && entregasAndamento) {
            var todasEntregas = entregasDia.concat(entregasAndamento);
            var entregasCategorizadas = categorizarEntregas(todasEntregas);
            var entregasOrdenadasMarcos = ordenarEntregasPorProximidade(entregasCategorizadas[0], {
                latitude: marcosUser.localizacao.latitude,
                longitude: marcosUser.localizacao.longitude,
            });
            var entregasOrdenadaUene = ordenarEntregasPorProximidade(entregasCategorizadas[1], {
                latitude: ueneUser.localizacao.latitude,
                longitude: ueneUser.localizacao.longitude,
            });
            var entregasOrdenadaLeo = ordenarEntregasPorProximidade(entregasCategorizadas[2], {
                latitude: leoUser.localizacao.latitude,
                longitude: leoUser.localizacao.longitude,
            });
            rotasEntregasMotoristas("Marcos", entregasOrdenadasMarcos);
            rotasEntregasMotoristas("Uene", entregasOrdenadaUene);
            rotasEntregasMotoristas("Leo", entregasOrdenadaLeo);
            desenharRota(entregasOrdenadasMarcos, marcosUser, "blue");
            desenharRota(entregasOrdenadaUene, ueneUser, "red");
            desenharRota(entregasOrdenadaLeo, leoUser, "green");
        }
    }, [entregasDia, entregasAndamento]);
    return (<div>
      <h1>teste</h1>
      <p>preenchendo</p>
    </div>);
}
function categorizarEntregas(todasEntregas) {
    var entregasMarcos = [];
    var entregasUene = [];
    var entregasLeo = [];
    var entregasJoao = [];
    todasEntregas.forEach(function (entrega) {
        switch (entrega.entregador) {
            case "Marcos":
                entregasMarcos.push(entrega);
                break;
            case "Uene":
                entregasUene.push(entrega);
                break;
            case "Leo":
                entregasLeo.push(entrega);
                break;
            case "Joao":
                entregasJoao.push(entrega);
                break;
            default:
                break;
        }
    });
    return [entregasMarcos, entregasUene, entregasLeo, entregasJoao];
}
function calcularDistancia(coord1, coord2) {
    var R = 6371; // Raio da Terra em km
    var dLat = (coord2.latitude - coord1.latitude) * (Math.PI / 180);
    var dLon = (coord2.longitude - coord1.longitude) * (Math.PI / 180);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(coord1.latitude * (Math.PI / 180)) *
            Math.cos(coord2.latitude * (Math.PI / 180)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var distancia = R * c; // Distância em km
    return distancia;
}
function ordenarEntregasPorProximidade(entregas, coordenadasIniciais) {
    var entregasOrdenadas = [];
    var coordenadasAtuais = coordenadasIniciais;
    while (entregas.length > 0) {
        var entregaMaisProximaIndex = 0;
        var menorDistancia = calcularDistancia(coordenadasAtuais, entregas[0].coordenadas);
        for (var i = 1; i < entregas.length; i++) {
            var distancia = calcularDistancia(coordenadasAtuais, entregas[i].coordenadas);
            if (distancia < menorDistancia) {
                menorDistancia = distancia;
                entregaMaisProximaIndex = i;
            }
        }
        var entregaMaisProxima = entregas.splice(entregaMaisProximaIndex, 1)[0];
        entregasOrdenadas.push(entregaMaisProxima);
        coordenadasAtuais = entregaMaisProxima.coordenadas;
    }
    return entregasOrdenadas;
}
