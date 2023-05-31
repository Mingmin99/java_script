const test = {
    foo: function () {
        console.log(this)
        //this, 자신의 메소드
        console.log("foo 메소드의 this ")
    },
    bar: () => {
        console.log("bar 메소드의 this ")
        //함수도 객쳉다? 자바스크립트 특징
        //화살표함수는 자신의 메소드를 가지고 있는 상위 객체를( test )
        console.log(this) //자체 함수으 객체가 나옴
    }
}

// 메소드를 호출합니다.
test.foo();
test.bar();