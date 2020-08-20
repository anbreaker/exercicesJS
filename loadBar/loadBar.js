const fileInput = document.getElementById('file');
const progress = document.getElementById('progress');

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);
});
