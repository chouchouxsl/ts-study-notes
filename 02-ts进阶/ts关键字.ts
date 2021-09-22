export {}

/**
 * 前置内容
 */
/* keyof 索引查询 keyof T的结果为该类型上所有共有属性key的联合 */

/**
 * @example
 */

interface Eg1 {
    name: string
    readonly age: number
}
// T1的类型实则是name | age
type T1 = keyof Eg1

class Eg2 {
    private name: string = ''
    public readonly age: number = 1
    protected home: string = ''
}
// T2实则被约束为 age
// 而name和home不是公有属性，所以不能被keyof获取到
type T2 = keyof Eg2

/* T[K] 索引访问 */
// string
type V1 = Eg1['name']
// number
type V2 = Eg1['age']
// string | number
type V3 = Eg1['name' | 'age']
// any  类型“Eg1”上不存在属性“ageeee”
// type v4 = Eg1['name' | 'ageeee']
// string | number
type V5 = Eg1[keyof Eg1]

// T[keyof T]的方式，可以获取到T所有key的类型组成的联合类型；
// T[keyof K]的方式，获取到的是T中的key且同时存在于K时的类型组成的联合类型；
// 注意：如果[]中的key有不存在T中的，则是any；因为ts也不知道该key最终是什么类型，所以是any；且也会报错；

/* & 交叉类型注意点 */
interface JIAOX1 {
    name: string
    age: number
}

interface JIAOX2 {
    home: string
    age: number
}
/**
 * T的类型为 {name: string; age: number; age: never}
 * 注意，age因为Eg1和Eg2中的类型不一致，所以交叉后age的类型是never
 */
type JIAOXT = JIAOX1 & JIAOX2

// 验证
const Jx: JIAOXT = {
    name: 'xxx',
    age: 12,
    home: (function a() {
        throw Error()
    })()
}

/**
 *  extends关键字
 * 用于接口，表示继承
 * */

/**
 * @example
 */

interface EX1 {
    name: string
    age?: number
}

interface EX2 {
    sex: boolean
}

interface EX3 extends EX1, EX2 {
    phone: string
}

/**
 * 注意，接口支持多重继承，语法为逗号隔开。
 * 如果是type实现继承，则可以使用交叉类型type A = B & C & D。
 **/

/* 表示条件类型，可用于条件判断 */

/**
 * @example
 */

// string
type A1 = 'x' extends 'x' ? string : number

// xxx
type A2 = 'x' | 'y' extends 'x' ? 1 : 'xxx'

type P<T> = T extends 'x' ? 1 : 2
// 1 | 2
type A3 = P<'x' | 'y'>

/**
 * @Notice
 * 为什么A2和A3的值不一样？
 * 就是extends前面的参数为联合类型时则会分解（依次遍历所有的子类型进行条件判断）联合类型进行判断。
 * 然后将最终的结果组成新的联合类型。
 */
// 阻止extends关键词对于联合类型的分发特性
type Pn<T> = [T] extends 'x' ? 1 : 2
// 2
type A4 = P<'x' | 'y'>
