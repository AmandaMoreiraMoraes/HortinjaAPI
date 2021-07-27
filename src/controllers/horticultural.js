const httpStatus = require('http-status')
const { Horticultural} = require('../models')
const {safeObjectId} = require('../helpers')

    
const methods = {
    async list(request, response) {
        const horticultural = new Horticultural()

        try {
            const horticulturals = await horticultural.list()

            response.status(httpStatus.OK).json(horticulturals)
        } catch(error) {
            response.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
        }
    },

    async create(request, response) {
        const { name,shade,image,description,measurement,averagePrice,categoryId} = request.body

        const horticultural = new Horticultural()

        if (!name || !image || !categoryId || !averagePrice || !measurement) {
             return response.status(httpStatus.BAD_REQUEST).json({error: 'The fields name, measurement, averagePrice, image and categoryId are required '})


        
        } else {

            
            
        try {
            const insertedObject = await horticultural.insertOne({name, shade, image, measurement, averagePrice, description, categoryId})

            response.status(httpStatus.CREATED).json(insertedObject)
        } catch (error) {
            response.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
        }

            

    }

    },
    
        
        
            
      



    

    async findHorticultural(request, response){
        
        const {id} = request.params

        const convertedObjectId = safeObjectId(id)

        const horticultural = new Horticultural()

        try {

            const horticulturalToReturn = await horticultural.findOne({_id: convertedObjectId})

            response.status(httpStatus.OK).json(horticulturalToReturn)
            
        } catch (error) {

            response.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
            
        }
    }

    
}



module.exports = methods