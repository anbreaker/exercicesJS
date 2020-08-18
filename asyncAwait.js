const users = [
  {id: 1, name: 'anbreaker'},
  {id: 2, name: 'jeje'},
  {id: 3, name: 'Curro'},
];

const emails = [
  {id: 1, email: 'anbreaker@gmail.com'},
  {id: 2, email: 'jeje@gmail.com'},
];

const getUser = async (id) => {
  const user = users.find((user) => user.id === id);
  if (!user) throw new Error(`Doesn't exist an user with id ${id}`);
  else return user;
};

const getEmail = async (user) => {
  const email = emails.find((email) => email.id === user.id);
  if (!email) throw new Error(`${user.name} hasn't email`);
  else
    return {
      id: user.id,
      name: user.name,
      email: email.email,
    };
};

const getInfo = async (id) => {
  try {
    const user = await getUser(id);
    const response = await getEmail(user);
    return `${user.name} email is ${response.email}`;
  } catch (error) {
    console.log(error);
  }
};

getInfo(3).then((response) => console.log(response));
