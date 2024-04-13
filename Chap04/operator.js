'use strict';

// 1. String

console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);



// 2. Numeric operators

console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1); 
console.log(1 * 1);
console.log(5 % 2); // 나머지값
console.log(2 ** 3); 



// 3. 증감연산자

let counter = 2;

const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);



// 4. Assignment operators

let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;



// 5. Comparison operators

console.log(10 < 6); 
console.log(10 <= 6); 
console.log(10 > 6);
console.log(10 >= 6); 



// 6. Logical operators: || (or), && (and), ! (not)

const value1 = true;
const value2 = 4 < 2; // false

// || (or)
console.log(`or: ${value1 || value2 || check()}`);
// 앞에서 true값이 나오면, 그 뒤에 값들은 무시 (어짜피 true이기 때문)

// && (and)
console.log(`and: ${value1 && value2 && check()}`);
// 앞에서 false값 나오면, 그 뒤에 값들은 무시 (어짜피 false이기 때문)

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('😱');
  }
  return true;
}

// ! (not)
console.log(!value1);



// 7. Equality

const stringFive = '5';
const numberFive = 5;

// == loose equality (type은 구분하지 않음)
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality (type도 같아야함)
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // false (다른 레퍼런스)
console.log(ellie1 === ellie2); // false (다른 레퍼런스)
console.log(ellie1 === ellie3); // true (같은 레퍼런스)

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false



// 8. Conditional operators: if

// if, else if, else
const name = 'df';
if (name === 'ellie') {
  console.log('Welcome, Ellie!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unkwnon');
}



// 9. Ternary operator: ?

// condition ? value1 : value2;
// condition이 true면 왼쪽 실행(yes), 아니면 오른쪽 실행(no)
console.log(name === 'ellie' ? 'yes' : 'no');



// 10. Switch statement

const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;

  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;

  default:
    console.log('same all!');
    break;
}



// 11. Loops

// while loop: true일 때만 반복
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop: do 부분은 무조건 실행
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);


// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

// let이라는 지역 변수 선언
for (let i = 3; i > 0; i = i - 2) {
  console.log(`inline variable for: ${i}`);
}

// 중첩 for문
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}


// break, continue
// Q1. 짝수만 출력 (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}

// Q2. 8이 되면 break
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}