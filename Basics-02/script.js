var pens;
pens = ["red", "blue", "green", "orange"];

console.log("Before: ", pens);

// PROPERTIES:
// Get a property of an object by name:
console.log("Array length: ", pens.length);

// METHODS:
// Reverse the array:
var penreversed = pens.reverse();
console.log("Pen array reversed: ", penreversed);

// Remove the first value of the array:
pens.shift();
console.log("Removed first value of array: ", pens);

// Add comma-separated list of values to the front of the array:
pens.unshift("purple", "black");
console.log("Added purple and black in front", pens);

// Remove the last value of the array:
pens.pop();
console.log("removed last element", pens)

// Add comma-separated list of values to the end of the array:
pens.push("pink", "prussian blue");
console.log("Append to last", pens)

// Find the specified position (pos) and remove n number of items from the array. Arguments: pens.splice(pos,n):
var pos = 2
var n = 2
pens.splice(pos, n) // Starts at the seccond item and removes two items.
console.log(pens)
// console.log("After: ", pens);

// Create a copy of an array. Typically assigned to a new variable:
var newPens = pens.slice();
console.log("New pens: ", newPens);

// Return the first element that matches the search parameter after the specified index position. Defaults to index position 0. Arguments: pens.indexOf(search, index):
var index = 1
var search = "pink"
var result = pens.indexOf(search, index);
console.log("The search result index is: ", result);

// Return the items in an array as a comma separated string. The separator argument can be used to change the comma to something else. Arguments: pens.join(separator):
// var arrayString = pens.join(separator);
var arrayString = pens.join('|');
console.log("String from array: ", arrayString);

// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
