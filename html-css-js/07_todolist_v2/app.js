const titleDom = document.querySelector('#title');
const contentDom = document.querySelector('#content');
const addBtnDom = document.querySelector('#addBtn');
const garbageDom = document.querySelector('#garbage');
const listDom = document.querySelector('#list');
// const itemDom = document.querySelector('#item');

let dataList = [];
let cnt = 0;

class App {
  constructor() {
    this.listDom = document.querySelector('#list');
    // console.log("생성자")
    this.init();
  }

  init() {
    this.listDom.innerHTML = '';
    // console.log("시작")
    if (!localStorage.getItem('dataList')) {
      // addPrint("현재 게시물이 없습니다", '내용을 입력해 주세요')
      return;
    }
    let temp = localStorage.getItem('dataList');
    dataList = JSON.parse(temp);
    cnt = dataList[dataList.length - 1].idx;
    for (let idx in dataList) {
      addPrint(dataList[idx].title, dataList[idx].content);
    }
  }
}

window.addEventListener("load", () => {
  const app = new App();
})

addBtnDom.addEventListener('click', () => {
  let title = titleDom.value;
  let content = contentDom.value;
  if (!title.trim() || !content.trim()) {
    alert("제목, 내용 모두 입력하세요!")
  }
  let temp = { idx: cnt++, title: title, content: content }
  dataList.push(temp);
  // let data =`<div class="item">
  //       <h4 class="title">${title}</h4>
  //       <span class="msg">${content}</span>
  //     </div>`
  addPrint(title, content)
  titleDom.value = '';
  contentDom.value = '';
  saveData();
})

function saveData() {
  localStorage.setItem('dataList', JSON.stringify(dataList));
  console.log(localStorage.getItem('dataList'));
}

function addPrint(title, content) {
  let item = document.createElement('div')
  item.classList.add('item');
  item.setAttribute('draggable', true)
  let h4 = document.createElement('h4')
  h4.classList.add('title');
  h4.innerHTML = title;
  let span = document.createElement('span')
  span.classList.add('msg');
  span.innerHTML = content;
  item.appendChild(h4);
  item.appendChild(span);
  listDom.appendChild(item);
}

let itemList = [...document.querySelectorAll('.item')];

garbageDom.addEventListener('dragover', e => e.preventDefault());
itemList.forEach(item => {
  if (!e.target.innerText) return;
  e.dataTransfer.setData()

})