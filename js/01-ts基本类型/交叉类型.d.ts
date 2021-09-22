interface X {
    a: number;
    b: string;
    c: boolean;
}
interface Y {
    f: number;
}
declare type XY = X & Y;
declare let q: XY;
interface D {
    d: boolean;
}
interface E {
    e: string;
}
interface F {
    f: number;
}
interface A {
    x: D;
}
interface B {
    x: E;
}
interface C {
    x: F;
}
declare type ABC = A & B & C;
declare let abc: ABC;
