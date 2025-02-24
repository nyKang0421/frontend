function printArray(start, end) {
  // let isValidNums = typeof start == 'number' && typeof end == 'number';
  // if (!isValidNums) {
  //   console.log("숫자값을 입력하세요");
  //   return;
  // }

  if (isNaN(start) || isNaN(end)) {
    console.log("숫자값을 입력하세요");
    return;
  }

  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }

  let result = '';
  for (let i = start; i <= end; i += 1)
    result += i + " ";
  console.log(result);

}


printArray(1, 5);
// for (let i = 1; i <= 5; i += 1) {
//   console.log(i);
// }
// // 1 2 3 4 5 
printArray(6, 15);
// for (let i = 6; i <= 15; i += 1) {
//   console.log(i);
// }
// // 6 7 8 9 10 11 12 13 14 15 

printArray(15, 4);

printArray('test', 4);
// for (let i = 15; i >= 4; i -= 1) {
//   console.log(i);
// }

// // 4 5 6 7 8 9 10 11 12 13 14 15 