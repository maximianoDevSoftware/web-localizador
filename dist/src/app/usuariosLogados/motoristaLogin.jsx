"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MotoristasLogin;
var react_1 = require("react");
var loginMotoristas_module_css_1 = __importDefault(require("@/styles/loginStatusBar/loginMotoristas.module.css"));
var bi_1 = require("react-icons/bi");
var fa6_1 = require("react-icons/fa6");
var md_1 = require("react-icons/md");
var meuMapa_1 = require("../mapa/meuMapa");
var contextoUsuario_1 = require("@/contexts/contextoUsuario");
var entregasClientesContext_1 = require("@/contexts/entregasClientesContext");
var socketCliente_1 = __importDefault(require("@/socket/socketCliente"));
var socket = (0, socketCliente_1.default)();
function MotoristasLogin() {
    var _a = (0, react_1.useContext)(contextoUsuario_1.contextAutenticacao), usuarioLogado = _a.usuarioLogado, marcosUser = _a.marcosUser, ueneUser = _a.ueneUser, leoUser = _a.leoUser, joaoUser = _a.joaoUser;
    var _b = (0, react_1.useContext)(entregasClientesContext_1.ContextEntregasClientes), rotaEntregasMarcos = _b.rotaEntregasMarcos, rotaEntregasUene = _b.rotaEntregasUene, rotaEntregasLeo = _b.rotaEntregasLeo, rotaEntregasJoao = _b.rotaEntregasJoao;
    var marcosEl = (0, react_1.useRef)(null);
    var ueneEl = (0, react_1.useRef)(null);
    var leoEl = (0, react_1.useRef)(null);
    var joaoEl = (0, react_1.useRef)(null);
    var mapaPronto = (0, react_1.useContext)(meuMapa_1.contextMapa).mapaPronto;
    var verificandoMotoristas = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        if (marcosUser.status == "Indisponível") {
            (_a = marcosEl.current) === null || _a === void 0 ? void 0 : _a.classList.remove(loginMotoristas_module_css_1.default.userOn);
            (_b = marcosEl.current) === null || _b === void 0 ? void 0 : _b.classList.add(loginMotoristas_module_css_1.default.userOff);
        }
        else if (marcosUser.status == "Disponível") {
            (_c = marcosEl.current) === null || _c === void 0 ? void 0 : _c.classList.remove(loginMotoristas_module_css_1.default.userOff);
            (_d = marcosEl.current) === null || _d === void 0 ? void 0 : _d.classList.add(loginMotoristas_module_css_1.default.userOn);
        }
        if (ueneUser.status == "Indisponível") {
            (_e = ueneEl.current) === null || _e === void 0 ? void 0 : _e.classList.remove(loginMotoristas_module_css_1.default.userOn);
            (_f = ueneEl.current) === null || _f === void 0 ? void 0 : _f.classList.add(loginMotoristas_module_css_1.default.userOff);
        }
        else if (ueneUser.status == "Disponível") {
            (_g = ueneEl.current) === null || _g === void 0 ? void 0 : _g.classList.remove(loginMotoristas_module_css_1.default.userOff);
            (_h = ueneEl.current) === null || _h === void 0 ? void 0 : _h.classList.add(loginMotoristas_module_css_1.default.userOn);
        }
        if (leoUser.status == "Indisponível") {
            (_j = leoEl.current) === null || _j === void 0 ? void 0 : _j.classList.remove(loginMotoristas_module_css_1.default.userOn);
            (_k = leoEl.current) === null || _k === void 0 ? void 0 : _k.classList.add(loginMotoristas_module_css_1.default.userOff);
        }
        else if (leoUser.status == "Disponível") {
            (_l = leoEl.current) === null || _l === void 0 ? void 0 : _l.classList.remove(loginMotoristas_module_css_1.default.userOff);
            (_m = leoEl.current) === null || _m === void 0 ? void 0 : _m.classList.add(loginMotoristas_module_css_1.default.userOn);
        }
        if (joaoUser.status == "Indisponível") {
            (_o = joaoEl.current) === null || _o === void 0 ? void 0 : _o.classList.remove(loginMotoristas_module_css_1.default.userOn);
            (_p = joaoEl.current) === null || _p === void 0 ? void 0 : _p.classList.add(loginMotoristas_module_css_1.default.userOff);
        }
        else if (leoUser.status == "Disponível") {
            (_q = joaoEl.current) === null || _q === void 0 ? void 0 : _q.classList.remove(loginMotoristas_module_css_1.default.userOff);
            (_r = joaoEl.current) === null || _r === void 0 ? void 0 : _r.classList.add(loginMotoristas_module_css_1.default.userOn);
        }
    };
    (0, react_1.useEffect)(function () {
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
      {(usuarioLogado === null || usuarioLogado === void 0 ? void 0 : usuarioLogado.userName) === "Administradores" && (<div className={"".concat(loginMotoristas_module_css_1.default.areaLoginStatus)}>
          <div className={"".concat(loginMotoristas_module_css_1.default.telaLoginStatus, " ").concat(loginMotoristas_module_css_1.default.userOff)} ref={marcosEl}>
            <div className={"".concat(loginMotoristas_module_css_1.default.fotosUser, " ").concat(loginMotoristas_module_css_1.default.marcosFoto, " mb-10")}></div>
            <div className={loginMotoristas_module_css_1.default.areaInformsUser}>
              <h3>{marcosUser.userName}</h3>
              <h3 className={loginMotoristas_module_css_1.default.textUserStatus}>{marcosUser.status}</h3>
            </div>

            {marcosUser.status === "Disponível" && (<div className={"flex items-center justify-around   w-full absolute bottom-2 "}>
                <button className={"".concat(loginMotoristas_module_css_1.default.btnEnviarMensagemMotoraLogin)} onClick={function (ev) {
                    console.log("Olá Marcos, temos uma rota de entrega pronta");
                    console.log(rotaEntregasMarcos);
                    if (rotaEntregasMarcos)
                        enviarMensagemRotaMotorista("Marcos", rotaEntregasMarcos);
                }}>
                  <bi_1.BiMessageSquareDetail className="size-8 text-gray-400 transform transition-all duration-300 hover:scale-110 hover:text-[#3ebe5a]"/>
                </button>

                <button className={"".concat(loginMotoristas_module_css_1.default.btnViajarLocalMotorista)} onClick={function () {
                    buscarLocalizacao(marcosUser);
                }}>
                  <fa6_1.FaLocationCrosshairs className="size-8 text-gray-400 transform transition-all duration-300 hover:scale-110 hover:text-[#32658f]"/>
                </button>

                <button className={"".concat(loginMotoristas_module_css_1.default.btnLicacaoMotorista)} onClick={function () {
                    window.location.href = "tel:+551992757516";
                }}>
                  <md_1.MdOutlineWifiCalling3 className="size-8 text-gray-400 transform transition-all duration-300 hover:scale-110 hover:text-[#583794]"/>
                </button>
              </div>)}
          </div>

          <div className={"".concat(loginMotoristas_module_css_1.default.telaLoginStatus, " ").concat(loginMotoristas_module_css_1.default.userOff)} ref={ueneEl}>
            <div className={"".concat(loginMotoristas_module_css_1.default.fotosUser, " ").concat(loginMotoristas_module_css_1.default.ueneFoto, " mb-10")}></div>
            <div className={loginMotoristas_module_css_1.default.areaInformsUser}>
              <h3>{ueneUser.userName}</h3>
              <h3 className={loginMotoristas_module_css_1.default.textUserStatus}>{ueneUser.status}</h3>
            </div>

            {ueneUser.status === "Disponível" && (<div className={"flex items-center justify-around   w-full absolute bottom-2 "}>
                <button className={"".concat(loginMotoristas_module_css_1.default.btnEnviarMensagemMotoraLogin)} onClick={function (ev) {
                    console.log("Olá Uene, temos uma rota de entrega pronta");
                    console.log(rotaEntregasUene);
                    if (rotaEntregasUene)
                        enviarMensagemRotaMotorista("Uene", rotaEntregasUene);
                }}>
                  <bi_1.BiMessageSquareDetail className="size-8 text-gray-400 transform transition-all duration-300 hover:scale-110 hover:text-[#3ebe5a]"/>
                </button>

                <button className={"".concat(loginMotoristas_module_css_1.default.btnViajarLocalMotorista)} onClick={function () {
                    buscarLocalizacao(ueneUser);
                }}>
                  <fa6_1.FaLocationCrosshairs className="size-8 text-gray-400 transform transition-all duration-300 hover:scale-110 hover:text-[#32658f]"/>
                </button>

                <button className={"".concat(loginMotoristas_module_css_1.default.btnLicacaoMotorista)} onClick={function () {
                    window.location.href = "tel:+551992757516";
                }}>
                  <md_1.MdOutlineWifiCalling3 className="size-8 text-gray-400 transform transition-all duration-300 hover:scale-110 hover:text-[#583794]"/>
                </button>
              </div>)}
          </div>

          <div className={"".concat(loginMotoristas_module_css_1.default.telaLoginStatus, " ").concat(loginMotoristas_module_css_1.default.userOff)} ref={leoEl}>
            <div className={"".concat(loginMotoristas_module_css_1.default.fotosUser, " ").concat(loginMotoristas_module_css_1.default.leoFoto, " mb-10")}></div>
            <div className={loginMotoristas_module_css_1.default.areaInformsUser}>
              <h3>{leoUser.userName}</h3>
              <h3 className={loginMotoristas_module_css_1.default.textUserStatus}>{leoUser.status}</h3>
            </div>

            {leoUser.status === "Disponível" && (<div className={"flex items-center justify-around   w-full absolute bottom-2 "}>
                <button className={"".concat(loginMotoristas_module_css_1.default.btnEnviarMensagemMotoraLogin)} onClick={function (ev) {
                    console.log("Olá Leo, temos uma rota de entrega pronta");
                    console.log(rotaEntregasLeo);
                    if (rotaEntregasLeo)
                        enviarMensagemRotaMotorista("Leo", rotaEntregasLeo);
                }}>
                  <bi_1.BiMessageSquareDetail className="size-8 text-gray-400 transform transition-all duration-300 hover:scale-110 hover:text-[#3ebe5a]"/>
                </button>

                <button className={"".concat(loginMotoristas_module_css_1.default.btnViajarLocalMotorista)} onClick={function () {
                    buscarLocalizacao(leoUser);
                }}>
                  <fa6_1.FaLocationCrosshairs className="size-8 text-gray-400 transform transition-all duration-300 hover:scale-110 hover:text-[#32658f]"/>
                </button>

                <button className={"".concat(loginMotoristas_module_css_1.default.btnLicacaoMotorista)} onClick={function () {
                    window.location.href = "tel:+551992757516";
                }}>
                  <md_1.MdOutlineWifiCalling3 className="size-8 text-gray-400 transform transition-all duration-300 hover:scale-110 hover:text-[#583794]"/>
                </button>
              </div>)}
          </div>

          <div className={"".concat(loginMotoristas_module_css_1.default.telaLoginStatus, " ").concat(loginMotoristas_module_css_1.default.userOff)} ref={joaoEl}>
            <div className={"".concat(loginMotoristas_module_css_1.default.fotosUser, " ").concat(loginMotoristas_module_css_1.default.joaoFoto, " mb-10")}></div>
            <div className={loginMotoristas_module_css_1.default.areaInformsUser}>
              <h3>{joaoUser.userName}</h3>
              <h3 className={loginMotoristas_module_css_1.default.textUserStatus}>{joaoUser.status}</h3>
            </div>

            {(joaoUser.status === "Disponível" && (<div className={"flex items-center justify-around   w-full absolute bottom-2 "}>
                <button className={"".concat(loginMotoristas_module_css_1.default.btnEnviarMensagemMotoraLogin)} onClick={function (ev) {
                    console.log("Olá João, temos uma rota de entrega pronta");
                    console.log(rotaEntregasJoao);
                    if (rotaEntregasJoao)
                        enviarMensagemRotaMotorista("João", rotaEntregasJoao);
                }}>
                  <bi_1.BiMessageSquareDetail className="size-8 text-gray-400 transform transition-all duration-300 hover:scale-110 hover:text-[#3ebe5a]"/>
                </button>

                <button className={"".concat(loginMotoristas_module_css_1.default.btnViajarLocalMotorista)} onClick={function () {
                    buscarLocalizacao(joaoUser);
                }}>
                  <fa6_1.FaLocationCrosshairs className="size-8 text-gray-400 transform transition-all duration-300 hover:scale-110 hover:text-[#32658f]"/>
                </button>

                <button className={"".concat(loginMotoristas_module_css_1.default.btnLicacaoMotorista)} onClick={function () {
                    window.location.href = "tel:+551992757516";
                }}>
                  <md_1.MdOutlineWifiCalling3 className="size-8 text-gray-400 transform transition-all duration-300 hover:scale-110 hover:text-[#583794]"/>
                </button>
              </div>)) ||
                (joaoUser.status === "Indisponível" && (<div className={"flex items-center justify-around   w-full absolute bottom-2 "}>
                  <button className={"".concat(loginMotoristas_module_css_1.default.btnEnviarMensagemMotoraLogin)} onClick={function (ev) {
                        console.log("Olá João, temos uma rota de entrega pronta");
                        console.log(rotaEntregasJoao);
                        if (rotaEntregasJoao)
                            enviarMensagemRotaMotorista("João", rotaEntregasJoao);
                    }}>
                    <bi_1.BiMessageSquareDetail className="size-8 text-gray-400 transform transition-all duration-300 hover:scale-110 hover:text-[#3ebe5a]"/>
                  </button>

                  <button className={"".concat(loginMotoristas_module_css_1.default.btnViajarLocalMotorista)} onClick={function () {
                        buscarLocalizacao(joaoUser);
                    }}>
                    <fa6_1.FaLocationCrosshairs className="size-8 text-gray-400 transform transition-all duration-300 hover:scale-110 hover:text-[#32658f]"/>
                  </button>

                  <button className={"".concat(loginMotoristas_module_css_1.default.btnLicacaoMotorista)} onClick={function () {
                        window.location.href = "tel:+551992757516";
                    }}>
                    <md_1.MdOutlineWifiCalling3 className="size-8 text-gray-400 transform transition-all duration-300 hover:scale-110 hover:text-[#583794]"/>
                  </button>
                </div>))}
          </div>
        </div>)}
    </>);
}
