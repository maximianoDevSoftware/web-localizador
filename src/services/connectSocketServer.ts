import { Server, Socket } from "socket.io";
import autenticandoUsuario from "./controlesBDServer";

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
  });
}
