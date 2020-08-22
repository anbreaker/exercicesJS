const boxes = document.querySelectorAll('.box');

const callback = (entries) => {
  // console.log(entries);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target.id, 'Is isIntersecting');
    }
  });
};

const options = {
  // rooot:
  // rootMargin: '100px',
  threshold: 0.25,
};

const observer = new IntersectionObserver(callback, options);
boxes.forEach((element) => observer.observe(element));
