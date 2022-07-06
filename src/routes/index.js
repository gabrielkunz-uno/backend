const clientes = require('./clientesRoute')
const cidades = require('./cidadesRoute')

module.exports = (app) => {
    clientes(app)
    cidades(app)
}