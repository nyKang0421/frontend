const vartical = document.querySelector('.vartical');
const horizontal = document.querySelector('.horizontal');
const img = document.querySelector('img');
const span = document.querySelector('span');

addEventListener('mousemove', (e) => {
  // console.log(e);
  // console.log(e.currentTargettarget);
  // console.log(e.target);
  const x = e.clientX;
  const y = e.clientY;
  // console.log(x);
  // console.log(y);
  vartical.style.left = `${x}px`;
  horizontal.style.top = `${y}px`;
  img.style.left = `${x}px`;
  img.style.top = `${y}px`;
  span.style.left = `${x}px`;
  span.style.top = `${y}px`;
  span.innerHTML = `X:${x}, Y:${y}`;
})