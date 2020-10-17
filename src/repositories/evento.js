'use strict';

const { Op } = require("sequelize");
const db = require('../database');

const evento = db.Evento;

module.exports = class SituacaoEvento {


     static async getAll() {
         return await evento.findAll({ where: { situacao_evento_id: { [Op.ne]: 3 }}});
     }

    static async insert(paramEvento) {
        const _evento = evento.build(paramEvento);
        return await _evento.save();
    }

     static async update(paramEvento) {
         await evento.update(paramEvento, { where: { id: paramEvento.id } });
     }
    
     static async delete(id) {
         await evento.destroy({ where: { id } });
     }
}