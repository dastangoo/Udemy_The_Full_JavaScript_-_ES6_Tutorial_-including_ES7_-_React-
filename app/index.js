// const addSuffix = (x) => {
//   const concat = (y) => {
//     return y + x;
//   }
//   return concat;
// };
// 
// let add_ness = addSuffix("ness");
// console.log(add_ness);
// let h = add_ness("happi");
// console.log(h);
// 
// let add_ful = addSuffix("ful");
// console.log(add_ful);
// let f = add_ful("fruit");
// console.log(f);
// 

// const product = (x) => {
//   return y => {
//     return y * x;
//   };
// };

const product = x => y => y * x;

console.log(product);
let mult5 = product(5);
console.log(mult5(3));

let double = product(2);
console.log(double(3));