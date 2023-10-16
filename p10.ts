//type casting

var num:unknown = 7;

console.log(typeof (num as number));
//number

// console.log(typeof (num as string));
//number

console.log(typeof (<number>num));
//number

