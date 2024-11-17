const youfile = require("youfile");
const jconsole = require("@jumpcutking/console");
const cachePath = require("./utils/cachePath");
const id = require("./utils/id");

module.exports = class YouTemp {
  constructor() {
    this.path = cachePath(`temp-${id()}`);
    youfile.write.dir(this.path);
    process.on("exit", () => youfile.removeExists(this.path));
    jconsole.on("error", () => process.exit(0));
    process.on("SIGINT", () => process.exit(0));
  }
  /**
   * Clean the temporary folder
   */
  clear() {
    youfile.removeExists(this.path);
    youfile.write.dir(this.path);
  }
};
