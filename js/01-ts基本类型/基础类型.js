"use strict";
// Boolean
var Bool;
(function (Bool) {
    let falg = true;
    falg = false;
})(Bool || (Bool = {}));
// Number
var Num;
(function (Num) {
    let num = 1;
    num = 12;
})(Num || (Num = {}));
// String
var Str;
(function (Str) {
    let str = '哈哈哈哈';
    str = '嘻嘻嘻嘻';
})(Str || (Str = {}));
// Array
var Arr;
(function (Arr) {
    let strArr = ['哈哈哈哈', '嘻嘻嘻嘻'];
    let numArr = [123, 34, 54];
})(Arr || (Arr = {}));
// Any
var Any;
(function (Any) {
    let notSure = 666;
    notSure = 'semlinker';
    notSure = false;
    notSure = [123213, 'ssad'];
    // 可以赋值给有类型的 有风险
    let num = notSure;
})(Any || (Any = {}));
// Unknown
var Unknown;
(function (Unknown) {
    let notSure = 666;
    notSure = 'semlinker';
    notSure = false;
    notSure = [123213, 'ssad'];
    // 不可以赋值给有类型的
    // let num:number = notSure
})(Unknown || (Unknown = {}));
// Tuple
var Tuple;
(function (Tuple) {
    // 数组一般由同种类型的值组成，但有时我们需要在单个变量中存储不同类型的值，这时候我们就可以使用元组
    // 数量不可以多不可以少 类型必须一一对应
    let arr = [1, '2', false];
    let tuArr = [1, 'xx'];
})(Tuple || (Tuple = {}));
// Void
var Void;
(function (Void) {
    // 表示函数没有返回值
    function fn(x) { }
    // 需要注意的是，声明一个 void 类型的变量没有什么作用，因为在严格模式下，它的值只能为 undefined：
    let unusable = undefined;
})(Void || (Void = {}));
// Null 和 Undefined
var Bare;
(function (Bare) {
    // TypeScript 里，undefined 和 null 两者有各自的类型分别为 undefined 和 null。
    let u = undefined;
    let n = null;
})(Bare || (Bare = {}));
// Never
var Never;
(function (Never) {
    //never 类型表示的是那些永不存在的值的类型。 例如，never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型。
    // 返回never的函数必须存在无法达到的终点
    function error(message) {
        throw new Error(message);
    }
    function infiniteLoop() {
        while (true) { }
    }
})(Never || (Never = {}));
