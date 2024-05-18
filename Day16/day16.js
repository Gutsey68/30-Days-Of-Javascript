const skillsObj = JSON.stringify(skills);
console.log(skillsObj);

const ageStringified = JSON.stringify(age);
console.log(ageStringified);

const isMarriedStringified = JSON.stringify(isMarried);
console.log(isMarriedStringified);

const studentStringified = JSON.stringify(student);
console.log(studentStringified);

const studentsWithoutIsMarriedAndAge = JSON.stringify(student, [
  'firstName',
  'lastName',
  'skills'
]);

console.log(studentsWithoutIsMarriedAndAge);

const txtToObject = JSON.parse(txt);
console.log(txtToObject);

const users = JSON.parse(txt);

let maxSkillsUser = null;
let maxSkillsCount = 0;

for (const user in users) {
  const skillsCount = users[user].skills.length;
  if (skillsCount > maxSkillsCount) {
    maxSkillsCount = skillsCount;
    maxSkillsUser = user;
  }
}

console.log(maxSkillsUser);
console.log(maxSkillsCount);
console.log(users[maxSkillsUser]);
