"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/socket/socketCliente.ts
var socket_io_client_1 = require("socket.io-client");
var socket = null;
var getSocket = function () {
    if (!socket) {
        socket = (0, socket_io_client_1.io)("https://eco-localizador-fed2a7c613cc.herokuapp.com/"); // Substitua pela URL do seu servidor
    }
    return socket;
};
exports.default = getSocket;
