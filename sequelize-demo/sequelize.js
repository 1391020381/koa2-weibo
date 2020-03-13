const Sequelize = require('sequelize')

const sequelize = new Sequelize('koa2-weibo','root','root',{
    host:'127.0.0.1',
    dialect:'mysql'
})





 module.exports = sequelize