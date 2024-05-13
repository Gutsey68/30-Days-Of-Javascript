const text =
  'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';

const regex = /\d+/g;
const numbers = text.match(regex).map(Number);

console.log(numbers);

let annualIncome = numbers[0] * 12 + numbers[1] + numbers[2] * 12;
console.log(`He earns ${annualIncome} € per year`);

const text2 =
  'Particles are located at positions -12, -4, -3, -1, 0, 4, and 8 on the x-axis.';

const regex2 = /-?\d+/g;

const positions = text2.match(regex2).map(Number);

const maxPosition = Math.max(...positions);
const minPosition = Math.min(...positions);

const distance = maxPosition - minPosition;

console.log('Positions:', positions);
console.log('Maximum Position:', maxPosition);
console.log('Minimum Position:', minPosition);
console.log('Distance between the furthest particles:', distance);

/^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

function tenMostFrequentWords(paragraph, n = null) {
  const wordCounts = {};
  const words = paragraph.replace(/[.]/g, '').split(/\s+/);

  words.forEach(word => {
    wordCounts[word] = (wordCounts[word] || 0) + 1;
  });

  const sortedWords = Object.keys(wordCounts)
    .map(key => ({ word: key, count: wordCounts[key] }))
    .sort((a, b) => b.count - a.count);

  return n ? sortedWords.slice(0, n) : sortedWords;
}

const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
console.log(tenMostFrequentWords(paragraph));
console.log(tenMostFrequentWords(paragraph, 10));

function cleanText(sentence) {
  return sentence.replace(/[%$@#&;]/g, '').replace(/[^\w\s]/g, ' ');
}

function mostFrequentWords(text, topCount = 3) {
  const wordCounts = {};
  const words = text.split(/\s+/);

  words.forEach(word => {
    if (word.trim() !== '') {
      wordCounts[word] = (wordCounts[word] || 0) + 1;
    }
  });

  const sortedWords = Object.keys(wordCounts)
    .map(key => ({ word: key, count: wordCounts[key] }))
    .sort((a, b) => b.count - a.count);

  return sortedWords.slice(0, topCount);
}

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
const cleanedText = cleanText(sentence);
console.log(cleanedText);
console.log(mostFrequentWords(cleanedText));
