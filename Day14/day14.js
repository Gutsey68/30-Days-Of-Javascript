function sum(a, b) {
  try {
    if (a === undefined || b === undefined) {
      throw new ReferenceError('One or both parameters are undefined');
    }
    return a + b;
  } catch (err) {
    console.error('Error:', err.message);
  }
}

console.log(sum(5, 10));
console.log(sum(5));

function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  } catch (err) {
    console.error('Error:', err.message);
  }
}

console.log(divide(10, 2));
console.log(divide(10, 0));

function getNumberFromUser() {
  try {
    let input = prompt('Enter a number between 1 and 10:');
    if (input === '') throw 'Input is empty';
    if (isNaN(input)) throw 'Input is not a number';
    let number = Number(input);
    if (number < 1 || number > 10) throw 'Number is out of range';
    console.log('Valid number:', number);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    console.log('Execution completed.');
  }
}

getNumberFromUser();
