// const num1 = 10;
// const num2 = 20;
// const sum = num1 + num2;
// console.log(sum);

// average of numbers
// const input1 = 75.25;
// const input2 = 65.80;
// const input3 = 35.45;
// const input4 = 99.50;
// const average = (input1 + input2 + input3 + input4) / 4;
// console.log(average);
//  reminder of number
// const number = 128;
// const reminder = 128 % 5;
// console.log(reminder);
// const name = "jete jete pothe purnima rute chad utachilo gogone";
// const capName = name.toUpperCase();
// console.log(capName.toLowerCase());

// declearation of an array

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(numbers);
// get element by index
// const arrayIndex = numbers[3];
// console.log(arrayIndex);
// get elements index
// const elementIndex = numbers.indexOf(3);
// console.log(elementIndex);
// set array element by index
// numbers[4] = 35;
// console.log(numbers);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const addLastElement = numbers.push(111);
// console.log(numbers);
// adding element in first index
// const addFirstElement = numbers.unshift(222);
// console.log(numbers);

// const fruits = ['Apple', 'Banana', 'Orange'];
// const banana = fruits.indexOf('Banana');
// console.log(banana);
// fruits[1] = 'Mango';
// console.log(fruits);
// remove orange
// fruits.pop();
// console.log(fruits);
// fruits.push('Watermelon');
// console.log(fruits);

// introduction while loop

// write a program to check student in class
// let student = 0;
// while (student < 10) {
//     console.log('polapan class e ashe nai');
//     student++
// }
// find even numbers from 10
// let number = 0;
// while (number <= 10) {
//     console.log(number);
//     number++;
// }
// for (let number = 0; number <= 10; number++) {
//     console.log(number)
// }
// const arr = [20, 30, 40, 50, 60, 70];
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// break and continue
// for (let i = 0; i < 20; i++){
    
//     if (i >= 5) {
//         console.log(i);
//         continue;
        
//     }
// }
// const arr = [20, 30, 40, 50, 60, 70,40,22,11];
// for (let i = 0; i < arr.length; i++){
//     const elements = arr[i];
//     if (elements > 52) {
//         continue;
//     }
//     console.log(elements);

// }

// understanding loops in reverse way
// let num = 0;
// while (num < 10) {
//     console.log(num);
//     num++;
// }
// reverse way to print this
// let num = 10;
// while (num > 0) {
//     console.log(num);
//     num--;
// }

// const fruits = ["Apple", "Banana", "Orange"];
// console.log(fruits);
// let bananaIndex = fruits.indexOf("Banana");
// console.log(bananaIndex)
// fruits[bananaIndex] = "Mango";
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.push("Watermelon");
// console.log(fruits);

// let num = 412;
// while (num <= 456) {
//     num = (num % 2 !== 0);
//     console.log(num);
//     num++;
// }
// ru a loop from 30 to 86.
// if value higher than 44 close the loop

// let num = 30;
// while (num <= 86) {
//     console.log(num);
//     if (num >= 44) {
//         break
//     }
//     num++;
// }

// const booksPrice = [120, 200, 500, 50, 33, 199, 88, 205, 266];
// for (let i = 0; i < booksPrice.length; i++){
//     let prices = booksPrice[i];
//     if (prices > 200) {
//         continue;
//     }
//     console.log(prices);
// }

// const name = "Ariana Grande is a good girl";
// const including = name.includes("na");
// console.log(including);
// const booksPrice = [120, 200, 500, 50, 33, 199, 88, 205, 266];
// const prices = booksPrice.slice(3, 6);
// console.log(prices);
// const nameInfo = name.substring(2, 5);
// console.log(nameInfo)

// let num = Math.round(Math.random()*9000)+1000;
// console.log(num);
// declear object
// const student = {
//     name: 'shakil',
//     age: 20,
//     roll: 213410002,
//     versity: "Eastern University"
// }
// student.age = 25;
// console.log(student)
const pcBuilding = {
    processor: "intel core i5 11400",
    ram: "pny rgb 16*2gb",
    storage: "256 gb ssd",
    motherboard: "msr pro h510m",
    casing: "dark flash Leo",
}
// const motherboard = pcBuilding.motherboard;
// console.log(motherboard)
// const motherboard = pcBuilding['motherboard'];
// console.log(motherboard)
// const mBoard = 'casing';
// const board = pcBuilding[mBoard];
// pcBuilding[mBoard] = "MSI Pro";
// console.log(pcBuilding);
// console.log(board);

