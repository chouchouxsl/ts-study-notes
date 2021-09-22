export {}
// ts会推断类型

// 对象结构
let person = {
    name: 'zs',
    age: 14
}

const { age } = person

// 对象扩展运算符
const { name, ...rest } = { ...person, sex: '女' }
