const users = [
  {id: 1, name: 'anbreaker'},
  {id: 2, name: 'jeje'},
  {id: 3, name: 'asyncapi'},
];

const emails = [
  {id: 1, email: 'anbreaker@gmail.com'},
  {id: 2, email: 'jeje@gmail.com'},
];

const getUser = (id, cb) => {
  const user = users.find((user) => user.id == id);
  const promise = new Promise((resolve, reject) => {
    if (!user) reject(`Doesn't exist an user with id ${id}`);
    else resolve(user);
  });

  return promise;
};

const getEmail = (user, cb) => {
  const email = emails.find((email) => email.id === user.id);

  const promise = new Promise((resolve, reject) => {
    if (!email) reject(`${user.name} hasn't email`);
    else
      resolve({
        id: user.id,
        name: user.name,
        email: email.email,
      });
  });

  return promise;
};

getUser(3)
  .then((user) => getEmail(user))
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
