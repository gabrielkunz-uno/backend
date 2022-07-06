const cidadesService = require('../services/cidadesService')

const getAllCidades = async (req, res) => {
    try {
        const cidades = await cidadesService.getAllCidades();
        res.status(200).send(cidades);
    } catch (err) {
        res.status(500).send(err);
    }
}

const getCidadeById = async (req, res) => {
    try {
        const cidade = await cidadesService.getCidadeById(req.params);
        res.status(200).send(cidade);
    } catch (err) {
        res.status(500).send(err);
    }
}

const postCidade = async (req, res) => {
    try {
        const cidade = await cidadesService.postCidade(req.body);
        res.status(201).send(cidade);
    } catch (err) {
        res.status(500).send(err);
    }
}

const patchCidade = async (req, res) => {
    try {
        const cidade = await cidadesService.patchCidade(req.body);
        res.status(201).send(cidade);
    } catch (err) {
        res.status(500).send(err);
    }
}

const deleteCidade = async (req, res) => {
    try {
        let deletado = await cidadesService.deleteCidade(req.params);
        let msg = deletado 
            ? `Cidade ${req.params.id} deletada com sucesso` 
            : `Não foi encontrada nenhuma cidade com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports.getAllCidades = getAllCidades;
module.exports.getCidadeById = getCidadeById;
module.exports.postCidade = postCidade;
module.exports.deleteCidade = deleteCidade;
module.exports.patchCidade = patchCidade;