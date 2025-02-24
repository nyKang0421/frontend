//scope : 스코프 , 영역 , 부분 

let x = 100;

// 블럭스코프 : 자바의 지역변수도 블럭 스코프다 
{
  let y = 10;
  console.log(x);
}

//console.log(y);

function test() {
  let z = 300;
  console.log("x=", x);
  console.log("z=", z);

}

test();

// let , const => 블럭스코프 : java 동일하다 
// var => 함수 스코프 : java 17 이후부터 var 자료형 타입 사용할 수있다
// var => 이름중복, 키워드 생략 , 호이스팅되서 선언 전에 출력해도 에러 발생 안한다 

{
  var number = 100;
}

console.log(number);

function printTest() {
  var age = 100;
  console.log("age = " + age);
}

// console.log("age = " + age); // var의 경우 해당 함수 내에서만 사용 가능?
// age 내부의 바는 현재 코딩이 작성되는 함수 내 함수에서 선언 하였으므로 외부인 현재 창에서 불러오기 불가능
printTest();