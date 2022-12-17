const Router = require('express')
const router=new Router()
const strategyController = require('../controllers/strategyController')

router.post('/', strategyController.create)
router.get('/', strategyController.getAll)
router.get('/:id',strategyController.getOne)

module.exports = router