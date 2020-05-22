import { program } from 'commander'

export default () => {
  program
    .version('1.0.0')
    .option('-p, --port <number>', 'use port', '8080')
    .parse(process.argv)
  return {
    port: program.port,
  }
}
