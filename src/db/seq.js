const Sequelize = require('sequelize')

const conf = {
    host:'localhost',
    dialect:'mysql'
}
conf.pool = {
    max:5,  // 允许连接池中最大的连接数
    min:0,
    idle:10000    // 如果一个连接池 10s 之内没有使用 则被释放。
}
const sequelize = new Sequelize('koa2-weibo','root','root',conf)





 module.exports = sequelize