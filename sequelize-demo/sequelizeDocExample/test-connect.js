const sequelize = require('./sequelize')

sequelize.authenticate().then(()=>{
    console.log('connect ok')
}).catch(err=>{
    console.log('err:',err)
})

// 关闭连接   sequelize将默认保持连接,并对所有查询使用相同的连接,如果需要关闭使用 sequelize.close()

sequelize.close()