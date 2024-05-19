localStorage.setItem('name', 'Seyzeriat');
localStorage.setItem('firstname', 'Gauthier');
localStorage.setItem('age', 27);
localStorage.setItem('country', 'France');
localStorage.setItem('city', 'Colmar');

const student = {
  firstname: 'Gauthier',
  lastname: 'Seyzeriat',
  age: 27,
  skills: ['Javascript', 'Php', 'React'],
  country: 'France',
  enrolled: true
};

const studentJSON = JSON.stringify(student);
console.log(studentJSON);

localStorage.setItem('student', studentJSON);

const personAccount = {
  firstname: 'John',
  lastname: 'Doe',
  incomes: [],
  expenses: [],

  addIncome: function (description, amount) {
    this.incomes.push({ description, amount });
  },

  addExpense: function (description, amount) {
    this.expenses.push({ description, amount });
  },

  totalIncome: function () {
    return this.incomes.reduce((acc, income) => acc + income.amount, 0);
  },

  totalExpense: function () {
    return this.expenses.reduce((acc, expense) => acc + expense.amount, 0);
  },

  accountInfo: function () {
    return `Name: ${this.firstname} ${
      this.lastname
    }\nTotal Income: ${this.totalIncome()}\nTotal Expense: ${this.totalExpense()}\nAccount Balance: ${this.accountBalance()}`;
  },

  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  }
};

personAccount.addIncome('Salary', 3000);
personAccount.addIncome('Freelancing', 1200);
personAccount.addExpense('Rent', 1000);
personAccount.addExpense('Groceries', 300);
personAccount.addExpense('Utilities', 200);

console.log('Total Income:', personAccount.totalIncome());
console.log('Total Expense:', personAccount.totalExpense());
console.log('Account Balance:', personAccount.accountBalance());
console.log('Account Info:\n', personAccount.accountInfo());

const personAccountJSON = JSON.stringify(personAccount);
localStorage.setItem('personAccount', personAccountJSON);

const storedPersonAccountJSON = localStorage.getItem('personAccount');
const storedPersonAccount = JSON.parse(storedPersonAccountJSON);

console.log(storedPersonAccount);
