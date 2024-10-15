import express from "express";
import cors from "cors"; // Importando o pacote cors
import next from "next";
import { createServer } from "http";
import { Server } from "socket.io"; // Importando o Server do socket.io
import { conexoesSocket } from "./services/connectSocketServer";

const dev = process.env.NODE_ENV !== "production";
/**Inicializando o app */
const app = next({ dev });
const tratadorRotas = app.getRequestHandler();

app.prepare().then(() => {
  /******************************************** CONFIGURANDO SERVIDOR */
  const servidor = express();
  const servidorEco = createServer(servidor);

  /**Inicializado WebSocket */
  const io = new Server(servidorEco, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });

  servidor.use(express.json());
  servidor.use(cors()); // Adicionando o middleware cors

  servidor.all("*", (req, res) => {
    return tratadorRotas(req, res);
  });

  /******************************************* CONEXÕES COM WEBSOCKET */
  conexoesSocket(io);

  servidorEco.listen(3000, () => {
    console.log(
      "> Servidor rodando em https://localizador-eco-ffn7.vercel.app/"
    );
  });
});
