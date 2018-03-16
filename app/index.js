let call = () => {
  let secret = 'ES6 rocks!';
  let reveal = () => {
    console.log(secret);    
  };
  // reveal();
  return reveal;
};

// console.log(secret);
// call();
let unveil = call();
unveil();