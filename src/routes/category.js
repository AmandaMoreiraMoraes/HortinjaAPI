const router = require('express').Router()
const  {category } = require('../controllers')

router.get('/', category.list)


module.exports = router