'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('configuracoes',[
          { 
              usuario_id: 1, 
              texto_agendamento: 'Sua consulta foi agendada', 
              texto_reagendamento: 'Sua consulta foi reagendada', 
              texto_cancelamento: 'Sua consulta foi cancelada', 
              hora_inicio: '08:00', 
              hora_fim: '17:00',
              intervalo: 30,
              domingo: false,
              segunda: true,
              terca: true,
              quarta: true,
              quinta: true,
              sexta: true,
              sabado: false,
              created_at: new Date(), 
              updated_at: new Date() 
          },
          { 
              usuario_id: 2, 
              texto_agendamento: 'Sua consulta foi agendada', 
              texto_reagendamento: 'Sua consulta foi reagendada', 
              texto_cancelamento: 'Sua consulta foi cancelada', 
              hora_inicio: '08:00', 
              hora_fim: '17:00',
              intervalo: 30,
              domingo: false,
              segunda: true,
              terca: true,
              quarta: true,
              quinta: true,
              sexta: true,
              sabado: false,
              created_at: new Date(), 
              updated_at: new Date() 
          },
          { 
              usuario_id: 3, 
              texto_agendamento: 'Sua consulta foi agendada', 
              texto_reagendamento: 'Sua consulta foi reagendada', 
              texto_cancelamento: 'Sua consulta foi cancelada', 
              hora_inicio: '08:00', 
              hora_fim: '17:00',
              intervalo: 30,
              domingo: false,
              segunda: true,
              terca: true,
              quarta: true,
              quinta: true,
              sexta: true,
              sabado: false,
              created_at: new Date(), 
              updated_at: new Date() 
          }
        ], {});
    },

    down: (queryInterface, Sequelize) => { }
};
