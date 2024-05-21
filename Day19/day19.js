function createClosure() {
  let name = 'Gauthier';

  function innerFunction() {
    console.log(name);
  }

  return innerFunction;
}

const myClosure = createClosure();

myClosure();

function createCounter() {
  let count = 0;

  function increment() {
    count++;
    return count;
  }

  function decrement() {
    count--;
    return count;
  }

  function reset() {
    count = 0;
    return count;
  }

  return {
    increment,
    decrement,
    reset
  };
}

const counter = createCounter();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.increment());

function personAccount() {
  let firstname = 'Gauthier';
  let lastname = 'Seyzeriat';
  let incomes = [];
  let expenses = [];

  function addIncome(description, amount) {
    incomes.push({ description, amount });
  }

  function addExpense(description, amount) {
    expenses.push({ description, amount });
  }

  function totalIncome() {
    return incomes.reduce((total, income) => total + income.amount, 0);
  }

  function totalExpense() {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  }

  function accountInfo() {
    return `Name: ${firstname} ${lastname}\nTotal Income: ${totalIncome()}\nTotal Expense: ${totalExpense()}\nAccount Balance: ${accountBalance()}`;
  }

  function accountBalance() {
    return totalIncome() - totalExpense();
  }
  return {
    addIncome,
    addExpense,
    totalIncome,
    totalExpense,
    accountInfo,
    accountBalance
  };
}

const myAccount = personAccount();

myAccount.addIncome('Salary', 720);
myAccount.addIncome('Freelancing', 15200);
myAccount.addExpense('Rent', 1000);
myAccount.addExpense('Groceries', 300);
myAccount.addExpense('Utilities', 200);

console.log(myAccount.accountInfo());
console.log(`Total Income: ${myAccount.totalIncome()}`);
console.log(`Total Expense: ${myAccount.totalExpense()}`);
console.log(`Account Balance: ${myAccount.accountBalance()}`);
