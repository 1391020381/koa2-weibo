

const router = require('koa-router')()


router.get('*',async(ctx,next)=>{
    await ctx.render('404')
})

module.exports = router