"use strict";
let q = {
    a: 123,
    b: '123',
    c: true,
    f: 12
};
let abc = {
    x: {
        d: true,
        e: 'semlinker',
        f: 666
    }
};
// 在混入多个类型时，若存在相同的成员，且成员类型为非基本数据类型，那么是可以成功合并。
