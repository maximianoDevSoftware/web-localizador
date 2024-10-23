"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.entregaSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
exports.entregaSchema = new mongoose_1.default.Schema({
    id: {
        type: String,
        required: true,
        default: function () { return new mongoose_1.default.Types.ObjectId(); },
    },
    dia: { type: [Number, Number, Number], required: true },
    status: { type: String, required: true },
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
    valor: { type: String, required: true },
    pagamento: { type: String, required: true },
    entregador: { type: String, required: true },
    volume: { type: String, required: true },
});
