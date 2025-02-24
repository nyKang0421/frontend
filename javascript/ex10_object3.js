// 자바스크립트 : 객체, 함수

// 함수 : 일반 값처럼 사용 가능하다 

// 함수와 메서드(객체 안에 있는 함수를 메서드 )

function sayHi() {
  console.log(" hi");
}
sayHi();

let dog = {
  name: "바둑이",
  age: 4,
  owner: { name: "제임스" },
  callOwner: function () {
    console.log(`${this.owner.name}야 놀아줘~!!`);
  }
}

dog.callOwner();

let nameKey = "name";
let nameValue = "흰둥이"
let ageKey = "age";
let ageValue = 3;

const dog2 = {
  [nameKey]: nameValue, // 외부 동적변수 사용시 [] 안에 값을 넣어서 사용
  [ageKey]: ageValue
}

console.log(dog2);

//객체 안에 있는 모든 key값 가져오기 
console.log(Object.keys(dog2));
//객체 안에 있는 모든 value값 가져오기 
console.log(Object.values(dog2));

let name = "바니";
let age = 2;
let toy = ['당근', '나무뿌리', '챗바퀴'];

// const rabbit = {
//   'name': name,
//   'age': age,
//   'toy': toy
// }
// console.log(rabbit);

// 변수안에 넣을시 기존에 정의된 변수(key)를 넣으면 자동으로 값이 들어가 정의 된다.
let rabbit = {
  name, age, toy
}
console.log(rabbit);