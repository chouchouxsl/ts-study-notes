"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
    else {
        return '';
    }
}
// --------------------------------------------------
/* 命名空间的合并 */
var ZS;
(function (ZS) {
    class X {
    }
    ZS.X = X;
})(ZS || (ZS = {}));
(function (ZS) {
    let Z;
    (function (Z) {
        Z[Z["XX"] = 0] = "XX";
    })(Z = ZS.Z || (ZS.Z = {}));
    class Y {
    }
    ZS.Y = Y;
})(ZS || (ZS = {}));
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
var XX;
(function (XX) {
    let haver = true;
    function ls() {
        return haver;
    }
    XX.ls = ls;
})(XX || (XX = {}));
(function (XX) {
    function zs() {
        // 因为 haver并没有导出，只有 ls 函数共享了原始未合并的命名空间可以访问这个变量。
        // zs 函数虽是合并命名空间的一部分，但是访问不了未导出的成员。
        // return haver
    }
    XX.zs = zs;
})(XX || (XX = {}));
/* 命名空间与 类 函数 枚举类型的合并 */
// 类 可以扩展内部类 为类增加一些静态属性
class AA {
    label = AA.aa;
    Class = AA.AL;
}
(function (AA) {
    class AL {
    }
    AA.AL = AL;
    AA.aa = 'label';
})(AA || (AA = {}));
// 函数 可以扩展函数 为函数增加一些属性
function fn(color) {
    return color + fn.str;
}
(function (fn) {
    fn.str = '';
})(fn || (fn = {}));
// 枚举 命名空间可以用来扩展枚举型
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["green"] = 2] = "green";
    Color[Color["blue"] = 4] = "blue";
})(Color || (Color = {}));
(function (Color) {
    function mixColor(colorName) {
        if (colorName == 'yellow') {
            return Color.red + Color.green;
        }
        else if (colorName == 'white') {
            return Color.red + Color.green + Color.blue;
        }
        else if (colorName == 'magenta') {
            return Color.red + Color.blue;
        }
        else if (colorName == 'cyan') {
            return Color.green + Color.blue;
        }
        else {
            return 0;
        }
    }
    Color.mixColor = mixColor;
})(Color || (Color = {}));
let color = Color.mixColor('yellow'); // 3
console.log('color :>> ', color);
