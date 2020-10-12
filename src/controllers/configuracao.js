const tipoEspecialidadeRepository = require('../repositories/tipoEspecialidade');

module.exports = class Paciente {

    static async get(req, res){
        try {      
            const TipoEspecialidades = await tipoEspecialidadeRepository.getAll();

            res.status(200).send(TipoEspecialidades);
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
            await tipoEspecialidadeRepository.update(req.params.id, req.body.descricao);
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