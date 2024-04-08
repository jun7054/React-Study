const myname = "장병준";
const email = "bbqdnrmas@gmail.com";
const hello = "Hello ${myname}??"

const number = 10;
const number2 = 10.55;

const checked = true;
const isshow = false;

let undef;
const obj = {abc:123};
console.log(undef);
console.log(obj.abc);
console.log(obj.xyz);

// null
// 의도적으로 비어있음을 의미하는 데이터
// 아무것도 없는 상태
// 지금은 아무것도 없지만 여기에는 곧 데이터가 들어갈 예정이니
// 메모리 공간을 미리 확보해 놔라
let name = null;
console.log(name);
name = "jh";
console.log(name);

const user = {
    userName:"jh",
    age:31,
    isValid:true
};

console.log(user.userName);
console.log(user.age);
console.log(user.isValid);


const fruits = ['apple','banana','cherry'];
console.log(fruits[0]);

function abc(){
    var aaa = "A";
    console.log(aaa);
}
abc();
console.log(aaa);