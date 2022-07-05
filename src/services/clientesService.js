const { rows } = require('pg/lib/defaults');
const db = require('../config/db');

//consultar o cliente
const getAllClientes = async () => {
    let sql = 'select * from clientes';
    let clientes = await db.query(sql);
    return clientes.rows;
}

const getClienteById = async (params) => {
    let sql = `select * from clientes where id = $1`;
    let cliente = await db.query(sql, [params.id]);
    return cliente.rows;
}

//atualizar o cliente


//inserir um novo cliente
const postCliente = async (params) => {
    let { nome, cpfcnpj, data_nascimento, telefone, celular, email } = params;
    let sql = `
        insert into clientes (
            nome, 
            cpfcnpj, 
            data_nascimento, 
            telefone, 
            celular, 
            email
        ) values ($1, $2, $3, $4, $5, $6) returning id`;
    let insert = await db.query(sql, [nome, cpfcnpj, data_nascimento, telefone, celular, email]);
    return insert.rows[0];
} 


//deletar um cliente


module.exports.getAllClientes = getAllClientes;
module.exports.getClienteById = getClienteById;
module.exports.postCliente = postCliente;