'use strict';



// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];



// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);
console.clear();



// 3. Looping over an array

// for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for of
for (let fruit of fruits) {
  console.log(fruit);
}

// forEach
fruits.forEach((fruit) => console.log(fruit)); // fruit의 value들 마다 내가 전달한 console.log() 행위를 동작



// 4. Addtion, deletion, copy

// push: 맨 뒤에 아이템 추가
fruits.push('🍓', '🍑');
console.log(fruits);

// pop: 맨 뒤의 아이템 삭제
const poped = fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: 맨 앞에 아이템 추가
fruits.unshift('🍓', '🍋');
console.log(fruits);

// shift: 맨 앞에서부터 아이템 삭제
fruits.shift();
fruits.shift();
console.log(fruits);
// shift, unshift는 pop, push보다 훨씬 느림
// 다음 인덱스들을 앞으로 땡겨오는 과정이 필요하기 때문

// splice: 인덱스를 이용해서 아이템 삭제
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1, 1); // [1]부터 1개 삭제
console.log(fruits);
fruits.splice(1, 1, '🍏', '🍉'); // [1]부터 1개가 삭제 된 후, 그 자리에 사과와 수박 추가
console.log(fruits);

// 배열 두개 합치기 (.concat)
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);



// 5. Searching

// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🥥'));
// 해당하는 인덱스가 없으면 -1 출력

// includes (T/F)
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥥'));

// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🥥')); // 맨 마지막에 나온 코코넛의 인덱스 번호 출력