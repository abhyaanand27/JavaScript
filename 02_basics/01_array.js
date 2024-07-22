// first method
const myArr = [0, 1, 2, 3, 4, 5]

// resizable
// can be mix of diff datatype
// not associative - cannot be accessed using arbitrary strings as indexed
// array-copy operation create shallow copies

// shallow copy - properties share the same reference point (change in both array)
// deep copy - doesnot share same reference

// second method
// const myArr2 = new Array(1, 2, 3, 4) 
// console.log(myArr2[2]);


/************** ARRAY METHODS ****************/

// myArr.push(6)
// myArr.push(7)
// console.log(myArr);

// myArr.pop();
// console.log(myArr);

// myArr.unshift(9) // add 9 to start
// console.log(myArr);
// myArr.shift()    // remove ele from start
// console.log(myArr);

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9)) // return index if doesnot exist return -1
// console.log(myArr.indexOf(4)) 

//Adds all the elements of an array into a string, separated by the specified separator string.
// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr); // becomes a string


/******** slice, splice *********/

// console.log("A", myArr);

/*
Returns a copy of a section of an array. 
For both start and end, a negative index can be used to indicate an offset from the end of the array. 
For example, -2 refers to the second to last element of the array.
*/
// const newArr1 = myArr.slice(1, 3)
// console.log(newArr1);
// console.log("B", myArr);

// const newArr2 = myArr.splice(1, 3)
// console.log(newArr2);
// console.log("C", myArr);

//manipulates the original array removes element 1 to 3 (3 included) from the array



