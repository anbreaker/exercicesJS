const {reject} = require('lodash');
const {resolve} = require('path');

const getName = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('anbreaker');
    }, 1000);
  });
};

// getName().then((name) => console.log(name));

const sayHello = async () => {
  const name = await getName();
  return `Hello ${name}`;
};

sayHello().then((response) => console.log(response));
