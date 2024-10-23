"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientesSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
exports.clientesSchema = new mongoose_1.default.Schema({
    id: {
        type: String,
        required: true,
        default: function () { return new mongoose_1.default.Types.ObjectId(); },
    },
    nome: { type: String, required: true },
    telefone: { type: String, required: true },
    cidade: { type: String, required: true },
    bairro: { type: String, required: true },
    rua: { type: String, required: true },
    numero: { type: String, required: true },
    coordenadas: {
        type: {
            latitude: Number,
            longitude: Number,
        },
        required: true,
    },
});
