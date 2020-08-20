const fileInput = document.getElementById('file');
const progress = document.getElementById('progress');

/*
fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);

  fileReader.addEventListener('progress', (event) => {
    // console.log(event);
    // console.log(event.loaded);
    // console.log(event.total);
    let percentage = (event.loaded * 100) / event.total;
    progress.style.width = Number.parseInt(percentage) + '%';
  });

  fileReader.addEventListener('loadend', () => {
    progress.style.width = '100%';
    console.log('END');
  });
});
*/

const root = document.documentElement;

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);

  fileReader.addEventListener('progress', (event) => {
    let percentage = (event.loaded * 100) / event.total + '%';
    root.style.setProperty('--bar-widht', percentage);
  });

  fileReader.addEventListener('loadend', () => {
    root.style.setProperty('--bar-widht', '100%');
  });
});
