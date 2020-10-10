'use strict';

const db = require('../database');

const tipoEspecialidade = db.TipoEspecialidade;

module.exports = class TipoEspecialidade {

    static async getById(id) {
        return await tipoEspecialidade.findByPk(id);
    }

    static async getAll() {
        return await tipoEspecialidade.findAll({
            attributes: [ 'id', 'descricao' ],
        });
    }

    static async insert(descricao) {
        const _tipoEspecialidade = tipoEspecialidade.build({ descricao });
        await _tipoEspecialidade.save();
    }

    static async update(id, descricao) {
        await tipoEspecialidade.update({ descricao },
                                       { where: { id } });
    }
    
    static async delete(id) {
        await tipoEspecialidade.destroy({ where: { id } });
    }
}