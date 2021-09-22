"use strict";
/**
 * 在面向对象语言中，接口是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类去实现。
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 对象形状的描述
var Obj;
(function (Obj) {
    var obj = {
        name: 'zs',
        age: 14,
        sex: 'woman',
        jun: function () { }
    };
    console.log('obj :>> ', obj.name);
    // obj.name = 'xxxx'
    obj.age = 22;
})(Obj || (Obj = {}));
// 接口与类型别名的区别
var Type;
(function (Type) {
    var point = {
        x: 112,
        y: 123
    };
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.jup = function () { };
        return Dog;
    }());
    var Student = /** @class */ (function () {
        function Student(name, sex) {
            this.name = name;
            this.sex = sex;
        }
        return Student;
    }());
    // const aa: Comb = {x:1} // Property 'y' is missing in type '{ x: number; }' but required in type 'Point'.
    var bb = { x: 1, y: 1 };
    // type TypeComb = {
    //     y: number // Duplicate identifier 'A'.
    // }
})(Type || (Type = {}));
var Class;
(function (Class) {
    var Sex;
    (function (Sex) {
        Sex[Sex["man"] = 0] = "man";
        Sex[Sex["woman"] = 1] = "woman";
    })(Sex || (Sex = {}));
    var Person = /** @class */ (function () {
        function Person(person) {
            this.id = person.id;
            this.name = person.name;
            this.age = person.age;
            this.sex = person.sex;
        }
        return Person;
    }());
    var p = new Person({
        id: 1,
        name: 'hah',
        age: 12,
        sex: 1
    });
    console.log('p :>> ', p);
    var Anamal = /** @class */ (function () {
        function Anamal(name) {
            this.name = name;
            this.name = name;
        }
        return Anamal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.jup = function () {
            console.log('汪汪汪 :>> ', '汪汪汪');
        };
        return Dog;
    }(Anamal));
    var dog = new Dog('狗');
    dog.jup();
    console.log('dog.name :>> ', dog.name);
})(Class || (Class = {}));
