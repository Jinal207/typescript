// optional parameter

function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

console.log(multiply(2, 3, 7));
//42
console.log(multiply(2, 3));
//6