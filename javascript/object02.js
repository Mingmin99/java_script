let kim = {
    firstName: "John",
    lastName: "Kim",
    age: 35,
    address: "seoul"
};


console.log(kim);
console.log("이름:" + kim.firstName);
console.log("성:" + kim.lastName);
console.log("나이:" + kim.age);
console.log("주소:" + kim.address);

kim.firstName = "민영";
kim.lastName = "최";
kim.age = 19;


kim = {
    firstName: "민영",
    lastName: "최 ",
    age: 19,
    address: "seoul"
}


console.log(kim);
console.log("이름:" + kim.firstName);
console.log("성:" + kim.lastName);
console.log("나이:" + kim.age);
console.log("주소:" + kim.address);