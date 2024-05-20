const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

fetch(countriesAPI)
  .then(res => res.json())
  .then(data => {
    data.forEach(country => {
      console.log(`Country: ${country.name}`);
      console.log(`Capital: ${country.capital}`);
      console.log(
        `Languages: ${country.languages.map(lang => lang.name).join(', ')}`
      );
      console.log(`Population: ${country.population}`);
      console.log(`Area: ${country.area}`);
      console.log('---------------------------');
    });
  })
  .catch(err => console.log(err));

let catNames = [];

fetch(catsAPI)
  .then(res => res.json())
  .then(data => {
    data.forEach(cat => {
      catNames.push(cat.name);
    });
    console.log(catNames);
  })
  .catch(err => console.log(err));

fetch(catsAPI)
  .then(res => res.json())
  .then(data => {
    let totalWeight = 0;
    let count = 0;

    data.forEach(cat => {
      const weightRange = cat.weight.metric.split(' - ');
      const minWeight = parseFloat(weightRange[0]);
      const maxWeight = parseFloat(weightRange[1]);
      const averageWeight = (minWeight + maxWeight) / 2;

      totalWeight += averageWeight;
      count++;
    });

    const averageWeightOfCats = totalWeight / count;
    console.log(`Average weight of cats: ${averageWeightOfCats.toFixed(2)} kg`);
  })
  .catch(err => console.error(err));

const findLargestCountries = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();

    const largestCountries = countries
      .sort((a, b) => b.area - a.area)
      .slice(0, 10);

    largestCountries.forEach(country => {
      console.log(`${country.name}: ${country.area} km²`);
    });
  } catch (error) {
    console.error('Erreur:', error);
  }
};

findLargestCountries();

const countTotalLanguages = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();

    const languages = new Set();

    countries.forEach(country => {
      country.languages.forEach(language => {
        languages.add(language.name);
      });
    });

    console.log(
      `Total number of languages in the world used as officials: ${languages.size}`
    );
  } catch (error) {
    console.error('Erreur:', error);
  }
};

countTotalLanguages();
