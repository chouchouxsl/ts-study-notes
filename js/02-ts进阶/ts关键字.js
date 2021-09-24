"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typ = { name: 'xxx', age: 1231 };
function toArray(x) {
    return [x];
}
var Eg2 = /** @class */ (function () {
    function Eg2() {
        this.name = '';
        this.age = 1;
        this.home = '';
    }
    return Eg2;
}());
//{ a: any, b: any, c: any }
var xcObjx = { a: 12, b: '', c: true };
function fucH1() {
    throw new Error('1213');
}
var a = 3;
var bar1 = 'xxx';
// 验证
var Jx = {
    name: 'xxx',
    age: 12,
    home: (function a() {
        throw Error();
    })()
};
function mustTakeLength(arg) {
    console.log('arg :>> ', arg.length);
    return arg;
}
/**
 * 报错
 * 下面的代码为什么会报错？
 * 因为 T 受 User 约束，必须拥有 User中的类型，
 * 但不局限只拥有，也能拥有更多的类型，
 * 返回只返回了两种，如果有更多类型，
 * 就会出问题，所以报错
 */
// function makeUser<T extends User>(x: T): T {
//     return {
//         id: x.id,
//         name: 'sssss'
//     }
// }
/* 解决方案 */
function makeUser(x) {
    return __assign(__assign({}, x), { id: x.id, name: 'sssss' });
}
