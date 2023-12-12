// const newSym = Symbol("123");

// const jsuser = {
//     name: "anjali",
//     "surName": "sikarwar",
//     age: 23,
//     [newSym]: "456",
//     occupation: "software engineering"
// }

// // console.log(jsuser[newSym]);
// // console.log(jsuser.name);
// // console.log(jsuser["surName"]);

// // // Object.freeze(jsuser);
// // jsuser.age = 24;
// // console.log(jsuser.age);

// jsuser.greeting = function () {
//     console.log(`hello world, ${this.name}`);
// }

// console.log(jsuser.greeting());

// const car = new Object();
// car.name = "ford";
// car.model = 23;
// car.price = "2000 rs";

// console.log(car);

// const car1 = {
//     name : {
//         newName : {
//             finallyName : "anjali"
//         }
//     }
// }

// console.log(car1.name.newName.finallyName);

const obj1 = {
    name: "anjali",
    age: 23,
}
const obj2 = {
    name: "anachal",
    age: 34,
}
// obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2);
// const obj3 = {...obj1, ...obj2}
// console.log(obj3)
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));
console.log(Object.hasOwnProperty("name"));
// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// // const obj3 = { obj1, obj2 }
// // const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2}
//  console.log(obj3);

