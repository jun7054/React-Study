// const boxEL = document.querySelector('.box');
// boxEL.addEventListener('click',function(){
//     console.log("clicked");
//     boxEL.classList.add('active');

//     let hasActive = boxEL.classList.contains('active');
//     console.log(hasActive);

//     boxEL.classList.remove('active');
//     hasActive = boxEL.classList.contains('active');
//     console.log(hasActive);
// });
// console.log(boxEL);

const boxELs = document.querySelectorAll('.box');

// 반복문에서 반복되는 요소
boxELs.forEach(function(boxEL,index){
    console.log(boxEL,index);
})

