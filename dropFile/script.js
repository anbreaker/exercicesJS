const fileInput = document.getElementById('file');
const dropzone = document.getElementById('drop-zone');

dropzone.addEventListener('click', () => fileInput.click());

dropzone.addEventListener('dragover', (event) => {
  event.preventDefault();
  dropzone.classList.add('drop-zone--active');
});

dropzone.addEventListener('dragleave', (event) => {
  event.preventDefault();
  dropzone.classList.remove('drop-zone--active');
});

dropzone.addEventListener('drop', (event) => {
  event.preventDefault();
  fileInput.files = event.dataTransfer.files;
  console.log(fileInput.files);
});

fileInput.addEventListener('change', (event) => {
  console.log(fileInput.files);
});
