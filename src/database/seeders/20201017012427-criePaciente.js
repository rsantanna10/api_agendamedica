'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('pacientes',[
            { id: 1, usuario_id: 1, nome: 'Renato SantAnna', cpf: '11826345752', telefone: '21992986206', created_at: new Date(), updated_at: new Date() }, 
            { id: 2, usuario_id: 1, nome: 'Luciana Tavares', cpf: '08955952732', telefone: '21971408302', created_at: new Date(), updated_at: new Date() }, 

        ], {});
    },

    down: (queryInterface, Sequelize) => { }
};
