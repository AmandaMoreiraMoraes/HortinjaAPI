const httpStatus = require('http-status')
const { Horticultural} = require('../models')
const {safeObjectId} = require('../helpers')

    
const methods = {
    async list(request, response) {
        const horticultural = new Horticultural()

          try {
            const horticulturals = await horticultural.list({ldeletedAt: {$exists: false}})

            response.status(httpStatus.OK).json(horticulturals)
              
    
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

            response.status(httpStatus.INTERNAL_SERVER_ERROR).json()
            
        }

     
    }, 

   async update(request, response){
    const { id } = request.params
    const convertedObjectId = safeObjectId(id)
    const { name, measurement, averagePrice, shade, description, image, categoryId } = request.body

    if (!measurement || !name || !averagePrice || !image || !categoryId) {
        return response.status(httpStatus.BAD_REQUEST).json({ error: 'The fields "image", "categoryId", "averagePrice", "name" and "measurement" are required.' })
    }

    const horticultural = new Horticultural()

    try {
        const updatedObject = await horticultural.updateOne({ _id: convertedObjectId }, { image, name, averagePrice, measurement, categoryId, shade, description })
        
        response.status(httpStatus.OK).json(updatedObject)
    } catch (error) {
        response.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
    }
   
 },

 async destroy (request, response){

    const { id } = request.params
    const convertedObjectId = safeObjectId(id)
    

    

    const horticultural = new Horticultural()

    try {
        const destroyedObject = await horticultural.updateOne({ _id: convertedObjectId }, { deletedAt: true })
        
        response.status(httpStatus.NO_CONTENT).json()
    } catch (error) {
        response.status(httpStatus.INTERNAL_SERVER_ERROR).json(error)
    }

 }

    
}



module.exports = methods