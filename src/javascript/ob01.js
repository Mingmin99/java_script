//객체의 선언은 증괄호로 생성할 수 있다
const obj = {
    product: '7D 건조 망고',
    type: '당절임',
    source: '망고',
    from: '필리핀'
};
//객체확인 
console.log(obj);

console.log("---------------");
//프로퍼티 접근 1
console.log(obj.product);
console.log(obj.type);
console.log(obj.source);
console.log(obj.form);

//프로퍼티 접근 2 => 동적으로 프로그래밍 할 때 유리하다
console.log(obj['product']);
console.log(obj['type']);
console.log(obj['source']);
console.log(obj['form']);

//뭐가 유리한가요? 2번이?
let name = "product"
//키 접근을 해야하는데
//간접적으로 쿠션을 통하여 프로퍼티에 접근 할 수 있음
console.group(pbj[name]);

name = "type"; //변수값을 변경합니다.
console.log(obj[name]);