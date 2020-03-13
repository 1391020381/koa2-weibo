const Sequelize = require('sequelize')

const sequelize = new Sequelize('koa2-weibo','root','root',{
    host:'127.0.0.1',
    dialect:'mysql'
})



// 测试连接

sequelize.authenticate().then(()=>{
    console.log('koa')
}).catch(e=>{
    console.log(e)
})

 module.exports = sequelize