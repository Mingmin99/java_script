let foo = Symbol();
let bar = Symbol();

if(foo === bar) {
    console.log("같습니다.");
} else {
    console.log("유일성 보장으로 서로 다릅니다.")
}