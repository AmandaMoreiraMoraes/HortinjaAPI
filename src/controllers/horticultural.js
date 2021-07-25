const methods = {
    async list (request, response){
        response.status(200).json({title: 'Funcionando 2'})
    }
}

module.exports = methods