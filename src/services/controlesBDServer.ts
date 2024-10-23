import dataConectClientes from "@/database/conectandoClientes";
import dataConectEntregas from "@/database/conectandoEntregas";
import dataConnectUsuarios from "@/database/conectUsers";
import { clientesTipo } from "@/types/clientesType";
import { entregasTipo } from "@/types/entregasTypes";
import { usuarioTipo } from "@/types/userTypes";
import getClientWhatsApp from "@/whatsAppServer";
import whats from "whatsapp-web.js";

type dadosIniciais = {
  userName: string;
  senha: string;
};

export default async function autenticandoUsuario(dados: dadosIniciais) {
  /*** Estabelecer conexão com o banco de dados de usuários. */
  const conexaoUsuarios = await dataConnectUsuarios();
  const modeloUsuarios = conexaoUsuarios.model("usuarios");
  /*** Fazer a busca pelo usuário no banco de dados. */
  const usuarioEncontrado = (await modeloUsuarios.findOne({
    userName: dados.userName,
    senha: dados.senha,
  })) as usuarioTipo;
  console.log(usuarioEncontrado.userName + " foi autenticado com Sucesso!");
  const todosUsuarios = (await modeloUsuarios.find({})) as usuarioTipo[];
  return { usuarioLogado: usuarioEncontrado, todosUsuarios: todosUsuarios };
}

export async function todosUsuariosBd() {
  /*** Estabelecer conexão com o banco de dados de usuários. */
  const conexaoUsuarios = await dataConnectUsuarios();
  const modeloUsuarios = conexaoUsuarios.model("usuarios");
  /*** Fazer a busca pelo usuário no banco de dados. */
  const allUsers = await modeloUsuarios.find({});
  console.log("Pegando todos usuários do banco de dados.");
  return allUsers;
}

export async function atualizandoUsuarios(usuarioUppdate: usuarioTipo) {
  /*** Estabelecer conexão com o banco de dados de usuários. */
  const conexaoUsuarios = await dataConnectUsuarios();
  const modeloUsuarios = conexaoUsuarios.model("usuarios");

  const userEntregaBD = await modeloUsuarios.updateOne(
    { userName: usuarioUppdate.userName }, // Encontra o documento pelo ID
    {
      $set: usuarioUppdate,
    }
  );
  console.log(
    "Status da atualização da coordenada do usuário: " +
      userEntregaBD.acknowledged
  );
}

export async function todasEntregasBancoDados() {
  /*** Estabelecer conexão com o banco de dados de usuários. */
  const conexaoEntregas = await dataConectEntregas();
  const modeloEntregas = conexaoEntregas.model("entregas");
  /*** Fazer a busca pelo usuário no banco de dados. */
  const todasEntregas = await modeloEntregas.find({});
  console.log("Pegando todas entregas do Banco de Dados.");
  return todasEntregas;
}

const dataDeHoje = () => {
  // Obter a data de hoje
  const hoje = new Date();
  const diaHoje = hoje.getDate();
  const mesHoje = hoje.getMonth() + 1; // Janeiro é 0!
  const anoHoje = hoje.getFullYear();
  const dataHoje = [diaHoje, mesHoje, anoHoje];
  return dataHoje;
};

export async function entregasDoDia() {
  const dataHoje = dataDeHoje();
  const conexaoEntregas = await dataConectEntregas();
  const modeloEntregas = conexaoEntregas.model("entregas");
  /*** Fazer a busca pelo usuário no banco de dados. */
  const todasEntregas = await modeloEntregas.find({
    dia: dataHoje,
  });
  console.log("Pegando todas entregas do Banco de Dados.");
  return todasEntregas;
}

export async function atualziandoEntregas(entregaUpdate: entregasTipo) {
  console.log(entregaUpdate);
  const dataHoje = dataDeHoje();
  const connEntrega = await dataConectEntregas();
  const modelEntrega = connEntrega.model("entregas");
  const entregaGerada = new modelEntrega(entregaUpdate);
  const userEntregaBD = await modelEntrega.updateOne(
    { id: entregaUpdate.id }, // Encontra o documento pelo ID
    {
      $set: entregaUpdate,
    }
  );
  if (userEntregaBD.matchedCount === 0) {
    console.log("Nenhum documento encontrado com esse ID.");
  } else if (userEntregaBD.modifiedCount === 0) {
    console.log("Nenhuma modificação foi feita.");
  } else {
    console.log("Documento atualizado com sucesso.");
  }
  const minhasEntregas = await modelEntrega.find({
    dia: dataHoje,
  });

  return minhasEntregas;
}

export async function deletandoEntrega(entregaDelete: entregasTipo) {
  const dataHoje = dataDeHoje();
  console.log(entregaDelete);
  const connEntrega = await dataConectEntregas();
  const modelEntrega = connEntrega.model("entregas");
  const entregaGerada = new modelEntrega(entregaDelete);
  const retornoDel = await modelEntrega.deleteOne({ id: entregaDelete.id });

  if (retornoDel.deletedCount === 0) {
    console.log("Entrega não encontrada");
  }

  const minhasEntregas = await modelEntrega.find({
    dia: dataHoje,
  });

  return minhasEntregas;
}

