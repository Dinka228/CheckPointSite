const {Point} = require('../models/models')
const ApiError = require('../error/ApiError')
const path = require('path')
const uuid = require('uuid')
// Створення
class PointController{
    async create(req,res,next){
        try{
            const {name,strategyId,predictedValue} = req.body

            const point = await Point.create({name,strategyId,predictedValue})

            return res.json(point)

        }catch(e){
            next(ApiError.badRequest(e.message))
        }

    }
    // Отримання всіх
    async getAll(req,res) {
        let point
        point = await Point.findAll()
        return res.json(point)

    }
    //Отримання одного
    async getOne(req,res){
        const {id} = req.params
        const point = await Point.findOne({
            where:{id}
        })
        return res.json(point)
    }
}
module.exports = new PointController()