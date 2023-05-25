
const currentYear = 2023;
let birthYear;
let age;

let birthStr;
let birthNum;

// birth = prompt("태어난 년도");
birth = parseInt(prompt("태어난 연도"));

age = currentYear - birthYear + 1;
if(age < 20){
    alert("성인이 아닙니다 ")
}
//백틱 es6 문법 
alert(`${currentYear} 년 현재, ${age}세 입니다`)