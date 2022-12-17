const {PointCache} = require('../models/models')
const ApiError = require('../error/ApiError')
const path = require('path')
const uuid = require('uuid')
// Створення
class PointCacheController{
    async create(req,res,next){
        try{
            const {pointId,projectId,predictedValue,value} = req.body

            const pointCache = await PointCache.create({pointId,projectId,predictedValue,value})

            return res.json(pointCache)

        }catch(e){
            next(ApiError.badRequest(e.message))
        }

    }
    // Отримання всіх
    async getAll(req,res) {
        const {projectId} = req.params
        let pointCache
        pointCache = await PointCache.findAll({
            where:{projectId}
        })
        return res.json(pointCache)

    }
    //Отримання одного
    async getOne(req,res){
        const {id} = req.params
        const pointCache = await PointCache.findOne({
            where:{id}
        })
        return res.json(pointCache)
    }
}
module.exports = new PointCacheController()