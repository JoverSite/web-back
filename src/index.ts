import koa from 'koa'
import config from './config'
import myCommander from './config/myCommander'
import koaBody from 'koa-body'
import router from './router'

const app = new koa()

/**
 * config
 */
// commander
const { port } = myCommander()

// static directory
app.use(config.staticDirectory())

// koa body
app.use(koaBody())

/**
 * middleware
 */
// CORS
app.use(config.cors)

/**
 * router
 */
app.use(router.routes())
app.use(router.allowedMethods())


/**
 * listen
 */
app.listen(port)
