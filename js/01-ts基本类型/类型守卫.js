"use strict";
/**
 * @description: 类型保护是可执行运行时检查的一种表达式，用于确保该类型在一定的范围内。
 * 当我们使用联合类型时，我们必须尽量把当前值的类型收窄为当前值的实际类型，而类型保护就是实现类型收窄的一种手段。
 */
function implement(person) {
    if ('sex' in person) {
        console.log('sex :>> ', person.sex);
    }
    if ('age' in person) {
        console.log('age :>> ', person.age);
    }
}
implement({
    name: '哈哈哈',
    age: 123
    // sex: true
});
// typeof 关键字
function padLeft(value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}
class SpaceRepeatingPadder {
    numSpaces;
    name;
    constructor(numSpaces, name) {
        this.numSpaces = numSpaces;
        this.name = name;
    }
    getPaddingString() {
        return Array(this.numSpaces + 1).join(' ');
    }
}
class StringPadder {
    name;
    constructor(name) {
        this.name = name;
    }
    getPaddingString() {
        return this.name;
    }
}
const padder = new SpaceRepeatingPadder(6, 'xxx');
console.log('padder instanceof SpaceRepeatingPadder :>> ', padder instanceof SpaceRepeatingPadder);
console.log('padder instanceof SpaceRepeatingPadder :>> ', padder instanceof StringPadder);
// 自定义类型保护的类型谓词
function isNumber(x) {
    return typeof x === 'number';
}
function isString(x) {
    return typeof x === 'string';
}
console.log('isNumber() :>> ', isNumber(123));
console.log('isNumber() :>> ', isString('123'));
console.log('isNumber() :>> ', isNumber(false));
// 可复用的类型谓语
function isOfType(varToBeChecked, propertyToCheckFor) {
    return varToBeChecked[propertyToCheckFor] !== undefined;
}
console.log('isOfType :>> ', isOfType([], 'slice'));
