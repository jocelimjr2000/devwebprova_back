const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);

const carro = new mongoose.Schema({
    modelo: {
        type: String,
        equired: [true, "O modelo do veículo é obrigatório"],
    },
    placa: {
        type: String,
        unique : true,
        required: [true, "A placa do veículo é obrigatória"],
    },
    ano: {
        type: Number,
        required: [true, "O ano do veículo é obrigatório"],
    },
    criadoEm: { 
        type: Date, 
        default: Date.now 
    },
});

module.exports = mongoose.model("Carros", carro);
