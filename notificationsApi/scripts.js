/* 
  https://developer.mozilla.org/es/docs/Web/API/notification 
  icono:
  https://www.flaticon.es/icono-gratis/en-todo-el-mundo_814513?term=world&page=1&position=18
*/

console.log('hola q tal');

const permissions = document.getElementById('permissions');

permissions.addEventListener('click', () => {
  Notification.requestPermission();
});
