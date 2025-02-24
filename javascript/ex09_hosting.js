// 함수나 변수의 선언부가 호이스팅 된다! 

let num1 = 10;
console.log(num1);

// var num2;
console.log(num2);
// var로 선언시 위에서 변수를 호출해도 오류가 발생하지는 않는다.
// 위의 주석 처럼 변수 사용시 변수가 var로 선언 되는 것과 비슷하게 실행 되기 때문이다.
var num2 = 10;

function testHi() {
  console.log("hi~!!");
}
testHi();

sayHello();

// 함수를 변수의 값으로 사용하는 경우는 선언부 아니기때문에 호이스팅이 안된다 
let sayHello = function hi() {
  console.log("hello~~!!!");
}