const {Strategy} = require('../models/models')
const ApiError = require('../error/ApiError')
const path = require('path')
const uuid = require('uuid')
// Створення
class StrategyController{
    async create(req,res,next){
        try{
            const {name,categoryId,typeData} = req.body

            const strategy = await Strategy.create({name,categoryId,typeData})

            return res.json(strategy)

        }catch(e){
            next(ApiError.badRequest(e.message))
        }

    }
    // Отримання всіх
    async getAll(req,res) {
        let strategy
        strategy = await Strategy.findAll()
        return res.json(strategy)

    }
    //Отримання одного
    async getOne(req,res){
        const {id} = req.params
        const strategy = await Strategy.findOne({
            where:{id}
        })
        return res.json(strategy)
    }
}
module.exports = new StrategyController()