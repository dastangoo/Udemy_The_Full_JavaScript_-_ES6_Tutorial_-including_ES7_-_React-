// let values = [20, 30, 40];
// var values = [20, 30, 40];

// let double = (n) => {
//   return n * 2;
// };

// let double = n => n * 2;
// 
// let doubled = values.map(double);
// let doubled = values.map((n) => {
//   return n * 2;
// });
// let doubled = values.map((n) => n * 2);
// var doubled = values.map(function(n) {
//   return n * 2;
// })
// console.log(doubled);

let points = [7, 16, 21, 4, 3, 22, 5];
// var points = [7, 16, 21, 4, 3, 22, 5];
// let highScores = points.filter((n) => {
//   return n > 15;
// });
let highScores = points.filter((n) => n > 15);
// var highScores = points.filter(function(n) {
//   return n > 15;
// });
console.log(highScores);

