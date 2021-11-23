
// #### Episode 1

// ```js
// The scope of const scenario object is global
// so it is visible to the const declareMurderer, which accesses the
// value of the murderer key. This funtion is then called and stored
// in the const verdict. When we console.log the verdict we should see is 'Miss Scarlet'

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };

// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);
// // ```

// #### Episode 2
// Declare a global murderer 
// const murderer = 'Professor Plum';
// // Declare changeMurderer and assign a function to it that :
// const changeMurderer = function() {
// // Attempt to re-declare murderer
//   murderer = 'Mrs. Peacock';
// }
// // Declare declareMurderer that has assigned a function that:
// const declareMurderer = function() {
//  // Return interpolated string that could access the global murderer 
//     return `The murderer is ${murderer}.`;
// }
// // Call to changeMurderer attempts to re-declare murderer but this is not allowed
// // on the const variables
// changeMurderer();
// const verdict = declareMurderer();
// // Console.log should throw an error: TypeError: Assignment to constant variable
// console.log(verdict);


// #### Episode 3
// Declare global murderer
// let murderer = 'Professor Plum';
// // Declare const declareMurderer with assigned function that will:
// const declareMurderer = function() {
//     // declare block level scope murderer
//   let murderer = 'Mrs. Peacock';
//   // and return that block level scope murderer
//   return `The murderer is ${murderer}.`;
// }
// // call declareMurderer and assign it to firstVerdict
// const firstVerdict = declareMurderer();
// // This console.log should return a murderer that was in block level scope
// // so the verdict should be Mrs Peacock
// console.log('First Verdict: ', firstVerdict);
// // Declare secondVerdict and assign to it a string that will access the global murderer
// const secondVerdict = `The murderer is ${murderer}.`;
// // This console.log should return Professor Plum
// console.log('Second Verdict: ', secondVerdict);
// ```

// 
// Declare the three suspects
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
// // Declare declareAllSuspects with function assigned to it that will:
// const declareAllSuspects = function() {
//   // Re-assign a new  value to suspectThree but with block level scope only
//   let suspectThree = 'Colonel Mustard';
//   // suspectThree will have a new value
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
// // Call the declareAllSuspects and store it in const suspects
// const suspects = declareAllSuspects();
// // This console.log should print Miss Scarlet, Proffesor Plum and Colonel Mustard
// console.log(suspects);
// // But below the murderer is Mrs. Peacock since block level scope suspectThree is not visible outside
// // declareAllSuspects
// console.log(`Suspect three is ${suspectThree}.`);
// ```

// #### Episode 5

// ```js


// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);
// ```This will be Revolver because Object keys are not protected`

// #### Episode 6

// ```js
// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// ```This will be Mrs White since there is a call to changeMurderer and let murderer can be updated

// #### Episode 7

// ```js
// let murderer = 'Professor Plum';
// // Change to Mr. Green ok
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
// // Changes are not visible so no errors 
//   const plotTwist = function() { 
//     let murderer = 'Colonel Mustard';
// // Update not visible
//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
// // Change to Mr Green
// changeMurderer();
// const verdict = declareMurderer();
// // Mr Green
// console.log(verdict);
// ```

// #### Episode 8

// ```js
// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };
// // That's fine since contents of objects are not protected
// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';
// // Change to Colonel Mustard fine
//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }
// // Change to Candle Stick ok
//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }

//     unexpectedOutcome('Colonel Mustard');
//   }

//   plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// // Candle Stick
// console.log(verdict);
// ```

// #### Episode 9

// ```js
// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//   // Change only visible within the block level scope
//   let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);
// ```
// Professor Plum
// ### Extensions

// Make up your own episode!
