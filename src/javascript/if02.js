function birthCheck() {
    const date = new Date();
    const currentYear = date.getFullYear();
    let birthYear;
    let age;

    let birthStr;
    let birthNum;
    birthStr = prompt("태어난 년도");
    console.log(birthStr);
    if (birthStr.length == 4) {
        // 4자리년도
        if (birthStr) {
            // 값 우
            console.log("태어난 해" + birthStr);
            birthYear = parseInt(birthStr);
            console.log(birthYear);
            if (!isNaN(birthYear)) {
                //숫자인 경우
                age = currentYear - birthYear + 1;
                if (age < 20) {
                    alert("성인이 아닙니다 ")
                }
                //백틱 es6 문법 
                alert(`${currentYear} 년 현재, ${age}세 입니다`)

            } else {
                //숫자가 아닌 경우
                alert("정확한 년도를 입력해주세요")

            }
        } else {

            //null 
            console.log("태어난 해" + birthStr);
        }


    } else {
        alert("정확한 년도를 입력해주세요")

    }

}


