"use strict";
/**
 * 在面向对象语言中，接口是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类去实现。
 */
// 对象形状的描述
var Obj;
(function (Obj) {
    const obj = {
        name: 'zs',
        age: 14,
        sex: 'woman',
        jun() { }
    };
    console.log('obj :>> ', obj.name);
    // obj.name = 'xxxx'
    obj.age = 22;
})(Obj || (Obj = {}));
// 接口与类型别名的区别
var Type;
(function (Type) {
    const point = {
        x: 112,
        y: 123
    };
    class Dog {
        name;
        constructor(name) {
            this.name = name;
        }
        jup() { }
    }
    class Student {
        name;
        sex;
        constructor(name, sex) {
            this.name = name;
            this.sex = sex;
        }
    }
    // const aa: Comb = {x:1} // Property 'y' is missing in type '{ x: number; }' but required in type 'Point'.
    const bb = { x: 1, y: 1 };
    // type TypeComb = {
    //     y: number // Duplicate identifier 'A'.
    // }
})(Type || (Type = {}));
var Class;
(function (Class) {
    let Sex;
    (function (Sex) {
        Sex[Sex["man"] = 0] = "man";
        Sex[Sex["woman"] = 1] = "woman";
    })(Sex || (Sex = {}));
    class Person {
        id;
        name;
        age;
        sex;
        constructor(person) {
            this.id = person.id;
            this.name = person.name;
            this.age = person.age;
            this.sex = person.sex;
        }
    }
    const p = new Person({
        id: 1,
        name: 'hah',
        age: 12,
        sex: 1
    });
    console.log('p :>> ', p);
    class Anamal {
        name;
        constructor(name) {
            this.name = name;
            this.name = name;
        }
    }
    class Dog extends Anamal {
        jup() {
            console.log('汪汪汪 :>> ', '汪汪汪');
        }
    }
    const dog = new Dog('狗');
    dog.jup();
    console.log('dog.name :>> ', dog.name);
})(Class || (Class = {}));
