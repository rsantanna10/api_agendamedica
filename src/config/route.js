//const main = require('../controllers/main');
//const auth = require('../middlewares/auth');

const tipoEspecialidade = require('../controllers/tipoEspecialidade');

module.exports = class Route {
    constructor(server){
        server = this.main(server);
        return server;
    }

    main(server){
       // server.route('/main')
       //     .post(main.run);
       //
       //Tipo especialidade
        server.route('/tipoEspecialidade').get(tipoEspecialidade.get);
        server.route('/tipoEspecialidade/:id').get(tipoEspecialidade.getById);
        server.route('/tipoEspecialidade/').post(tipoEspecialidade.insert);
        server.route('/tipoEspecialidade/:id').patch(tipoEspecialidade.update);
        server.route('/tipoEspecialidade/:id').delete(tipoEspecialidade.delete);
        
	   //
       // server.route('/modalidade')
       //     .get(modalidade.get);
	   //
       // server.route('/subgrupo')
       //     .get(subGrupo.get);
	   //
       // server.route('/arcondicionado')
       //     .get(arCondicionado.get);
	   //
       // server.route('/iluminacao')
       //     .get(iluminacao.get);
	   //
       // server.route('/cep/:cep')
       //     .get(cep.get);
	   //
       // server.route('/sistemarefrigeracao')
       //     .get(sistemarefrigeracao.get);
	   //
       // server.route('/tipofluidorefrigeracao')
       //     .get(tipofluidorefrigeracao.get);
       // 
       // server.route('/distribuidora/cidade/:id')
       //     .get(distribuidora.getByCidadeId);
	   //
       // server.route('/relatorio/:hash')
       //     .get(diagnostico.report);
	   //
       // server.route('/admin')
       //     .get(auth.autorizado)
       //     .get(admin.get,);

        return server;
    }
}