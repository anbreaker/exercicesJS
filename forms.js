const form = document.getElementById('form');
const button = document.getElementById('button');

const name = document.getElementById('name');
const email = document.getElementById('email');
const gender = document.getElementById('gender');
const terms = document.getElementById('terms');

const formIsValid = {
  name: false,
  email: false,
  gender: false,
  terms: false,
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
});

name.addEventListener('change', (event) => {
  console.log(event.target);
});
