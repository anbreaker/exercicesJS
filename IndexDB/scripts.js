// // const iDB = window.indexedDB;
const indexedDB = window.indexedDB;
const form = document.getElementById('form');

if (indexedDB) {
  let db;
  const request = indexedDB.open('tasksList', 1);

  request.onsuccess = () => {
    db = request.result;
    console.log('OPEN', db);
  };

  request.onupgradeneeded = () => {
    db = request.result;
    console.log('Create IndexDataBase', db);

    const objectStore = db.createObjectStore('tasks', {keyPath: 'taskTitle'});
  };

  request.onerror = (error) => {
    console.log(error);
  };

  const addData = (data) => {
    const transaction = db.transaction('tasks', 'readwrite');
    const objectStore = transaction.objectStore('tasks');
    const request = objectStore.add(data);
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = {
      taskTitle: event.target.task.value,
      taskPriority: event.target.priority.value,
    };
    // console.log(data);
    addData(data);
  });
}
