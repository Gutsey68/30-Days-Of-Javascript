function isFirstNumber(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

const p = document.querySelector('p');
const input = document.querySelector('input');
const button = document.querySelector('button');
const div = document.querySelector('div');

button.addEventListener('click', () => {
  if (isNaN(input.value)) {
    p.textContent = 'Input value must be a number';
    p.style.color = '#fd5e53';
  } else if (input.value == '') {
    p.textContent =
      'Enter number value on the input field to generate numbers ';
    p.style.color = '#fd5e53';
  } else {
    div.innerHTML = '';
    for (let i = 0; i <= input.value; i++) {
      const spanNumber = document.createElement('span');
      spanNumber.textContent = i;

      if (isFirstNumber(i)) {
        spanNumber.classList.add('red');
      } else if (i % 2 == 0) {
        spanNumber.classList.add('green');
      } else {
        spanNumber.classList.add('yellow');
      }
      div.appendChild(spanNumber);
    }
  }
});
