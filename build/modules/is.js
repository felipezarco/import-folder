"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boolean = (variable) => ['true', true, 1, '1', 'false', false, 0, '0'].includes(variable);
const number = (variable) => !isNaN(variable);
exports.default = {
    boolean,
    number
};
