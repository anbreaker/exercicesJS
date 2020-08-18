const form = document.getElementById('form');
const button = document.getElementById('submitButton');

const name = document.getElementById('name');
const email = document.getElementById('email');
const gender = document.getElementById('gender');
const terms = document.getElementById('terms');

// Ejemplo de Validadicones para noobs

const formIsValid = {
  name: false,
  email: false,
  gender: false,
  terms: false,
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  validateForm();
});

name.addEventListener('change', (event) => {
  console.log(event.target);
  if (event.target.value.trim().length > 0) {
    formIsValid.name = true;
  }
});

email.addEventListener('change', (event) => {
  console.log(event.target);
  if (event.target.value.trim().length > 0) {
    formIsValid.email = true;
  }
});

gender.addEventListener('change', (event) => {
  console.log(event.target);
  if (event.target.checked === true) {
    formIsValid.gender = true;
  }
});

terms.addEventListener('change', (event) => {
  console.log(event.target);
  formIsValid.terms = event.target.checked;
  event.target.checked
    ? button.removeAttribute('disabled')
    : button.setAttribute('disabled', true);
});

const validateForm = () => {
  const formValues = Object.values(formIsValid);
  const valid = formValues.findIndex((value) => value === false);

  if (valid === -1) form.submit();
  else alert('Form invalid');
};
