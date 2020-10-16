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
        server.route('/tipoEspecialidade/:id').get(auth).get(tipoEspecialidade.getById);
        server.route('/tipoEspecialidade/').get(auth).post(tipoEspecialidade.insert);
        server.route('/tipoEspecialidade/:id').get(auth).patch(tipoEspecialidade.update);
        server.route('/tipoEspecialidade/:id').get(auth).delete(tipoEspecialidade.delete);

         //Tipo consulta
        server.route('/tipoConsulta').get(auth).get(tipoConsulta.get);
        server.route('/tipoConsulta/:id').get(auth).get(tipoConsulta.getById);
        server.route('/tipoConsulta/').get(auth).post(tipoConsulta.insert);
        server.route('/tipoConsulta/:id').get(auth).patch(tipoConsulta.update);
        server.route('/tipoConsulta/:id').get(auth).delete(tipoConsulta.delete);

        //Situação consulta
        server.route('/situacaoConsulta').get(auth).get(situacaoConsulta.get);
        server.route('/situacaoConsulta/:id').get(auth).get(situacaoConsulta.getById);
        server.route('/situacaoConsulta/').get(auth).post(situacaoConsulta.insert);
        server.route('/situacaoConsulta/:id').get(auth).patch(situacaoConsulta.update);
        server.route('/situacaoConsulta/:id').get(auth).delete(situacaoConsulta.delete);

        //Paciente
        server.route('/paciente/user/:id').get(auth).get(paciente.get);
        server.route('/paciente/:id').get(auth).get(paciente.getById);
        server.route('/paciente/').get(auth).post(paciente.insert);
        server.route('/paciente/:id').get(auth).patch(paciente.update);
        server.route('/paciente/:id').get(auth).delete(paciente.delete);

        //Usuário
        server.route('/usuario').get(auth).get(usuario.get);
        server.route('/usuario/:id').get(auth).get(usuario.getById);
        server.route('/usuario/').get(auth).post(usuario.insert);
        server.route('/usuario/:id').get(auth).patch(usuario.update);
        server.route('/usuario/:id').get(auth).delete(usuario.delete);
        server.route('/usuario/senha/:id').get(auth).post(usuario.updateSenha);

        server.route('/configuracao/usuario/:id').get(configuracao.get);
        server.route('/configuracao/usuario/:id').patch(configuracao.update);       

        //Autenticação
        server.route('/login').post(usuario.auth);
        server.route('/loginGoogle').post(usuario.authGoogle);
        
	   return server;
    }
}
