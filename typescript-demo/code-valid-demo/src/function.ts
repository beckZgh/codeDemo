
function sum(x: number, y: number): number {
    return x + y;
}


let mySum = function (x: number, y: number): number {
    return x + y;
}


let mySum1: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
}

/**
 * x: string,  必需参数
 * y?: string, 可选参数
 * z: string = 'abc' 默认参数-会被转换为可选参数
 * ...reset: any[] 剩余参数
 */

function push(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item);
    })
}

let a = [];
push(a, 1, 2, 3)

/**
 * 函数重载
 */
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

