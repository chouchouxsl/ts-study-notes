"use strict";
var A;
(function (A) {
    // 基础
    let Direction;
    (function (Direction) {
        Direction[Direction["NORTH"] = 0] = "NORTH";
        Direction[Direction["SOUTH"] = 1] = "SOUTH";
        Direction[Direction["EAST"] = 2] = "EAST";
        Direction[Direction["WEST"] = 3] = "WEST";
    })(Direction || (Direction = {}));
    let dir = Direction.NORTH;
})(A || (A = {}));
var B;
(function (B) {
    // 初始值
    let Direction;
    (function (Direction) {
        Direction[Direction["NORTH"] = 3] = "NORTH";
        Direction[Direction["SOUTH"] = 4] = "SOUTH";
        Direction[Direction["EAST"] = 4] = "EAST";
        Direction[Direction["WEST"] = 5] = "WEST";
    })(Direction || (Direction = {}));
    let dir = Direction.EAST;
})(B || (B = {}));
var C;
(function (C) {
    // 字符串枚举
    let Direction;
    (function (Direction) {
        Direction[Direction["NORTH"] = 0] = "NORTH";
        Direction[Direction["SOUTH"] = 1] = "SOUTH";
        Direction["EAST"] = "xxx";
        Direction["WEST"] = "www";
    })(Direction || (Direction = {}));
    let dir = Direction.EAST;
})(C || (C = {}));
var D;
(function (D) {
    // 常量枚举 不会生成js代码 内嵌
    let dir = 2 /* EAST */;
    // var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
})(D || (D = {}));
var E;
(function (E) {
    // 异构枚举 // 最后要用数字 用字符串 必须吧后面的枚举都设置成字符串
    let dir = 2 /* EAST */;
})(E || (E = {}));
var F;
(function (F) {
    //  枚举是在运行时真正存在的对象。 可以作为参数使用
    let dir = 2 /* EAST */;
    function Dr(x) {
        return x + '2132';
    }
    Dr("SOUTH" /* SOUTH */);
})(F || (F = {}));
var G;
(function (G) {
    //  反向映射
    /*
        生成的代码中，枚举类型被编译成一个对象，
        它包含了正向映射（ name -> value）和反向映射（ value -> name）。
        引用枚举成员总会生成为对属性访问并且永远也不会内联代码。
     */
    let Direction;
    (function (Direction) {
        Direction["NORTH"] = "xxx";
    })(Direction || (Direction = {}));
    let Direction2;
    (function (Direction2) {
        Direction2[Direction2["NORTH"] = 0] = "NORTH";
    })(Direction2 || (Direction2 = {}));
    let dir1 = Direction.NORTH;
    let dir2 = Direction2.NORTH;
    /* 注意点  不会为字符串枚举成员生成反向映射。*/
    // let dir3: string = Direction[dir1]
    let dir4 = Direction2[dir2];
})(G || (G = {}));
