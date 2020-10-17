'use strict';

const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const TipoEspecialidade = require('./models/tipoEspecialidade');
const TipoEvento = require('./models/tipoEvento');
const SituacaoEvento = require('./models/situacaoEvento');
const Paciente = require('./models/paciente');
const Usuario = require('./models/usuario');
const Configuracao = require('./models/configuracao');
const Evento = require('./models/evento');

const sequelize = new Sequelize(dbConfig);

const models = {
    TipoEspecialidade: TipoEspecialidade(sequelize, Sequelize),
    TipoEvento: TipoEvento(sequelize, Sequelize),
    SituacaoEvento: SituacaoEvento(sequelize, Sequelize),
    Paciente: Paciente(sequelize, Sequelize),
    Usuario: Usuario(sequelize, Sequelize),
    Configuracao: Configuracao(sequelize, Sequelize),
    Evento: Evento(sequelize, Sequelize)
};

Object.values(models)
    .filter(model => typeof model.associate === "function")
    .forEach(model => model.associate(models));

const db = {
    ...models,
    sequelize 
};

module.exports = db;