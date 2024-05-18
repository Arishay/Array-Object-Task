"use strict";
//Question 1
let fruits = ["apple", "banana", "mango", "orange"];
console.log("\nFruits Array", fruits);
//Question 2
let numbers = [10, 20, 30, 40];
console.log("numbers Array", numbers);
//question 3
fruits[2] = "thirdFruit";
console.log("Renamed 3rd element", fruits);
//question 4
numbers[1] = 25;
console.log("changed 2nd No.", numbers);
//question 5
fruits.push("grape");
console.log("added a fruit in end", fruits);
//question 6
let lastFruit = fruits.pop();
console.log("removed last item", fruits);
//question7
let firstFruit = fruits.shift();
console.log("removed first item", fruits);
//question 8
fruits.unshift("Kiwi");
console.log("Added fruit in front", fruits);
//question 9
fruits.splice(1, 2);
console.log("Removed 2 items of index 1&2:", fruits);
//question 10
fruits.splice(2, 0, "pineapple", "pear");
console.log("added fruits at index2", fruits);
//question 11
let citrusFruits = fruits.splice(0, 2);
console.log("new Array", citrusFruits);
//question 12
let lastTwoFruits = fruits.splice(-2);
console.log("another array:", lastTwoFruits);
