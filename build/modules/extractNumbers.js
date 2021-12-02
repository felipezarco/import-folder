"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const extractNumbers = (string) => String(string.replace(/\D/g, ''));
exports.default = extractNumbers;
