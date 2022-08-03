// Practice with arrays

var cars = ["Toyota", "Ford", "Honda", "Kia"];
var years = [1991, 1992, 1993, 1994];
var bools = [true, false, false, true];

// First, this will show the original array. Next, it will remove the last entry
// to that array and return it. Then, it will show the modified array.

console.log(`
  Calling the pop() method on the bools array.`)

console.log(bools)
console.log(bools.pop())
console.log(bools)

// This will show an array, add new items to the end of the array, store and
// display the number of items in the new array, and lastly display the new
// array.

console.log(`
  Calling the push() method on the years array.`)

console.log(years)
console.log(years.push(1995, 1996))
console.log(years)

// This will show an array, then show the position (starting from zero) of the
// listed item within that array.

console.log(`
  Calling the indexOf() method on the cars array.`)

console.log(cars)
console.log(cars.indexOf("Honda"))

// Index positions begin at 0 in array and increase by 1 for each new entry. The
// value of each element in the "indexPositions" array defined below corresponds
// with my expected index position for that value. I then call the indexOf()
// method to confirm whether or not I am correct.

var indexPositions = [0, 1, 2, 3, 4, 5];

console.log(`For value 0, index position is ${indexPositions.indexOf(0)}.
For value 3, index position is ${indexPositions.indexOf(3)}.
For value 5, index position is ${indexPositions.indexOf(5)}`)
