
import path from 'path'
import fs from 'fs'

const importFolder = (folder: string) => {
  let modules: any = {}
  let folderPath = path.join(__dirname, folder)
  fs.readdirSync(folderPath).forEach((file) => { 
    let filePath = path.join(folderPath, file)
    if(fs.lstatSync(filePath).isFile()) {
      let module = require(`./${folder}/` + file)
      let [moduleName,] = file.split(/\.(?=[^\.]+$)/)
      Object.assign(modules, { [moduleName]: module.default || module })
    }
  })
  return modules
}

export default importFolder
