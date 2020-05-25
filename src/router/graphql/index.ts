import koaRouter from 'koa-router'

const router = new koaRouter()

router.get('/', async (ctx) => {
  console.log('graphql')
})

export default router
