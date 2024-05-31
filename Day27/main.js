const activities = [
  'Educator',
  'Programmer',
  'Developer',
  'Motivator',
  'Content Creator'
];

const emojies = ['🌱', '💻', '🌐', '🔥', '📔'];

const technos = [
  'REACT',
  'NODE',
  'PANDAS',
  'JAVASCRIPT',
  'REDUX',
  'PYTHON',
  'HTML'
];

const colors = [
  'deepskyblue',
  'lawngreen',
  'slategray',
  'gold',
  'fuchsia',
  'yellow',
  'crimson'
];

const activityP = document.createElement('p');
const activityName = document.createElement('span');

function showActivity() {
  let currentIndex = 0;

  setInterval(function () {
    const divActivity = document.querySelector('.activity');
    divActivity.innerHTML = '';

    activityP.textContent = emojies[currentIndex];
    activityName.textContent = activities[currentIndex];
    activityName.classList.add('activity-span');

    activityP.appendChild(activityName);
    divActivity.appendChild(activityP);
    currentIndex = (currentIndex + 1) % activities.length;
  }, 2000);
}

showActivity();

function showStack() {
  let currentIndex = 0;
  const spanTechno = document.querySelector('.techno');

  setInterval(function () {
    spanTechno.innerHTML = '';

    spanTechno.textContent = technos[currentIndex];
    spanTechno.style.color = colors[currentIndex];

    currentIndex = (currentIndex + 1) % technos.length;
  }, 2000);
}

showStack();
