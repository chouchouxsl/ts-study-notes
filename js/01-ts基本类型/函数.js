"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 基本使用
function createUserId1(name, id) {
    return name + id;
}
createUserId1('xxx', 12);
// 可选参数 在实际使用时，需要注意的是可选参数要放在普通参数的后面，不然会导致编译错误。
function createUserId2(name, id, age) {
    return name + id;
}
// 默认参数
function createUserId3(name, id, age) {
    return name + id;
}
// 剩余参数
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
push([], 1, 2, 8);
// 实现签名
function add(a, b) {
    // 类型守卫
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
