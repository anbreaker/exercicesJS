/*
  API drag & drop:
*/

const pendingTask = document.getElementById('pending-tasks');
const finishedTasks = document.getElementById('finished-tasks');

//dataTransfer
//setData: Establece la informacion que queremos compartir
//getData: Establece la informacion que queremos obtener

// pendingTask to finishedTasks
pendingTask.addEventListener('dragstart', (event) => {
  event.dataTransfer.setData('text/plain', event.target.id);
  // console.log(event.dataTransfer.getData('text'));
});

pendingTask.addEventListener('drag', (event) => {
  event.target.classList.add('active');
});

pendingTask.addEventListener('dragend', (event) => {
  event.target.classList.remove('active');
});

// Los dos siguientes van juntos y hay que prevenir el comportamiento
// por defecto del navegador dragover y drop inseparables!!
finishedTasks.addEventListener('dragover', (event) => {
  event.preventDefault();
});

finishedTasks.addEventListener('drop', (event) => {
  event.preventDefault();
  const element = document.getElementById(event.dataTransfer.getData('text'));
  element.classList.remove('active');
  finishedTasks.appendChild(pendingTask.removeChild(element));
});

// finishedTasks to pendingTask
finishedTasks.addEventListener('dragstart', (event) => {
  event.dataTransfer.setData('text/plain', event.target.id);
});

finishedTasks.addEventListener('drag', (event) => {
  event.target.classList.add('active');
});

finishedTasks.addEventListener('dragend', (event) => {
  event.target.classList.remove('active');
});

// Los dos siguientes van juntos y hay que prevenir el comportamiento
// por defecto del navegador dragover y drop inseparables!!
pendingTask.addEventListener('dragover', (event) => {
  event.preventDefault();
});

pendingTask.addEventListener('drop', (event) => {
  event.preventDefault();
  const elementFinsed = document.getElementById(event.dataTransfer.getData('text'));
  elementFinsed.classList.remove('active');
  pendingTask.appendChild(finishedTasks.removeChild(elementFinsed));
});
