const youfile = require('youfile')
const jconsole = require('@jumpcutking/console')
const cachePath = require('./utils/cachePath')
const id = require('./utils/id')

function onExit (path) {
  youfile.removeExistsSync(path)
  process.exit(0)
}
module.exports = class YouTemp {
  #name = ''
  constructor (name) {
    if (name && typeof name === 'string') {
      this.#name = `${name}-`
    }
    this.path = cachePath(`${this.#name}temp-${id()}`)
    youfile.write.dirSync(this.path)
    process.on('exit', () => onExit(this.path))
    jconsole.on('error', () => onExit(this.path))
    process.on('SIGINT', () => onExit(this.path))
  }

  clear () {
    youfile.removeExistsSync(this.path)
    youfile.write.dirSync(this.path)
  }
}
