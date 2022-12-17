const {Category} = require('../models/models')
const ApiError = require('../error/ApiError')
const path = require('path')
const uuid = require('uuid')
// Створення
class CategoryController{
    async create(req,res,next){
        try{
            const {name} = req.body

            const category = await Category.create({name})

            return res.json(category)

        }catch(e){
            next(ApiError.badRequest(e.message))
        }

    }
    // Отримання всіх
    async getAll(req,res) {
        let category
        category = await Category.findAll()
        return res.json(category)

    }
    //Отримання одного
    async getOne(req,res){
        const {id} = req.params
        const category = await Category.findOne({
            where:{id}
        })
        return res.json(category)
    }
}
module.exports = new CategoryController()