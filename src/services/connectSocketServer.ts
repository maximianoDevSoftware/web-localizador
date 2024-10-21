import { Server, Socket } from "socket.io";
import autenticandoUsuario, {
  atualziandoEntregas,
  entregasDoDia,
  enviandoMensagem,
  localzacaoEntrega,
} from "./controlesBDServer";

export function conexoesSocket(io: Server) {
  io.on("connection", (socket: Socket) => {
    console.log("Cliente conectado, seu socket foi criado com sucesso.");

    socket.on("Autenticar Usuario", (usuario) => {
      console.log("Um usuário tentando logar...");
      console.log(usuario);
      autenticandoUsuario(usuario).then((objetoAutenticate) => {
        console.log("Usuario autenticado pronto para uso");
        socket.emit("Usuario Autenticado", objetoAutenticate.usuarioLogado);
      });
    });

    socket.on("Desconectar Usuario", () => {
      socket.disconnect();
      console.log("Um usuário abandonou a conexão");
    });

    socket.on("Buscar Entregas", async (callBack) => {
      const minhasEntregas = await entregasDoDia();
      callBack(minhasEntregas);
    });

    socket.on("Atualizar Entrega", async (entregaUpdate) => {
      const todasEntregas = await atualziandoEntregas(entregaUpdate);
      socket.emit("Entregas Atualizadas", todasEntregas);
    });

    socket.on("Mensagem Chegada Cliente", (dadosMensagem) => {
      enviandoMensagem(dadosMensagem);
    });

    socket.on("Localizacao Entrega", (dadosObj) => {
      localzacaoEntrega(dadosObj.entrega, dadosObj.dadosMensagem);
    });

    socket.on("Localizar Entregador", () => {});

    socket.on("Informar Admnistrador Localização", () => {});
  });
}
