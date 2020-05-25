import koaRouter from 'koa-router'
import graphql from './graphql'
import users from './users'
import redirect from './redirect'

const router = new koaRouter()

router.use('/graphql', graphql.routes())
router.use('/users', users.routes())
router.use('', redirect.routes())

export default router
