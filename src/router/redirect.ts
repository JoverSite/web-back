import koaRouter from 'koa-router'

const router = new koaRouter()

// const prefix = 'https://raw.githubusercontent.com/JoverSite/web-front/package/dist'
const prefix2 = 'https://cdn.jsdelivr.net/gh/JoverSite/web-front@package/dist/'

router.get(new RegExp('(.*)'), async (ctx) => {
  ctx.redirect(prefix2 + ctx.params[0])
})

export default router
