const {User,Blog} = require('./model')

async function del(){
    const delBlogRes = await Blog.destroy({
       where:{
           id:4
       } 
    })
    console.log('delBlogRes:',delBlogRes)
    const delUser = await User.destroy({
        where:{
            id:1
        }
    })
    console.log('delUer:',delUser)
}

del()