/**
 * 在面向对象语言中，接口是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类去实现。
 */

// 对象形状的描述
namespace Obj {
    interface Obj {
        readonly name: string // 只读 不可编辑
        age: number
        sex?: string // 可选属性
        [propName: string]: any // 任意属性
    }

    const obj: Obj = {
        name: 'zs',
        age: 14,
        sex: 'woman',
        jun() {}
    }

    console.log('obj :>> ', obj.name)
    // obj.name = 'xxxx'
    obj.age = 22
}

// 接口与类型别名的区别
namespace Type {
    /**
     *  接口
     * */
    // 对象
    interface Obj {
        name: string
        age: number
    }
    // 函数
    interface FN {
        (x: number, y: number): void
    }

    /**
     *  别名
     * */
    // 对象
    type TypeObj = {
        name: string
        age: number
    }
    // 函数
    type TypeFn = (x: number, y: number) => void

    // 类型别名的其他用途 类型别名可以用于一些其他类型，比如原始类型、联合类型和元组

    // 基本类型
    type Str = string

    // 数组
    type Arr = string[]

    // 元祖
    type Tule = [string, number]

    // 联合类型
    type Union = Tule | Arr

    /**
     * 接口和别名的扩展
     * 接口和类型别名都能够被扩展，但语法有所不同。
     * 此外，接口和类型别名不是互斥的。
     * 接口可以扩展类型别名, 同理，类型别名也可以扩展接口。
     * */

    // 接口的扩展
    interface PartialPointX {
        x: number
    }
    interface Point extends PartialPointX {
        y: number
    }
    // 别名的扩展
    type TypePoint = { x: number } & { y: number }

    const point: Point | TypePoint = {
        x: 112,
        y: 123
    }

    // 别名扩展接口
    interface IPartialPointX {
        x: 123
    }
    type IPoint = IPartialPointX & { y: number }

    // 接口扩展别名
    type XPartialPointX = {
        x: 123
    }
    interface XPoint extends PartialPointX {
        y: number
    }

    /**
     * 类实现接口 Implements
     * 类可以以相同的方式实现接口或类型别名，但类不能实现使用类型别名定义的联合类型
     * */

    // 类实现接口
    interface Anamal {
        name: string
        jup(): void
    }

    class Dog implements Anamal {
        constructor(public name: string) {}
        jup() {}
    }

    // 类实现别名
    type Person = {
        name: string
        sex: string
    }

    class Student implements Person {
        constructor(public name: string, public sex: string) {}
    }
    // 不可以实现联合类型
    type Combination = Person | Anamal

    //     class Teather implements Combination { // 报错
    //         constructor(public name: string, public sex: string) {}
    //     }

    // 接口合并

    interface Comb {
        x: number
    }
    interface Comb {
        y: number
    }
    // const aa: Comb = {x:1} // Property 'y' is missing in type '{ x: number; }' but required in type 'Point'.

    const bb: Comb = { x: 1, y: 1 }

    // 别名不可以重复定义
    type TypeComb = {
        x: number // Duplicate identifier 'A'.
    }
    // type TypeComb = {
    //     y: number // Duplicate identifier 'A'.
    // }
}

namespace Class {
    enum Sex {
        man,
        woman
    }

    interface IPerson {
        readonly id: number
        name: string
        age: number
        sex?: Sex
    }

    class Person {
        public id
        public name
        private age
        private sex
        constructor(person: IPerson) {
            this.id = person.id
            this.name = person.name
            this.age = person.age
            this.sex = person.sex
        }
        // constructor(public person: IPerson) {}
    }

    const p = new Person({
        id: 1,
        name: 'hah',
        age: 12,
        sex: 1
    })

    console.log('p :>> ', p)

    abstract class Anamal {
        constructor(public name: string) {
            this.name = name
        }
        abstract jup(): void
    }

    class Dog extends Anamal {
        jup() {
            console.log('汪汪汪 :>> ', '汪汪汪')
        }
    }

    const dog = new Dog('狗')

    dog.jup()

    console.log('dog.name :>> ', dog.name)
}
