"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FotoUsuarioLogin;
var ri_1 = require("react-icons/ri");
var telaAutenticacao_module_css_1 = __importDefault(require("./telaAutenticacao.module.css"));
var react_1 = require("react");
function FotoUsuarioLogin(_a) {
    var userSelectName = _a.userSelectName;
    var _b = (0, react_1.useState)("Administradores"), clienteFoto = _b[0], setClienteFoto = _b[1];
    (0, react_1.useEffect)(function () {
        console.log(userSelectName);
        if (userSelectName)
            setClienteFoto(userSelectName);
    }, [userSelectName]);
    return (<div className={"".concat(telaAutenticacao_module_css_1.default.areaComFotoUsuarioSelect)}>
      <div className={"".concat(telaAutenticacao_module_css_1.default.fotoUsuarioParaLogin)}>
        {clienteFoto == "Marcos" && (<>
            <div className={telaAutenticacao_module_css_1.default.fotoMarcosUsuarioLogin}></div>
          </>)}
        {clienteFoto == "Uene" && (<>
            <div className={telaAutenticacao_module_css_1.default.fotoUeneUsuarioLogin}></div>
          </>)}

        {clienteFoto == "Leo" && (<>
            <div className={telaAutenticacao_module_css_1.default.fotoLeoUsuarioLogin}></div>
          </>)}

        {clienteFoto == "João" && (<>
            <div className={telaAutenticacao_module_css_1.default.fotoJoaoUsuarioLogin}></div>
          </>)}

        {clienteFoto == "Administradores" && (<div className={telaAutenticacao_module_css_1.default.fotoAdmnistradoresLogin}>
            <ri_1.RiAdminLine />
          </div>)}
      </div>
    </div>);
}
