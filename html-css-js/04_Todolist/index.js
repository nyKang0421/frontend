let $input = document.querySelector("input");
let itemList = [...document.querySelectorAll('.item_name')]
let idx = 2;
$input.addEventListener("keydown", (e) => {
  // console.log(e);
  // 키보드에서 한글를 입력받았을때 이벤트 중복처리 방지 
  // console.log(e.isComposing);
  if (e.isComposing) return;
  if (e.code === 'Enter') {
    // alert($input.value);
    addItem();
    $input.value = '';
  }
})

function addItem() {
  console.log("test")
  const str = document.querySelector('.footer_input').value;
  if (!str || !str.trim()) {
    alert('값을 입력해주세요');
    return;
  }
  if (itemList.find(li => li.innerHTML === str)) {
    alert('이미 존재하는 값입니다');
    return;
  }
  const code = `<li class="item_row" data-id="${++idx}">
          <div class="item">
            <span class="item_name">${str}</span>
            <button class="item_delete"> <i class="fa-solid fa-trash-can" data-id="${++idx}"></i> </button>
          </div>
        </li>`;
  document.querySelector('.items').innerHTML += code;
  itemList = [...document.querySelectorAll('.item_name')];
}

document.querySelector('.footer_btn').addEventListener('click', () => {
  console.log("test");
  addItem();
  $input.value = '';
})




