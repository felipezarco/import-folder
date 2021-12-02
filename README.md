# import-folder

> Import or require all folder modules at once

While importing or requiring many modules from a folder, one may find necessity for something such as an index that exports each single file so that modules would be imported at once. This creates maintance problems, since you have to remember to export them every time.

Works with for both *Typescript* and *Javascript* modules!

`import-folder` helps you import all exports within a folder at once


[![npm](https://nodei.co/npm/import-folder.png)](https://www.npmjs.com/package/import-folder)

![vscode suggestions](https://raw.githubusercontent.com/felipezarco/files/master/images/folder.PNG)


[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![npm version](https://badge.fury.io/js/import-folder.svg)](https://badge.fury.io/js/felipezarco%2Fimport-folder) [![Build Status](https://travis-ci.org/felipezarco/import-folder.svg?branch=master)](https://travis-ci.org/felipezarco/import-folder) [![Coverage Status](https://coveralls.io/repos/github/felipezarco/import-folder/badge.svg?branch=master)](https://coveralls.io/github/felipezarco/import-folder?branch=master) ![Downloads](https://img.shields.io/npm/dw/import-folder)

## Installation

Use your favorite package manager to install. For instance: 

```
  yarn add import-folder
```

Then import it with ES or CommonJS:

```javascript
import importFolder from 'import-folder'
```


Given an example folder `helpers` with files named `math.js` and `prompt.ts` exporting example modules: 

```javascript
const modules = importFolder('helpers')

modules.math.add(2,2)
modules.prompt('Hello World')  
```

Or directly deconstructing modules:

```javascript
const { math, prompt } = importFolder('helpers')

math.add(2,2)
prompt('Hello World')  
````

## Testing

Run the test suit with `yarn test`.

## Contributing

If you want to contribute in any of theses ways:

- Give your ideas or feedback
- Question something
- Point out a problem or issue
- Enhance the code or its documentation
- Help in any other way

You can (and should) [open an issue](https://github.com/felipezarco/import-folder/issues/new) or even a [pull request](https://github.com/felipezarco/import-folder/compare)!

Thanks for your interest in contributing to this repo!

## Author

[Luiz Felipe Zarco](https://github.com/felipezarco) (felipezarco@hotmail.com)

## License

This code is licensed under the [MIT License](https://github.com/felipezarco/import-folder/blob/master/LICENSE.md). See the [LICENSE.md](https://github.com/felipezarco/import-folder/blob/master/LICENSE.md) file for more info.
