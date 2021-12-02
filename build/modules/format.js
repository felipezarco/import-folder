"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const extractNumbers = (string) => String(string.replace(/\D/g, ''));
const lowerLetters = (string) => is.string(string)
    ? removeNonLetters(removeAccents(string.toLowerCase()))
    : undefined;
const capitalize = (string) => string.charAt(0).toUpperCase() + string.substring(1);
exports.default = capitalize;
