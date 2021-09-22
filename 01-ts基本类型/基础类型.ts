// Boolean
namespace Bool {
    let falg: boolean = true
    falg = false
}

// Number
namespace Num {
    let num: number = 1
    num = 12
}

// String
namespace Str {
    let str: string = '哈哈哈哈'
    str = '嘻嘻嘻嘻'
}

// Array
namespace Arr {
    let strArr: string[] = ['哈哈哈哈', '嘻嘻嘻嘻']
    let numArr: Array<number> = [123, 34, 54]
}

// Any
namespace Any {
    let notSure: any = 666
    notSure = 'semlinker'
    notSure = false
    notSure = [123213, 'ssad']
    // 可以赋值给有类型的 有风险
    let num: number = notSure
}

// Unknown
namespace Unknown {
    let notSure: unknown = 666
    notSure = 'semlinker'
    notSure = false
    notSure = [123213, 'ssad']
    // 不可以赋值给有类型的
    // let num:number = notSure
}

// Tuple
namespace Tuple {
    // 数组一般由同种类型的值组成，但有时我们需要在单个变量中存储不同类型的值，这时候我们就可以使用元组
    // 数量不可以多不可以少 类型必须一一对应
    let arr: [number, string, boolean] = [1, '2', false]
    type Tuple = [number, string]
    let tuArr: Tuple = [1, 'xx']
}

// Void
namespace Void {
    // 表示函数没有返回值
    function fn(x: number): void {}
    // 需要注意的是，声明一个 void 类型的变量没有什么作用，因为在严格模式下，它的值只能为 undefined：
    let unusable: void = undefined
}

// Null 和 Undefined
namespace Bare {
    // TypeScript 里，undefined 和 null 两者有各自的类型分别为 undefined 和 null。
    let u: undefined = undefined
    let n: null = null
}

// Object
namespace Object {
    //  object 类型是：TypeScript 2.2 引入的新类型，它用于表示非原始类型。
    //    对象的描述 一般都是通过接口进行描述
}

// Never
namespace Never {
    //never 类型表示的是那些永不存在的值的类型。 例如，never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型。
    // 返回never的函数必须存在无法达到的终点
    function error(message: string): never {
        throw new Error(message)
    }

    function infiniteLoop(): never {
        while (true) {}
    }
}
