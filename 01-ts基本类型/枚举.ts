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
}

namespace D {
    // 异构枚举 // 最后要用数字 用字符串 必须吧后面的枚举都设置成字符串

    const enum Direction {
        NORTH,
        SOUTH = 'SOUTH',
        EAST = 2,
        WEST
    }

    let dir: Direction = Direction.EAST
}
