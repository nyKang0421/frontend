const dog = {
  name: "바둑이",
  age: 3,
  like: ["뼈", "인형"],
  owner: { name: "박연미" },
  sayHi: function hi() { console.log("왈왈왈!!") },
};

console.log(dog);
console.log(dog.name);
console.log(dog.owner.name);
dog.sayHi;//출력안됨
console.log(dog.saHi);
dog.sayHi(); // 함수 출력시에는 괄호를 붙여서 호출
//dog.hi();

// 얕은 복사 => 같은 주소값을 공유한다
const dog2 = dog;
dog2.name = "개똥이";

console.log(dog);
console.log('-------------------------')
console.log(dog2);

// 깊은 복사 => 새로운 주소값을 만들어서 안에 있는 값을 전부 복사
const dog3 = { ...dog2 };
dog3.name = "백구";

console.log(dog2);
console.log('-------------------------')
console.log(dog3);