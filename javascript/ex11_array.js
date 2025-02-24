// 배열 활용 함수들 ... 

let fruit = ['바나나', '사과', '포도', "딸기", '샤인머스켓', '사과'];

console.log(fruit.length);
console.log(fruit.indexOf('사과')); // 첫 인덱스 부터 해당 값을 검색해 해당값과 같은 첫번째 인덱스 값을 반환
console.log(fruit.indexOf('사과', 1)); // 입력한 인덱스 부터 값을 검색해 해당 값과 같은 첫번째 인덱스 값을 반환
console.log(fruit.indexOf('사과', 2));
console.log(fruit.indexOf('사과', 0));
console.log(fruit.includes('용과')); // 해당값을 검색해 포함 여부를 boolean 값으로 반환

// 배열 자체 수정 함수 

// 배열 요소 추가 
console.log(fruit.length);
// fruit.push('망고');
console.log(fruit.push('망고')); // 수정된 배열의 길이 값을 반환
console.log(fruit);

fruit.push('수박', '멜론', '용과');
console.log(fruit.push('수박', '멜론', '용과'));
console.log(fruit);

fruit.unshift('복숭아'); // 제일 앞에 변수를 추가
console.log(fruit);

// 배열 요소 삭제 


console.log(fruit.pop()); // 제일 마지막 변수를 삭제 : 리턴 값은 마지막 값
console.log(fruit);

console.log(fruit.shift()); // 제일 처음 변수를 삭제 : 리턴 값은 제일 처음 값
console.log(fruit);

// 배열 자르기 (시작인덱스 , 끝인덱스 -1 )
console.log(fruit.splice(4)); // 해당 인덱스부터 값을 잘라준다 두 수면 시작 부터 끝의 앞까지 잘라준다.
console.log(fruit);

// 새로운 배열 만드는 함수 

fruit = ['바나나', '사과', '포도', "딸기", '샤인머스켓', '사과'];

console.log(fruit.slice(-3)); //음수이면 뒤에서 부터 가지고 온다

let addFruit = ['망고'];
let temp1 = addFruit.concat(fruit);
console.log(temp1);

let temp2 = [...fruit, ...addFruit]; // [...함수명]은 함수를 깊은 복사하여 가지고 온다는 의미
console.log(temp2);

console.log(temp2.join()); // 원하는 값으로 값을 만들어 가지고 오는 의미
console.log(temp2.join('/')); // ()안에 넣은 값을 구분자로 사용, 없으면 default 값으로 ,가 적용

let temp3 = [...fruit].sort();
console.log(temp3);
temp3[0] = '망고';
console.log(fruit);

let temp4 = [1, 9, 4, 7, 3, 100];
let temp5 = [...temp4].sort((a, b) => a < b ? -1 : 1); // sort는 문자를 정렬 하므로 숫자를 판별하는 별도의 내용이 필요
console.log(temp5);
console.log(temp5.reverse());