"use strict";
/* 测试全局变量 */
jQuery1 = function (ss) { };
// 使用 declare const 定义的 jQuery 类型，禁止修改这个全局变量
// jQuery2 = function (ss: string): void {} // 无法分配到 "jQuery2" ，因为它是常数
/* 测试全局函数 */
JQuery('sss');
JQuery(111);
JQuery(function () { });
/* 测试全局enum */
let directives = [Directives.Up, Directives.Down];
/* 测试全局namespace */
jQuery.ajax('/api/get_something', {});
jQuery.version = 34;
let Et = jQuery.EventType.KKK;
let NE = new jQuery.Event();
NE.blur(Et);
jQuery.fn.extend({});
/* 测试全局interface 和 type */
let dataty = { name: '', age: 12 };
let settings = {
    method: 'GET',
    data: dataty
};
jQuery4.ajax('/api/get_something', settings);
jQuery4.ajax('/api/get_something', {
    method: 'GET',
    data: {
        name: 's',
        age: 123
    }
});
/* 支持嵌套的类型 */
let settings5 = {
    method: 'GET',
    parame: jQuery.EventType.KKK
};
jQuery5.ajax('/api/get_something', settings5);
