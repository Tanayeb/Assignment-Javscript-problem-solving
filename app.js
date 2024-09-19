// 1. Problem: "Alien Language Translator" 

// Input: "olleH dlroW"
// Output: "Hello World"

let value = "olleH dlroW";
function js_language(value) {
     alienlanguage = value.split(' ');
     transletedsentence = alienlanguage.map(alienlanguage => alienlanguage.split('').reverse().join(''));
     return transletedsentence.join(' ');
     
}

console.log(js_language(value));

//2. Problem: "The Treasure Hunter’s Lost Numbers" 
// Input: [10, null, 20, null, 30]
// Output: [10, 15, 20, 25, 30]

function LostNumbers(arr) {
     for (let i = 1; i < arr.length; i += 2) {
         if (arr[i] === null) {
            
             arr[i] = (arr[i - 1] + arr[i + 1]) / 2;
         }
     }
     return arr;
 }
 
console.log(LostNumbers([10, null, 20, null, 30]));
 
// 3. Problem: "Pirate’s Parrot’s Shopping List" (Arrays & Loops)
// Input: ["rum", "gold", "parrot food", "rum", "gold", "map"]
// Output: ["rum", "gold", "parrot food", "map"]

let parrot = ["rum", "gold", "parrot food", "rum", "gold", "map"];

let removeDuplicate = parrot.filter((item, index) => {
     return parrot.indexOf(item) === index;
   });

console.log(removeDuplicate)

// 4. Problem: "Knight's Stairs to the Dragon" (Numbers & Loops)
// Input: 4
// Output: 7

function Stairs(num) {

     num += 3;
     return num
}

console.log(Stairs(4))

// 5. Problem: "Chef's Salad Mix-Up" (Strings, Arrays & Loops)
// Input: "tomatoesOnionsLettuce"
// Output: ["tomatoes", "onions", "lettuce"]

let salad = "TomatoesOnionsLettuce";

function Chefslad(salad) {
     r = salad.match(/[A-Z][a-z]+/g);

     // console.log(r)
     return r
}

console.log(Chefslad(salad))

// 6. Problem: "The King's Gold Distribution" (Numbers & Loops)
// Input: 5
// Output: 15


let n = 5;
function totalCoins(n) {
     
     return n * (n + 1) / 2;
 }
 

console.log(totalCoins(n));

// 7. Problem: "Dragon’s Age Puzzle" (Numbers & Conditions)
// Input: 49
// Output: 49
// Input: 50
// Output: "Try again!"

function dragonAge(number) {

     let sqrt = Math.sqrt(number);
 
     
     if (Number.isInteger(sqrt)) {
         return number;
     } else {
         return "Try again!";
     }
 }
 

console.log(dragonAge(49));  
console.log(dragonAge(50));  


// 8. Problem: "Magical Phrase Reverser" (Strings & Loops)
// Input: "The dragon breathes fire"
// Output: "fire breathes dragon The"
function reverseWords(phrase) {

     let words = phrase.split(' ');
 

     let reversedPhrase = words.reverse().join(' ');
 
     return reversedPhrase;
 }
 

console.log(reverseWords("The dragon breathes fire"));  

// 9. Problem: "Adventurer’s Inventory Merge" (Arrays & Loops)
// Input: ["sword", "shield", "potion"], ["potion", "ring", "shield"]
// Output: ["sword", "shield", "potion", "ring"]

let inventory1 = ["sword", "shield", "potion"];
let inventory2 = ["potion", "ring", "shield"];

function mergeInventories(inventory1, inventory2) {

     let combinedInventory = [...inventory1, ...inventory2];
 

     let uniqueInventory = [...new Set(combinedInventory)];
 
     return uniqueInventory;
 }
 

console.log(mergeInventories(inventory1, inventory2));  

// 10. Problem: "The Lost Map Fragments" (Arrays & Sorting)
// Input: [9, 3, 5, 7, 1]
// Output: [1, 3, 5, 7, 9]

let fragments = [9, 3, 5, 7, 1]
function sortMapFragments(fragments) {

     return fragments.sort((a, b) => a - b);
 }
 

 console.log(sortMapFragments(fragments));  

 
"-------------------------------------------THE END-------------------------------------------"