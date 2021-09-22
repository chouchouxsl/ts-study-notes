export {}

/**
 * 类的基本使用
 */
class MyClass {
    // 静态属性
    static cname: string = 'xxx'

    // 成员属性
    public age: number // 公有属性
    private sex: boolean // 私有属性 不能在声明它的类的外部访问
    protected size: number // 受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
    // 私有字段 ES提供 TS支持  具体和 private差不多
    #character: string // 前面不可以使用修饰符

    // 构造器
    constructor(age: number, sex: boolean, size: number, character: string) {
        this.age = age
        this.sex = sex
        this.size = size
        this.#character = character
    }

    // 静态方法
    static fly(): void {
        console.log(`${this.cname}会飞`)
        // console.log('this.age :>> ', this.age); // 报错 静态方法访问不到类属性
    }

    // 静态属性
    jup(): void {
        // console.log(`${this.cname}会跳`) // 报错  访问不到静态属性
        console.log('this.age :>> ', this.age)
    }
}

let myClass = new MyClass(12, false, 33, '好')
console.log('MyClass.cname :>> ', MyClass.cname)
MyClass.fly()
console.log('myClass.age :>> ', myClass.age)
myClass.jup()
// console.log('myClass.sex :>> ', myClass.sex) // 报错 私有属性无法访问
// console.log('myClass.size :>> ', myClass.size) // 报错 受保护的 只能类本身和其子类可以访问
// console.log('myClass.#character :>> ', myClass.#character) // 报错 属性 "#character" 在类 "MyClass" 外部不可访问，因为它具有专用标识符

/**
 * 访问器
 */
class Visitor {
    constructor(private _name: string) {}
    get name(): string {
        return this._name
    }
    set name(name: string) {
        if (name === 'zs') {
            this._name = name
        } else {
            throw new Error('只能设置为zs')
        }
    }
}

const visitor: Visitor = new Visitor('xxx')
console.log('visitor :>> ', visitor)
// console.log('visitor :>> ', visitor._name) // 不可以直接访问私有属性
console.log('getName :>> ', visitor.name)
visitor.name = 'zs'
console.log('getName :>> ', visitor.name)

/**
 * 类的继承
 */
class Anamal {
    constructor(public name: string) {}
    move(distanceInMeters: number = 0): void {
        console.log(`${this.name} moved ${distanceInMeters}m.`)
    }
}

class Dog extends Anamal {
    // 可不写 默认会把父类的属性继承过来
    constructor(name: string, public age: number) {
        super(name)
    }

    call(): void {
        console.log('狗能叫')
        console.log('super :>> ', super.move)
    }
}

const dog: Dog = new Dog('狗', 12)
console.log('dog :>> ', dog.name)
dog.move(10)
dog.call()

/**
 * 抽象类
 * 使用 abstract 关键字声明的类，我们称之为抽象类。抽象类不能被实例化，因为它里面包含一个或多个抽象方法。
 */
// 抽象类
abstract class MM {
    abstract age: number // 抽象属性
    constructor(public name: string) {}
    abstract say(): string // 抽象方法
}

class CC extends MM {
    age: number = 111
    say() {
        return ''
    }
}
let cc: CC = new CC('xxx')
console.log('cc :>> ', cc)

/**
 * 类方法的重载
 */

class XX {
    say(name: string): string
    say(name: number): number
    say(name: string | number): string | number {
        if (typeof name === 'string') {
            return ''
        } else {
            return 111
        }
    }
}
