import mongoose from "mongoose";
export var clientesSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        default: function () { return new mongoose.Types.ObjectId(); },
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
