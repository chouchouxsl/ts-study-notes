"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
// 数组解构
var x, y, c;
_a = [1, 2, '3'], x = _a[0], y = _a[1], c = _a[2];
// 扩展运算符
var arr = ['2', '3'];
var newArr = __spreadArray(__spreadArray([], arr, true), [1, 31], false);
