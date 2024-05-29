const headingDiv = document.querySelector('.heading');

function numberOfCountries(countries_data) {
  let count = 0;
  countries_data.forEach(country => {
    count += 1;
  });
  return count;
}

const numberOfCountriesResult = numberOfCountries(countries_data);

const h2Countries = document.createElement('h2');
h2Countries.textContent = `Currently, we heave ${numberOfCountriesResult} countries`;
headingDiv.appendChild(h2Countries);

function findMostPopulatedCountries(countries_data) {
  countries_data.sort((a, b) => b.population - a.population);
  let tenCountries = countries_data.slice(0, 10);
  console.log(tenCountries);
  return tenCountries;
}

const tenMostPopulatedCountries = findMostPopulatedCountries(countries_data);

function findMostSpeakedCountries(countries_data) {
  const languageCounts = countries_data.reduce((acc, country) => {
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

const tenMostSpeakedCountries = findMostSpeakedCountries(countries_data);

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
