
const methods = {
    async list(request, response){

        response.status(200).json({
            title: 'Funcionando'
        })

    }
}
module.exports = methods
