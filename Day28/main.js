const leaderBoardDiv = document.createElement('div');
const errorDiv = document.createElement('p');
const button = document.querySelector('button');
const body = document.querySelector('body');

const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const country = document.querySelector('#country');
const score = document.querySelector('#score ');

let counter = 0;

button.addEventListener('click', function () {
  if (
    score.value == '' ||
    country.value == '' ||
    lastName.value == '' ||
    firstName.value == ''
  ) {
    errorDiv.innerHTML = '';
    const errorP = document.createElement('p');

    errorP.textContent = 'All fields are required';
    errorDiv.classList.add('warning');

    errorDiv.appendChild(errorP);
    leaderBoardDiv.appendChild(errorDiv);
    body.appendChild(leaderBoardDiv);
  } else if (isNaN(score.value)) {
    errorDiv.innerHTML = '';
    const errorP = document.createElement('p');

    errorP.textContent = 'Score must be a number';
    errorDiv.classList.add('warning');

    errorDiv.appendChild(errorP);
    leaderBoardDiv.appendChild(errorDiv);
    body.appendChild(leaderBoardDiv);
  } else {
    let countryValue = country.value.toUpperCase();
    let lastNameValue = lastName.value.toUpperCase();
    let firstNameValue = firstName.value.toUpperCase();
    let scoreValue = Number(score.value);
    errorDiv.innerHTML = '';
    counter += 1;

    const hiddenInput = document.createDocumentFragment('input');
    hiddenInput.value = counter;
    hiddenInput.value = document.createElement('div');

    const nameSpan = document.createElement('span');
    nameSpan.textContent = `${firstNameValue} ${lastNameValue}`;

    const dateSpan = document.createElement('span');
    dateSpan.textContent = afficheDate();

    const countrySpan = document.createElement('span');
    countrySpan.textContent = countryValue;

    const scoreSpan = document.createElement('span');
    scoreSpan.textContent = scoreValue;

    const namePlusDate = document.createElement('div');
    namePlusDate.appendChild(nameSpan);
    namePlusDate.appendChild(dateSpan);

    const deleteButton = document.createElement('button');

    deleteButton.textContent = '🚮';
    deleteButton.addEventListener('click', function () {
      hiddenInput.value.innerHTML = '';
      hiddenInput.value.classList.remove('leader-div');
    });

    const plusFiveButton = document.createElement('button');

    plusFiveButton.textContent = '+5';
    plusFiveButton.addEventListener('click', function () {
      scoreValue += 5;
      scoreSpan.textContent = scoreValue;
    });

    const lessFiveButton = document.createElement('button');

    lessFiveButton.textContent = '-5';
    lessFiveButton.addEventListener('click', function () {
      scoreValue -= 5;
      scoreSpan.textContent = scoreValue;
    });

    hiddenInput.value.appendChild(namePlusDate);
    hiddenInput.value.appendChild(countrySpan);
    hiddenInput.value.appendChild(scoreSpan);

    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('button-div');

    buttonsDiv.appendChild(deleteButton);
    buttonsDiv.appendChild(plusFiveButton);
    buttonsDiv.appendChild(lessFiveButton);
    hiddenInput.value.appendChild(buttonsDiv);

    leaderBoardDiv.appendChild(hiddenInput.value);

    nameSpan.classList.add('name-span');
    dateSpan.classList.add('date-span');
    namePlusDate.classList.add('name-age');
    countrySpan.classList.add('country-span');
    scoreSpan.classList.add('score-span');
    deleteButton.classList.add('delete-button');
    plusFiveButton.classList.add('plus-five');
    lessFiveButton.classList.add('less-five');
    hiddenInput.value.classList.add('leader-div');

    body.appendChild(leaderBoardDiv);
  }
});
