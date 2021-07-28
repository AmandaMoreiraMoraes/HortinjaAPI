const router = require('express').Router()
const {horticultural} = require('../controllers')

router.get('/', horticultural.list)
router.post('/',horticultural.create)
router.get('/:id',horticultural.findHorticultural)
router.patch('/:id', horticultural.update)
router.delete('/:id',horticultural.destroy)

module.exports = router