let student={name : "심민정", major:"데이터분석",grade:1};
console.log(student);
console.log(typeof(student));

// 객체 -> 문자열로 변환
let jsonstr=JSON.stringify(student);
console.log(jsonstr);
console.log(typeof(jsonstr));

// 문자열 -> 객체로 변환
let obj=JSON.parse (jsonstr);
console.log(obj);
console.log(typeof(obj));