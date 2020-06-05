import fs from 'fs'
import path from 'path'
import koaRouter from 'koa-router'

const router = new koaRouter()
let index = fs.readFileSync(path.resolve(__dirname, '../public/static/index.html'), 'binary')

router.get(new RegExp('.*'), async (ctx) => {
  ctx.body = index
})

export default router
