//function overloading

function printFun(num:number,num1:number):number;
function printFun(num:string,num1:string):string;

function printFun(num:any,num1:any):any{
    return num+num1;
}

console.log(printFun(1,2))
console.log(printFun("xyz","abc"))

// 3
// xyzabc