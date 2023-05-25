let userNumber = prompt("숫자를 입력하세요");
console.log(userNumber);

if(userNumber != null){
    userNumber = parseInt(userNumber);
    (userNumber % 2 == 0 ) ? alert(`${userNumber} : 짝수`) : alert(`${userNumber} : 홀수`);

}