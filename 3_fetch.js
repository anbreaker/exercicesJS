/*
Fetch API
  blob(): Binary Long Object
  Si ponemos la ruta hacia el archivo podemos leer ese archivo y renderizarlo en pantalla
  URL: Con el objeto URL usando el método createObjectURL(archivo) podemos crear una ruta válida para ver ese archivo
  https://developer.mozilla.org/es/docs/Web/API/URL
*/

const buttonImg = document.getElementById('button-img');
const buttonPdf = document.getElementById('button-pdf');

buttonImg.addEventListener('click', () => {
  fetch('cat.jpg')
    .then((res) => res.blob())
    .then((img) => {
      document.getElementById('img').src = URL.createObjectURL(img);
    });
});

// Habilita el boton See pdf al link descargar
buttonPdf.addEventListener('click', () => {
  fetch('demo.pdf')
    .then((response) => response.blob())
    .then((pdf) => {
      document.getElementById('pdf').href = URL.createObjectURL(pdf);
    });
});
