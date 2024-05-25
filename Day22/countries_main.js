const divContainer = document.querySelector('.container');
divContainer.style.display = 'flex';
divContainer.style.flexDirection = 'row';
divContainer.style.textAlign = 'center';
divContainer.style.alignItems = 'center';
divContainer.style.justifyContent = 'center';
divContainer.style.flexWrap = 'wrap';

const titleH1 = document.createElement('h1');
titleH1.textContent = 'WORLD COUNTRIES LIST';
titleH1.style.flex = '100%';
titleH1.style.margin = '0';
titleH1.style.letterSpacing = '0.5rem';
divContainer.appendChild(titleH1);

const titleH2 = document.createElement('h2');
titleH2.textContent = `Total Number of countries: ${countries.length}`;
titleH2.style.flex = '100%';
titleH2.style.margin = '0 0 2rem 0';
titleH2.style.fontSize = '1rem';
divContainer.appendChild(titleH2);

for (let i = 0; i < countries.length; i++) {
  const divCountry = document.createElement('div');
  divCountry.style.border = '1px solid whitesmoke';
  divCountry.style.margin = '2px';
  divCountry.style.textTransform = 'uppercase';
  divCountry.style.fontSize = '0.8rem';
  divCountry.style.fontWeight = 'bold';
  divCountry.style.padding = '4rem 2rem';
  divCountry.style.width = '5rem';
  divCountry.style.alignContent = 'center';
  divCountry.style.height = '2rem';
  divCountry.textContent = countries[i];
  divContainer.appendChild(divCountry);
}
