/*
Fetch API
  Para hacer peticiones POST, fetch admite un segundo parámetro.
  fetch(url, {
  method: 'POST',
  body: Los datos que enviamos. 
  Si es un objeto hay que convertirlo con JSON.stringify(datos),
  headers: {
      cabeceras de información sobre lo que estamos enviando
      https://developer.mozilla.org/es/docs/Web/HTTP/Headers
  }
})

  console.log(newPost)
  console.log(JSON.stringify(newPost))
*/

const button = document.getElementById('button');

button.addEventListener('click', () => {
  const newPost = {
    title: 'A new post',
    body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    userId: 1,
  };
  // console.log(newPost);
  // console.log(JSON.stringify(newPost));

  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    // .then((data) => console.log(data));
    .then((data) => {
      console.log(data);
      console.log(data.body);

      jdata = JSON.stringify(data);
      const list = document.getElementById('list');
      const fragment = document.createDocumentFragment();
      for (const r of jdata) {
        const listItem = document.createElement('li');
        listItem.textContent = `${r}`;
        fragment.appendChild(listItem);
      }
      list.appendChild(fragment);
    });
});
