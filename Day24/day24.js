const select = document.querySelector('select');
const input = document.querySelector('input');
const button = document.querySelector('button');
const body = document.querySelector('body');

const wrapperDiv = document.createElement('div');
wrapperDiv.classList.add('wrapper-div');

const resultDiv = document.createElement('div');
resultDiv.classList.add('result-div');

button.addEventListener('click', () => {
  wrapperDiv.innerHTML = '';
  wrapperDiv.appendChild(resultDiv);
  resultDiv.innerHTML = '';

  if (select.value == '') {
    resultDiv.textContent = 'Select a planet';
    body.appendChild(wrapperDiv);
  } else if (input.value == '') {
    resultDiv.textContent = 'Mass is required';
    body.appendChild(wrapperDiv);
  } else if (isNaN(input.value)) {
    resultDiv.textContent = 'Mass must be a number';
    body.appendChild(wrapperDiv);
  } else {
    let imgUrl;
    let planetName;
    let planetGravity;

    switch (select.value) {
      case 'earth':
        imgUrl = 'assets/earth.png';
        planetName = 'Earth';
        planetGravity = 9.81;
        break;
      case 'jupiter':
        imgUrl = 'assets/jupiter.png';
        planetName = 'Jupiter';
        planetGravity = 24.79;
        break;
      case 'mars':
        imgUrl = 'assets/mars.png';
        planetName = 'Mars';
        planetGravity = 3.71;
        break;
      case 'mercury':
        imgUrl = 'assets/mercury.png';
        planetName = 'Mercury';
        planetGravity = 3.7;
        break;
      case 'moon':
        imgUrl = 'assets/moon.png';
        planetName = 'Moon';
        planetGravity = 1.62;
        break;
      case 'neptune':
        imgUrl = 'assets/neptune.png';
        planetName = 'Neptune';
        planetGravity = 11.15;
        break;
      case 'pluto':
        imgUrl = 'assets/pluto.png';
        planetName = 'Pluto';
        planetGravity = 0.62;
        break;
      case 'saturn':
        imgUrl = 'assets/saturn.png';
        planetName = 'Saturn';
        planetGravity = 10.44;
        break;
      case 'uranus':
        imgUrl = 'assets/uranus.png';
        planetName = 'Uranus';
        planetGravity = 24.79;
        break;
      case 'venus':
        imgUrl = 'assets/venus.png';
        planetName = 'Venus';
        planetGravity = 8.87;
        break;
      default:
        break;
    }
    body.appendChild(wrapperDiv);

    const imgDiv = document.createElement('div');
    const imgPlanet = document.createElement('img');

    imgDiv.appendChild(imgPlanet);
    imgPlanet.setAttribute('src', imgUrl);
    wrapperDiv.insertBefore(imgDiv, resultDiv);

    const spanPlanet = document.createElement('span');
    spanPlanet.textContent = planetName;

    const resultPlanet = document.createElement('p');
    resultPlanet.textContent = `The weigth of the object on `;
    resultPlanet.appendChild(spanPlanet);
    resultDiv.appendChild(resultPlanet);

    const resultCalcul = document.createElement('p');
    resultCalcul.classList.add('result');
    resultCalcul.textContent = `${
      Math.round(planetGravity * input.value * 100) / 100
    } N`;
    resultDiv.appendChild(resultCalcul);
  }
});
