export {}

/**
 * @Title 类型兼容性
 * 集合论中，如果一个集合的所有元素在集合B中都存在，则A是B的子集；
 * 类型系统中，如果一个类型的属性更具体，则该类型是子类型。（因为属性更少则说明该类型约束的更宽泛，是父类型）
 * 因此，我们可以得出基本的结论：子类型比父类型更加具体,父类型比子类型更宽泛。
 */

/* 可赋值性 */
interface Ky1 {
    name: string
}

interface Ky2 extends Ky1 {
    break(): void
}

let a: Ky1 = {
    name: 'xxx'
}
let b: Ky2 = {
    name: 'xxx',
    break() {}
}
// 可以赋值 b是a的子集 b更具体 a更宽泛
a = b
// 不可以 报错 类型 "Ky1" 中缺少属性 "break"，但类型 "Ky2" 中需要该属性
// b = a

// 可赋值性在联合类型中的特性
type A1 = 1 | 2 | 3
type A2 = 2 | 3

let a1: A1
let a2: A2

// a2 = a1
// a1 = a2

/**
 * 是不是A的类型更多，A就是子类型呢？恰恰相反，A此处类型更多但是其表达的类型更宽泛，所以A是父类型，B是子类型。
 * 因此b = a不成立（父类型不能赋值给子类型），而a = b成立（子类型可以赋值给父类型）
 */

/* 协变 */
let c: Ky1[]
let d: Ky2[] = [
    {
        name: 'sss',
        break() {}
    }
]
// 兼容，可以赋值
c = d

/**
 * 变成数组后 依旧可以赋值
 * 因此对于type MakeArray = Array<any>来说就是协变的。
 */

/* 逆变 */
