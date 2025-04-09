function createBankAccount(initialBalance) {
    let balance = initialBalance;
  
    return {
      deposit(amount) {
        balance += amount;
        return balance;
      },
  
      withdraw(amount) {
        balance -= amount;
        return balance;
      },
  
      getbalance() {
        return `Balance is ${balance}`;
      },
    };
  }
  
  const account = createBankAccount(100);
  console.log(account.deposit(50));
  console.log(account.withdraw(30));
  console.log(account.getbalance());
  