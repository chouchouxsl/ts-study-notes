"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 都变成可选
const p = { name: '' };
// { name?: string; age?: number }
const op = { age: 123 };
const tr = {
    name: 'string',
    age: 123,
    sex: true
};
const rd = {
    name: 'sxx',
    age: 123
};
const ro = {
    dog: {
        name: 'string',
        age: 123
    },
    cat: {
        name: 'string',
        age: 123
    },
    fish: {
        name: 'string',
        age: 123
    }
};
const pi = {
    name: 'xxx'
};
const Omit = {
    sex: true
};
// 验证
const parameArr = ['xxx', 12];
const a = ['aa', 11];
const a2 = ['aa'];
const b = ['aa', 11];
const b2 = ['aa'];
// 验证
const ret = 12;
const ret1 = '12';
// 'sss' | string | number
// const non: nonNull = undefined
/**
 * InstanceType<T>
 * 获取实例的类型
 */
class Pep {
}
const pop1 = new Pep();
const pop2 = new Pep();
const pop3 = Pep;
