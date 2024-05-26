const keySpan = document.querySelector('span');
const keyCode = document.querySelector('#keyCode');

document.addEventListener('keydown', function (event) {
  keySpan.textContent = event.key;
  keyCode.textContent = event.keyCode;
});
