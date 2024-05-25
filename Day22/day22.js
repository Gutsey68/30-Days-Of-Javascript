function isFirstNumber(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

const divContainer = document.querySelector('.container');
for (let i = 1; i < 101; i++) {
  let divNumber = document.createElement('div');
  divNumber.textContent = i;
  divNumber.style.display = 'inline-block';
  divNumber.style.width = '20px';
  divNumber.style.padding = '1rem 2rem';
  divNumber.style.margin = '2px';
  divNumber.style.color = 'white';
  divNumber.style.textAlign = 'center';
  divNumber.style.fontSize = '1.5rem';
  if (isFirstNumber(i)) {
    divNumber.style.backgroundColor = '#ea695b';
  } else if (i % 2 == 0) {
    divNumber.style.backgroundColor = '#5bbc7a';
  } else {
    divNumber.style.backgroundColor = '#f7dc5c';
  }

  divContainer.appendChild(divNumber);
}
