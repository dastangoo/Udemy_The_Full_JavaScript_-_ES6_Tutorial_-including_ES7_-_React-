const budget = () => {
  let balance = 0;
  let changeBal = (val) => {
    balance += val;
  }
  const deposit20 = () => changeBal(20);
  const withdraw20 = () => changeBal(-20);
  const check = () => balance;
  
  // return {
  //   deposit20: deposit20,
  //   withdraw20: withdraw20,
  //   check: check
  // };
  return { deposit20, withdraw20, check };
};

let wallet = budget();
console.log(wallet);
console.log(wallet.check());
wallet.deposit20();
console.log(wallet.check());
console.log(wallet.balance);
wallet.withdraw20();
console.log(wallet.check());

