export {}

/**
 * Partial实现原理解析
 * Partial<T>将T的所有属性变成可选的
 * */

/**
 * 核心实现就是通过映射类型遍历T上所有的属性，
 * 然后将每个属性设置为可选属性
 */
type newPartial<T> = {
    [P in keyof T]?: T[P]
}

type TP = newPartial<{
    name: string
    age: number
}>
// 都变成可选
const p: TP = { name: '' }

// 改造下 只有指定的key变成可选
type PartialOptional<T, K extends keyof T> = {
    [P in K]?: T[P]
}

type OTP = PartialOptional<
    {
        name: string
        age: number
        sex: boolean
    },
    'name' | 'age'
>
// { name?: string; age?: number }
const op: OTP = { age: 123 }

// -----------------------------------

/**
 *  Required<T>
 * 作用就是将某个类型中的属性全部变为必选，具体实现和Partial类似
 */
type newRequired<T> = {
    [P in keyof T]-?: T[P]
}

type TR = newRequired<{
    name: string
    age?: number
    sex?: boolean
}>

const tr: TR = {
    name: 'string',
    age: 123,
    sex: true
}

// -----------------------------------

/**
 *  Readonly<T>
 * 作用是将某个类型所有属性变为只读属性，也就意味着这些属性不能被重新赋值。
 */

type newReadonly<T> = {
    readonly [K in keyof T]: T[K]
}

type RD = newReadonly<{
    name: string
    age: 123
}>

const rd: RD = {
    name: 'sxx',
    age: 123
}

// rd.name = '123' 只读 无法赋值

// -----------------------------------

/**
 *  Record<K extends keyof any,T>
 * 作用是将 K 中所有的属性的值转换为 T 类型
 */

type newRecord<K extends keyof any, T> = {
    [P in K]: T
}

type Keys = 'dog' | 'cat' | 'fish'

interface IKeys {
    dog: string
    cat: string
    fish: string
}

type RO = newRecord<
    keyof IKeys, // 等价于Keys
    {
        name: string
        age: number
    }
>

const ro: RO = {
    dog: {
        name: 'string',
        age: 123
    },
    cat: {
        name: 'string',
        age: 123
    },
    fish: {
        name: 'string',
        age: 123
    }
}

// -----------------------------------

/**
 * Pick<T,K extends keyof T>
 * 作用是将 K 中所有的属性的值转换为 T 类型
 */

type newPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

type PI = newPick<
    {
        name: string
        age: number
        sex: boolean
    },
    'name'
> // name

const pi: PI = {
    name: 'xxx'
}

// -----------------------------------

/**
 * Exclude<T,U>
 * 作用是将某个类型中属于另一个的类型移除掉
 */

type newExclude<T, U> = T extends U ? never : T

/**
 * 如果 T 能赋值给 U 类型的话，那么就会返回 never 类型，
 * 否则返回 T 类型。最终实现的效果就是将 T 中某些属于 U 的类型移除掉。
 * 这里主要是利用了 never 的特性，never 是最底层类型，
 * 联合任意类型等于那个类型，已达到移除的效果。
 */

type EX1 = newExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
type EX2 = newExclude<'a' | 'b' | 'c', 'a' | 'c'> // 'b'
type EX3 = newExclude<'a' | 'b' | 'c' | (() => void), Function> // 'a' | 'b' | 'c'

// -----------------------------------

/**
 * Extract<T,U>
 * 作用是提取联合类型T和联合类型U的所有交集
 */

type newExtract<T, U> = T extends U ? T : never

type Ext1 = newExtract<'a' | 'b' | 'c', 'a'> // 'a'
type Ext2 = newExtract<'a' | 'b' | 'c', 'a' | 'c'> // 'a' | 'c'
type Ext3 = newExtract<'a' | 'b' | 'c' | (() => void), Function> //Function () => void

// -----------------------------------

/**
 * Omit<T,K>
 * 作用是从类型T中剔除K中的所有属性。
 */

// 使用Pick Exclude实现
// Exclude获取T中不存在K的类型 在Pick将Exclude处理后的联合类型和T匹配挑选出我们想要的
type newOmit<T, K> = Pick<T, Exclude<keyof T, K>>

/**
 * 如果不利用Pick实现呢?
 */
type newOmit2<T, K extends keyof any> = {
    [P in Exclude<keyof T, K>]: T[P]
}

interface OmitObj {
    name: string
    age: number
    sex: boolean
}

type OmitType = 'name' | 'age'

const Omit: newOmit<OmitObj, OmitType> = {
    sex: true
}

/**
 * Parameters
 * 作用是获取函数的参数类型，将每个参数类型放在一个元组中。
 */

// 实现
// type newParameters<T extends (...args: any[]) => any> = T extends (...any: infer P) => any ? P : never
type newParameters<T extends Function> = T extends (...any: infer P) => any ? P : never

// [name: string, age: number]
type parame = newParameters<(name: string, age: number) => void>
// 验证
const parameArr: parame = ['xxx', 12]
// 扩展
/**
 * type Eg = [arg1: string, arg2: number]这是一个元组，但是和我们常见的元组
 * type tuple = [string, number]。官网未提到该部分文档说明，
 * 其实可以把这个作为类似命名元组，或者具名元组的意思去理解。
 * 实质上没有什么特殊的作用，比如无法通过这个具名去取值不行的。
 * 但是从语义化的角度，个人觉得多了语义化的表达罢了。
 */

/**
 * 普通方式
 */
type Tuple1 = [string, number?]
const a: Tuple1 = ['aa', 11]
const a2: Tuple1 = ['aa']
/**
 * 具名方式
 */
type Tuple2 = [name: string, age?: number]
const b: Tuple2 = ['aa', 11]
const b2: Tuple2 = ['aa']

/**
 * ReturnType
 * 作用是获取函数的返回值类型。
 * ReturnType的实现其实和Parameters的基本一样
 * 无非是使用infer的位置不一样。
 */

type newReturnType<T extends Function> = T extends (...args: any[]) => infer P ? P : never
// number | string
type returnt = newReturnType<(name: string) => number | string>
// 验证
const ret: returnt = 12
const ret1: returnt = '12'

/**
 * NonNullable<T>
 * 作用 去除T中的 null 和 undefined 类型
 */

type nonNull = NonNullable<'sss' | string | number | null | undefined>
// 'sss' | string | number
// const non: nonNull = undefined

/**
 * InstanceType<T>
 * 获取实例的类型
 */

class Pep {}

const pop1: Pep = new Pep()
type PTY = InstanceType<typeof Pep>
const pop2: PTY = new Pep()
const pop3: typeof Pep = Pep
