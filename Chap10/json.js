'use strict';

// JSON: 플랫폼에 독립적



// 1. Object to JSON
// stringify(obj): 오브젝트를 받아와서 문자열로 변환
let json = JSON.stringify(true);
console.log(json); // true

json = JSON.stringify(['apple', 'banana']); // 오버로딩
console.log(json); // ["apple", "banana"]

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: function () { // 함수는 제외됨
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json); // name, color, size만 json으로 변환

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value; // key가 name이면 ellie, 아니면 해당 value
});
console.log(json);

console.clear();



// 2. JSON to Object
// parse(json)

json = JSON.stringify(rabbit);
console.log(json);

const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump(); 
// obj.jump(); -> 존재하지 않음

console.log(rabbit.birthDate.getDate()); // 29
console.log(obj.birthDate.getDate()); // error