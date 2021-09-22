function sum(a: number, b: number): number {
    return a + b
}
sum(1, 2)

//  ===================
interface Person {
    readonly firstName: string | number
    lastName?: string
}

function gen(person: Person) {
    console.log('person :>> ', person)
}

gen({
    firstName: 1111
    // lastName: 'xxXPathExpression'
})

//  =================
let a: number = 1212

a = 32
// a = true;

// =================
let b: any = '1212'

b = true
b = 123
b = a

// ================
let c: unknown = '2121'

c = 123
c = b

// a = b;
// ================
/* 
  数组
*/
const arr: Array<number> = [1, 3, 4]
const arr2: string[] = ['asd', 'wsew']
arr.unshift(1212)
arr2.push('1111')

// ================
/* 
  元祖
*/
let arr3: [string, number] = ['12', 123]
// arr3 = [213, 'asd'];
arr3 = ['asd', 123]

// ===============
/* 
  枚举
*/
enum Color {
    red = 1,
    blue,
    pink
}
let pink: number = Color.pink
console.log('pink :>> ', pink)

let blue: string = Color[2]
console.log('blue :>> ', blue)

//===================
function jum(): void {
    console.log('哈哈哈 :>> ', '哈哈哈')
}

const jup = (): void => {
    return
}

// =====================
// const obj: object = null
// const obj1: object = undefined
const obj3: object = []
const obj5: object = function () {}
// const obj6: object = 1111;

let obj4: { name: string; age: number; [propName: string]: any }

obj4 = {
    name: 'zs',
    age: 13,
    sxxx: 'xxxx'
}

let fnc: (a: string, b: number) => void
// ====================
/* 
联合类型 和  类型断言
*/
function strLength(str: string | number) {
    return (<string>str).length ? (str as string).length : str.toString().length
}
console.log('strLength :>> ', strLength(123123213123))

export const ex: string = '2'

interface GEGE<T, K> {
    nama: T
    age: K
}

const xxx: GEGE<number, string> = {
    nama: 11,
    age: '12'
}
