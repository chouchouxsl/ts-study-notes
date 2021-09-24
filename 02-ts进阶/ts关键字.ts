export {}

/* typeof  操作符可以用来获取一个变量的声明，或是对象的类型*/

interface TY {
    name: string
    age: number
}

const typ: TY = { name: 'xxx', age: 1231 }
type NTY = typeof typ // TY

function toArray(x: number): Array<number> {
    return [x]
}
type AT = typeof toArray // (x:number) => number[]

//-------------------------------------------------------

/* keyof 索引查询 keyof T的结果为该类型上所有共有属性key的联合 */

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

//-------------------------------------------------------

/* in  用来遍历枚举类型*/
type xc = 'a' | 'b' | 'c'

type xcObj = {
    [key in xc]: any
}

//{ a: any, b: any, c: any }
const xcObjx: xcObj = { a: 12, b: '', c: true }

//-------------------------------------------------------

/* infer  在条件类型语句中，可以用infer 声明一个类型变量，并且对它进行使用。*/

type Head<T extends Array<any>> = T extends [head: infer U, ...ary: any[]] ? U : never

type H1 = Head<[]> // never
function fucH1(): H1 {
    throw new Error('1213')
}

type H2 = Head<[3, 2, 1]> // 3
const a: H2 = 3

type Bar<T> = T extends {
    a: (x: infer U) => void
    b: (x: infer U) => void
}
    ? U
    : never

type bar = Bar<{ a: (x: string) => void; b: (x: string) => void; c: string }> // string
const bar1: bar = 'xxx'

//-------------------------------------------------------

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

//-------------------------------------------------------

/**
 *  extends关键字
 * 用于接口，表示继承
 * */

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

/* extends 关键字  当我们定义的泛型不想过于灵活，或者想继承某些类的时候，我们可以通过 extends 关键字添加泛型约束*/
interface mustlength {
    length: number
}
function mustTakeLength<T extends mustlength>(arg: T): T {
    console.log('arg :>> ', arg.length)
    return arg
}

interface User {
    id: number
    name: string
}

/**
 * 报错
 * 下面的代码为什么会报错？
 * 因为 T 受 User 约束，必须拥有 User中的类型，
 * 但不局限只拥有，也能拥有更多的类型，
 * 返回只返回了两种，如果有更多类型，
 * 就会出问题，所以报错
 */
// function makeUser<T extends User>(x: T): T {
//     return {
//         id: x.id,
//         name: 'sssss'
//     }
// }

/* 解决方案 */
function makeUser<T extends User>(x: T): T {
    return {
        ...x,
        id: x.id,
        name: 'sssss'
    }
}
