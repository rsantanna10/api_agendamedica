'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('tipo_especialidades',[
            { id: 1, descricao: 'Dentista', created_at: new Date(), updated_at: new Date() }, 
            { id: 2, descricao: 'Clínico Geral', created_at: new Date(), updated_at: new Date() }, 

        ], {});
    },

    down: (queryInterface, Sequelize) => { }
};
