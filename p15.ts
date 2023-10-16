//object 
var obj:any=[{
    name:"xyz",
    age:18
},{
    name:"abc",
    age:19
},{
    name:"pqr",
    age:18
}]

// console.log(typeof obj.name)
// console.log(typeof obj.age)

for(let arr in obj){
console.log(obj[arr].name)
}

