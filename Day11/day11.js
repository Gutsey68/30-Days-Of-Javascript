const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
};
const users = [
  {
    name: 'Brook',
    scores: 75,
    skills: ['HTM', 'CSS', 'JS'],
    age: 16
  },
  {
    name: 'Alex',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18
  },
  {
    name: 'David',
    scores: 75,
    skills: ['HTM', 'CSS'],
    age: 22
  },
  {
    name: 'John',
    scores: 85,
    skills: ['HTML'],
    age: 25
  },
  {
    name: 'Sara',
    scores: 95,
    skills: ['HTM', 'CSS', 'JS'],
    age: 26
  },
  {
    name: 'Martha',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18
  },
  {
    name: 'Thomas',
    scores: 90,
    skills: ['HTM', 'CSS', 'JS'],
    age: 20
  }
];

let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(
  `e: ${e}, pi: ${pi}, gravity: ${gravity}, humanBodyTemp: ${humanBodyTemp}, waterBoilingTemp: ${waterBoilingTemp}`
);

let [fin, est, sw, den, nor] = countries;
console.log(`fin: ${fin}, est: ${est}, sw: ${sw}, den: ${den}, nor: ${nor}`);

let { width, height, area, perimeter } = rectangle;
console.log(width, height, area, perimeter);

for (const { name, scores, skills, age } of users) {
  console.log(name, scores, skills, age);
}

let lessThanTwoSkills = [];
for (const { name, skills } of users) {
  if (skills.length < 2) {
    lessThanTwoSkills.push({ name, skills });
  }
}
console.log(lessThanTwoSkills);

for (const { name, capital, languages, population } of countries2) {
  console.log(name, capital, languages, population);
}

const [name, skills, [htmScore, cssScore, jsScore, reactScore]] = student;
console.log(name, skills, jsScore, reactScore);

function convertArrayToObject(students) {
  return students.map(student => {
    const [name, skills, scores] = student;
    return { name, skills, scores };
  });
}

const student = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node', level: 7 },
      { skill: 'GraphQL', level: 8 }
    ],
    dataBase: [{ skill: 'MongoDB', level: 7.5 }],
    dataScience: ['Python', 'R', 'D3.js']
  }
};

const newStudent = {
  ...student,
  skills: {
    frontEnd: [...student.skills.frontEnd, { skill: 'Bootstrap', level: 8 }],
    backEnd: [...student.skills.backEnd, { skill: 'Express', level: 9 }],
    dataBase: [...student.skills.dataBase, { skill: 'SQL', level: 8 }],
    dataScience: [...student.skills.dataScience, 'SQL']
  }
};

console.log(newStudent);
