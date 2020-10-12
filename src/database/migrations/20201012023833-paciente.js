'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("pacientes", {
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
      nome: {
        allowNull: false, 
        type: DataTypes.STRING
      },
      cpf: {
        allowNull: false, 
        type: DataTypes.STRING(11)
      },
      data_nascimento: {
        allowNull: false, 
        type: DataTypes.DATE
      },
      sexo: {
        allowNull: false, 
        type: DataTypes.STRING(1)
      },
      email: {
        allowNull: false, 
        type: DataTypes.STRING
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
  return queryInterface.dropTable("pacientes");
}
};