/**
 * @description: 类型保护是可执行运行时检查的一种表达式，用于确保该类型在一定的范围内。
 * 当我们使用联合类型时，我们必须尽量把当前值的类型收窄为当前值的实际类型，而类型保护就是实现类型收窄的一种手段。
 */
interface An {
    name: string;
    age: number;
}
interface Bn {
    name: string;
    sex: boolean;
}
declare type Person = An | Bn;
declare function implement(person: Person): void;
declare function padLeft(value: string, padding: string | number): string;
interface Padder {
    name: string;
    getPaddingString(): string;
}
declare class SpaceRepeatingPadder implements Padder {
    private numSpaces;
    name: string;
    constructor(numSpaces: number, name: string);
    getPaddingString(): string;
}
declare class StringPadder implements Padder {
    name: string;
    constructor(name: string);
    getPaddingString(): string;
}
declare const padder: Padder;
declare function isNumber(x: any): x is number;
declare function isString(x: any): x is string;
declare function isOfType<T>(varToBeChecked: any, propertyToCheckFor: keyof T): varToBeChecked is T;
