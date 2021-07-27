const ObjectId = require('mongodb').ObjectId


const safeObjectId = id => {
    try {

        const convertId = ObjectId(id)

        return convertId
        
    } catch (error) {

        return false 
        
    }
}

module.exports = safeObjectId