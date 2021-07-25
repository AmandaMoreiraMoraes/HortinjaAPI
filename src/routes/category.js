const router = require('express').Router()
const  {category } = require('../controllers')

router.get('/', category.list)
router.post('/', category.create)


module.exports = router