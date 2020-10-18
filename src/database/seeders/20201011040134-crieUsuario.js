'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
    up: async (queryInterface, Sequelize) => {

        const crypto  = async (senha) => {
            return await bcrypt.hash(senha, 10);
        };

        return queryInterface.bulkInsert('usuarios',[
            { id: 1, tipo_especialidade_id: 1,  tipo_usuario: 'A', nome: 'Administrador', login: 'admin@admin.com', senha: await crypto('@admin123'),  ativo: true, created_at: new Date(), updated_at: new Date() }, 
            { id: 2, tipo_especialidade_id: 1, tipo_usuario: 'U', nome: 'Médico com dados', login: 'clinica@clinica.com', senha: await crypto('@medico123'), ativo: true, created_at: new Date(), updated_at: new Date() }, 
            { id: 3, tipo_especialidade_id: 1, tipo_usuario: 'U', nome: 'Médicco do zero', login: 'teste@teste.com', senha: await crypto('@medico123'), ativo: true, created_at: new Date(), updated_at: new Date() }, 

        ], {});
    },

    down: (queryInterface, Sequelize) => { }
};
