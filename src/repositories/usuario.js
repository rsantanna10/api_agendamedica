'use strict';

const db = require('../database');

const usuario = db.Usuario;

module.exports = class Usuario {

    static async getById(id) {
        return await usuario.findByPk(id);
    }

    static async getAll() {
        return await usuario.findAll( { include: "tipo_especialidades" });
    }

    static async getByLogin(login) {
        return await usuario.findAll( { where: { login } });
    }

    static async insert(paramUsuario) {
        const _usuario = usuario.build({ 
            tipoEspecialidadeId: paramUsuario.tipoEspecialidadeId,
            tipoUsuario: paramUsuario.tipoUsuario,
            nome: paramUsuario.nome,
            login: paramUsuario.login,
            senha: paramUsuario.senha,
            ativo: paramUsuario.ativo
        });
        await _usuario.save();
    }

    static async update(paramUsuario) {
        await usuario.update({ 
            tipoEspecialidadeId: paramUsuario.tipoEspecialidadeId,
            tipoUsuario: paramUsuario.tipoUsuario,
            nome: paramUsuario.nome,
            login: paramUsuario.login,
            senha: paramUsuario.senha,
            ativo: paramUsuario.ativo
         },
         { where: { id: paramUsuario.id } });
    }
    
    static async delete(id) {
        await usuario.destroy({ where: { id } });
    }
}
