const student = {

}; //빈 객체

//동적으로 프로퍼티 만들자
student.name = '박태현'
student.hobby = '술먹기'
student.dream = '꿈의 개발자'

console.log(student);

//속성 삭제
delete student.hobby;
console.log(student);
