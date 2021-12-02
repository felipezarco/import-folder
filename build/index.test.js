"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
test('it imports all modules from given folder', () => __awaiter(void 0, void 0, void 0, function* () {
    const modules = (0, index_1.default)('helpers');
    expect(typeof modules.extractNumbers == 'function').toEqual(true);
    expect(typeof modules.checkTypes.number == 'function').toEqual(true);
    expect(typeof modules.checkTypes.boolean == 'function').toEqual(true);
    expect(typeof modules.otherNonExistent == 'function').toEqual(false);
    expect(typeof modules.math.add == 'function').toEqual(true);
    expect(typeof modules.math.sub == 'function').toEqual(true);
}));
test('it imports all modules from given folder not in the same level', () => __awaiter(void 0, void 0, void 0, function* () {
    const abc = (0, index_1.default)('./helpers/subfolder');
    expect(typeof abc == 'function').toEqual(true);
    expect(abc()).toEqual('abc');
}));
test('it works with javascript files and modules.export', () => __awaiter(void 0, void 0, void 0, function* () {
    const modules = (0, index_1.default)('helpers');
    expect(typeof modules.prompt == 'function').toEqual(true);
    expect(modules.prompt('Import Folder')).toEqual('Prompt: Import Folder');
    const { add, sub } = (0, index_1.default)('helpers').math;
    expect(typeof add == 'function').toEqual(true);
    expect(typeof sub == 'function').toEqual(true);
    expect(add(64912, 3212)).toEqual(64912 + 3212);
    expect(sub(64912, 3212)).toEqual(64912 - 3212);
}));
test('it can deconstruct all modules from given folder', () => __awaiter(void 0, void 0, void 0, function* () {
    const { extractNumbers, checkTypes } = (0, index_1.default)('helpers');
    expect(checkTypes.number(238192)).toEqual(true);
    expect(checkTypes.number('Zarco')).toEqual(false);
    expect(extractNumbers('292a30bZ0')).toEqual("292300");
}));
