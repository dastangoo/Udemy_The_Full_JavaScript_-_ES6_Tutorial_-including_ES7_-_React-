let p = new Promise((resolve, reject) => {
  // resolve('Resolved promise data');
  // reject('Rejected promise data');
  setTimeout(() => resolve('Resolved promise data'), 3000);
});
// console.log('after promise consumption');
p.then(response => console.log(response))
  .catch(error => console.log(error));
console.log('after promise consumption');
