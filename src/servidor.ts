import { createRequire } from "module";
const require = createRequire(import.meta.url);

import express from "express";
import cors from "cors"; // Importando o pacote cors
import next from "next";
import { createServer } from "http";
import { Server } from "socket.io"; // Importando o Server do socket.io
import { conexoesSocket } from "./services/connectSocketServer";

const dev = process.env.NODE_ENV !== "production";

/** Inicializando o app */
const app = next({ dev });
const tratadorRotas = app.getRequestHandler();

app.prepare().then(async () => {
  /********************************************
   CONFIGURANDO SERVIDOR    
   ********************************************/
  const servidor = express();
  const servidorEco = createServer(servidor);

  /** Inicializado WebSocket */
  const io = new Server(servidorEco, {
    cors: {
      origin: "*", // Adicione todas as origens permitidas aqui
      methods: ["GET", "POST"],
    },
    transports: ["polling", "websocket"],
  });

  servidor.use(express.json());
  servidor.use(cors()); // Adicionando o middleware cors
  servidor.all("*", (req, res) => {
    return tratadorRotas(req, res);
  });

  /*******************************************
   CONEXÕES COM WEBSOCKET    
   ********************************************/
  conexoesSocket(io);

  servidorEco.listen(3000, () => {
    console.log("> Servidor rodando em http://192.168.3.132:3000");
  });
});
