const auth = require('../middleware/auth');
const tipoEspecialidade = require('../controllers/tipoEspecialidade');
const tipoConsulta = require('../controllers/tipoConsulta');
const situacaoConsulta = require('../controllers/situacaoConsulta');
const paciente = require('../controllers/paciente');
const usuario = require('../controllers/usuario');
const configuracao = require('../controllers/configuracao');

module.exports = class Route {
    constructor(server){
        server = this.main(server);
        return server;
    }

    main(server){
       //Tipo especialidade
        server.route('/tipoEspecialidade').get(tipoEspecialidade.get);
        server.route('/tipoEspecialidade/:id').get(tipoEspecialidade.getById);
        server.route('/tipoEspecialidade/').post(tipoEspecialidade.insert);
        server.route('/tipoEspecialidade/:id').patch(tipoEspecialidade.update);
        server.route('/tipoEspecialidade/:id').delete(tipoEspecialidade.delete);

         //Tipo consulta
        server.route('/tipoConsulta').get(tipoConsulta.get);
        server.route('/tipoConsulta/:id').get(tipoConsulta.getById);
        server.route('/tipoConsulta/').post(tipoConsulta.insert);
        server.route('/tipoConsulta/:id').patch(tipoConsulta.update);
        server.route('/tipoConsulta/:id').delete(tipoConsulta.delete);

        //Situação consulta
        server.route('/situacaoConsulta').get(auth).get(situacaoConsulta.get);
        server.route('/situacaoConsulta/:id').get(auth).get(situacaoConsulta.getById);
        server.route('/situacaoConsulta/').get(auth).post(situacaoConsulta.insert);
        server.route('/situacaoConsulta/:id').get(auth).patch(situacaoConsulta.update);
        server.route('/situacaoConsulta/:id').get(auth).delete(situacaoConsulta.delete);

        //Paciente
        server.route('/paciente/user/:id').get(paciente.get);
        server.route('/paciente/:id').get(paciente.getById);
        server.route('/paciente/').post(paciente.insert);
        server.route('/paciente/:id').patch(paciente.update);
        server.route('/paciente/:id').delete(paciente.delete);

        //Usuário
        server.route('/usuario').get(usuario.get);
        server.route('/usuario/:id').get(usuario.getById);
        server.route('/usuario/').post(usuario.insert);
        server.route('/usuario/:id').patch(usuario.update);
        server.route('/usuario/:id').delete(usuario.delete);
        server.route('/usuario/senha/:id').post(usuario.updateSenha);

        server.route('/configuracao/usuario/:id').get(configuracao.get);
        server.route('/configuracao/usuario/:id').patch(configuracao.update);       

        //Autenticação
        server.route('/login').post(usuario.auth);
        
	   return server;
    }
}
