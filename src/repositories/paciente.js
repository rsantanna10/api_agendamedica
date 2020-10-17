'use strict';

const db = require('../database');

const paciente = db.Paciente;

module.exports = class SituacaoEvento {

    static async getById(id) {
        return await paciente.findByPk(id);
    }

    static async getByUsuarioId(id) {
        const pacientes = await paciente.findAll({
            where: { 
                usuario_id: id 
            },
            raw : true
        });
        
        return pacientes;
    }

    static async getAll() {
        return await paciente.findAll({
            attributes: [ 'id', 'usuarioId', 'nome', 'cpf', 'dataNascimento', 'sexo', 'email']
        });
    }

    static async getByCpf(cpf) {
        return await paciente.findOne({where: { cpf },
            attributes: [ 'id', 'usuarioId', 'nome', 'cpf', 'dataNascimento', 'sexo', 'telefone', 'email']
        });
    }

    

    static async insert(paramPaciente) {
        const _paciente = paciente.build({ 
            usuarioId: paramPaciente.usuarioId,
            nome: paramPaciente.nome,
            cpf: paramPaciente.cpf,
            dataNascimento: paramPaciente.dataNascimento,
            sexo: paramPaciente.sexo,
            email: paramPaciente.email,
            telefone: paramPaciente.telefone
        });
        await _paciente.save();
    }

    static async update(paramPaciente) {
        await paciente.update({ 
            usuarioId: paramPaciente.usuarioId,
            nome: paramPaciente.nome,
            cpf: paramPaciente.cpf,
            dataNascimento: paramPaciente.dataNascimento,
            sexo: paramPaciente.sexo,
            email: paramPaciente.email,
            telefone: paramPaciente.telefone
         },
         { where: { id: paramPaciente.id } });
    }
    
    static async delete(id) {
        await paciente.destroy({ where: { id } });
    }
}