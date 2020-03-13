const Sequelize = require('sequelize')
const sequelize = require('./sequelize')

const User = sequelize.define('user',{
    // id 会自动创建 并 设为主键 自增
    userName:{
        type:Sequelize.STRING,  // varchar(255)
        allowNull:false
    },
    password:{ // password是一个单词
        type:Sequelize.STRING,
        allowNull:false
    },
    nickName:{
        type:Sequelize.STRING
    } // 会自动创建 createdat updatedat
})
const Blog = sequelize.define('blog',{
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    content:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    userId:{  // 这里关联一个 外健 关联到 users 表的 id上
        type:Sequelize.INTEGER,
        allowNull:false
    }
})

// 创建完model 创建外健

// 多对一
Blog.belongsTo(User,{
    // 创建外健  Blog.userId -> User.id
    foreignKey:'userId'
})

// 注释掉 User的 userId 并使用 Blog.belongsTo(User)  会默认创建 userId

 User.hasMany(Blog,{
    // 创建外健  Blog.userId -> User.id
    foreignKey:'userId'
})

module.exports = {
    User,
    Blog
}