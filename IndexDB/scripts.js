// // const iDB = window.indexedDB;
const indexedDB = window.indexedDB;
const form = document.getElementById('form');
const tasks = document.getElementById('tasks');

if (indexedDB) {
  let db;
  const request = indexedDB.open('tasksList', 1);

  request.onsuccess = () => {
    db = request.result;
    console.log('OPEN', db);
    readData();
  };

  request.onupgradeneeded = () => {
    db = request.result;
    console.log('Create IndexDataBase', db);

    const objectStore = db.createObjectStore('tasks', {autoIncrement: true});
  };

  request.onerror = (error) => {
    console.log(error);
  };

  const addData = (data) => {
    const transaction = db.transaction(['tasks'], 'readwrite');
    const objectStore = transaction.objectStore('tasks');
    const request = objectStore.add(data);
    readData();
  };

  const readData = () => {
    const transaction = db.transaction(['tasks'], 'readonly');
    const objectStore = transaction.objectStore('tasks');
    const request = objectStore.openCursor();

    const fragment = document.createDocumentFragment();

    request.onsuccess = (event) => {
      const cursor = event.target.result;
      if (cursor) {
        // console.log(cursor.value);
        const taskTitle = document.createElement('p');
        taskTitle.textContent = cursor.value.taskTitle;
        fragment.appendChild(taskTitle);

        const taskPriority = document.createElement('p');
        taskPriority.textContent = cursor.value.taskPriority;
        fragment.appendChild(taskPriority);

        cursor.continue();
      } else {
        console.log('No more data');
        console.dir(fragment);
        tasks.textContent = '';
        tasks.appendChild(fragment);
      }
    };
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
