
let btn = document.querySelector('.btn');
let btn2 = document.querySelector('.btn2');
let elem = document.querySelector('.box');

let timerId;
let i = 0;
function myAnimation2(){
    let pos = 300;
    let id2 = setInterval(frame2, 10);
    function frame2(){
        if(pos == 0){
            clearInterval(id2);
        }
        else{
            pos--;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
function myAnimation(){
    let pos = 0;
let id = setInterval(frame, 10);
function frame(){
    if(pos == 300){
        clearInterval(id);
    }
    else{
        pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';
    }
}
}
btn.addEventListener('click', myAnimation);
btn2.addEventListener('click', myAnimation2);

// btn.addEventListener('click', () =>{
// //  let timerId = setTimeout(logger, 2000);
//   timerId = setInterval(logger, 1000);
// });

 

// function logger (){
//     if(i==3){
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }

// let id = setTimeout(function log(){
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);