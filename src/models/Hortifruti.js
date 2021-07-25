const Database = require('./Database')

    class Hortifruti extends Database{
        constructor(params = {}){
            this.collection='Hortifruti'
        }
    }

module.exports = Hortifruti