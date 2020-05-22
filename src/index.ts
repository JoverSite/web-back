import koa from 'koa'
import config from './config'
import myCommander from './config/myCommander'

export const app = new koa()

/**
 * config
 */
// commander
const { port } = myCommander()

// static directory
app.use(config.staticDirectory())


/**
 * middleware
 */
// CORS
app.use(config.cors)


/**
 * listen
 */
app.listen(port)
