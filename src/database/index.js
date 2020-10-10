'use strict';

const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const TipoEspecialidade = require('./models/tipoEspecialidade');

const sequelize = new Sequelize(dbConfig);

const models = {
    TipoEspecialidade: TipoEspecialidade(sequelize, Sequelize),    
};

Object.values(models)
    .filter(model => typeof model.associate === "function")
    .forEach(model => model.associate(models));

const db = {
    ...models,
    sequelize 
};

module.exports = db;