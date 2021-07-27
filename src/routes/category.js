const router = require('express').Router()
const  {category } = require('../controllers')

router.get('/', category.list)
router.post('/', category.create)
router.get('/:id', category.findCategory)


module.exports = router