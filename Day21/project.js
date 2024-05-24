function getRandomHexColor() {
  const hexChars = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexChars[Math.floor(Math.random() * 16)];
  }
  return color;
}

const divWrapper = document.querySelector('.wrapper');
const titleH1 = document.querySelector('h1');

const textTitleH1 = titleH1.textContent;
const wordsTitleh1 = textTitleH1.split(' ');
const lastwordH1 = wordsTitleh1.pop();
const spanH1 = document.createElement('span');
spanH1.textContent = lastwordH1;

spanH1.style.fontSize = '3rem';

function changeColorYear() {
  setInterval(function () {
    spanH1.style.color = getRandomHexColor();
  }, 1000);
}

changeColorYear();

titleH1.innerHTML = wordsTitleh1.join(' ') + ' ';
titleH1.appendChild(spanH1);

const titleH2 = document.querySelector('h2');
const listLi = document.querySelectorAll('li');
const firstLi = document.querySelector('li:nth-of-type(1)');
const secondLi = document.querySelector('li:nth-of-type(2)');
const thirdLi = document.querySelector('li:nth-of-type(3)');
const fourthLi = document.querySelector('li:nth-of-type(4)');
const fifthi = document.querySelector('li:nth-of-type(5)');
const sixthLi = document.querySelector('li:nth-of-type(6)');
const seventhLi = document.querySelector('li:nth-of-type(7)');
const docBody = document.querySelector('body');
const docUl = document.querySelector('ul');
const datetext = document.createElement('p');

docUl.parentNode.insertBefore(datetext, docUl);

function afficheDate() {
  setInterval(function () {
    const dateNow = new Date();
    let todayDay = dateNow.getDay();
    const todayDate = dateNow.getDate();
    const todayYear = dateNow.getFullYear();
    const todayHour = dateNow.getHours();
    let todayMinutes = dateNow.getMinutes();
    if (todayMinutes < 10) {
      todayMinutes = '0' + todayMinutes;
    }
    let todaySeconds = dateNow.getSeconds();
    if (todaySeconds < 10) {
      todaySeconds = '0' + todaySeconds;
    }

    switch (todayDay) {
      case 1:
        todayDay = 'Monday';
        break;
      case 2:
        todayDay = 'Tuesday';
        break;
      case 3:
        todayDay = 'Wednesday';
        break;
      case 4:
        todayDay = 'Thursday';
        break;
      case 5:
        todayDay = 'Friday';
        break;
      case 6:
        todayDay = 'Saturday';
        break;
      case 7:
        todayDay = 'Sonday';
        break;
      default:
        break;
    }
    datetext.style.backgroundColor = getRandomHexColor();
    datetext.style.display = 'inline-block';
    datetext.style.padding = '0.5rem 1rem ';
    datetext.textContent = `${todayDay} ${todayDate}, ${todayYear} ${todayHour}:${todayMinutes}:${todaySeconds}`;
  }, 1000);
}
afficheDate();

docBody.setAttribute('style', 'text-align : center ; list-style : none');
docUl.setAttribute('style', 'text-align : center ; list-style : none');

for (let i = 0; i < listLi.length; i++) {
  listLi[i].style.backgroundColor = '#ea695b';
  listLi[i].style.padding = '1rem';
  listLi[i].style.textAlign = 'left';
  listLi[i].style.margin = '2px';
}

firstLi.style.backgroundColor = '#5bbc7a';
secondLi.style.backgroundColor = '#f7dc5c';

titleH2.style.textDecoration = 'underline';
