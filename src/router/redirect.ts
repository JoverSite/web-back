import koaRouter from 'koa-router'

const router = new koaRouter()

// const prefix = 'https://raw.githubusercontent.com/JoverSite/web-front/package/dist'
// const prefix2 = 'https://cdn.jsdelivr.net/gh/JoverSite/web-front@package/dist/'
const prefix3 = 'https://joversite.gitee.io/web-front'

router.get(new RegExp('(.*)'), async (ctx) => {
  const headers = ctx.request.headers
  console.log(`${headers.referer} - ${headers['user-agent']}`)
  ctx.redirect(prefix3 + ctx.params[0])
})

export default router
