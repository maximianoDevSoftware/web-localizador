import { Server, Socket } from "socket.io";
import autenticandoUsuario, {
  atualizandoCliente,
  atualziandoEntregas,
  criandoCliente,
  criandoEntrega,
  deletandoCliente,
  deletandoEntrega,
  entregasDoDia,
  enviandoMensagem,
  localzacaoEntrega,
  todasEntregasRelatorio,
  todosClientes,
  todosUsuariosBanco,
} from "./controlesBDServer";
import { usuarioTipo } from "@/types/userTypes";

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

    socket.on("Buscar Clientes", async (callBack) => {
      const meusClientes = await todosClientes();
      callBack(meusClientes);
    });

    socket.on("Buscar Entregas Relatorio", async (retorno) => {
      const todasEntregasRel = await todasEntregasRelatorio();
      retorno(todasEntregasRel);
    });

    socket.on("Atualizar Entrega", async (entregaUpdate) => {
      const todasEntregas = await atualziandoEntregas(entregaUpdate);
      socket.emit("Entregas Atualizadas", todasEntregas);
    });

    socket.on("Deletar Entrega", async (entregaDelete) => {
      const todasEntregas = await deletandoEntrega(entregaDelete);
      socket.emit("Entregas Atualizadas", todasEntregas);
    });

    socket.on("Mensagem Chegada Cliente", (dadosMensagem) => {
      enviandoMensagem(dadosMensagem);
    });

    socket.on("Localizacao Entrega", (dadosObj) => {
      localzacaoEntrega(dadosObj.entrega, dadosObj.dadosMensagem);
    });

    socket.on("Criar Entrega", async (entregaGerada) => {
      const todasEntregas = await criandoEntrega(entregaGerada);
      socket.emit("Entregas Atualizadas", todasEntregas);
    });

    socket.on("Criar Cliente", async (clienteGerado) => {
      await criandoCliente(clienteGerado);
    });

    socket.on("Alterar Cliente", async (clienteUpdate) => {
      await atualizandoCliente(clienteUpdate);
    });

    socket.on("Deletar Cliente", async (clienteDelete) => {
      await deletandoCliente(clienteDelete);
    });

    socket.on("Localizar Entregador", (usuario) => {
      console.log("Usuário conectando localização pelo socket");
      const usuarioAtualizado = usuario;
      console.log("Emitindo localizando-motoristas com: ", usuarioAtualizado);
      socket.emit("localizando-motoristas", usuarioAtualizado);
    });

    socket.on("solicitar-usuarios", async () => {
      todosUsuariosBanco().then((dados) => {
        socket.emit("todos-usuarios", dados);
      });
    });

    socket.on("Informar Admnistrador Localização", () => {});
  });
}
