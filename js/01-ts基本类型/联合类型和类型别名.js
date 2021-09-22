"use strict";
/**
 * @description: 联合类型: 通常与 null 或 undefined 一起使用
 */
var sayHello = function (name) {
    /* ... */
};
sayHello('xxxxx');
sayHello(undefined);
sayHello(null);
// 用来约束取值只能是某几个值中的一个。
var num = 1;
// 可辨识联合
// 1.可识别的 要求必须都拥有一个都含有的单例属性
var CarTransmission;
(function (CarTransmission) {
    CarTransmission[CarTransmission["Automatic"] = 200] = "Automatic";
    CarTransmission[CarTransmission["Manual"] = 300] = "Manual";
})(CarTransmission || (CarTransmission = {}));
// 3.类型守卫
// 我们使用 switch 和 case 运算符来实现类型守卫，从而确保在 evaluatePrice 方法中，我们可以安全地访问 vehicle 对象中的所包含的属性
function evaluatePrice(vehicle) {
    switch (vehicle.vType) {
        case 'car':
            return vehicle.transmission * 3.15;
        case 'truck':
            return vehicle.capacity * 3.15;
        case 'motorcycle':
            return vehicle.make * 3.15;
    }
}
var myTruck = { vType: 'truck', capacity: 9.5 };
evaluatePrice(myTruck);
var greet = function (message) {
    return message.length;
};
