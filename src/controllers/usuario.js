const usuarioRepository = require('../repositories/usuario');

module.exports = class Usuario {

    static async get(req, res){
        try {      
            const usuarios = await usuarioRepository.getAll();

            res.status(200).send(usuarios);
        } catch (error) {
            if(error.tipo!=undefined){
                res.status(400).send(error)
            }else{
                res.status(500).send({erro:"erro interno"})
            }
            console.log(error);
            
        }
    }

    static async getById(req, res){
        try {      
            const _usuario = await usuarioRepository.getById(req.params.id);
            res.status(200).send(_usuario);
        } catch (error) {
            if(error.tipo!=undefined){
                res.status(400).send(error)
            }else{
                res.status(500).send({erro:"erro interno"})
            }
            console.log(error);
            
        }
    }

    static async insert(req, res){
        try {      

            const usuario = await usuarioRepository.getByLogin(req.body.login);
            if (usuario.length > 0) {
                res.status(400).send('Login existente');
            } else {
                await usuarioRepository.insert({
                    tipoEspecialidadeId: req.body.tipoEspecialidadeId,
                    tipoUsuario: req.body.tipoUsuario,
                    nome: req.body.nome,
                    login: req.body.login,
                    senha: req.body.senha,
                    ativo: req.body.ativo
                });

                res.status(200).send();
            }
        } catch (error) {
            if(error.tipo!=undefined){
                res.status(400).send(error)
            }else{
                res.status(500).send({erro:"erro interno"})
            }
            console.log(error);
            
        }
    }

    static async update(req, res){
        try {      
            await usuarioRepository.update({
                id: req.params.id,
                tipoEspecialidadeId: req.body.tipoEspecialidadeId,
                tipoUsuario: req.body.tipoUsuario,
                nome: req.body.nome,
                login: req.body.login,
                senha: req.body.senha,
                ativo: req.body.ativo
            });
            
            res.status(200).send();
        } catch (error) {
            if(error.tipo!=undefined){
                res.status(400).send(error)
            }else{
                res.status(500).send({erro:"erro interno"})
            }
            console.log(error);
            
        }
    }

    static async delete(req, res){
        try {      
            await usuarioRepository.delete(req.params.id);
            res.status(200).send();
        } catch (error) {
            if(error.tipo!=undefined){
                res.status(400).send(error)
            }else{
                res.status(500).send({erro:"erro interno"})
            }
            console.log(error);
            
        }
    }
}