'use strict';


// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(','); // join: 원하는 구분자를 이용해서 문자열로 출력 가능
    console.log(result);
  }
  

  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',', 3); // split: 구분자를 통해서 각각의 요소를 배열의 아이템으로 넣어줌 (원하는 개수만큼 설정 가능)
    console.log(result);
  }
  

  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse(); // reverse: 순서를 거꾸로 변경 (배열 자체의 인덱스를 변화시킴)
    console.log(result);
    console.log(array);
  }
  

  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5); // slice: [2]부터 [4]까지의 아이템만 return해서 받아옴
    console.log(result);
    console.log(array);
  }
  

  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];


  // Q5. find a student with the score 90
  {
    const result = students.find((student) => student.score === 90); // find: 점수가 90인 학생을 return
    console.log(result);
  }
  

  // Q6. make an array of enrolled students
  {
    const result = students.filter((student) => student.enrolled); // filter: 등록된 학생들만 return 
    console.log(result);
  }
  

  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    const result = students.map((student) => student.score); // map: 배열안의 요소들을 원하는 것으로 대체하여 return
    console.log(result);
  }
  

  // Q8. check if there is a student with the score lower than 50
  {
    console.clear();
    const result = students.some((student) => student.score < 50); // some: 조건에 해당하는 것이 하나라도 존재하면 true return (T/F)
    console.log(result);
  
    const result2 = !students.every((student) => student.score >= 50); // every: 배열의 모든 요소가 조건을 충족시켜야 true return (T/F)
    console.log(result2);
  }
  console.clear();


  // Q9. compute students' average score
  {
    const result = students.reduce((prev, curr) => prev + curr.score, 0); // reduce: 배열에 있는 모든 요소들의 값을 누적 (sum)
    // 0부터 시작
    // reduceRight: 뒤에서부터 시작
    console.log(result / students.length); 
  }
  

  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    const result = students
      .map((student) => student.score) // 점수로 새로운 배열 생성
      .filter((score) => score >= 50) // 점수가 50점 이상인 학생만
      .join(); // 문자열로 출력
    console.log(result);
  }
  

  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    const result = students
      .map((student) => student.score)
      .sort((a, b) => a - b) // 점수를 오름차순으로 정렬 (마이너스 값이 리턴 되면 a가 b보다 작다고 간주, b가 뒤에 배치)
      .join();
    console.log(result);
  }