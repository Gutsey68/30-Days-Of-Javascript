// errors messages
const firstNameError =
  'First name must be alphanumeric and contain 3 - 16 characters';
const lastNameError =
  'Last name must be alphanumeric and contain 3 - 16 characters';
const emailError = 'Email must be a valid address, e.g. example@example.com';
const passwordError =
  'Password must be alphanumeric (@,_ and - are also allowed) and between 6 -20 characters';
const telephoneError = 'A valid Telephone number (11 digits and 333-333-3334)';
const bioError =
  'Bio must contain only lowercase letters, underscores, hyphens and be 8 - 50 characters';

// regex
const firstNameRegex = /^[a-zA-Z0-9]{3,16}$/;
const lastNameRegex = /^[a-zA-Z0-9]{3,16}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^[a-zA-Z0-9@_-]{6,20}$/;
const telephoneRegex = /^\d{3}-\d{3}-\d{4}$/;
const bioRegex = /^[a-z_-]{8,50}$/;

// query selectors
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const telephone = document.querySelector('#telephone');
const bio = document.querySelector('#bio');
const form = document.querySelector('form');
const button = document.querySelector('button');

// errors paragraphs
const firstNameErrorParagraph = document.createElement('p');
const lastNameErrorParagraph = document.createElement('p');
const emailErrorParagraph = document.createElement('p');
const passwordErrorParagraph = document.createElement('p');
const telephoneErrorParagraph = document.createElement('p');
const bioErrorParagraph = document.createElement('p');

firstNameErrorParagraph.classList.add('error');
lastNameErrorParagraph.classList.add('error');
emailErrorParagraph.classList.add('error');
passwordErrorParagraph.classList.add('error');
telephoneErrorParagraph.classList.add('error');
bioErrorParagraph.classList.add('error');

// insert errors paragraphs
form.insertBefore(firstNameErrorParagraph, firstname);
form.insertBefore(lastNameErrorParagraph, lastname);
form.insertBefore(emailErrorParagraph, email);
form.insertBefore(passwordErrorParagraph, password);
form.insertBefore(telephoneErrorParagraph, telephone);
form.insertBefore(bioErrorParagraph, bio);

function validateInput(input, regex, errorParagraph, errorMessage) {
  if (!regex.test(input.value)) {
    errorParagraph.textContent = errorMessage;
    input.classList.remove('success');
  } else {
    errorParagraph.textContent = '';
    input.classList.add('success');
  }
  checkAllInputs();
}

// event listeners for input validation
firstname.addEventListener('input', () =>
  validateInput(
    firstname,
    firstNameRegex,
    firstNameErrorParagraph,
    firstNameError
  )
);
lastname.addEventListener('input', () =>
  validateInput(lastname, lastNameRegex, lastNameErrorParagraph, lastNameError)
);
email.addEventListener('input', () =>
  validateInput(email, emailRegex, emailErrorParagraph, emailError)
);
password.addEventListener('input', () =>
  validateInput(password, passwordRegex, passwordErrorParagraph, passwordError)
);
telephone.addEventListener('input', () =>
  validateInput(
    telephone,
    telephoneRegex,
    telephoneErrorParagraph,
    telephoneError
  )
);
bio.addEventListener('input', () =>
  validateInput(bio, bioRegex, bioErrorParagraph, bioError)
);

function checkAllInputs() {
  const allInputs = [firstname, lastname, email, password, telephone, bio];
  const allValid = allInputs.every(input =>
    input.classList.contains('success')
  );
  if (allValid) {
    button.classList.add('success-btn');
  } else {
    button.classList.remove('success-btn');
  }
}
