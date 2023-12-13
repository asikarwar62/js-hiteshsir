// const myObj = {
//     name: "anjali",
//     surName: "sikarwar",
//     greeting: function () {
//         console.log(`Hello ${this.name} ${this.surName}` )
//     }
// }

// myObj.greeting();

// function greeting() {
//     const name = "anjali";
//     console.log(`Good Morning ,${name}`);
// }

// greeting();


// const greeting = () => {
//     const name = "anjali";
//     console.log(`Good Morning ${this.name}`);
// }
// greeting();

// arrow function



// const sum = (num1,num2) =>  (num1+num2)
    
// const result = console.log(sum(2,3));


( (name) => {
    console.log(`good morning ${name}`)
})("anjali");
( (name) => {
    console.log("Good Morning"  + name)
})("anjali");