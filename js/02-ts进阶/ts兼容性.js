"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = {
    name: 'xxx'
};
var b = {
    name: 'xxx',
    break: function () { }
};
// 可以赋值 b是a的子集 b更具体 a更宽泛
a = b;
var a1;
var a2;
// a2 = a1
// a1 = a2
/**
 * 是不是A的类型更多，A就是子类型呢？恰恰相反，A此处类型更多但是其表达的类型更宽泛，所以A是父类型，B是子类型。
 * 因此b = a不成立（父类型不能赋值给子类型），而a = b成立（子类型可以赋值给父类型）
 */
/* 协变 */
var c;
var d = [
    {
        name: 'sss',
        break: function () { }
    }
];
// 兼容，可以赋值
c = d;
/**
 * 变成数组后 依旧可以赋值
 * 因此对于type MakeArray = Array<any>来说就是协变的。
 */
/* 逆变 */
