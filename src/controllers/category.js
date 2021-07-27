const httpStatus = require('http-status')
const { Category} = require('../models')
const {safeObjectId} = require('../helpers')

    
const methods = {
    async list(request, response) {
        const category = new Category()

        try {
            const categories = await category.list()

            response.status(httpStatus.OK).json(categories)
        } catch(error) {
            response.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
        }
    },

    async create(request, response) {
        const { name} = request.body

        const category = new Category()

        if (!name) {
             return name = 'Diversos'
            
        }


        try {
            const insertedObject = await category.insertOne({name})

            response.status(httpStatus.CREATED).json(insertedObject)
        } catch (error) {
            response.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
        }
    },
    async findCategory(request, response){
        
        const {id} = request.params

        const convertedObjectId = safeObjectId(id)

        const category = new Category()

        try {

            const categoryToReturn = await category.findOne({_id: convertedObjectId})

            response.status(httpStatus.OK).json(categoryToReturn)
            
        } catch (error) {

            response.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
            
        }
    }
}

module.exports = methods
