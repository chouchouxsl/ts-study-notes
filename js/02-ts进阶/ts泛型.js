"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
泛型的基本使用
*/
function sumArr(x, y) {
    return [x, y];
}
sumArr(1, 2);
sumArr(1, '2');
sumArr('2', '2');
sumArr('2', false);
function sumObj(x, y) {
    return {
        X: x,
        Y: y
    };
}
console.log(sumObj('11', 55));
var Geeger = /** @class */ (function () {
    function Geeger(value) {
        this.value = value;
    }
    Geeger.prototype.run = function (name) {
        return this.value;
    };
    return Geeger;
}());
var geeger = new Geeger('hahah');
geeger.run(12);
function len(msg) {
    return msg.length;
}
len('xxxx');
// len(123)
// 检查对象上的key是否存在
function getProperty(obj, key) {
    return obj[key];
}
getProperty({
    name: '12',
    age: 123
}, 'age');
// ____________________________________
var Difficulty;
(function (Difficulty) {
    Difficulty[Difficulty["Easy"] = 0] = "Easy";
    Difficulty[Difficulty["Intermediate"] = 1] = "Intermediate";
    Difficulty[Difficulty["Hard"] = 2] = "Hard";
})(Difficulty || (Difficulty = {}));
var getObj = {
    name: 'hahah',
    difficulty: Difficulty.Easy,
    get: function () { },
    set: function () { }
};
function get(obj, key) {
    return obj[key];
}
get(getObj, 'get');
var difficulty = get(getObj, 'difficulty');
var strA = { name: 'Semlinker' };
var numB = { name: 123 };
function hhh() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, 'hhh'];
        });
    });
}
function xxx() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, {
                    name: 'xxx'
                }];
        });
    });
}
var obj1 = {
    name: '',
    age: 1
};
var obj2 = { name: 'str' };
// 2.Record Record<K extends keyof any, T> 的作用是将 K 中所有的属性的值转化为 T 类型。
/**
 * node_modules/typescript/lib/lib.es5.d.ts
 * Construct a type with a set of properties K of type T
 */
// type Record<K extends keyof any, T> = {
//     [P in K]: T;
// };
