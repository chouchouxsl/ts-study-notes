namespace A {
    // 基础

    enum Direction {
        NORTH,
        SOUTH,
        EAST,
        WEST
    }

    let dir: Direction = Direction.NORTH
}

namespace B {
    // 初始值

    enum Direction {
        NORTH = 3,
        SOUTH,
        EAST = 4,
        WEST
    }

    let dir: Direction = Direction.EAST
}

namespace C {
    // 字符串枚举

    enum Direction {
        NORTH,
        SOUTH,
        EAST = 'xxx',
        WEST = 'www'
    }

    let dir: Direction = Direction.EAST
}

namespace D {
    // 常量枚举 不会生成js代码 内嵌

    const enum Direction {
        NORTH,
        SOUTH,
        EAST,
        WEST
    }

    let dir: Direction = Direction.EAST

    // var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
}

namespace E {
    // 异构枚举 // 最后要用数字 用字符串 必须吧后面的枚举都设置成字符串

    const enum Direction {
        NORTH,
        SOUTH = 'SOUTH',
        EAST = 2,
        WEST
    }

    let dir: Direction = Direction.EAST
}

namespace F {
    //  枚举是在运行时真正存在的对象。 可以作为参数使用

    const enum Direction {
        NORTH,
        SOUTH = 'SOUTH',
        EAST = 2,
        WEST
    }

    let dir: Direction = Direction.EAST

    function Dr(x: Direction.SOUTH) {
        return x + '2132'
    }

    Dr(Direction.SOUTH)
}

namespace G {
    //  反向映射
    /* 
        生成的代码中，枚举类型被编译成一个对象，
        它包含了正向映射（ name -> value）和反向映射（ value -> name）。 
        引用枚举成员总会生成为对属性访问并且永远也不会内联代码。
     */

    enum Direction {
        NORTH = 'xxx'
    }

    enum Direction2 {
        NORTH
    }

    let dir1: Direction = Direction.NORTH
    let dir2: Direction2 = Direction2.NORTH

    /* 注意点  不会为字符串枚举成员生成反向映射。*/
    // let dir3: string = Direction[dir1]
    let dir4: string = Direction2[dir2]
}
