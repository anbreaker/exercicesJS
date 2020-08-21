/*
Especificación oficial: 
  https://developer.mozilla.org/es/docs/IndexedDB-840092-dup

  Contenido extra para buscar:
  Método getAll() para obtener todos los registros de la base de datos
  Método clear() para borrar objetos del almacen
  Método deleteDatabase() para borrar la base de datos
  Metodo onBlocked() para bloquear bases de datos en los cambios de version
  Objeto IDBKeyRange para búsquedas en la base de datos
  Método createIndex() para la creación de índices en la base de datos
  Versionado de bases de datos
  Libreria indexedDB
      https://dexie.org/
*/
// const iDB = indexedDB; || const indexedDB = window.indexedDB;
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

    const objectStore = db.createObjectStore('tasks', {keyPath: 'taskTitle'});
  };

  request.onerror = (error) => {
    console.log('Error', error);
  };

  const addData = (data) => {
    const transaction = db.transaction(['tasks'], 'readwrite');
    const objectStore = transaction.objectStore('tasks');
    const request = objectStore.add(data);
    readData();
  };

  const getData = (key) => {
    const transaction = db.transaction(['tasks'], 'readwrite');
    const objectStore = transaction.objectStore('tasks');
    const request = objectStore.get(key);

    request.onsuccess = () => {
      form.task.value = request.result.taskTitle;
      form.priority.value = request.result.taskPriority;
      form.button.dataset.action = 'update';
      form.button.textContent = 'Update Task';
    };
  };

  const updateData = (data) => {
    const transaction = db.transaction(['tasks'], 'readwrite');
    const objectStore = transaction.objectStore('tasks');
    const request = objectStore.put(data);
    request.onsuccess = () => {
      form.button.dataset.action = 'add';
      form.button.textContent = 'Add Task';
      readData();
    };
  };

  const deleteData = (key) => {
    const transaction = db.transaction(['tasks'], 'readwrite');
    const objectStore = transaction.objectStore('tasks');
    const request = objectStore.delete(key);
    request.onsuccess = () => {
      readData();
    };
  };

  const readData = () => {
    const transaction = db.transaction(['tasks'], 'readonly');
    const objectStore = transaction.objectStore('tasks');
    const request = objectStore.openCursor();
    const fragment = document.createDocumentFragment();

    request.onsuccess = (event) => {
      const cursor = event.target.result;
      if (cursor) {
        // console.log(cursor.key);
        // console.log(cursor.value);
        const taskTitle = document.createElement('p');
        taskTitle.textContent = cursor.value.taskTitle;
        fragment.appendChild(taskTitle);

        const taskPriority = document.createElement('p');
        taskPriority.textContent = cursor.value.taskPriority;
        fragment.appendChild(taskPriority);

        const taskUpdate = document.createElement('button');
        taskUpdate.className += 'button';
        taskUpdate.dataset.type = 'update';
        taskUpdate.dataset.key = cursor.key;
        taskUpdate.textContent = 'Update';
        fragment.appendChild(taskUpdate);

        const taskDelete = document.createElement('button');
        taskDelete.className += 'button';
        taskDelete.textContent = 'Delete';
        taskDelete.dataset.type = 'delete';
        taskDelete.dataset.key = cursor.key;
        fragment.appendChild(taskDelete);

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

    if (event.target.button.dataset.action === 'add') {
      addData(data);
    } else if (event.target.button.dataset.action === 'update') {
      updateData(data);
    }

    form.reset();
  });

  tasks.addEventListener('click', (event) => {
    if (event.target.dataset.type === 'update') {
      getData(event.target.dataset.key);
    } else if (event.target.dataset.type === 'delete') {
      deleteData(event.target.dataset.key);
    }
  });
}
