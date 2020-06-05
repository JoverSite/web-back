import koaRouter from 'koa-router'

const router = new koaRouter()

router
  .get('/', async (ctx) => {
    ctx.body = ctx.query
  })
  .post('/', async (ctx) => {
    ctx.body = ctx.request.body
  })
  .put('/', async (ctx) => {
    ctx.body = ctx.request.body
  })
  .delete('/', async (ctx) => {
    ctx.body = ctx.query
  })


export default router
