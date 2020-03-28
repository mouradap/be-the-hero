const express = require('express');

const cors = require('cors');

const { errors } = require('celebrate');

const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

/* Rota / Recurso
*/

/* Métodos HTTP
    GET: Buscar uma informação no backend
    POST: Criar informação no backend
    PUT: Alterar informação no backend
    DELETE: Deleta informação no backend

*/

/* Tipos de Parâmetros

    Query: Parâmetros nomeados na rota após o símbolo de ? (Filtros, paginação)
    Route Params: Parâmetros utilizados para identificar recursos.
    Request Body: Corpo da requisição, para criar ou alterar recursos.


*/

/* Bancos de dados

    SQL:
        MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server;
    No SQL:
        MongoDB, CouchDB, etc

*/

/* 
    DRIVER: SELECT * FROM users

    Query Builder: JavaScript ( table('users').select('*').where() )
*/

app.use(routes);
app.use(errors());

module.exports = app;