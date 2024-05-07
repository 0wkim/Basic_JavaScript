'use strict';

// Promise: 비동기적인 수행을 할 때 이용
// State: pending -> fulfilled or rejected



// 1. Producer
// 새로운 프로미스가 만들어질 때 executor라는 함수가 자동적으로 바로 실행
const promise = new Promise((resolve, reject) => {
    // 네트워크 통신, 파일 읽어오기 등은 비동기적으로 처리하는 것이 좋음
    console.log('doing something...');
    setTimeout(() => {
      resolve('ellie');
      // reject(new Error('no network'));
    }, 2000);
  });
  


  // 2. Consumers: then, catch, finally
  promise 
    .then(value => { 
      console.log(value);
    })
    .catch(error => { // 에러 발생 시의 처리
      console.log(error);
    })
    .finally(() => { // 무조건 실행
      console.log('finally');
    });
  


  // 3. Promise chaining
  const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  });
  
  fetchNumber
    .then(num => num * 2) // 2
    .then(num => num * 3) // 6
    .then(num => {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
      });
    })
    .then(num => console.log(num)); // 5
  


  // 4. Error Handling
  const getHen = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve('🐓'), 1000);
    });
  const getEgg = hen =>
    new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });
  const cook = egg =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });
  
  getHen() //
    .then(getEgg)
    .catch(error => {
        return '⭐';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);