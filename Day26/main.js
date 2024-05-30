const headingDiv = document.querySelector('.heading');

const buttonsDiv = document.querySelector('.buttons');

const inputDiv = document.querySelector('.input');

const countriesDiv = document.querySelector('.countries');

const inputText = document.querySelector('input[type=text]');
const startButton = document.querySelector('#start');
const anyButton = document.querySelector('#any');
const reverseButton = document.querySelector('#reverse');
const CountriesSpanDiv = document.createElement('div');

anyButton.addEventListener('click', () => {
  countriesDiv.innerHTML = '';

  let inputTextValue = inputText.value.toLowerCase();

  if (inputTextValue == '') {
    return;
  } else {
    const countriesToLowerCase = countries.map(country => {
      return country.toLowerCase();
    });

    const countriesContainingInput = countriesToLowerCase.filter(country =>
      country.includes(inputTextValue)
    );

    CountriesSpanDiv.innerHTML = '';
    headingDiv.appendChild(CountriesSpanDiv);

    const letterSpan = document.createElement('span');
    letterSpan.textContent = inputTextValue;
    letterSpan.classList.add('red-span');

    const numberSpan = document.createElement('span');
    numberSpan.textContent = countriesContainingInput.length;
    numberSpan.classList.add('green-span');

    const CountriesStartWith = document.createElement('p');
    CountriesStartWith.textContent = `Countries containing `;
    CountriesStartWith.appendChild(letterSpan);

    const spanAre = document.createElement('span');
    spanAre.textContent = ' are ';
    CountriesStartWith.appendChild(spanAre);

    CountriesStartWith.appendChild(numberSpan);
    CountriesSpanDiv.appendChild(CountriesStartWith);

    countriesContainingInput.forEach(country => {
      const countryDiv = document.createElement('div');
      countryDiv.classList.add('country');

      const countryP = document.createElement('p');
      countryP.textContent = country.toUpperCase();
      countryDiv.appendChild(countryP);

      countriesDiv.appendChild(countryDiv);
    });
  }
});

startButton.addEventListener('click', () => {
  countriesDiv.innerHTML = '';

  let inputTextValue = inputText.value.toLowerCase();

  if (inputTextValue == '') {
    return;
  } else {
    const countriesToLowerCase = countries.map(country => {
      return country.toLowerCase();
    });

    const countriesStartingInput = countriesToLowerCase.filter(country =>
      country.startsWith(inputTextValue)
    );

    CountriesSpanDiv.innerHTML = '';
    headingDiv.appendChild(CountriesSpanDiv);

    const letterSpan = document.createElement('span');
    letterSpan.textContent = inputTextValue;
    letterSpan.classList.add('red-span');

    const numberSpan = document.createElement('span');
    numberSpan.textContent = countriesStartingInput.length;
    numberSpan.classList.add('green-span');

    const CountriesStartWith = document.createElement('p');
    CountriesStartWith.textContent = `Countries starts with `;
    CountriesStartWith.appendChild(letterSpan);

    const spanAre = document.createElement('span');
    spanAre.textContent = ' are ';
    CountriesStartWith.appendChild(spanAre);

    CountriesStartWith.appendChild(numberSpan);
    CountriesSpanDiv.appendChild(CountriesStartWith);

    countriesStartingInput.forEach(country => {
      const countryDiv = document.createElement('div');
      countryDiv.classList.add('country');

      const countryP = document.createElement('p');
      countryP.textContent = country.toUpperCase();
      countryDiv.appendChild(countryP);

      countriesDiv.appendChild(countryDiv);
    });
  }
});

reverseButton.addEventListener('click', () => {
  if (countriesDiv.style.flexDirection == 'row-reverse') {
    countriesDiv.style.flexDirection = 'row';
  } else {
    countriesDiv.style.flexDirection = 'row-reverse';
  }
});

const numberOfCountries = document.createElement('p');
numberOfCountries.textContent = `Total Number of countries: ${countries.length}`;
headingDiv.appendChild(numberOfCountries);

const CountriesContaining = document.createElement('p');
