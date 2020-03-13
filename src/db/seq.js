/**
 * 
 * @description 存储配置
 * 
 */

const Sequelize = require('sequelize')
const {MYSQL_CONF} = require('../conf/db')
const {isProd,isTest}  = require('../utils/env')
const {host,user,password,database} = MYSQL_CONF
const conf = {
    host,
    dialect:'mysql'
}
if(isTest){
    conf.logging = ()=>{}
}
if(isProd){
    conf.pool = {
        max:5,  // 允许连接池中最大的连接数
        min:0,
        idle:10000    // 如果一个连接池 10s 之内没有使用 则被释放。
    }
}

const sequelize = new Sequelize(database,user,password,conf)





module.exports = sequelize