export {}

// 基本使用
function createUserId1(name: string, id: number): string {
    return name + id
}
createUserId1('xxx', 12)

// 可选参数 在实际使用时，需要注意的是可选参数要放在普通参数的后面，不然会导致编译错误。
function createUserId2(name: string, id: number, age?: number): string {
    return name + id
}

// 默认参数
function createUserId3(name: string, id: number, age?: number): string {
    return name + id
}

// 剩余参数
function push(array: number[], ...items: number[]) {
    items.forEach(function (item) {
        array.push(item)
    })
}

push([], 1, 2, 8)

// 函数重载 函数重载或方法重载是使用相同名称和不同参数数量或类型创建多个方法的一种能力
// 重载签名
function add(a: number, b: number): number
function add(a: string, b: string): string
function add(a: string, b: number): string
function add(a: number, b: string): string
// 实现签名
function add(a: number | string, b: number | string) {
    // 类型守卫
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString()
    }
    return a + b
}
