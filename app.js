//Define an empty array
const foods = [];  
console.log('Exercise 1 result:', foods);

//Add strings to the array
foods.push('pizza', 'cheeseburger')
console.log('Exercise 2 result:', foods);

//Insert at the beginning
foods.unshift('taco')
console.log('Exercise 3 result:', foods);

//Access an array element
const favFood = foods[1];
console.log('Exercise 4 result:', favFood);

//Insert an element between two others via splice()
foods.splice(2, 0, 'tofu');
console.log('Exercise 5 result:', foods);

// Replacing elements
foods.splice(1, 1, 'sushi', 'cupcake')
console.log('Exercise 6 result:', foods);

//Using the slice() method
const yummy = foods.slice(1, 3);
console.log('Exercise 7 result:', yummy);

//Finding an index
const soyIdx = foods.indexOf('tofu');
console.log('Exercise 8 result:', soyIdx);

//Joining elements
const allFoods = foods.join(' -> ');
console.log('Exercise 9 result:', allFoods);

//check for an element
const hasSoup = foods.includes('soup');
console.log('Exercise 10 result:', hasSoup);



// Exercise 11: Odd numbers from an array

// 1) Choose a method to iterate through the `nums` array.

// 2) Push each odd number to a new array named `odds`.

// Hint: Initialize the `odds` variable to an empty array before the iteration.

// Complete Exercise 11 in the space below:
// */

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = []
// nums.forEach(num => {
//     if (num % 2 !== 0){
// odds.push(num)
//     }
// })
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    if(nums[i] %2 !== 0){
    odds.push(nums[i])
    }
}
console.log('Exercise 11 result:', odds);

/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/
const fizz = []
const buzz = []
const fizzbuzz = []
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    if(nums[i] %3 === 0){
    fizz.push(nums[i])
    } if (nums[i] %5 === 0){
    buzz.push(nums[i])
    } if (nums[i] %3 === 0 && nums[i]%5 ===0){
    fizzbuzz.push(nums[i])
    }
}
console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

//Accessing within nested arrays
const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];
const numList = numArrays [3]
console.log('Exercise 13 result:', numList);

//Retrieve the last array
const num = numArrays [2] [1]
console.log('Exercise 14 result:', num);

//Nested array sum
console.log(numArrays)
let total = 0
numArrays.forEach(num => {
    console.log(num)
num.forEach(banana => {
    console.log(banana)
    total+=banana
})
})

console.log('Exercise 15 result:\n', total);

