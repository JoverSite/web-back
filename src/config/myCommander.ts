import yargs from 'yargs'

const argv = yargs.argv

export default () => {
  const port = argv.port || argv.p

  return {
    port,
  }
}
