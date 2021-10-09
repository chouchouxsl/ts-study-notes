"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
泛型的基本使用
*/
function sumArr(x, y) {
    return [x, y];
}
sumArr(1, 2);
sumArr(1, '2');
sumArr('2', '2');
sumArr('2', false);
function sumObj(x, y) {
    return {
        X: x,
        Y: y
    };
}
console.log(sumObj('11', 55));
class Geeger {
    value;
    constructor(value) {
        this.value = value;
    }
    run(name) {
        return this.value;
    }
}
const geeger = new Geeger('hahah');
geeger.run(12);
function len(msg) {
    return msg.length;
}
len('xxxx');
// len(123)
// 检查对象上的key是否存在
function getProperty(obj, key) {
    return obj[key];
}
getProperty({
    name: '12',
    age: 123
}, 'age');
// ____________________________________
var Difficulty;
(function (Difficulty) {
    Difficulty[Difficulty["Easy"] = 0] = "Easy";
    Difficulty[Difficulty["Intermediate"] = 1] = "Intermediate";
    Difficulty[Difficulty["Hard"] = 2] = "Hard";
})(Difficulty || (Difficulty = {}));
const getObj = {
    name: 'hahah',
    difficulty: Difficulty.Easy,
    get() { },
    set() { }
};
function get(obj, key) {
    return obj[key];
}
get(getObj, 'get');
let difficulty = get(getObj, 'difficulty');
const strA = { name: 'Semlinker' };
const numB = { name: 123 };
async function hhh() {
    return 'hhh';
}
async function xxx() {
    return {
        name: 'xxx'
    };
}
const obj1 = {
    name: '',
    age: 1
};
const obj2 = { name: 'str' };
// 2.Record Record<K extends keyof any, T> 的作用是将 K 中所有的属性的值转化为 T 类型。
/**
 * node_modules/typescript/lib/lib.es5.d.ts
 * Construct a type with a set of properties K of type T
 */
// type Record<K extends keyof any, T> = {
//     [P in K]: T;
// };
