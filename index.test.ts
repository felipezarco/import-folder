
import importFolder from 'import-folder'

test('it imports all modules from given folder', async () => {
  
  const modules = importFolder('helpers')
  
  expect(typeof modules.extractNumbers == 'function').toEqual(true)
  expect(typeof modules.checkTypes.number == 'function').toEqual(true)
  expect(typeof modules.checkTypes.boolean == 'function').toEqual(true)
  expect(typeof modules.otherNonExistent == 'function').toEqual(false)
  expect(typeof modules.math.add == 'function').toEqual(true)
  expect(typeof modules.math.sub == 'function').toEqual(true)
  
})


test('it imports all modules from given folder not in the same level', async () => {
  
  const { abc } = importFolder('./helpers/subfolder')
  
  expect(typeof abc.sayHello == 'function').toEqual(true)
  expect(abc.sayHello()).toEqual('hello')
  
})

test('it is able to be called directly with require', async () => {
  
  const { abc } = require('./index').default('./helpers/subfolder')
  
  expect(typeof abc.sayHello == 'function').toEqual(true)
  expect(abc.sayHello()).toEqual('hello')
  
})

test('it works with javascript files and modules.export', async () => {
  
  const modules = importFolder('helpers')
  expect(typeof modules.prompt == 'function').toEqual(true)
  expect(modules.prompt('Import Folder')).toEqual('Prompt: Import Folder')
  
  const { add, sub } = importFolder('helpers').math
  expect(typeof add == 'function').toEqual(true)
  expect(typeof sub == 'function').toEqual(true)
  expect(add(64912, 3212)).toEqual(64912 + 3212)
  expect(sub(64912, 3212)).toEqual(64912 - 3212)
  
})


test('it can deconstruct all modules from given folder', async () => {
  
  const { extractNumbers, checkTypes } = importFolder('helpers')
  
  expect(checkTypes.number(238192)).toEqual(true)
  expect(checkTypes.number('Zarco')).toEqual(false)
  expect(extractNumbers('292a30bZ0')).toEqual("292300")

})
