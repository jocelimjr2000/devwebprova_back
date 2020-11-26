const carro = require('../models/CarroSchema');

class CarroController {

    async cadastrar(req, res) {
        try {

            var result = await carro.findOne({
                "placa": req.body.placa
            });
            if (result) {
                res.status(403).json({
                    'mensagem': 'Placa já cadastrada'
                });
            } else {
                var result = await carro.create(req.body);
                res.status(201).json(result);
            }

        } catch (error) {
            res.status(500).json(error);
        }
    }

    async listar(req, res) {
        var result = await carro.find({});
        res.status(200).json(result);
    }

}

module.exports = new CarroController();