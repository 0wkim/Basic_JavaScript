'use strict';

// 2. Variable
// let (added in ES6)

let globalName = 'global name';

{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}

console.log(name); // 출력 X
console.log(globalName);



// 3. Constants(상수): 값 변경 X -> Immutable
// - reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;



// 4. Variable types

// number type: 모든 숫자
const count = 17; // 정수
const size = 17.1; // 소수점
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);


// special number type: Infinity, -Infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);


// bigInt
const bigInt = 1234567890123456789012345678901234567890n; 
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);


// String
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);

const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);  
console.log('value: ' + helloBob + ', type: ' + typeof helloBob);  


// Boolean
// false: 0, null, NaN, undefined, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);


// Null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);


// Undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);


// Symbol: 고유한 식별자를 만들 때 사용
// value: id
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

// 동일한 Symbol 제작: use 'for'
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true

// '.description'을 통해 항상 String으로 변환
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);


// Object
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21; // 그냥 ellie에는 접근할 수 없음



// 5. Dynamic typing

let text = 'hello';
console.log(text.charAt(0)); // h -> string에서 첫번째 값
console.log(`value: ${text}, type: ${typeof text}`);

text = 1;
console.log(`value: ${text}, type: ${typeof text}`);

text = '7' + 5; // string + string
console.log(`value: ${text}, type: ${typeof text}`);

text = '8' / '2'; // number
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0)); -> error