let dog = {};
dog = {
  name: 'Buddy',
  legs: 4,
  color: 'Brown',
  age: 6,
  bark: function bark() {
    return 'woof woof ';
  }
};
console.log(dog.name, dog.legs, dog.age, dog.bark());

(dog.breed = ''), (dog.getDogInfo = '');
console.log(dog);

console.log(users.key);

let mostSkilledUser = '';
let maxSkills = 0;

for (const user in users) {
  const skillsCount = users[user].skills.length;
  if (skillsCount > maxSkills) {
    mostSkilledUser = user;
    maxSkills = skillsCount;
  }
}

console.log(`${mostSkilledUser} has the most skills with ${maxSkills} skills.`);

const areLoggedIn = [];
const haveMoreThanFiftyPoints = [];

for (const user in users) {
  if (users[user].points >= 50) {
    haveMoreThanFiftyPoints.push(user);
  }
  if (users[user].isLoggedIn === true) {
    areLoggedIn.push(user);
  }
}

console.log(`Logged in users: ${areLoggedIn.join(', ')}`);
console.log(
  `Users with more than 50 points: ${haveMoreThanFiftyPoints.join(', ')}`
);

areMernStack = [];
for (const user in users) {
  if (
    users[user].skills.includes('MongoDB') &&
    users[user].skills.includes('Express') &&
    users[user].skills.includes('React') &&
    users[user].skills.includes('Node')
  ) {
    areMernStack.push(user);
  }
}

console.log(`MERN stacks developers : ${areMernStack.join(', ')}`);

users.Gauthier = {
  email: 'gauthier@seyzeriat.fr',
  skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
  age: 27,
  isLoggedIn: true,
  points: 100
};

const entries = Object.entries(users);
console.log(entries);

const personAccount = {
  firstName: 'John',
  lastName: 'Doe',
  incomes: [],
  expenses: [],
  accountInfo() {},
  addIncome() {},
  addExpense() {},
  totalIncome() {},
  totalExpense() {},
  accountBalance() {}
};

const signUp = (email, username, password) => {
  for (const user of users) {
    if (user.email === email) {
      return 'You already have an account';
    }
  }

  const newUser = {
    _id: Math.random().toString(36).substring(2, 6),
    username,
    email,
    password,
    createdAt: new Date().toLocaleString(),
    isLoggedIn: false
  };

  users.push(newUser);
  return 'User successfully signed up';
};

const signIn = (email, password) => {
  for (const user of users) {
    if (user.email === email && user.password === password) {
      user.isLoggedIn = true;
      return `Welcome back, ${user.username}!`;
    }
  }
  return 'Invalid email or password';
};

const rateProduct = (productId, userId, rate) => {
  const product = products.find(p => p._id === productId);
  if (product) {
    const existingRating = product.ratings.find(r => r.userId === userId);
    if (existingRating) {
      existingRating.rate = rate;
    } else {
      product.ratings.push({ userId, rate });
    }
  } else {
    console.log(`Product with ID: ${productId} not found`);
  }
};

const likeProduct = (productId, userId) => {
  const product = products.find(p => p._id === productId);
  if (product) {
    const likeIndex = product.likes.indexOf(userId);
    if (likeIndex === -1) {
      product.likes.push(userId);
    } else {
      product.likes.splice(likeIndex, 1);
    }
  } else {
    console.log(`Product with ID: ${productId} not found`);
  }
};
