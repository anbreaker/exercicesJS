const alert = document.getElementById('alert');

window.addEventListener('online', (event) => {
  console.log(event);
  setAlert(1);
});

addEventListener('offline', (event) => {
  console.log(event);
  setAlert(0);
});

const setAlert = (status) => {
  alert.classList.remove('alert--online');
  alert.classList.remove('alert--offline');

  status === 0
    ? setTimeout(() => {
        alert.textContent = 'Ups, it seems your are offline';
        alert.classList.add('alert--offline');
      }, 100)
    : setTimeout(() => {
        alert.textContent = 'Great!, you are online Again!';
        alert.classList.add('alert--online');
      }, 100);
};
