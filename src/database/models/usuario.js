'use strict';

module.exports = (sequelize, DataTypes) => {
    const usuario = sequelize.define('usuarios', {
      tipoEspecialidadeId: DataTypes.INTEGER,   
      tipoUsuario: DataTypes.STRING,
      nome: DataTypes.STRING,
      login: DataTypes.STRING,
      senha: DataTypes.STRING,
      ativo: DataTypes.BOOLEAN
    }, {});
    
    usuario.associate = function(models) {
      this.belongsTo(models.TipoEspecialidade, { foreignKey: 'tipoEspecialidadeId', as: 'tipo_especialidades' })
    };

    return usuario; 
}
