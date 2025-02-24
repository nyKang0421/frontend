let $input = document.querySelector("input");
let $items = document.querySelector(".items");
let $addBtn = document.querySelector(".footer_btn");
let id = 1;
function checkInputValue() {
  let value = $input.value;
  if (!value.trim()) {
    alert('값을 입력해주세요');
    $input.value = '';
    $input.focus();
    return;
  }
  const nameList = [...document.querySelectorAll('.item_name')];
  // console.log($input.value);
  // console.log(nameList);
  if (nameList.find(span => span.innerHTML.trim() === value)) {
    alert('이미 존재하는 값입니다');
    $input.value = '';
    $input.focus(); // 키보드 입력창이 활성화 
    return;
  }

  $input.value = '';
  $input.focus();
  id += 1;

  return value;
}

function addItemToItems(value) {
  const data = `
      <li class="item_row" data-id='${id}'>
        <div class="item">
          <span class="item_name"> ${value} </span>
          <button class="item_delete"> <i class="fa-solid fa-trash-can" data-id="${id}"></i> </button>
        </div>
      </li>`;
  $items.innerHTML += data;
}

$addBtn.addEventListener('click', () => {
  let value = checkInputValue();
  value && addItemToItems(value);
});
$input.addEventListener("keydown", (e) => {
  // console.log(e);
  // 키보드에서 한글를 입력받았을때 이벤트 중복처리 방지 
  if (e.isComposing) return;
  if (e.code === 'Enter') {
    let value = checkInputValue();
    value && addItemToItems(value);
  }
})

// 아이템 삭제부분 

function deleteItem(id) {
  const delItem = document.querySelector(`.item_row[data-id='${id}']`);
  delItem.remove();
}

$items.addEventListener('click', e => {
  let id = e.target.getAttribute('data-id');
  if (!id) {
    id = e.target.parentElement.getAttribute('data-id');
    // console.log(id);
    // console.log("test1= ", e.target);
    // console.log("test2= ", e.target.parentElement);
    // 아이템을 선택했을때는 제거가 되지 않도록 설정 
    if (e.target.parentElement.classList.value === 'item_row') return;
  }

  id && deleteItem(id);

})