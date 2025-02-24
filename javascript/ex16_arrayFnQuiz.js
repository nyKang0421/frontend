let cat = {
  kind: '고양이',
  age: 5
};
let dog = {
  kind: '개',
  age: 4
};
let rabbit = {
  kind: '토끼',
  age: 0.5
};
let hamster = {
  kind: '햄스터',
  age: 1,
  eat: function () {
    console.log('해바라기씨를 먹는다 ')
  }
};


let pets = [cat, dog, rabbit, hamster, cat];

// 1. 동물의 kind 가 개 인것을 찾아라
// pets.forEach(n => console.log(typeof n));

let result = pets.find(obj => obj.kind == "개");
console.log(result);

result = pets.filter(obj => obj.kind == "개");
console.log(result);

// 2. 동물의 kind 가 고양이가 아닌것만 빼서 배열로 만들어라

result = pets.filter(obj => obj.kind != "고양이");
console.log(result);

// 3. 총 동물의 평균 나이를 구해라 => 총합 => 갯수로 나누기
result = pets.reduce((p, n) => { // (1, 2), 3 => 1: 누적값, 2: 인자값, 3: 초기값  
  // console.log(p + '/' + n.age);
  return p + n.age;
}, 0)
// result = pets.reduce((sum, obj) => sum+obj.age,0)
let cnt = pets.reduce((cnt) => {
  // console.log(cnt);
  return ++cnt;
}, 0)

console.log(result / pets.length);
console.log(result / cnt);

// 4.동물 나이순으로 내림차순 정렬 : 기존 배열 건드리지 않는다 
result = [...pets].sort((a, b) => a.age > b.age ? -1 : 1);
console.log(result);

// some, every

// some => 무조건 하나라도 그 값이 존재하면 즉시 종료 true
cnt = 0;
result = pets.some(obj => {
  cnt++;
  return obj.kind == '개';
})

console.log(result);
console.log(cnt);

console.log('---------------------')
// every => 리턴 값이 false 이면 즉시 종료
cnt = 0;
result = pets.every(obj => {
  cnt++;
  return obj.kind == '개';
})

console.log(result);
console.log(cnt);



console.log('---------------------')

cnt = 0;
pets.forEach(obj => {
  cnt += 1;
  if (obj.kind == '개') return true; // return과 상관없이 전체 실행
})

// some 은 돌다가 조건에 해당 되면 다음 요소를 찾지 않지만
// forEach의 경우에는 매 요소 마다 함수를 호출하기 때문에 반복문을 중간에 멈출 수 없다
// 즉 return이 무시 된다고 볼 수 있으며, 무조건 처음 부터 끝까지 한다
