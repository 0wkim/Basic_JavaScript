'use strict';

// 자바스크립트는 동기적(synchronous) -> 정해진 순서에 맞게 코드가 실행
// hoisting: 선언들이 제일 위로 올라가는 것
// async: 언제 코드가 실행될 지 예측할 수 없는 것 (비동기적)


console.log('1');
setTimeout(() => console.log('2'), 1000); // 정해진 시간이 지나면 callback 함수 호출 (1000ms = 1초)
console.log('3');


// 1. Synchronous callback
function printImmediately(print) { // 함수의 선언이 맨 위
  print(); 
}
printImmediately(() => console.log('hello'));


// 2. Asynchronous callback
function printWithDelay(print, timeout) { // 함수 선언은 맨 위 (hoisting)
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);


// Callback Hell example
// - 가독성 떨어짐
// - 디버깅이 어려움
// - 유지보수가 어려움
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);