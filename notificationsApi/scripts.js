/* 
  https://developer.mozilla.org/es/docs/Web/API/notification 
  icono:
  https://www.flaticon.es/icono-gratis/en-todo-el-mundo_814513?term=world&page=1&position=18
*/

const permissions = document.getElementById('permissions');

permissions.addEventListener('click', () => {
  if (Notification.permission !== 'granted') {
    getPermissions();
  } else {
    notifyPermissions();
  }
});

const getPermissions = () => {
  Notification.requestPermission()
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};

const notifyPermissions = () => {
  const options = {
    body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    icon: 'world.png',
    data: 'Extra data',
    tag: 'notification demo',
  };
  const notification = new Notification('Hello World', options);

  notification.addEventListener('close', () => console.log('Close'));
  notification.addEventListener('show', () => console.log('show'));

  console.log(notification.data);
  console.log(notification);
};
