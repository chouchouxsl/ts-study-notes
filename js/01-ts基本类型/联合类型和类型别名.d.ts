/**
 * @description: 联合类型: 通常与 null 或 undefined 一起使用
 */
declare const sayHello: (name: string | undefined | null) => void;
declare let num: 1 | 2;
declare type EventNames = 'click' | 'scroll' | 'mousemove';
declare enum CarTransmission {
    Automatic = 200,
    Manual = 300
}
interface Motorcycle {
    vType: 'motorcycle';
    make: number;
}
interface Car {
    vType: 'car';
    transmission: CarTransmission.Automatic;
}
interface Truck {
    vType: 'truck';
    capacity: number;
}
declare type Vehicle = Motorcycle | Car | Truck;
declare function evaluatePrice(vehicle: Vehicle): number;
declare const myTruck: Truck;
/**
 * @description: 类型别名: 类型别名用来给一个类型起个新名字。
 */
declare type Message = string | string[];
declare let greet: (message: Message) => number;
