import { ex } from './../01-ts基本类型/初始ts'
export {}

/* 函数声明合并 也就是重载 */
function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''))
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('')
    } else {
        return ''
    }
}

// --------------------------------------------------

/* 接口的合并 */

interface Alarm {
    price: number
}
interface Alarm {
    weight: number
}
// 相当于
interface Alarm {
    price: number
    weight: number
}

// 注意，合并的属性的类型必须是唯一的：
interface Alarm1 {
    price: number
}
interface Alarm1 {
    price: number // 虽然重复了，但是类型都是 `number`，所以不会报错
    weight: number
}

// interface Alarm2 {
//     price: number;
// }
// interface Alarm2 {
//     price: string;  // 类型不一致，会报错
//     weight: number;
// }

// 接口中方法的合并，与函数的合并一样：
interface Alarm {
    price: number
    alert(s: string): string
    alert(s: 'div'): HTMLElement
}
interface Alarm {
    weight: number
    alert(s: 'p'): HTMLElement
    alert(s: string, n: number): string
}
// 相当于
interface Alarm {
    price: number
    weight: number

    //每个同名函数合并会当做一个重载  后声明的优先级最高
    // 这个规则有一个例外是当出现特殊的函数签名时，如果签名里有一个参数的类型是 单一的字符串字面量
    //（比如，不是字符串字面量的联合类型），那么它将会被提升到重载列表的最顶端。
    alert(s: 'p'): HTMLElement
    alert(s: 'div'): HTMLElement
    alert(s: string, n: number): string
    alert(s: string): string
}

// --------------------------------------------------

/* 命名空间的合并 */

namespace ZS {
    export class X {}
}

namespace ZS {
    export interface X {}
    export enum Z {
        XX
    }
    export class Y {}
}

// 相当于
// namespace ZS {
//     export interface X {}
//     export enum Z {
//         XX
//     }
//     export class X {}
//     export class Y {}
// }

/**
 * 除了这些合并外，你还需要了解非导出成员是如何处理的。
 * 非导出成员仅在其原有的（合并前的）命名空间内可见。这就是说合并之后，
 * 从其它命名空间合并进来的成员无法访问非导出成员
 */

namespace XX {
    let haver = true
    export function ls() {
        return haver
    }
}

namespace XX {
    export function zs() {
        // 因为 haver并没有导出，只有 ls 函数共享了原始未合并的命名空间可以访问这个变量。
        // zs 函数虽是合并命名空间的一部分，但是访问不了未导出的成员。
        // return haver
    }
}

/* 命名空间与 类 函数 枚举类型的合并 */

// 类 可以扩展内部类 为类增加一些静态属性
class AA {
    label: string = AA.aa
    Class: AA.AL = AA.AL
}

namespace AA {
    export class AL {}
    export let aa = 'label'
}

// 函数 可以扩展函数 为函数增加一些属性
function fn(color: string): string {
    return color + fn.str
}

namespace fn {
    export let str = ''
}

// 枚举 命名空间可以用来扩展枚举型
enum Color {
    red = 1,
    green = 2,
    blue = 4
}

namespace Color {
    export function mixColor(colorName: string) {
        if (colorName == 'yellow') {
            return Color.red + Color.green
        } else if (colorName == 'white') {
            return Color.red + Color.green + Color.blue
        } else if (colorName == 'magenta') {
            return Color.red + Color.blue
        } else if (colorName == 'cyan') {
            return Color.green + Color.blue
        } else {
            return 0
        }
    }
}

let color: Color = Color.mixColor('yellow') // 3
console.log('color :>> ', color)
