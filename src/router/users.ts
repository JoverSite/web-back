import koaRouter from 'koa-router'

const router = new koaRouter()

router.get('/', async (ctx) => {
  console.log(ctx.query)
  ctx.body = {
    code: 0,
  }
})

export default router
