import yargs from 'yargs'

const argv = yargs.argv

export default () => {
  console.log(argv)
  const port = argv.port || argv.p

  return {
    port,
  }
}
