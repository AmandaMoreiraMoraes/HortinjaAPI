const router = require('express').Router()
const {horticultural} = require('../controllers')

router.get('/', horticultural.list)

module.exports = router