export {}

/* 
泛型的基本使用
*/
function sumArr<T, U>(x: T, y: U): [T, U] {
    return [x, y]
}

sumArr(1, 2)
sumArr(1, '2')
sumArr('2', '2')
sumArr('2', false)

/* 
泛型接口
*/

interface IsumObj<T, U> {
    X: T
    Y: U
}

function sumObj<T, U>(x: T, y: U): IsumObj<T, U> {
    return {
        X: x,
        Y: y
    }
}
console.log(sumObj('11', 55))

/* 
泛型类
*/

interface IGeeger<X, Y> {
    value: X
    run(name: Y): X
}

class Geeger<T, U> implements IGeeger<T, U> {
    constructor(public value: T) {}
    run(name: U) {
        return this.value
    }
}

const geeger = new Geeger<string, number>('hahah')
geeger.run(12)

/* 
泛型约束
*/

// 确保属性存在
interface Ilength {
    length: number
}

function len<T extends Ilength>(msg: T): number {
    return msg.length
}

len('xxxx')
// len(123)

// 检查对象上的key是否存在
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}

getProperty(
    {
        name: '12',
        age: 123
    },
    'age'
)

// ____________________________________

enum Difficulty {
    Easy,
    Intermediate,
    Hard
}

interface Iget {
    name: string
    difficulty: Difficulty
    get?(): void
    set?(): void
}

const getObj: Iget = {
    name: 'hahah',
    difficulty: Difficulty.Easy,
    get() {},
    set() {}
}

function get<Iget, K extends keyof Iget>(obj: Iget, key: K): Iget[K] {
    return obj[key]
}

get(getObj, 'get')
let difficulty: Difficulty = get(getObj, 'difficulty')

/* 
泛型参数默认类型
*/
interface Idefault<T = string> {
    name: T
}

const strA: Idefault = { name: 'Semlinker' }

const numB: Idefault<number> = { name: 123 }

/* 
泛型条件类型
对于 T extends U ? X : Y 来说，还存在一个特性，当 T 是一个联合类型时，会进行条件分发
infer 的作用是让 TypeScript 自己推断，并将推断的结果存储到一个类型变量中，infer 只能用于 extends 语句中
*/

interface Inn<T = any> {
    [key: string]: T
}

type Sin = Inn<string>

type StrDictMember = Sin extends Inn<infer U> ? U : never //U: string

// promise
interface XObj {
    name: string
    age?: number
}

async function hhh() {
    return 'hhh'
}

async function xxx() {
    return {
        name: 'xxx'
    } as XObj
}

/* 
泛型工具类型
*/

// 1,Partial Partial<T> 的作用就是将某个类型里的属性全部变为可选项 ?
/**
 * node_modules/typescript/lib/lib.es5.d.ts
 * Make all properties in T optional
 */
// type Partial<T> = {
//     [P in keyof T]?: T[P]
// }

interface Todo {
    name: string
    age: number
}

const obj1: Todo = {
    name: '',
    age: 1
}

const obj2: Partial<Todo> = { name: 'str' }

// 2.Record Record<K extends keyof any, T> 的作用是将 K 中所有的属性的值转化为 T 类型。
/**
 * node_modules/typescript/lib/lib.es5.d.ts
 * Construct a type with a set of properties K of type T
 */
// type Record<K extends keyof any, T> = {
//     [P in K]: T;
// };
