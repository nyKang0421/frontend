let obj = {};
let obj2 = new Object();

console.log(typeof obj);
console.log(typeof obj2);

obj.name = "테스트1";
obj2["name"] = "테스트2";

console.log(obj);
console.log(obj2);

let num = 10;
num.number = "100";
console.log(typeof num);