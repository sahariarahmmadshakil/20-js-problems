
// sum of 10 numbers by arrow function
// const sumOfNumbers = (num) => {
//     let sum = 0;
//     for (let i = 0; i <= num; i++) {
//         sum = sum + i;
//     }
//    return(sum);
// }
// console.log(sumOfNumbers(10));
// spread operator
// const numbers = [20, 30, 22, 60, 120, 55, 600, 1, 2];
// const num2 = [...numbers];
// num2.push(999)
// console.log(numbers)
// console.log(num2)

// let person = {
//     name: "John",
//     age: 30,
//     street: "123 Main St",
//     city: "Anytown",
//     country: "USA"
// };


// const { name:kodu, age, street } = person;
// console.log(kodu)
// console.log(age)
// console.log(street);

// const numbers = [20, 30, 22, 60, 120, 55, 600, 1, 2];
// const [a, b] = numbers;
// console.log(a);

// const double = (a, b) => [a * 2, b * 2];
// console.log(double(10, 20));

// const multiply = (a, b, c) => a * b * c;
// console.log(multiply(10, 20, 30));

// console.log(`I am a web developer
// I love to code
// I love to eat briyani`)
// const deafultParam = (a, b = 20) => a + b;
// console.log(deafultParam(10));
// const getFriends = (friends) => {
//     const newArr = [];
//     for (let friend of friends) {
//         // console.log(friend);
//         if (friend.length % 2 == 0) {
//             newArr.push(friend);
//             console.log(newArr)
//        }
//    }
// }

// getFriends(["John", "Sarah", "Michael", "Emily", "Davi"]);

// const getSquare = (arr) => {
//     let sum = 0;
//     for (let element of arr) {
//         element = element * element;
//         sum = sum + element;
//         const average = sum / (arr.length);
//         console.log(average)
//     }
// }
// getSquare([2,3])

// const getArr = (arr1, arr2) => {
//     let newArr = [...arr1, ...arr2];
//     const max = Math.max(...newArr);
//     console.log(max);

// }
// getArr([2, 4, 6, 8, 10],[1, 3, 5, 7, 9])
// optional chaining
// let people = [
//     {
//       firstName: "John",
//       lastName: "Doe",
//       age: 30
//     },
//     {
//       firstName: "Jane",
//       lastName: "Smith",
//       age: 25
//     },
//     {
//       firstName: "Michael",
//       lastName: "Johnson",
//       age: 40
//     }
// ];

// console.log(people[2].age)

// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     address: {
//       street: "123 Main St",
//       city: "Anytown",
//       country: "USA"
//     },
//     hobbies: ["reading", "hiking", "photography"],
//     education: [
//       {
//         degree: "Bachelor's",
//         field: "Computer Science",
//         university: "University A"
//       },
//       {
//         degree: "Master's",
//         field: "Business Administration",
//         university: "University B"
//       }
//     ],
//     isStudent: false,
//     hasJob: true,
//     sayHello: function() {
//       console.log("Hello, I'm " + this.firstName);
//     }
//   };
// const university = person.education[3]?.field;
// console.log(university)



// const numbers = [ 42, 19, 73, 58, 91, 66, 29, 84, 37, 10];
// const doubled = [];
// for (const num of numbers) {
//     const double = num * 2;
//     doubled.push(double);
// }
// console.log(doubled)


// function doubleit(num) {
//     return num;
// }
// const result = numbers.map(doubleit);
// // console.log(result)

// const double2 = (n) => n;
// const result2 = numbers.map(double2);
// console.log(result2)
// const result3 = numbers.map((n) => n);
// console.log(result3)

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const getEven = numbers.filter((n) => n%2===0);
// console.log(getEven)
// const fruits = ["apple", "banana", "orange"];
// const length = fruits.map((fr) => fr[0]);
// console.log(length)


// Problem: Find The Even Numbers From An Array
// const numbers = [42, 19, 73, 58, 91, 66, 29, 84, 37, 10];
// let even = [];
// for (let i = 0; i < numbers.length; i++){
//     let number = numbers[i];
//     if (number % 2 == 0) {
//         even.push(number);
//     }
// }
// console.log(even);
// Problem: Find The Even Numbers From An Array 
// const numbers = [42, 19, 73, 58, 91, 66, 29, 84, 37, 10];
// const even = numbers.filter((n) => n % 2 == 0);
// console.log(even);
const numbers = [42, 19, 73, 58, 91, 66, 29, 84, 37, 10];
// const result = numbers.forEach((n) => n);
// const result = numbers.find((n) => n>40);
// console.log(result)