// src/socket/socketCliente.ts
import { io } from "socket.io-client";
var socket = null;
var getSocket = function () {
    if (!socket) {
        socket = io("https://eco-localizador-fed2a7c613cc.herokuapp.com/"); // Substitua pela URL do seu servidor
    }
    return socket;
};
export default getSocket;
