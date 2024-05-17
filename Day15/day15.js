class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  sayHello() {
    return 'hello';
  }

  describe() {
    return `This is a ${this.age} year old ${this.color} animal named ${this.name} with ${this.legs} legs.`;
  }
}

const Kaida = new Animal('Kaida', 3, 'brown', 4);
console.log(Kaida.describe());

class Dog extends Animal {
  constructor(name, age, color, legs, breed) {
    super(name, age, color, legs);
    this.breed = breed;
  }

  bark() {
    return 'Woof! Woof!';
  }

  describe() {
    return `This is a ${this.age} year old ${this.color} ${this.breed} dog named ${this.name} with ${this.legs} legs.`;
  }

  sayHello() {
    return 'Woof! Woof! Hello from the dog world!';
  }
}

class Cat extends Animal {
  constructor(name, age, color, legs, isIndoor) {
    super(name, age, color, legs);
    this.isIndoor = isIndoor;
  }

  meow() {
    return 'Meow! Meow!';
  }

  describe() {
    let indoorStatus = this.isIndoor ? 'an indoor' : 'an outdoor';
    return `This is a ${this.age} year old ${this.color} cat named ${this.name} with ${this.legs} legs. It is ${indoorStatus} cat.`;
  }
}

const myDog = new Dog('Buddy', 3, 'golden', 4, 'Golden Retriever');
console.log(myDog.bark());
console.log(myDog.sayHello());
console.log(myDog.describe());

const myCat = new Cat('Whiskers', 2, 'black', 4, true);
console.log(myCat.meow());
console.log(myCat.describe());

class Statistics {
  constructor(data) {
    this.data = data;
  }

  count() {
    return this.data.length;
  }

  sum() {
    return this.data.reduce((acc, value) => acc + value, 0);
  }

  min() {
    return Math.min(...this.data);
  }

  max() {
    return Math.max(...this.data);
  }

  range() {
    return this.max() - this.min();
  }

  mean() {
    return this.sum() / this.count();
  }

  median() {
    const sorted = [...this.data].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
      return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
      return sorted[mid];
    }
  }

  mode() {
    const frequency = {};
    this.data.forEach(value => {
      frequency[value] = (frequency[value] || 0) + 1;
    });

    let mode = null;
    let maxCount = 0;

    for (const [key, value] of Object.entries(frequency)) {
      if (value > maxCount) {
        maxCount = value;
        mode = Number(key);
      }
    }

    return { mode, count: maxCount };
  }

  var() {
    const mean = this.mean();
    const variance =
      this.data.reduce((acc, value) => acc + Math.pow(value - mean, 2), 0) /
      this.count();
    return variance;
  }

  std() {
    return Math.sqrt(this.var());
  }

  freqDist() {
    const frequency = {};
    this.data.forEach(value => {
      frequency[value] = (frequency[value] || 0) + 1;
    });

    const freqDist = Object.entries(frequency).map(([value, count]) => {
      const percentage = (count / this.count()) * 100;
      return [percentage, Number(value)];
    });

    return freqDist.sort((a, b) => b[0] - a[0]);
  }

  describe() {
    return `
  Count: ${this.count()}
  Sum: ${this.sum()}
  Min: ${this.min()}
  Max: ${this.max()}
  Range: ${this.range()}
  Mean: ${this.mean()}
  Median: ${this.median()}
  Mode: ${JSON.stringify(this.mode())}
  Variance: ${this.var()}
  Standard Deviation: ${this.std()}
  Frequency Distribution: ${JSON.stringify(this.freqDist())}
  `;
  }
}

const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26
];
const statistics = new Statistics(ages);

console.log('Count:', statistics.count());
console.log('Sum: ', statistics.sum());
console.log('Min: ', statistics.min());
console.log('Max: ', statistics.max());
console.log('Range: ', statistics.range());
console.log('Mean: ', statistics.mean());
console.log('Median: ', statistics.median());
console.log('Mode: ', statistics.mode());
console.log('Variance: ', statistics.var());
console.log('Standard Deviation: ', statistics.std());
console.log('Frequency Distribution: ', statistics.freqDist());
console.log(statistics.describe());

class PersonAccount {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.incomes = [];
    this.expenses = [];
  }

  addIncome(description, amount) {
    this.incomes.push({ description, amount });
  }

  addExpense(description, amount) {
    this.expenses.push({ description, amount });
  }

  totalIncome() {
    return this.incomes.reduce((acc, income) => acc + income.amount, 0);
  }

  totalExpense() {
    return this.expenses.reduce((acc, expense) => acc + expense.amount, 0);
  }

  accountInfo() {
    return `Name: ${this.firstname} ${
      this.lastname
    }\nTotal Income: ${this.totalIncome()}\nTotal Expense: ${this.totalExpense()}\nAccount Balance: ${this.accountBalance()}`;
  }

  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }
}

const person = new PersonAccount('John', 'Doe');

person.addIncome('Salary', 3000);
person.addIncome('Freelancing', 1200);
person.addExpense('Rent', 1000);
person.addExpense('Groceries', 300);
person.addExpense('Utilities', 200);

console.log('Total Income:', person.totalIncome());
console.log('Total Expense:', person.totalExpense());
console.log('Account Balance:', person.accountBalance());
console.log('Account Info:', person.accountInfo());
