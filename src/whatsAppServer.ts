// src/socket/socketCliente.ts
import whats, { Client, LocalAuth } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";

let client: Client | null = null;

const getClientWhatsApp = async () => {
  if (!client) {
    console.log("Inicializando Cliente WhatsApp...");
    client = new Client({
      authStrategy: new whats.LocalAuth(),
    });

    client.initialize();
  }

  client.on("qr", (qr: string) => {
    qrcode.generate(qr, { small: true });
  });

  client.on("ready", () => {
    console.log("Client está pronto");
    client?.sendMessage(
      "554187280741@c.us",
      "WhatsApp Servido EcoClena inicializado com Sucesso!"
    );
  });
  return client;
};

export default getClientWhatsApp;
