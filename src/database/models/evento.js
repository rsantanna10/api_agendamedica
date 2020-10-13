'use strict';

module.exports = (sequelize, DataTypes) => {
    const usuario = sequelize.define('usuarios', {
      dataAtendimento: DataTypes.DATE,   
      horaInicio: DataTypes.STRING(5),
      horaFim: DataTypes.STRING(5),
      observacao: DataTypes.STRING(1000)
    }, {});
    
    usuario.associate = function(models) {
      this.belongsTo(models.tipoEspecialidade, { foreignKey: 'tipoEspecialidadeId', as: 'tipo_especialidade' })
    };

    return usuario; 
}
