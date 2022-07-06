const cidadesController = require('../controllers/cidadesController');

module.exports = (app) => {
    app.get('/cidades', cidadesController.getAllCidades)
    app.get('/cidades/:id', cidadesController.getCidadeById)
    app.post('/cidades', cidadesController.postCidade)
    app.delete('/cidades/:id', cidadesController.deleteCidade)
    app.patch('/cidades', cidadesController.patchCidade)
}