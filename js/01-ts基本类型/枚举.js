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
})(D || (D = {}));
(function (D) {
    // 异构枚举 // 最后要用数字 用字符串 必须吧后面的枚举都设置成字符串
    let dir = 2 /* EAST */;
})(D || (D = {}));
