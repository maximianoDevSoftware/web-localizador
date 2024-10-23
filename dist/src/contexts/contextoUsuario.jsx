"use strict";
"use client";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contextAutenticacao = void 0;
exports.ProvedorAutenticacao = ProvedorAutenticacao;
var react_1 = __importStar(require("react"));
var telaAutenticacao_module_css_1 = __importDefault(require("@/styles/telaAutenticacao.module.css"));
var socketCliente_1 = __importDefault(require("../socket/socketCliente")); // Importando o singleton do socket
var fotoUsuario_1 = __importDefault(require("./components/fotoUsuario"));
/**Incializando conexão com webSocket */
var socket = (0, socketCliente_1.default)(); // Obtendo a instância do socket
exports.contextAutenticacao = (0, react_1.createContext)({});
function ProvedorAutenticacao(_a) {
    var children = _a.children;
    var telaAutenticacao = (0, react_1.useRef)(null);
    var _b = (0, react_1.useState)({
        userName: "",
        senha: "",
        status: "",
        localizacao: {
            latitude: 0,
            longitude: 0,
        },
    }), usuarioLogado = _b[0], setUsuarioLogado = _b[1];
    var _c = (0, react_1.useState)({
        userName: "Administradores",
        status: "Carregando",
        senha: "ecoadm",
        localizacao: {
            latitude: 0,
            longitude: 0,
        },
    }), admUser = _c[0], setAdmUser = _c[1];
    var _d = (0, react_1.useState)({
        userName: "Marcos",
        status: "Carregando",
        senha: "ecomarcos",
        localizacao: {
            latitude: -25.8242341,
            longitude: -48.5410957,
        },
    }), marcosUser = _d[0], setMarcosUser = _d[1];
    var _e = (0, react_1.useState)({
        userName: "Uene",
        status: "Carregando",
        senha: "ecouene",
        localizacao: {
            latitude: 0,
            longitude: 0,
        },
    }), ueneUser = _e[0], setUeneUser = _e[1];
    var _f = (0, react_1.useState)({
        userName: "Leo",
        status: "Carregando",
        senha: "ecoleo",
        localizacao: {
            latitude: 0,
            longitude: 0,
        },
    }), leoUser = _f[0], setLeoUser = _f[1];
    var _g = (0, react_1.useState)({
        userName: "Joao",
        status: "Carregando",
        senha: "ecojoao",
        localizacao: {
            latitude: 0,
            longitude: 0,
        },
    }), joaoUser = _g[0], setJoaoUser = _g[1];
    var _h = (0, react_1.useState)({
        userName: "Administradores",
        senha: "",
    }), dadosForm = _h[0], setDadosForm = _h[1];
    var atualizandoFormulario = function (event) {
        var _a;
        setDadosForm(__assign(__assign({}, dadosForm), (_a = {}, _a[event.target.name] = event.target.value, _a)));
    };
    var atualizandoTodosUsuarios = function () {
        socket.emit("solicitar-usuarios");
    };
    var autenticandoFormulario = function (ev) {
        ev.preventDefault();
        console.log("Autenticando usuario: ".concat(dadosForm.userName));
        socket.emit("Autenticar Usuario", dadosForm);
    };
    /**Effect que recebe do servidor o usuário que foi logado, e define o estado dele dentro do context client administrador */
    (0, react_1.useEffect)(function () {
        socket.on("Usuario Autenticado", function (usuarioAutenticadoServidor) {
            var _a;
            atualizandoTodosUsuarios();
            if (usuarioAutenticadoServidor.userName) {
                setUsuarioLogado(usuarioAutenticadoServidor);
                if (usuarioAutenticadoServidor.userName === "Marcos") {
                    setMarcosUser(usuarioAutenticadoServidor);
                }
                else if (usuarioAutenticadoServidor.userName === "Uene") {
                    setUeneUser(usuarioAutenticadoServidor);
                }
                else if (usuarioAutenticadoServidor.userName === "Leo") {
                    setLeoUser(usuarioAutenticadoServidor);
                }
                else if (usuarioAutenticadoServidor.userName === "João") {
                    setJoaoUser(usuarioAutenticadoServidor);
                }
                else if (usuarioAutenticadoServidor.userName === "Administradores") {
                    setAdmUser(usuarioAutenticadoServidor);
                }
            }
            socket.on("localizando-motoristas", function (user) {
                if (user.userName) {
                    setUsuarioLogado(user);
                    if (user.userName === "Marcos") {
                        setMarcosUser(user);
                    }
                    else if (user.userName === "Uene") {
                        setUeneUser(user);
                    }
                    else if (user.userName === "Leo") {
                        setLeoUser(user);
                    }
                    else if (user.userName === "João") {
                        setJoaoUser(user);
                    }
                    else if (user.userName === "Administradores") {
                        setAdmUser(user);
                    }
                }
            });
            socket.on("todos-usuarios", function (todosUsuarios) {
                console.log("Todos os usuários foram atualizados com sucesso!");
                console.log(todosUsuarios);
                todosUsuarios.map(function (usuario) {
                    if (usuario.userName === "Marcos") {
                        setMarcosUser(usuario);
                    }
                    else if (usuario.userName === "Uene") {
                        setUeneUser(usuario);
                    }
                    else if (usuario.userName === "Leo") {
                        setLeoUser(usuario);
                    }
                    else if (usuario.userName === "João") {
                        setJoaoUser(usuario);
                    }
                    else if (usuario.userName === "Administradores") {
                        setAdmUser(usuario);
                    }
                });
            });
            (_a = telaAutenticacao.current) === null || _a === void 0 ? void 0 : _a.classList.toggle(telaAutenticacao_module_css_1.default.telaAutenticFora);
            console.log("Usuário autenticado com sucesso. Seu nome: " +
                usuarioAutenticadoServidor.userName);
        });
        return function () {
            socket.off("Usuario Autenticado");
            socket.off("localizando-motoristas");
            socket.off("todos-usuarios");
        };
    }, []);
    /**Effect para ouvir alterações nas localizações dos motoristas */
    return (<exports.contextAutenticacao.Provider value={{ usuarioLogado: usuarioLogado, marcosUser: marcosUser, ueneUser: ueneUser, leoUser: leoUser, joaoUser: joaoUser }}>
      <>
        <div className={"".concat(telaAutenticacao_module_css_1.default.telaAutenticacao, " ").concat(telaAutenticacao_module_css_1.default.telaAutenticForaaaaa)} ref={telaAutenticacao}>
          <div className={telaAutenticacao_module_css_1.default.areaLogin}>
            <fotoUsuario_1.default userSelectName={"".concat(dadosForm.userName)}></fotoUsuario_1.default>

            <form className={telaAutenticacao_module_css_1.default.formAutent} onSubmit={autenticandoFormulario}>
              <select name="userName" onChange={atualizandoFormulario}>
                <option value="Administradores">Administradores</option>
                <option value="Marcos">Marcos</option>
                <option value="Uene">Uene</option>
                <option value="Leo">Leo</option>
                <option value="João">João</option>
                <option value="Dev">Dev</option>
              </select>

              <input type="text" name="senha" placeholder="Sua senha" onChange={atualizandoFormulario}/>

              <button type="submit">LOGIN</button>
            </form>
          </div>
        </div>
        {children}
      </>
    </exports.contextAutenticacao.Provider>);
}
