import koaRouter from 'koa-router'

const router = new koaRouter()

const prefix = 'https://raw.githubusercontent.com/JoverSite/web-front/package/dist'

router.get(new RegExp('(.*)'), async (ctx) => {
  ctx.redirect(prefix + ctx.params[0])
})

export default router
