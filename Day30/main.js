// divs selectors
const heading = document.querySelector('.heading');
const countriesData = document.querySelector('.countries-data');
const countriesDiv = document.createElement('div');
countriesDiv.classList.add('flex-div');
countriesData.appendChild(countriesDiv);
const buttons = document.querySelector('.buttons');

// input selector
const inputText = document.querySelector('#country');

// buttons selectors
const nameButton = document.querySelector('#name');
const capitalButton = document.querySelector('#capital');
const populationButton2 = document.querySelector('#population');
const statsButton = document.querySelector('#stats');

function displayCountries(countriesToDisplay) {
  countriesDiv.innerHTML = '';
  countriesToDisplay.forEach(country => {
    const countryDiv = document.createElement('div');
    countryDiv.classList.add('country-card');

    // image
    const countryFlag = document.createElement('img');
    countryFlag.setAttribute('src', country.flag);
    countryDiv.appendChild(countryFlag);

    // country name
    const countryName = document.createElement('p');
    countryName.textContent = country.name;
    countryName.classList.add('country-name');
    countryDiv.appendChild(countryName);

    // country infos div
    const countriesInfosDiv = document.createElement('div');
    countryDiv.appendChild(countriesInfosDiv);

    // capital
    const countryCapital = document.createElement('p');
    countryCapital.textContent = `Capital: ${country.capital}`;
    countriesInfosDiv.appendChild(countryCapital);

    // languages
    const countryLanguage = document.createElement('p');
    countryLanguage.textContent = `Languages: ${country.languages.join(', ')}`;
    countriesInfosDiv.appendChild(countryLanguage);

    // population
    const countryPopulation = document.createElement('p');
    countryPopulation.textContent = `Population: ${country.population}`;
    countriesInfosDiv.appendChild(countryPopulation);

    countriesDiv.appendChild(countryDiv);
  });
}

let filteredCountries = [];
let nameSortOrder = true;
let capitalSortOrder = true;
let populationSortOrder = true;

function filterCountries() {
  let inputTextValue = inputText.value.toLowerCase();
  filteredCountries = countries.filter(
    country =>
      (country.capital &&
        country.capital.toLowerCase().includes(inputTextValue)) ||
      country.name.toLowerCase().includes(inputTextValue)
  );
  displayCountries(filteredCountries);
}

function sortByName() {
  nameSortOrder = !nameSortOrder;
  const sortedCountries = [...filteredCountries].sort((a, b) => {
    if (nameSortOrder) {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });
  displayCountries(sortedCountries);
}

function sortByCapital() {
  capitalSortOrder = !capitalSortOrder;
  const sortedCountries = [...filteredCountries].sort((a, b) => {
    if (capitalSortOrder) {
      return a.capital.localeCompare(b.capital);
    } else {
      return b.capital.localeCompare(a.capital);
    }
  });
  displayCountries(sortedCountries);
}

function sortByPopulation() {
  populationSortOrder = !populationSortOrder;
  const sortedCountries = [...filteredCountries].sort((a, b) => {
    if (populationSortOrder) {
      return a.population - b.population;
    } else {
      return b.population - a.population;
    }
  });
  displayCountries(sortedCountries);
}

nameButton.addEventListener('click', sortByName);
capitalButton.addEventListener('click', sortByCapital);
populationButton2.addEventListener('click', sortByPopulation);

inputText.addEventListener('input', filterCountries);

displayCountries(countries);

// heading infos
const currentlyP = document.createElement('p');
currentlyP.textContent = `Currently, we have ${countries.length} countries`;
heading.appendChild(currentlyP);

// search criteria
const currentlyDiv = document.createElement('div');
heading.appendChild(currentlyDiv);

function displayNumberCountries() {
  currentlyDiv.innerHTML = '';
  if (filteredCountries.length > 1) {
    const criteriaP = document.createElement('p');
    criteriaP.classList.add('orangep');
    criteriaP.textContent = `${filteredCountries.length} countries satisfied the search criteria`;
    currentlyDiv.appendChild(criteriaP);
  }
}
inputText.addEventListener('input', displayNumberCountries);

// second phase
function findMostPopulatedCountries(countries) {
  countries.sort((a, b) => b.population - a.population);
  let tenCountries = countries.slice(0, 10);
  return tenCountries;
}

const tenMostPopulatedCountries = findMostPopulatedCountries(countries);

function findMostSpeakedCountries(countries) {
  const languageCounts = countries.reduce((acc, country) => {
    country.languages.forEach(language => {
      acc[language] = (acc[language] || 0) + 1;
    });
    return acc;
  }, {});

  const sortedLanguages = Object.entries(languageCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  const tenLanguages = sortedLanguages.reduce((acc, [language, count]) => {
    acc[language] = count;
    return acc;
  }, {});

  return tenLanguages;
}

const tenMostSpeakedCountries = findMostSpeakedCountries(countries);

const populationButton = document.querySelector('.population');
const languageButton = document.querySelector('.language');
const statsDiv = document.querySelector('.stats');

populationButton.addEventListener('click', () => {
  statsDiv.innerHTML = '';

  const textCountry = document.createElement('p');
  textCountry.textContent = '10 most populated countries in the world';
  statsDiv.appendChild(textCountry);

  const maxPopulation = Math.max(
    ...tenMostPopulatedCountries.map(country => country.population)
  );

  for (let i = 0; i < 10; i++) {
    {
      const countryDiv = document.createElement('div');
      countryDiv.classList.add('flex');

      const countryP = document.createElement('div');
      countryP.textContent = tenMostPopulatedCountries[i].name;
      countryP.style.width = `20%`;
      countryP.style.textAlign = `left`;
      countryDiv.appendChild(countryP);

      const barContainer = document.createElement('div');
      barContainer.style.width = `${
        (tenMostPopulatedCountries[i].population / maxPopulation) * 100 * 0.6
      }%`;
      barContainer.classList.add('orange-div');
      countryDiv.appendChild(barContainer);

      const countryLanguage = document.createElement('div');
      countryLanguage.textContent = tenMostPopulatedCountries[i].population;
      countryLanguage.style.width = `20%`;
      countryDiv.appendChild(countryLanguage);

      statsDiv.appendChild(countryDiv);
    }
  }
});

languageButton.addEventListener('click', () => {
  statsDiv.innerHTML = '';

  const textCountry = document.createElement('p');
  textCountry.textContent = '10 most spoken languages in the world';
  statsDiv.appendChild(textCountry);

  const entries = Object.entries(tenMostSpeakedCountries);

  for (let i = 0; i < 10; i++) {
    const [language, count] = entries[i];
    const countryDiv = document.createElement('div');
    countryDiv.classList.add('flex');

    const countryP = document.createElement('div');
    countryP.style.width = `12.5%`;
    countryP.style.textAlign = `left`;
    countryP.textContent = language;
    countryDiv.appendChild(countryP);

    const orangeDiv = document.createElement('div');
    orangeDiv.style.width = `${count * 0.75}%`;
    orangeDiv.classList.add('orange-div');
    countryDiv.appendChild(orangeDiv);

    const countryLanguage = document.createElement('div');
    countryLanguage.style.width = `12.5%`;
    countryLanguage.textContent = count;
    countryDiv.appendChild(countryLanguage);

    statsDiv.appendChild(countryDiv);
  }
});
