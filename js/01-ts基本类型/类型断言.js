"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description: 类型断言
 */
function add(x, y) {
    // return (x + y).length
    // as语法
    return x.length;
    // 尖括号内语法
    // return (<string>x).length
}
/**
 * @description: 非空断言
 */
function myfn(str) {
    // const arr: string = str as string
    var arr = str;
}
/**
 * @description: 明确赋值断言
 */
var x;
console.log('x * 2 :>> ', x * 2);
