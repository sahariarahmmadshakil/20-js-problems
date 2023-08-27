
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

const getArr = (arr1, arr2) => {
    let newArr = [...arr1, ...arr2];
    const max = Math.max(...newArr);
    console.log(max);

}
getArr([2, 4, 6, 8, 10],[1, 3, 5, 7, 9])