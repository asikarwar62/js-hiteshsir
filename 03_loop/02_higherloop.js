// let num = [1,2,3,4,5];

// for (const i of num) {
//     console.log(i);
// }

// let name = "anjali";
// for (const i of name) {
//     console.log(i);
// }

// const map = new Map();
// map.set("a","apple");
// map.set("b","ball");
// map.set("c","anjali")

// for (const i of map) {
//     console.log(i);
// }    

// let name = {firstName: "Anjali", secondName: "Sikarwar"};
// for (const key in map) {
//     console.log(key);
// }

// let array = [1,2,3,3,4];

// const myObj = [
//     {
//         language: "java",
//         price: 2000
//     },
//     {
//         language: "javascript",
//         price: 5000
//     }

// ]

// myObj.forEach((num)=>console.log(num.language));

// array.forEach((val,index,arr)=>{
//     //    console.log(val,index,arr);
// })


// function printMe(val) {
//     // console.log("Good Morning",val);
//     // return val;
// }
// // array.forEach(printMe);

// const num = [1,2,3,4];
// const result = num.filter((val)=> val>2);
// console.log(result);

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//   const result = books.filter((bk)=> bk.genre =="History" || bk.publish==1981);
//   console.log(result);

// let num = [1,2,3,4];
// const result = num
// .map((val)=> val+10)
// .map((val)=> val+1);
// console.log(result);

let num = [1,2,3,4];
const sum = num.reduce(((acc,val)=> acc+val ),0);
console.log(sum);

let shoppingCart = [200,300,400];

const total = shoppingCart.reduce(((acc,val)=> acc+val),0);
console.log(total);