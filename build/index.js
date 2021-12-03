"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const importFolder = (folder) => {
    var _a;
    let modules = {};
    let folderPath = path_1.default.join((_a = module === null || module === void 0 ? void 0 : module.parent) === null || _a === void 0 ? void 0 : _a.filename, '..', folder);
    fs_1.default.readdirSync(folderPath).forEach((file) => {
        let filePath = path_1.default.join(folderPath, file);
        if (fs_1.default.lstatSync(filePath).isFile()) {
            let module = require(`./${folder}/` + file);
            let [moduleName,] = file.split(/\.(?=[^\.]+$)/);
            Object.assign(modules, { [moduleName]: module.default || module });
        }
    });
    return modules;
};
exports.default = importFolder;
