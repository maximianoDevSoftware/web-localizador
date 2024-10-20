import dataConectEntregas from "@/database/conectandoEntregas";
import dataConnectUsuarios from "@/database/conectUsers";
import { usuarioTipo } from "@/types/userTypes";

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

export async function entregasDoDia() {
  // Obter a data de hoje
  const hoje = new Date();
  const diaHoje = hoje.getDate();
  const mesHoje = hoje.getMonth() + 1; // Janeiro é 0!
  const anoHoje = hoje.getFullYear();
  const dataHoje = [diaHoje, mesHoje, anoHoje];

  const conexaoEntregas = await dataConectEntregas();
  const modeloEntregas = conexaoEntregas.model("entregas");
  /*** Fazer a busca pelo usuário no banco de dados. */
  const todasEntregas = await modeloEntregas.find({
    dia: dataHoje,
  });
  console.log("Pegando todas entregas do Banco de Dados.");
  return todasEntregas;
}
