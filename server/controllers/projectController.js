const {Project} = require('../models/models')
const ApiError = require('../error/ApiError')
const path = require('path')
const uuid = require('uuid')
// Створення
class ProjectController{
    async create(req,res,next){
        try{
            const {name,categoryId,userId} = req.body

            const project = await Project.create({name,categoryId,userId})

            return res.json(project)

        }catch(e){
            next(ApiError.badRequest(e.message))
        }

    }
    // Отримання всіх
    async getAll(req,res) {
        let project
        project = await Project.findAll()
        return res.json(project)

    }
    //Отримання одного
    async getOne(req,res){
        const {id} = req.params
        const project = await Project.findOne({
            where:{id}
        })
        return res.json(project)
    }
}
module.exports = new ProjectController()