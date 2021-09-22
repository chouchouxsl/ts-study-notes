export {}

/**
 * @description: 类型断言
 */
function add(x: number | string, y: string): number {
    // return (x + y).length
    // as语法
    return (x as string).length
    // 尖括号内语法
    // return (<string>x).length
}

/**
 * @description: 非空断言
 */
function myfn(str: string | undefined | null): void {
    // const arr: string = str as string
    const arr: string = str!
}

/**
 * @description: 明确赋值断言
 */
let x!: number
console.log('x * 2 :>> ', x * 2)
