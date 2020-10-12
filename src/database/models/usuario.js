'use strict';

module.exports = (sequelize, DataTypes) => {
    const tipoEspecialidade = sequelize.define('usuarios', {
        descricao: DataTypes.STRING
    }, {});
    
    tipoEspecialidade.associate = function(models) {
      //  this.hasMany(models.DistribuidoraCidade);
    };

    return tipoEspecialidade; 
}
