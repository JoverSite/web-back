import path from 'path'
import koaStatic from 'koa-static'
import { Middleware } from 'koa'
import cors from './cors'
import myCommander from './myCommander'

const staticDirectory = (setPath: string = ''): Middleware => {
  const staticPath = '../static'
  return koaStatic(
    setPath
      ? setPath
      : path.join(__dirname, staticPath))
}

export default {
  /**
   * config
   */
  myCommander,
  staticDirectory,

  /**
   * middleware
   */
  cors,
}
