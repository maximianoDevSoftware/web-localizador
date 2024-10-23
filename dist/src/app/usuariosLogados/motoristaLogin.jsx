"use client";
import { useContext, useEffect, useRef } from "react";
import estilo from "@/styles/loginStatusBar/loginMotoristas.module.css";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { contextMapa } from "../mapa/meuMapa";
import { contextAutenticacao } from "@/contexts/contextoUsuario";
import { ContextEntregasClientes } from "@/contexts/entregasClientesContext";
import getSocket from "@/socket/socketCliente";
var socket = getSocket();
export default function MotoristasLogin() {
    var _a = useContext(contextAutenticacao), usuarioLogado = _a.usuarioLogado, marcosUser = _a.marcosUser, ueneUser = _a.ueneUser, leoUser = _a.leoUser, joaoUser = _a.joaoUser;
    var _b = useContext(ContextEntregasClientes), rotaEntregasMarcos = _b.rotaEntregasMarcos, rotaEntregasUene = _b.rotaEntregasUene, rotaEntregasLeo = _b.rotaEntregasLeo, rotaEntregasJoao = _b.rotaEntregasJoao;
    var marcosEl = useRef(null);
    var ueneEl = useRef(null);
    var leoEl = useRef(null);
    var joaoEl = useRef(null);
    var mapaPronto = useContext(contextMapa).mapaPronto;
    var verificandoMotoristas = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        if (marcosUser.status == "Indisponível") {
            (_a = marcosEl.current) === null || _a === void 0 ? void 0 : _a.classList.remove(estilo.userOn);
            (_b = marcosEl.current) === null || _b === void 0 ? void 0 : _b.classList.add(estilo.userOff);
        }
        else if (marcosUser.status == "Disponível") {
            (_c = marcosEl.current) === null || _c === void 0 ? void 0 : _c.classList.remove(estilo.userOff);
            (_d = marcosEl.current) === null || _d === void 0 ? void 0 : _d.classList.add(estilo.userOn);
        }
        if (ueneUser.status == "Indisponível") {
            (_e = ueneEl.current) === null || _e === void 0 ? void 0 : _e.classList.remove(estilo.userOn);
            (_f = ueneEl.current) === null || _f === void 0 ? void 0 : _f.classList.add(estilo.userOff);
        }
        else if (ueneUser.status == "Disponível") {
            (_g = ueneEl.current) === null || _g === void 0 ? void 0 : _g.classList.remove(estilo.userOff);
            (_h = ueneEl.current) === null || _h === void 0 ? void 0 : _h.classList.add(estilo.userOn);
        }
        if (leoUser.status == "Indisponível") {
            (_j = leoEl.current) === null || _j === void 0 ? void 0 : _j.classList.remove(estilo.userOn);
            (_k = leoEl.current) === null || _k === void 0 ? void 0 : _k.classList.add(estilo.userOff);
        }
        else if (leoUser.status == "Disponível") {
            (_l = leoEl.current) === null || _l === void 0 ? void 0 : _l.classList.remove(estilo.userOff);
            (_m = leoEl.current) === null || _m === void 0 ? void 0 : _m.classList.add(estilo.userOn);
        }
        if (joaoUser.status == "Indisponível") {
            (_o = joaoEl.current) === null || _o === void 0 ? void 0 : _o.classList.remove(estilo.userOn);
            (_p = joaoEl.current) === null || _p === void 0 ? void 0 : _p.classList.add(estilo.userOff);
        }
        else if (leoUser.status == "Disponível") {
            (_q = joaoEl.current) === null || _q === void 0 ? void 0 : _q.classList.remove(estilo.userOff);
            (_r = joaoEl.current) === null || _r === void 0 ? void 0 : _r.classList.add(estilo.userOn);
        }
    };
    useEffect(function () {
        verificandoMotoristas();
    }, [marcosUser, ueneUser, leoUser, joaoUser, usuarioLogado]);
    var enviarMensagemRotaMotorista = function (nomeMotorista, conjuntoEntregas) {
        var objetoMsg = {
            numero: "aaaaaaaaaa",
            mensagem: "\n      \nOl\u00E1 ".concat(nomeMotorista, ".\nTemos uma rota de entrega pronta, dispon\u00EDvel para voc\u00EA:\n").concat(conjuntoEntregas === null || conjuntoEntregas === void 0 ? void 0 : conjuntoEntregas.map(function (cadaEntrega, index) {
                return "\n*".concat(index + 1, "\u00AA entrega.*\n").concat(cadaEntrega.nome, "\n\n    ");
            }), "\n      "),
        };
        socket.emit("enviarMensagem", objetoMsg);
    };
    var buscarLocalizacao = function (usuario) {
        mapaPronto === null || mapaPronto === void 0 ? void 0 : mapaPronto.flyTo([usuario.localizacao.latitude, usuario.localizacao.longitude], 17, {
            duration: 3,
        });
    };
    return (<>
      {(usuarioLogado === null || usuarioLogado === void 0 ? void 0 : usuarioLogado.userName) === "Administradores" && (<div className={"".concat(estilo.areaLoginStatus)}>
          <div className={"".concat(estilo.telaLoginStatus, " ").concat(estilo.userOff)} ref={marcosEl}>
            <div className={"".concat(estilo.fotosUser, " ").concat(estilo.marcosFoto, " mb-10")}></div>
            <div className={estilo.areaInformsUser}>
              <h3>{marcosUser.userName}</h3>
              <h3 className={estilo.textUserStatus}>{marcosUser.status}</h3>
            </div>

            {marcosUser.status === "Disponível" && (<div className={"flex items-center justify-around   w-full absolute bottom-2 "}>
                <button className={"".concat(estilo.btnEnviarMensagemMotoraLogin)} onClick={function (ev) {
                    console.log("Olá Marcos, temos uma rota de entrega pronta");
                    console.log(rotaEntregasMarcos);
                    if (rotaEntregasMarcos)
                        enviarMensagemRotaMotorista("Marcos", rotaEntregasMarcos);
                }}>
                  <BiMessageSquareDetail className="size-8 text-gray-400 transform transition-all duration-300 hover:scale-110 hover:text-[#3ebe5a]"/>
                </button>

                <button className={"".concat(estilo.btnViajarLocalMotorista)} onClick={function () {
                    buscarLocalizacao(marcosUser);
                }}>
                  <FaLocationCrosshairs className="size-8 text-gray-400 transform transition-all duration-300 hover:scale-110 hover:text-[#32658f]"/>
                </button>

                <button className={"".concat(estilo.btnLicacaoMotorista)} onClick={function () {
                    window.location.href = "tel:+551992757516";
                }}>
                  <MdOutlineWifiCalling3 className="size-8 text-gray-400 transform transition-all duration-300 hover:scale-110 hover:text-[#583794]"/>
                </button>
              </div>)}
          </div>

          <div className={"".concat(estilo.telaLoginStatus, " ").concat(estilo.userOff)} ref={ueneEl}>
            <div className={"".concat(estilo.fotosUser, " ").concat(estilo.ueneFoto, " mb-10")}></div>
            <div className={estilo.areaInformsUser}>
              <h3>{ueneUser.userName}</h3>
              <h3 className={estilo.textUserStatus}>{ueneUser.status}</h3>
            </div>

            {ueneUser.status === "Disponível" && (<div className={"flex items-center justify-around   w-full absolute bottom-2 "}>
                <button className={"".concat(estilo.btnEnviarMensagemMotoraLogin)} onClick={function (ev) {
                    console.log("Olá Uene, temos uma rota de entrega pronta");
                    console.log(rotaEntregasUene);
                    if (rotaEntregasUene)
                        enviarMensagemRotaMotorista("Uene", rotaEntregasUene);
                }}>
                  <BiMessageSquareDetail className="size-8 text-gray-400 transform transition-all duration-300 hover:scale-110 hover:text-[#3ebe5a]"/>
                </button>

                <button className={"".concat(estilo.btnViajarLocalMotorista)} onClick={function () {
                    buscarLocalizacao(ueneUser);
                }}>
                  <FaLocationCrosshairs className="size-8 text-gray-400 transform transition-all duration-300 hover:scale-110 hover:text-[#32658f]"/>
                </button>

                <button className={"".concat(estilo.btnLicacaoMotorista)} onClick={function () {
                    window.location.href = "tel:+551992757516";
                }}>
                  <MdOutlineWifiCalling3 className="size-8 text-gray-400 transform transition-all duration-300 hover:scale-110 hover:text-[#583794]"/>
                </button>
              </div>)}
          </div>

          <div className={"".concat(estilo.telaLoginStatus, " ").concat(estilo.userOff)} ref={leoEl}>
            <div className={"".concat(estilo.fotosUser, " ").concat(estilo.leoFoto, " mb-10")}></div>
            <div className={estilo.areaInformsUser}>
              <h3>{leoUser.userName}</h3>
              <h3 className={estilo.textUserStatus}>{leoUser.status}</h3>
            </div>

            {leoUser.status === "Disponível" && (<div className={"flex items-center justify-around   w-full absolute bottom-2 "}>
                <button className={"".concat(estilo.btnEnviarMensagemMotoraLogin)} onClick={function (ev) {
                    console.log("Olá Leo, temos uma rota de entrega pronta");
                    console.log(rotaEntregasLeo);
                    if (rotaEntregasLeo)
                        enviarMensagemRotaMotorista("Leo", rotaEntregasLeo);
                }}>
                  <BiMessageSquareDetail className="size-8 text-gray-400 transform transition-all duration-300 hover:scale-110 hover:text-[#3ebe5a]"/>
                </button>

                <button className={"".concat(estilo.btnViajarLocalMotorista)} onClick={function () {
                    buscarLocalizacao(leoUser);
                }}>
                  <FaLocationCrosshairs className="size-8 text-gray-400 transform transition-all duration-300 hover:scale-110 hover:text-[#32658f]"/>
                </button>

                <button className={"".concat(estilo.btnLicacaoMotorista)} onClick={function () {
                    window.location.href = "tel:+551992757516";
                }}>
                  <MdOutlineWifiCalling3 className="size-8 text-gray-400 transform transition-all duration-300 hover:scale-110 hover:text-[#583794]"/>
                </button>
              </div>)}
          </div>

          <div className={"".concat(estilo.telaLoginStatus, " ").concat(estilo.userOff)} ref={joaoEl}>
            <div className={"".concat(estilo.fotosUser, " ").concat(estilo.joaoFoto, " mb-10")}></div>
            <div className={estilo.areaInformsUser}>
              <h3>{joaoUser.userName}</h3>
              <h3 className={estilo.textUserStatus}>{joaoUser.status}</h3>
            </div>

            {(joaoUser.status === "Disponível" && (<div className={"flex items-center justify-around   w-full absolute bottom-2 "}>
                <button className={"".concat(estilo.btnEnviarMensagemMotoraLogin)} onClick={function (ev) {
                    console.log("Olá João, temos uma rota de entrega pronta");
                    console.log(rotaEntregasJoao);
                    if (rotaEntregasJoao)
                        enviarMensagemRotaMotorista("João", rotaEntregasJoao);
                }}>
                  <BiMessageSquareDetail className="size-8 text-gray-400 transform transition-all duration-300 hover:scale-110 hover:text-[#3ebe5a]"/>
                </button>

                <button className={"".concat(estilo.btnViajarLocalMotorista)} onClick={function () {
                    buscarLocalizacao(joaoUser);
                }}>
                  <FaLocationCrosshairs className="size-8 text-gray-400 transform transition-all duration-300 hover:scale-110 hover:text-[#32658f]"/>
                </button>

                <button className={"".concat(estilo.btnLicacaoMotorista)} onClick={function () {
                    window.location.href = "tel:+551992757516";
                }}>
                  <MdOutlineWifiCalling3 className="size-8 text-gray-400 transform transition-all duration-300 hover:scale-110 hover:text-[#583794]"/>
                </button>
              </div>)) ||
                (joaoUser.status === "Indisponível" && (<div className={"flex items-center justify-around   w-full absolute bottom-2 "}>
                  <button className={"".concat(estilo.btnEnviarMensagemMotoraLogin)} onClick={function (ev) {
                        console.log("Olá João, temos uma rota de entrega pronta");
                        console.log(rotaEntregasJoao);
                        if (rotaEntregasJoao)
                            enviarMensagemRotaMotorista("João", rotaEntregasJoao);
                    }}>
                    <BiMessageSquareDetail className="size-8 text-gray-400 transform transition-all duration-300 hover:scale-110 hover:text-[#3ebe5a]"/>
                  </button>

                  <button className={"".concat(estilo.btnViajarLocalMotorista)} onClick={function () {
                        buscarLocalizacao(joaoUser);
                    }}>
                    <FaLocationCrosshairs className="size-8 text-gray-400 transform transition-all duration-300 hover:scale-110 hover:text-[#32658f]"/>
                  </button>

                  <button className={"".concat(estilo.btnLicacaoMotorista)} onClick={function () {
                        window.location.href = "tel:+551992757516";
                    }}>
                    <MdOutlineWifiCalling3 className="size-8 text-gray-400 transform transition-all duration-300 hover:scale-110 hover:text-[#583794]"/>
                  </button>
                </div>))}
          </div>
        </div>)}
    </>);
}
