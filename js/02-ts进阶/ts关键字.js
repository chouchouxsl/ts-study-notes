"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typ = { name: 'xxx', age: 1231 };
function toArray(x) {
    return [x];
}
class Eg2 {
    name = '';
    age = 1;
    home = '';
}
//{ a: any, b: any, c: any }
const xcObjx = { a: 12, b: '', c: true };
function fucH1() {
    throw new Error('1213');
}
const a = 3;
const bar1 = 'xxx';
// 验证
const Jx = {
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
    return {
        ...x,
        id: x.id,
        name: 'sssss'
    };
}
