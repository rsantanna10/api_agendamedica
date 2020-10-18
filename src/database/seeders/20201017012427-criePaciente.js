'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        let data = new Date();

        return queryInterface.bulkInsert('pacientes',[
            { id: 1, usuario_id: 2, nome: 'Renato SantAnna', cpf: '11826345752', telefone: '21992986206', created_at: new Date(data.setDate(data.getDate() - 1)), updated_at: new Date() }, 
            { id: 2, usuario_id: 2, nome: 'Luciana Tavares', cpf: '08955952732', telefone: '21971408302', created_at: data, updated_at: new Date() }, 
            { id: 3, usuario_id: 2, nome: 'Daniel Tavares', cpf: '93587920001', telefone: '21999999901', created_at: new Date(data.setDate(data.getDate() - 1)), updated_at: new Date() }, 
            { id: 4, usuario_id: 2, nome: 'Luiz Miguel', cpf: '92678621030', telefone: '21999999902', created_at: data, updated_at: new Date() }, 
            { id: 5, usuario_id: 2, nome: 'Franciele Tavares', cpf: '04457931047', telefone: '21999999903', created_at: data, updated_at: new Date() }, 
            { id: 6, usuario_id: 2, nome: 'Daniela Tavares', cpf: '08956315043', telefone: '21999999904', created_at: data, updated_at: new Date() }, 
            { id: 7, usuario_id: 2, nome: 'Rosenir SantAnna', cpf: '04694424092', telefone: '21999999905', created_at: new Date(data.setDate(data.getDate() - 1)), updated_at: new Date() }, 
            { id: 8, usuario_id: 2, nome: 'Luiz Guilherme', cpf: '93111445097', telefone: '21999999906', created_at: new Date(data.setDate(data.getDate() - 1)), updated_at: new Date() }, 
            { id: 9, usuario_id: 2, nome: 'Debóra Luz', cpf: '22080175017', telefone: '21999999907', created_at: data, updated_at: new Date() }, 
            { id: 10, usuario_id: 2, nome: 'Júlio César', cpf: '00444613056', telefone: '21999999908', created_at: data, updated_at: new Date() }, 
            { id: 11, usuario_id: 2, nome: 'Nathalia Lustosa', cpf: '73621594043', telefone: '21999999909', created_at: new Date(data.setDate(data.getDate() - 1)), updated_at: new Date() }, 
            { id: 12, usuario_id: 2, nome: 'Emanuel Guilherme', cpf: '97521510003', telefone: '21999999910', created_at: new Date(data.setDate(data.getDate() - 1)), updated_at: new Date() }, 
            { id: 13, usuario_id: 2, nome: 'Theo Lustosa', cpf: '74833328089', telefone: '21999999910', created_at: new Date(data.setDate(data.getDate() - 1)), updated_at: new Date() }

        ], {});
    },

    down: (queryInterface, Sequelize) => { }
};
