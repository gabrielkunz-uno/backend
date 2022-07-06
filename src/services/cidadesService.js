const db = require('../config/db');

//consultar o cliente
const getAllCidades = async () => {
    let sql = 'select * from cidades';
    let cidades = await db.query(sql);
    return cidades.rows;
}

const getCidadeById = async (params) => {
    let sql = `select * from cidades where id = $1`;
    let cidade = await db.query(sql, [params.id]);
    return cidade.rows;
}

//atualizar o cliente
const patchCidade = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update cidades set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

//inserir um novo cliente
const postCidade = async (params) => {
    let { nome, uf, ibge } = params;
    let sql = `
        insert into cidades (
            nome, uf, ibge
        ) values ($1, $2, $3) returning id`;
    let insert = await db.query(sql, [nome, uf, ibge]);
    return insert.rows[0];
} 

//deletar um cliente
const deleteCidade = async (params) => {
    let sql = 'delete from cidades where id = $1;';
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
} 


module.exports.getAllCidades = getAllCidades;
module.exports.getCidadeById = getCidadeById;
module.exports.postCidade = postCidade;
module.exports.deleteCidade = deleteCidade;
module.exports.patchCidade = patchCidade;