const Router = require('express')
const router=new Router()
const projectRouter = require('./projectRouter')
const categoryRouter = require('./categoryRouter')
const strategyRouter = require('./strategyRouter')
const pointRouter = require('./pointRouter')
const userRouter = require('./userRouter')
const pointCacheRouter = require('./pointCacheRouter')


router.use('/user',userRouter)
router.use('/project',projectRouter)
router.use('/category',categoryRouter)
router.use('/strategy',strategyRouter)
router.use('/point',pointRouter)
router.use('/pointCache',pointCacheRouter)

module.exports = router