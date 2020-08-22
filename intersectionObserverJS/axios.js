const images = document.getElementById('images');

const getImages = () => {
  axios('https://picsum.photos/v2/list?page=3&limit=7').then((response) => {
    const fragment = document.createDocumentFragment();
    response.data.forEach((element) => {
      const newImage = document.createElement('img');
      newImage.src = element.download_url;
      fragment.appendChild(newImage);
    });
    images.appendChild(fragment);
    setOberserver();
  });
};

const callback = (entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      getImages();
    } else {
      // quitar animaciones etc...
    }
  });
};

const setOberserver = () => {
  const options = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(images.lastElementChild);
};

getImages();
