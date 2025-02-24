const vartical = document.querySelector('.vartical');
const horizontal = document.querySelector('.horizontal');
const img = document.querySelector('img');
const span = document.querySelector('span');

// img.addEventListener("mousemove", (e) => { // 이미지 기준으로 실행
//   // console.log(e);
//   let x = e.clientX; // 화면에 body 부분만 좌표 : px 
//   let y = e.clientY; // 화면에 body 부분만 좌표 : px 
//   //console.log(`x: ${x} , y:${y}`);
//   let locX = `left: ${x}px;`;
//   let locY = `top: ${y}px;`;

//   img.style.left = x + 'px';
//   img.style.top = y + 'px';

//   vartical.style.cssText = locX;
//   horizontal.style.cssText = locY;
//   span.style.cssText = locX + locY;
//   span.innerHTML = `x: ${x} , y:${y}`;

// })

document.querySelector('body').addEventListener("mousemove", (e) => { // body기준으로 실행
  // console.log(e);
  let x = e.clientX / window.innerWidth * 100; // 화면에 body 부분만 좌표 : % 
  let y = e.clientY / window.innerHeight * 100; // 화면에 body 부분만 좌표 : %
  //console.log(`x: ${x} , y:${y}`);
  let locX = `left: ${x}%;`;
  let locY = `top: ${y}%;`;

  img.style.left = x + '%';
  img.style.top = y + '%';

  vartical.style.cssText = locX;
  horizontal.style.cssText = locY;
  span.style.cssText = locX + locY;
  span.innerHTML = `x: ${parseInt(x)} , y:${parseInt(y)}`;