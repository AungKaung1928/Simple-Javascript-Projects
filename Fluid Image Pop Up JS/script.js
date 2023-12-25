// const modal = document.querySelector('.modal');
// const previews = document.querySelectorAll('.gallery img');
// const original = document.querySelector(".full-img");
// const imgText = document.querySelector(".caption");

// previews.forEach((preview) => {
//     preview.addEventListener('click' , () => {
//         modal.classList.add("open");

//     });

// });


const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.gallery img');
const original = document.querySelector('.full-img');
const imgText = document.querySelector('.caption');

previews.forEach((preview) => {
  preview.addEventListener('click', () => {
    modal.classList.add('open');
    const originalSrc = preview.getAttribute('src');
    const altText = preview.alt;
    
    original.src = originalSrc;
    imgText.textContent = altText;
  });
});

modal.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    modal.classList.remove('open');
  }
});
