function getRandomHexColor() {
  const hexChars = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexChars[Math.floor(Math.random() * 16)];
  }
  return color;
}

const body = document.querySelector('body');
function changeBackgroundColor() {
  setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 3000);
}

changeBackgroundColor();

const allSpans = document.querySelectorAll('span');

function changeColorSpan() {
  const body = document.querySelector('#content');
  setInterval(() => {
    body.style.animation = 'none';
    allSpans.forEach(span => {
      span.style.color = getRandomHexColor();
      setTimeout(() => {
        body.style.animation = '';
        body.classList.add('fadeIn');
      }, 10);
    });
  }, 3000);
}

changeColorSpan();
