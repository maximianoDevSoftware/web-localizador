"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
exports.usuarioSchema = new mongoose_1.default.Schema({
    id: {
        type: String,
        required: true,
        default: function () { return new mongoose_1.default.Types.ObjectId(); },
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
