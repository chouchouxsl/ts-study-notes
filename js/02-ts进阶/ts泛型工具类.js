"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Eg2 = /** @class */ (function () {
    function Eg2() {
        this.name = '';
        this.age = 1;
        this.home = '';
    }
    return Eg2;
}());
// 验证
var Jx = {
    name: 'xxx',
    age: 12,
    home: (function a() {
        throw Error();
    })()
};
