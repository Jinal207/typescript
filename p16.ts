//array destructuring

// var arr=[1,2,3,4,5]

// var[first,,second]=arr;

// console.log(first);
// console.log(second);

//object destructuring

const newPer = [
    {
        name: "xyz",
        age: 12,
    },
    {
        name: "abc",
        age: 23,
    },
];

const [{ newname }] = newPer;

console.log(newname); // "xyz"