// const ages = {
//     person1: 25,
//     person2: 30,
//     person3: 22,
//     person4: 40,
//     person5: 28,
//     person6: 35
// };
// const keys = Object.keys(ages);
// const values = Object.values(ages);
// for (let i = 0; i < keys.length; i++){
//     const propertyname = keys[i];
//     const propertyValues = ages[propertyname];
//     // console.log(propertyname , propertyValues)
// }
// // method -2: for in
// for (let propName in ages) {
//     // console.log(propName);
//     const propValue = ages[propName];
//     console.log(propName, propValue)
// }

// const ages = {
//     person1: 25,
//     person2: 30,
//     person3: 22,
//     person4: 40,
//     person5: 28,
//     person6: 35
// };
// print the object
// const names = Object.keys(ages);
// console.log(names);
// const age = Object.values(ages);
// console.log(age);
// let person2Info = ages.person2;
// ages.person2 = 444;
// console.log(ages);
// for (let i = 0; i < names.length; i++){
//     console.log(names[i])
// }

// const ages = {
//     person1: 25,
//     person2: 30,
//     person3: 22,
//     person4: 40,
//     person5: 28,
//     person6: 35
// };

// const names = "person4";
// ages[names] = 555;
// console.log(names)
// console.log(ages)
// const singleAge = ages[names];
// console.log(singleAge)

// for (let name in ages) {
//     const propVal = ages[name];
//     console.log(name, ":",propVal)
// }

// inch to feet
// function inchToFeet(inch) {
//     const feet = inch / 12;
//     return feet;
// }

// const output = inchToFeet(120);
// console.log(output)

// function isEven(num) {
//     if (num % 2 == 0) {
//         console.log(num, "is even");
//     } else {
//         console.log(num, "is odd");
//     }
// }
// isEven(256)

// function isOdd(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++){
//         const element = numbers[i];
//         sum = sum + element;
//     }
//     console.log(sum)
// }


// function isOdd(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++){
//         const element = numbers[i];
//         if (element % 2 !== 0) {
//             sum = sum + element;
//             console.log(element)
//        }
//     }
    
//     console.log(sum)
// }

// const myNumbers = [5, 10, 15, 20, 25];
// isOdd(myNumbers);
// const name = "Ariyana Grande.html"
// const checkName = name.includes("Grande")
// check file types
// if (name.startsWith(".html")) {
//     console.log("this is an html file")
// } else {
//     console.log("Not Html FIle")
// }
// if (name.indexOf("yana")!==-1) {
//     console.log("Exist in code");
// } else {
//     console.log("Not Exist In Code")
// }

// const song = ["az ami", "sonno. sara", "ami ek. ","dishe hara"]
// const parts = song.split(' ');
// const char = song.split('');
// const charDot = song.split('.');

// const cutting = song.slice(5, 10);
// const cutting2 = song.substring(5, 10);
// const cutting3 = song.substr(5, 10);
// console.log(cutting);
// console.log(cutting2);
// console.log(cutting3);
// console.log(song)
// console.log(song.join('. '))

// destracturing in js

// let first = 20;
// let second = 30;
// [first, second] = [second, first]

// console.log(first, second)
// const myNumbers = [5, 10,100, 15, 20, 25,2,55];
// let largest = 0;
// for (let i = 0; i < myNumbers.length; i++)
// {
//     let element = myNumbers[i];
//     if (element > largest) {
//         largest = element;
        
//     }
  
// }
// console.log(largest)

// function removeDuplicate(numbers) {
//     const unique = [];
//     for (let number of numbers) {
        
//     }
// }
// const numbers = [5, 10, 100, 15, 20, 10, 5, 25, 2, 55];

// const date1 = new Date('2023-08-26');
// const date2 = new Date('2022-08-26');
// if (date1.getTime() > date2.getTime()) {
//     console.log('date 1 is big');
// } else (
//     console.log('Date 2 is big')
// )


let fruits = ["apple", "banana", "orange", "grape"];
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    occupation: "developer"
  };
console.log(Array.isArray(fruits));
const age = person.age;
console.log(isNaN(age))