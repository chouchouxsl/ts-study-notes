/**
 * @description: 联合类型: 通常与 null 或 undefined 一起使用
 */

const sayHello = (name: string | undefined | null): void => {
    /* ... */
}
sayHello('xxxxx')
sayHello(undefined)
sayHello(null)

// 用来约束取值只能是某几个值中的一个。
let num: 1 | 2 = 1
type EventNames = 'click' | 'scroll' | 'mousemove'

// 可辨识联合

// 1.可识别的 要求必须都拥有一个都含有的单例属性
enum CarTransmission {
    Automatic = 200,
    Manual = 300
}

interface Motorcycle {
    vType: 'motorcycle' // discriminant
    make: number // year
}

interface Car {
    vType: 'car' // discriminant
    transmission: CarTransmission.Automatic
}

interface Truck {
    vType: 'truck' // discriminant
    capacity: number // in tons
}

// Motorcycle Car Truck 这三个接口都同时拥有一个单例属性vType

// 2.联合 建一个 Vehicle 联合类型
type Vehicle = Motorcycle | Car | Truck

// 3.类型守卫
// 我们使用 switch 和 case 运算符来实现类型守卫，从而确保在 evaluatePrice 方法中，我们可以安全地访问 vehicle 对象中的所包含的属性
function evaluatePrice(vehicle: Vehicle) {
    switch (vehicle.vType) {
        case 'car':
            return vehicle.transmission * 3.15
        case 'truck':
            return vehicle.capacity * 3.15
        case 'motorcycle':
            return vehicle.make * 3.15
    }
}

const myTruck: Truck = { vType: 'truck', capacity: 9.5 }
evaluatePrice(myTruck)

/**
 * @description: 类型别名: 类型别名用来给一个类型起个新名字。
 */
type Message = string | string[]

let greet = (message: Message): number => {
    return message.length
}
