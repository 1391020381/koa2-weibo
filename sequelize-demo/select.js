const {Blog,User}  = require('./model')

async function select1(){
    const zhangsan = await User.findOne({
        where:{
            userName:'zhangsan'
        }
    })
    console.log('zhangsan:',zhangsan.dataValues)
    const zhangsanName = await User.findOne({
        attributes:['userName','nickName'],
        where:{
            userName:'zhangsan'
        }
    })
    console.log('zhangsanName:',zhangsanName.dataValues)
    const zhangsanBlogList = await Blog.findAll({
        where:{
            userId:1
        },
        order:[
            ['id','desc']
        ]
    })
   console.log('zhangsanBlogList:',
   zhangsanBlogList.map(blog=>blog.dataValues)) 

   // 分页
   const blogPageList = await Blog.findAll({
       limit:2,
       offset:0 ,
       order:[
           ['id','desc']
       ]
   })
   console.log('blogPageList:',
   blogPageList.map(blog=>blog.dataValues))

   // 查询总数
   const blogListAndCount = await Blog.findAndCountAll({
    limit:2,
    offset:0 ,
    order:[
        ['id','desc']
    ]
   })
   console.log('blogListAndCount:',
   blogListAndCount.count,blogListAndCount.rows.map(blog=>blog.dataValues))
}

// select1()

async function select2(){
    // 连表查询  
    // 需要在 model 中定义 
    // Blog.belongsTo(User,{
    //     // 创建外健  Blog.userId -> User.id
    //     foreignKey:'userId'
    // })
    const blogListWithUser = await Blog.findAndCountAll({
        order:[
            ['id','desc']
        ],
        include:[
            {
                model:User,
                attributes:['userName','nickName'],
                where:{
                    userName:'zhangsan'
                }
            }
        ]
    })
    console.log(
        'blogListWithUser:',
        blogListWithUser.count,
        blogListWithUser.rows.map(blog=>{
            const blogVal = blog.dataValues
            blogVal.user = blogVal.user.dataValues // user
            return blogVal
        })
    )
    // blogListWithUser: 2 [ { id: 2,
    //     title: '标题2',
    //     content: '内容2',
    //     userId: 1,
    //     createdAt: 2020-03-13T05:02:47.000Z,
    //     updatedAt: 2020-03-13T05:02:47.000Z,
    //     user: { userName: 'zhangsan', nickName: '张三' } },
    //   { id: 1,
    //     title: '标题1',
    //     content: '内容1',
    //     userId: 1,
    //     createdAt: 2020-03-13T05:02:47.000Z,
    //     updatedAt: 2020-03-13T05:02:47.000Z,
    //     user: { userName: 'zhangsan', nickName: '张三' } } ]

 const userListWithBlog = await User.findAndCountAll({
    order:[
        ['id','desc']
    ],
    attributes:['userName','nickName'],
    include:[
        {
            model:Blog
        }
    ]
 })
 console.log('userListWithBlog:',
    userListWithBlog.count,
   JSON.stringify( userListWithBlog.rows.map(user=>{
    const userVal = user.dataValues
    // 每个user 会有多个 blog
    userVal.blogs = userVal.blogs.map(blog=> blog.dataValues)
    return userVal
}))
 )
}

select2()