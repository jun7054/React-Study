// 타이머 함수
// setTimeout(() => {
//     console.log('1초마다 실행됩니다.')
// }, i*1000)

// let count = 0;
// setInterval(()=> {
//     console.log(`1초마다 실행됩니다.(${count}번째 시행)`);
//     count++
// }, 1 * 1000);

// =======================================

// 타이머 함수 종료하기
// let id
// let count2 = 0
// id = setInterval(() => {
//     console.log(`1초마다 실행됩니다2(${count2}반째)`);
//     count2++
// }, 1 * 1000);
// console.log(`타이머 id는 ${id}`);
// setTimeout(()=> {
//     console.log(`타이머를 종료합니다.`)
//     clearInterval(id);
// },5*1000);

// =========================================

// 이름 충돌 문제
// 스코프 같은 단계에 있을 경우 무조건 충돌이 일어난다.
// let pi = 3.14
// console.log(`main.js의 pi는${pi}`);

// =========================================

// 엄격 모드
// 문자열을 읽어들인 순간부터 코드를 엄격하게 검사한다.
// 'use strict'
// data = 10;
// console.log(data);

// ==========================================

// 익명 함수와 선언적 함수가 있음, 요즘에는 익명 함수 선호함
// 익명 함수는 기본적으로 순차적인 코드 실행에서 코드가 해당 줄을 읽을때 생성
// let 익명함수
// 익명함수 = function(){
//     console.log('1번째 익명 함수 입니다.')
// }
// 익명함수 = function(){
//     console.log('2번째 익명 함수 입니다.')
// }
// 익명함수();

// // 선언적함수
// 선언적함수();
// function 선언적함수() {
//     console.log('1번째다')
// }
// function 선언적함수() {
//     console.log('2번째다')
// }

// // 선언적함수 + 익명적함수
// 함수 = function(){
//     console.log('익명 함수 입니다.');
// }
// function 함수(){
//     console.log("선언적 함수 입니다.");
// }
// 함수();

// // let, const 같은 키워드를 사용하면 더 안전하게 익명함수를 만들 수 있다.
// let 함수2 = function(){
//     console.log('익명함수 입니다.');
// }
// function 함수2(){
//     console.log("선언함수 입니다.");
// }
// 함수2();

// ==============================================

// 객체
// 19895
// console.log(typeof([]));
// const array = ['사과', '바나나', '감'];


// const product = {
//     제품명 : "건조 망고",
//     유형 : "건조식품",
//     성분 : "망고, 설탕, 색소",
//     원산지 : "필리핀"
// }
// product['제품명'], product['유형'], product['원산지']
// product.제품명, product.유형

// const product2 = {
//     제품명 : "건조 망고",
//     유형 : "건조식품",
//     성분 : "망고, 설탕, 색소",
//     원산지 : "필리핀",
//     기능 : function (맛있음) {}
// }
// product2.기능();


const pet = {
    name : "코코",
//1,   eat : function(food) {
    //     alert(this.name+"은/는"+food+"을/를 먹습니다.")
    // }
// 2,  eat (food) {
    //     alert(this.name+"은/는"+food+"을/를 먹습니다.")
    // }
}
pet.eat(밥);
// 코코는 밥을 먹습니다.

pet.나이 = '2';
pet.종족 = "고양이";
console.log(JSON.stringify(pet, null, 2));

// 게체에서 속성 제거
delete pet.나이;
console.log(JSON.stringify(pet, null, 2));

