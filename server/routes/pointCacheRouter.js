const Router = require('express')
const router=new Router()
const pointCacheController = require('../controllers/pointCacheController')

router.post('/', pointCacheController.create)
router.get('/', pointCacheController.getAll)
router.get('/:projectId',pointCacheController.getOne)

module.exports = router