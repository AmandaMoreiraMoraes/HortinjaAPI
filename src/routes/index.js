const router = require('express').Router()

const category = require('./category')
const horticultural = require('./horticultural')


router.use('/category', category)
router.use('/horticultural', horticultural)

module.exports = router