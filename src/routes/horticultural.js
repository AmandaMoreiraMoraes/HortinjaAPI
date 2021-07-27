const router = require('express').Router()
const {horticultural} = require('../controllers')

router.get('/', horticultural.list)
router.post('/',horticultural.create)
router.get('/:id',horticultural.findHorticultural)

module.exports = router