'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("eventos", {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
      },
      usuario_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: "usuarios",
            key: "id"
        },
        onDelete: 'cascade'        
      },
      tipo_evento_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: "tipo_eventos",
            key: "id"
        },
        onDelete: 'cascade'        
      },
      data_atendimento: {
        allowNull: false,
        type: DataTypes.DATE
      },
      hora_inicio: {
        allowNull: false,
        type: DataTypes.STRING(5)
      },
      hora_fim: {
        allowNull: false,
        type: DataTypes.STRING(5)
      },
      observacao: {
        allowNull: false,
        type: DataTypes.STRING(1000)
      },
      created_at: {
          allowNull: false,
          type: DataTypes.DATE
      },
      updated_at: {
          allowNull: false,
          type: DataTypes.DATE
      },
      deleted_at: {
          type: DataTypes.DATE
      },
  });
},

down: (queryInterface, Sequelize) => {
  return queryInterface.dropTable("eventos");
}
};
