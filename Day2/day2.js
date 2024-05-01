let challenge = '30 Days Of JavaScript';

console.log(typeof challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0, 2));
console.log(challenge.substring(2, 100));
console.log(challenge.includes('Script'));
console.log(challenge.split());
console.log(
  'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(', ')
);
console.log(challenge.replace('JavaScript', 'Python'));
console.log('30 Days Of JavaScript'.charAt(15));
console.log('30 Days Of JavaScript'.charCodeAt('J'));
console.log(challenge.lastIndexOf('a'));
console.log(
  'You cannot end a sentence with because because because is a conjunction'.indexOf(
    'because'
  )
);
console.log(
  'You cannot end a sentence with because because because is a conjunction'.lastIndexOf(
    'because'
  )
);
console.log(
  'You cannot end a sentence with because because because is a conjunction'.search(
    'because'
  )
);
console.log(' 30 Days Of JavaScript '.trim());
console.log('30 Days Of JavaScript'.startsWith('3'));
console.log('30 Days Of JavaScript'.endsWith('t'));
console.log('30 Days Of JavaScript'.match('a'));
console.log('30 Days of'.concat(' JavaScript'));
console.log(challenge.repeat(2));

console.log(
  `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`
);

console.log(
  `Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.`
);
console.log(typeof '10' == typeof 10);
console.log(typeof parseInt('10') == typeof 10);

console.log(parseFloat('9.8') == 10);
console.log(parseFloat('9.8') + 0.2 == 10);
console.log('python'.search('on'), 'jargon'.search('on'));
console.log('I hope this course is not full of jargon'.search('jargon'));

console.log(Math.floor(Math.random() * 101));
console.log(Math.floor(Math.random() * 51) + 50);
console.log(Math.floor(Math.random() * 256));

console.log(
  'JavaScript'.charAt(Math.floor(Math.random() * 'JavaScript'.length))
);

console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

console.log(
  'You cannot end a sentence with because because because is a conjunction'.substr(
    0,
    31
  ) +
    'You cannot end a sentence with because because because is a conjunction'.substr(
      55,
      100
    )
);

console.log(
  'Love is the best thing in this world. Some found their love and some are still looking for their love.'.match(
    /love/g
  )
);

console.log(
  'You cannot end a sentence with because because because is a conjunction'.match(
    /because/g
  )
);

let sentence =
  '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

let words = sentence
  .replace(/[^\w\s]/g, '')
  .toLowerCase()
  .split(/\s+/);

let wordCounts = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

let maxCount = 0;
let mostFrequentWord = '';

for (const [word, count] of Object.entries(wordCounts)) {
  if (count > maxCount) {
    maxCount = count;
    mostFrequentWord = word;
  }
}

console.log(
  `Le mot le plus fréquent est '${mostFrequentWord}' avec ${maxCount} occurrences.`
);

const text =
  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

const regex =
  /(\d+)\s*euro\s*(from salary per month|annual bonus|online courses per month)/g;
let match;
let annualIncome = 0;

while ((match = regex.exec(text)) !== null) {
  const amount = parseInt(match[1]);
  const description = match[2];

  if (description.includes('per month')) {
    annualIncome += amount * 12;
  } else if (description.includes('annual')) {
    annualIncome += amount;
  }
}

console.log(`The total annual income is ${annualIncome} euros.`);
