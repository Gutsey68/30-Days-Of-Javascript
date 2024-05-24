const firstParagraph = document.querySelector('p');
const secondParagraph = document.querySelector('#two');

const pList = document.querySelectorAll('p');
for (let i = 0; i < pList.length; i++) {
  console.log(pList[i].textContent);
}

const fourthParagraph = document.querySelector('p:nth-of-type(4)');
fourthParagraph.textContent = 'Fourth Paragraph';
const thirdParagraph = document.querySelector('p:nth-of-type(3)');

firstParagraph.classList.add('red');
secondParagraph.className = 'blue';
fourthParagraph.id = 'green';
thirdParagraph.setAttribute('class', 'big');
thirdParagraph.setAttribute('id', 'orange');

pList.forEach(p => {
  p.setAttribute('style', 'background : whitesmoke');
  p.setAttribute('style', 'border : solid 1px orange');
  p.style.fontSize = '1.5rem';
});

for (let i = 0; i < pList.length; i++) {
  if (i % 2 !== 0) {
    pList[i].style.color = ' red';
  } else {
    pList[i].style.color = 'green';
  }
  pList[i].textContent = `${i + 1}th content`;
  pList[i].id = `id${i}`;
  pList[i].classList.add(`class${i + 1}`);
}
