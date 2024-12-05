export class YouTemp {
  /**
   * Create temporary cache folder.
   * @param {string} name - Directory path.
   */
  constructor(name: string)
  /**
   * Path of the temporary folder.
   */
  path: string

  /**
   * Clean the temporary folder.
   */
  clear(): void
}

export = YouTemp
export as namespace YouTemp
