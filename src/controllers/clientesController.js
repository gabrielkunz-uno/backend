const clientesService = require('../services/clientesService')

const getAllClientes = async (req, res) => {
    try {
        const clientes = await clientesService.getAllClientes();
        res.status(200).send(clientes);
    } catch (err) {
        res.status(500).send(err);
    }
}

const getClienteById = async (req, res) => {
    try {
        const cliente = await clientesService.getClienteById(req.params);
        res.status(200).send(cliente);
    } catch (err) {
        res.status(500).send(err);
    }
}

const postCliente = async (req, res) => {
    try {
        const cliente = await clientesService.postCliente(req.body);
        res.status(201).send(cliente);
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.getAllClientes = getAllClientes;
module.exports.getClienteById = getClienteById;
module.exports.postCliente = postCliente;