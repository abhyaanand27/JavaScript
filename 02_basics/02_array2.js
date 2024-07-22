const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]
//PUSH
// marvel.push(dc); // array inside array
// console.log(marvel);
// console.log(marvel[3][1]);

//CONCAT
const allHeros = marvel.concat(dc) // proper merging
console.log(allHeros); 

//SPREAD
const all_heros_new = [...marvel, ...dc] //proper merging 
console.log(all_heros_new);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const usable_anotherArr = anotherArr.flat(Infinity) //convert them in non-nested array
console.log(usable_anotherArr);

console.log(Array.isArray("abhya"))
console.log(Array.from("abhya"))
console.log(Array.from({name:"abhya"})) //empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //returns new array from set of elemennts