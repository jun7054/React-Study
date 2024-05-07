// 함수

// 익명함수
const 함수 = function(){
    console.log("지금이니");
}

함수();
console.log(typeof(함수()));
console.log(함수());

// 선언적 함수
function 함수1(){
    console.log("지금이니");
}
함수1();
// let a = prompt("string 문자열을 넣으면");
// console.log(a);

// 매개변수와 리턴값을 가지는 함수
function 함수2(매개변수){
    console.log(매개변수);
    return 매개변수
}

function f(x){
    return x*x
}
console.log(f(3));

// 함수 예시 최솟값을 구하는 함수
function min(array){
    let output = array[0];
    for (const item of array){
        if (output < item){
            output = item;
        }
    }
    return output
}

const testArray = [55,32,11,103,275,330,9];
console.log(testArray+'중에서');
console.log('최대값은 = '+min(testArray) + '입니다.');

// 나머지 매개변수
function sample(...item){
    console.log(item);
}
sample(1,2);
sample(3,4,5,6,7);

// 나머지 매개변수를 사용한 min 함수
function min(...items){
    let output = items;
    for (const item of items){
        if (output>item){
            output = item
        }
    }
    return output
}
console.log(min(33,22,11,55,52));

function sample2 (a,b,...c){
    console.log(sample2(a,b,c));
}

// typeof 연산자를 사용하여 자료형을 알 수가 있다.
// 이 데이터가 배열인지 아닌지 구분을 하고 싶을 때는 Array.isArray()

console.log(Array.isArray(testArray));

// 전개 연산자
// min(52, 273, 33, 22)
// 배열 자료형으로 읽어들었을 때 min 함수를 호출하려면
// const array = [1,2,3,4]

// 함수 이름(...배열)
function prt (...items){
    console.log(items);
}
const array = [1,2,3,4];
console.log("전개 연산자를 사용하지 않을 경우");
prt(array);
console.log("전개 연산자를 사용할 경우");
prt(...array);

// 기본 매개변수
function earning (name, wage = 5000, hour=40){
    console.log(`${name} 님의 정보`);
    console.log(`${name} 님의 급여 ${wage}`);
    console.log(`${name} 님의 근로시간 ${hour}`);
}
earning('장병준');
earning('장병준', 10000);
earning('장병준', 10000, 50);

// 콜백 함수
function callThreeTimes (callback){
    for (let i = 0; i < 3; i++){
        callback(i)
    }
}
function print1 (i){
    console.log(`${i}번째 함수 호출`);
}
callThreeTimes(print1);

// 익명 함수
function callThreeTimes3 (callback){
    for (let i =0; i < 3; i++){
        callback(i);
    }
}
callThreeTimes3(function(i){
    console.log(`${i}번째 함수 호출`);
})

// 콜백 함수를 활용하는 가장 기초적인 함수 forEach()
const numbers = [11, 33, 232, 45, 9];
numbers.forEach(function (value, index, array){
    console.log(`${index}번째 요소 : ${value}`);
})

// map 매소드
let numbers1 = [273, 11, 103, 32, 12];
numbers1 = numbers1.map(function(value,index, array){
    return value * value
});
numbers1.forEach(console.log);

// filter 매소드
const numbers2 = [1,23,2,32,3123];
const evenNumbers = numbers2.filter(function(value){
    return value % 2 === 0 ;
});
console.log(`원래 배열${numbers2}`);
console.log(`짝수 배열${evenNumbers}`);

// 화살표 함수
numbers2.map((value) => value*value);

// 매소드 체이닝
let numbers3 = [0,1,2,3,4,5,6,7,8,9];

numbers3
.filter((value) => value%2 === 0)
.map((value) => value * value)
.forEach((value) => {
    console.log(value);
})