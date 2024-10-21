import dataConectEntregas from "@/database/conectandoEntregas";
import dataConnectUsuarios from "@/database/conectUsers";
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
