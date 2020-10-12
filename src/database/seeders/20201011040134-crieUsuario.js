'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('usuarios',[
            { id: 1, tipo_usuario: 'A', nome: 'Administrador', login: 'admin', senha: '123', ativo: true, created_at: new Date(), updated_at: new Date() }, 
            { id: 2, tipo_usuario: 'U', nome: 'Renat', login: 'renato', senha: '123', ativo: true, created_at: new Date(), updated_at: new Date() }, 

        ], {});
    },

    down: (queryInterface, Sequelize) => { }
};
