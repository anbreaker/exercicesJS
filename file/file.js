/* 
API File
  Esta API nos sirve para leer archivos que el usuario cargue en la web. 
  Se pueden cargar archivos desde un input de tipo file o desde el objeto 
  DataTransfer de la API Drag&Drop.
  La interfaz más utilizada para interactuar con ella es FileReader
  https://developer.mozilla.org/es/docs/Web/API/FileReader
*/

const fileInput = document.getElementById('file');
const img = document.getElementById('img');
const text = document.getElementById('text');
const images = document.getElementById('images');

// Lectura y mostrar textos
/*
fileInput.addEventListener('change', (event) => {
  // console.log(event.target.files);
  const file = event.target.files[0];
  const fileReader = new FileReader();
  fileReader.readAsText(file);
  fileReader.addEventListener('load', (event) => {
    text.textContent = event.target.result;
  });
});
*/

// Lectura de archivos varios (Ej imagenes)
// Carga simple de imagen
/*
fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.addEventListener('load', (event) => {
    img.setAttribute('src', event.target.result);
  });
});
*/

// Carga multiple de imagenes
fileInput.addEventListener('change', (event) => {
  const files = event.target.files;
  const fragment = document.createDocumentFragment();

  for (const file of files) {
    const fileReader = new FileReader();
    const img = document.createElement('img');
    fileReader.readAsDataURL(file);
    fileReader.addEventListener('load', (event) => {
      img.setAttribute('src', event.target.result);
    });
    fragment.appendChild(img);
  }
  images.appendChild(fragment);
});
