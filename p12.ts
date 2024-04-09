// optional parameter

function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

//42
console.log(multiply(2, 3));
console.log(multiply(2, 3));
//6