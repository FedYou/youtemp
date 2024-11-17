`youtemp` creates temporary folders in your system's cache during the script's runtime.

> If the environment where the script is running is closed unexpectedly, the temporary file will not be deleted.

### Module

```js
import YouTemp from "youtemp";
```

### Commonjs

```js
const YouTemp = require("youtemp");
```

## Uso

```js
const temp = new YouTemp("<name>"); // The name is optional

console.log(temp.path); // Path to the folder
temp.clear(); // Clears the folder's content
```
