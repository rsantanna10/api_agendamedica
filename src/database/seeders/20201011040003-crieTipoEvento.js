'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('tipo_eventos',[
            { id: 1, descricao: 'Agendamento', cor: '', created_at: new Date(), updated_at: new Date() }, 
            { id: 2, descricao: 'Reagendamento', cor: '#0000FF', created_at: new Date(), updated_at: new Date() }, 
            { id: 3, descricao: 'Cancelamento', cor: '#FF0000', created_at: new Date(), updated_at: new Date() }, 
        ], {});
    },

    down: (queryInterface, Sequelize) => { }
};
