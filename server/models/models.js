const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    email:{type:DataTypes.STRING,unique:true},
    password:{type:DataTypes.STRING},
    role:{type:DataTypes.STRING,defaultValue:"USER"}
})
const Project = sequelize.define('project',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,allowNull:false},
    categoryId:{type:DataTypes.INTEGER},
    userId:{type:DataTypes.INTEGER}
})
const Category = sequelize.define('category',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,allowNull:false}
})
const Strategy = sequelize.define('strategy',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,allowNull:false},
    categoryId:{type:DataTypes.INTEGER},
    typeData:{type:DataTypes.STRING}
})
const Point = sequelize.define('point',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING},
    strategyId:{type:DataTypes.INTEGER},
    predictedValue:{type:DataTypes.INTEGER, allowNull:false}
})
const PointCache = sequelize.define('pointCache',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    pointId:{type:DataTypes.INTEGER},
    projectId:{type:DataTypes.INTEGER},
    value:{type:DataTypes.INTEGER, allowNull:false},
    predictedValue:{type:DataTypes.INTEGER, allowNull:false}
})

module.exports={
    User,
    Project,
    Category,
    Strategy,
    Point,
    PointCache
}