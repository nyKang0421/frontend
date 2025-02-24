console.log(Math.random()); // 무작위로 1미만의 실수값을 가져옴
console.log(Math.random() * 10); // 10 미만의 실수 (0 ~ 9.xxxxxxx)
//parseInt를 사용하여 정수로 변환
console.log(parseInt(Math.random() * 10)); // 10 미만의 정수 (0 ~ 9)
console.log(parseInt(Math.random() * 10) + 1); // 10 이하의 양수 (1~10)

// 5 ~ 15
let num = parseInt(Math.random() * (15 - 5 + 1)) + 5;
console.log(num);

// 1. 랜덤값을 범위를 외부에서 가져오는 함수 한개 getRandom( 시작값 , 끝값) ;
function getRandom(start, end) {
  if (isNaN(start) || isNaN(end)) {
    console.log("숫자만 가능합니다");
    return;
  }

  if (start > end) {
    console.log("시작값이 끝값 보다 클수 없습니다")
    return;
  }

  return parseInt(Math.random() * (end - start + 1) + start);

}

let rdNum = getRandom(50, 100);
console.log(rdNum);

// 2. 해당 함수를 사용해서  50 ~ 100까지 숫자를 랜덤으로 저장하고 그 수가 짝수인지 홀수인지 출력하는 checkNum 함수
function checkNum(start, end, funcR) {
  // let num = funcR(start)
  // console.log(num);
  // if(funcR(start, end) %2 == 0) return console.log("짝수");
  // console.log("홀수");
  return console.log(funcR(start, end) % 2 == 0 ? "짝수" : "홀수");
}

// 3. 해당 함수를 출력하세요 [문제 1]  => 문제1번 풀고 DM
checkNum(50, 100, getRandom);

//4. 배열을 랜덤으로(-100 ~100) 사이의 숫자를 4개를 저장후에 전부 홀수인지 검사하는 isAllOddNum 함수를 만들고
//   전부 홀수이면 전부 홀수입니다, 전부 홀수가 아닙니다 출력하세요 [문제 2]  => 문제2번 풀고 DM 