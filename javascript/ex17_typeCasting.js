// 묵시적 타입 변환 == 자동 타입 변환

console.log('1' + 2); // + 연결 연산자
console.log(+'1' + 2); // 첫번째 + 부호 연산자 , 두번째 + 덧샘 연산자
console.log(1 + true); // js에서는 true를 1로 인식 = 2
console.log(1 + false); // js에서는 false를 0으로 인식 = 1
console.log(1 + null); // js에서는 null을 0으로 인식 = 1
console.log(1 + undefined); // = NaN
console.log(1 + ''); // = '1' (문자열)
console.log('1' * 1); // = 1 (숫자)
console.log(!!'x'); // true
console.log(!!''); // false

// 명시적 타입 변환 == 강제적 타입 변환
console.log(Boolean('x')); // true
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean('false')); // true
console.log(Boolean(NaN)); // false
console.log(Boolean(Infinity)); // true
console.log(Boolean(false)); // false
console.log(Boolean(undefined)); //false
console.log(Boolean({})); // true => 주소 값이 있다
console.log(Boolean([])); // true => 주소 값이 있다

console.log('1' == 1); // true
console.log('1' === 1); // false
console.log(NaN == NaN); // false => NaN 비교는 js에서 막혀있다(비교 예외적인 부분)
console.log(isNaN(NaN)); // true
console.log(isNaN(Infinity)); // true

// 문자열 => 읽기 전용 배열
let str = '박연미';
console.log(str[0], str.length);
str[0] = '김'; // 문자열은 부분적으로 수정 불가능
console.log(str); // 박연미

str = '김연미'; // 전체를 재할당

str = ['박', '연', '미'];
console.log(str[0], str.length);
str[0] = '김';
console.log(str); // 김연미
console.log(str.join('')); // 김연미


