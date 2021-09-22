"use strict";
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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 类的基本使用
 */
var MyClass = /** @class */ (function () {
    // 构造器
    function MyClass(age, sex, size, character) {
        // 私有字段 ES提供 TS支持  具体和 private差不多
        _MyClass_character.set(this, void 0); // 前面不可以使用修饰符
        this.age = age;
        this.sex = sex;
        this.size = size;
        __classPrivateFieldSet(this, _MyClass_character, character, "f");
    }
    // 静态方法
    MyClass.fly = function () {
        console.log(this.cname + "\u4F1A\u98DE");
        // console.log('this.age :>> ', this.age); // 报错 静态方法访问不到类属性
    };
    // 静态属性
    MyClass.prototype.jup = function () {
        // console.log(`${this.cname}会跳`) // 报错  访问不到静态属性
        console.log('this.age :>> ', this.age);
    };
    var _MyClass_character;
    _MyClass_character = new WeakMap();
    // 静态属性
    MyClass.cname = 'xxx';
    return MyClass;
}());
var myClass = new MyClass(12, false, 33, '好');
console.log('MyClass.cname :>> ', MyClass.cname);
MyClass.fly();
console.log('myClass.age :>> ', myClass.age);
myClass.jup();
// console.log('myClass.sex :>> ', myClass.sex) // 报错 私有属性无法访问
// console.log('myClass.size :>> ', myClass.size) // 报错 受保护的 只能类本身和其子类可以访问
// console.log('myClass.#character :>> ', myClass.#character) // 报错 属性 "#character" 在类 "MyClass" 外部不可访问，因为它具有专用标识符
/**
 * 访问器
 */
var Visitor = /** @class */ (function () {
    function Visitor(_name) {
        this._name = _name;
    }
    Object.defineProperty(Visitor.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            if (name === 'zs') {
                this._name = name;
            }
            else {
                throw new Error('只能设置为zs');
            }
        },
        enumerable: false,
        configurable: true
    });
    return Visitor;
}());
var visitor = new Visitor('xxx');
console.log('visitor :>> ', visitor);
// console.log('visitor :>> ', visitor._name) // 不可以直接访问私有属性
console.log('getName :>> ', visitor.name);
visitor.name = 'zs';
console.log('getName :>> ', visitor.name);
/**
 * 类的继承
 */
var Anamal = /** @class */ (function () {
    function Anamal(name) {
        this.name = name;
    }
    Anamal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Anamal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    // 可不写 默认会把父类的属性继承过来
    function Dog(name, age) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        return _this;
    }
    Dog.prototype.call = function () {
        console.log('狗能叫');
        console.log('super :>> ', _super.prototype.move);
    };
    return Dog;
}(Anamal));
var dog = new Dog('狗', 12);
console.log('dog :>> ', dog.name);
dog.move(10);
dog.call();
/**
 * 抽象类
 * 使用 abstract 关键字声明的类，我们称之为抽象类。抽象类不能被实例化，因为它里面包含一个或多个抽象方法。
 */
// 抽象类
var MM = /** @class */ (function () {
    function MM(name) {
        this.name = name;
    }
    return MM;
}());
var CC = /** @class */ (function (_super) {
    __extends(CC, _super);
    function CC() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.age = 111;
        return _this;
    }
    CC.prototype.say = function () {
        return '';
    };
    return CC;
}(MM));
var cc = new CC('xxx');
console.log('cc :>> ', cc);
/**
 * 类方法的重载
 */
var XX = /** @class */ (function () {
    function XX() {
    }
    XX.prototype.say = function (name) {
        if (typeof name === 'string') {
            return '';
        }
        else {
            return 111;
        }
    };
    return XX;
}());
