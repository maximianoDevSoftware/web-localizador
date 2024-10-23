import mongoose from "mongoose";
export var usuarioSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        default: function () { return new mongoose.Types.ObjectId(); },
    },
    userName: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    localizacao: {
        type: {
            latitude: Number,
            longitude: Number,
        },
        required: true,
    },
});