export async function enviandoMensagem(dadosMensagem: {
  contato: string;
  mensagem: string;
}) {
  const client = await getClientWhatsApp();
  const contactAdapt = dadosMensagem.contato + "@c.us";
  await client.sendMessage(contactAdapt, dadosMensagem.mensagem);
}

export async function localzacaoEntrega(
  entrega: entregasTipo,
  dadosMensagem: {
    contato: string;
    mensagem: string;
  }
) {
  // let endereco = `${entrega.cidade}, ${entrega.bairro}, ${entrega.rua}, ${entrega.numero}`;
  // const coordenadasEntrega = await end4Coords(endereco);
  console.log(dadosMensagem);
  const loc = new whats.Location(37.422, -122.084);
  const client = await getClientWhatsApp();

  const contactAdapt = dadosMensagem.contato + "@c.us";
  client.sendMessage(contactAdapt, loc);
}

/***ADAPTANDO CLIENTE E ENTREGAS CONTEXT */

export async function todasEntregas() {
  const dataHoje = dataDeHoje();
  const conexaoEntregas = await dataConectEntregas();
  const modeloEntregas = conexaoEntregas.model("entregas");
  /*** Fazer a busca pelo usuário no banco de dados. */
  const todasEntregas = await modeloEntregas.find({
    dia: dataHoje,
  });
  console.log("Pegando todas entregas do Banco de Dados.");
  return todasEntregas;
}

export async function meusClientes() {
  const connClientes = await dataConectClientes();
  const modelClientes = connClientes.model("clientesEco");
  console.log("Clientes solicitados do banco de dados");
  const todosClientes = await modelClientes.find({});
  return todosClientes;
}

export async function todasEntregasRelatorio() {
  const connEntrega = await dataConectEntregas();
  const modelEntrega = connEntrega.model("entregas");
  console.log("Entregas solicitadas do banco de dados para relatorio");
  const entregasRelatorio = await modelEntrega.find({});
  return entregasRelatorio;
}

export async function todosClientes() {
  const conexaoClientes = await dataConectClientes();
  const modeloClientes = conexaoClientes.model("clientesEco");
  /*** Fazer a busca pelo usuário no banco de dados. */
  const todosClientes = await modeloClientes.find({});
  console.log("Pegando todos os Clientes do Banco de Dados.");
  return todosClientes;
}

export async function criandoEntrega(entrega: entregasTipo) {
  const connEntrega = await dataConectEntregas();
  const modelEntrega = connEntrega.model("entregas");

  const entregaGerada = new modelEntrega(entrega);
  await entregaGerada.save().then(() => {
    console.log("salvo com sucesso!");
  });
  const dataHoje = dataDeHoje();
  const todasEntregas = await modelEntrega.find({
    dia: dataHoje,
  });
  console.log("Pegando todas entregas do Banco de Dados.");
  return todasEntregas;
}

export async function criandoCliente(cliente: clientesTipo) {
  const connClientes = await dataConectClientes();
  const modelClientes = connClientes.model("entregas");

  const clienteGerado = new modelClientes(cliente);
  await clienteGerado.save().then(() => {
    console.log("salvo com sucesso!");
  });
  const todosClientes = await modelClientes.find({});
  console.log("Pegando todos os Clientes do Banco de Dados.");
  return todosClientes;
}

export async function atualizandoCliente(cliente: clientesTipo) {
  console.log(cliente);
  const connClientes = await dataConectClientes();
  const modelClientes = connClientes.model("entregas");
  const clienteGerado = new modelClientes(cliente);
  const userCliente = await clienteGerado.updateOne(
    { id: cliente.id }, // Encontra o documento pelo ID
    {
      $set: cliente,
    }
  );
  if (userCliente.matchedCount === 0) {
    console.log("Nenhum documento encontrado com esse ID.");
  } else if (userCliente.modifiedCount === 0) {
    console.log("Nenhuma modificação foi feita.");
  } else {
    console.log("Documento atualizado com sucesso.");
  }

  const todosClientes = await modelClientes.find({});
  console.log("Pegando todos os Clientes do Banco de Dados.");
  return todosClientes;
}

export async function deletandoCliente(cliente: clientesTipo) {
  console.log(cliente);
  const connClientes = await dataConectClientes();
  const modelClientes = connClientes.model("entregas");
  const clienteGerado = new modelClientes(cliente);
  const retornoDel = await clienteGerado.deleteOne({ id: cliente.id });

  if (retornoDel.deletedCount === 0) {
    console.log("Entrega não encontrada");
  }

  const todosClientes = await modelClientes.find({});
  console.log("Pegando todos os Clientes do Banco de Dados.");

  return todosClientes;
}

export async function todosUsuariosBanco() {
  /*** Estabelecer conexão com o banco de dados de usuários. */
  const conexaoUsuarios = await dataConnectUsuarios();
  const modeloUsuarios = conexaoUsuarios.model("usuarios");
  /*** Fazer a busca pelo usuário no banco de dados. */
  const allUsers = await modeloUsuarios.find({});
  console.log("Pegando todos usuários do banco de dados.");
  return allUsers;
}
