/**
 * 全局变量是最简单的一种场景，
 * 之前举的例子就是通过 <script> 标签引入 jQuery，注入全局变量 $ 和 jQuery。
 * 使用全局变量的声明文件时，
 * 如果是以 npm install @types/xxx --save-dev 安装的，
 * 则不需要任何配置。如果是将声明文件直接存放于当前项目中，
 * 则建议和其他源码一起放到 src 目录下（或者对应的源码目录下）
 *
 */

// 全局变量的声明文件主要有以下几种语法：
// declare var // 声明全局变量
// declare function // 声明全局方法
// declare class // 声明全局类
// declare enum // 声明全局枚举类型
// declare namespace //声明（含有子属性的）全局对象
// interface 和 type //声明全局类型

// 重点  在 d.ts 声明文件中，任何的 declare 默认就是 global 的了，
// 所以你在 d.ts 文件中是不能出现 declare global 的。
// 只有在模块文件中的定义，如果想要全局就使用 declare global

// -------------------------------------------------------------

/* declare var // 声明全局变量 
    在所有的声明语句中，
    declare var 是最简单的，
    如之前所学，它能够用来定义一个全局变量的类型。与其类似的，
    还有 declare let 和 declare const，
    使用 let 与使用 var 没有什么区别
*/

declare let jQuery1: (selector: string) => any
// 而当我们使用 const 定义时，表示此时的全局变量是一个常量，不允许再去修改它的值了
declare const jQuery2: (selector: string) => any

// 一般来说，全局变量都是禁止修改的常量，所以大部分情况都应该使用 const 而不是 var 或 let。
// 需要注意的是，声明语句中只能定义类型，切勿在声明语句中定义具体的实现

// -------------------------------------------------------------

/* declare function // 声明全局函数
    jQuery 其实就是一个函数，所以也可以用 function 来定义：
*/
declare function JQuery(params: string): any
// 在函数类型的声明语句中，函数重载也是支持的
declare function JQuery(callback: Function): any
declare function JQuery(num: number): any

// -------------------------------------------------------------

/* declare enum // 声明全局枚举
   定义的枚举类型也称作外部枚举
*/

declare enum Directives {
    Up = 3,
    Down,
    Left,
    Right
}

/* 注意点
    与其他全局变量的类型声明一致，declare enum 仅用来定义类型，而不是具体的值。
    Directions.d.ts 仅仅会用于编译时的检查，声明文件里的内容在编译结果中会被删除。它编译结果是：
    var directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
    其中 Directions 是由第三方库定义好的全局变量。
*/
/* 
    扩展: 运行时枚举 和 外部枚举的区别

    运行时的枚举是真正存在的对象 
    
    外外部枚举用来描述已经存在的枚举类型的形状。

    外部枚举和非外部枚举之间有一个重要的区别，
    在正常的枚举里，没有初始化方法的成员被当成常数成员。 
    对于非常数的外部枚举而言，没有初始化方法时被当做需要经过计算的。
*/

// -------------------------------------------------------------

/* declare namespace // 声明命名空间
   namespace 被淘汰了，但是在声明文件中，
   declare namespace 还是比较常用的，它用来表示全局变量是一个对象，包含很多子属性。
*/

declare namespace jQuery {
    function ajax(url: string, settings?: any): void
    let version: number
    class Event {
        blur(e: EventType): void
    }
    enum EventType {
        KKK
    }
    // 还可以嵌套
    namespace fn {
        function extend(obj: any): void
    }

    interface AjaxSettings {
        method: 'GET' | 'POST'
        parame: EventType.KKK
    }
}

// -------------------------------------------------------------

/* interface 和 type
   了全局变量之外，可能有一些类型我们也希望能暴露出来。
   在类型声明文件中，我们可以直接使用 interface 或 type 来声明一个全局的接口或类型
*/
type DataType = {
    name: string
    age: number
}

interface AjaxSettings {
    method: 'GET' | 'POST'
    data: DataType
}

declare namespace jQuery4 {
    function ajax(url: string, settings: AjaxSettings): void
}

// 嵌套
declare namespace jQuery5 {
    function ajax(url: string, settings: jQuery.AjaxSettings): void
}
