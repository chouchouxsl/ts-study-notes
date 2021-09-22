// 同名基础属性合并
interface X {
    a: number
    b: string
    c: boolean
}

interface Y {
    // a: string
    f: number
}

type XY = X & Y

let q: XY = {
    a: 123,
    b: '123',
    c: true,
    f: 12
}

// 为什么接口 X 和接口 Y 混入后，成员 a 的类型会变成 never 呢？
// 这是因为混入后成员 a 的类型为 string & number，即成员 a 的类型既可以是 string 类型又可以是 number 类型。
// 很明显这种类型是不存在的，所以混入后成员 a 的类型为 never。

// 同名非基础属性合并
interface D {
    d: boolean
}
interface E {
    e: string
}
interface F {
    f: number
}

interface A {
    x: D
}
interface B {
    x: E
}
interface C {
    x: F
}

type ABC = A & B & C

let abc: ABC = {
    x: {
        d: true,
        e: 'semlinker',
        f: 666
    }
}

// 在混入多个类型时，若存在相同的成员，且成员类型为非基本数据类型，那么是可以成功合并。
