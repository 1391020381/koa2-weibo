const sequelize = require('./sequelize')
require('./model')

// 测试连接

sequelize.authenticate().then(()=>{
    console.log('authenticate ok')
}).catch(e=>{
    console.log(e)
})


sequelize.sync({
    force:true
}).then(()=>{
    console.log('sync ok')
    process.exit()
})