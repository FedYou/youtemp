const youfile = require("youfile");
const jconsole = require("@jumpcutking/console");
const cachePath = require("./utils/cachePath");
const id = require("./utils/id");

function onExit(path) {
  youfile.removeExists(path);
  process.exit(0);
}
module.exports = class YouTemp {
  #name = "";
  /**
   * Temporary name.
   * @param {string} name - Directory path.
   */
  constructor(name) {
    if (name && typeof name === "string") {
      this.#name = `${name}-`;
    }
    this.path = cachePath(`${this.#name}temp-${id()}`);
    youfile.write.dir(this.path);
    process.on("exit", () => onExit(this.path));
    jconsole.on("error", () => onExit(this.path));
    process.on("SIGINT", () => onExit(this.path));
  }
  /**
   * Clean the temporary folder
   */
  clear() {
    youfile.removeExists(this.path);
    youfile.write.dir(this.path);
  }
};
