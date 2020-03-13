const {User} = require('./model')

async function update(){
    const updateRes = await User.update({
        nickName:'张三1'
    },{
        where:{
            userName:'zhangsan'
        }
    })
    console.log('updateRes:',updateRes)
}

update()