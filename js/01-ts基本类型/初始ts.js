"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ex = void 0;
function sum(a, b) {
    return a + b;
}
sum(1, 2);
function gen(person) {
    console.log('person :>> ', person);
}
gen({
    firstName: 1111
    // lastName: 'xxXPathExpression'
});
//  =================
let a = 1212;
a = 32;
// a = true;
// =================
let b = '1212';
b = true;
b = 123;
b = a;
// ================
let c = '2121';
c = 123;
c = b;
// a = b;
// ================
/*
  数组
*/
const arr = [1, 3, 4];
const arr2 = ['asd', 'wsew'];
arr.unshift(1212);
arr2.push('1111');
// ================
/*
  元祖
*/
let arr3 = ['12', 123];
// arr3 = [213, 'asd'];
arr3 = ['asd', 123];
// ===============
/*
  枚举
*/
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["blue"] = 2] = "blue";
    Color[Color["pink"] = 3] = "pink";
})(Color || (Color = {}));
let pink = Color.pink;
console.log('pink :>> ', pink);
let blue = Color[2];
console.log('blue :>> ', blue);
//===================
function jum() {
    console.log('哈哈哈 :>> ', '哈哈哈');
}
const jup = () => {
    return;
};
// =====================
// const obj: object = null
// const obj1: object = undefined
const obj3 = [];
const obj5 = function () { };
// const obj6: object = 1111;
let obj4;
obj4 = {
    name: 'zs',
    age: 13,
    sxxx: 'xxxx'
};
let fnc;
// ====================
/*
联合类型 和  类型断言
*/
function strLength(str) {
    return str.length ? str.length : str.toString().length;
}
console.log('strLength :>> ', strLength(123123213123));
exports.ex = '2';
const xxx = {
    nama: 11,
    age: '12'
};
