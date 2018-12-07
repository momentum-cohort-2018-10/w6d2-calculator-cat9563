function q (selector) {
    return document.querySelector(selector)
}

function qs (selector) {
    return document.querySelectorAll(selector)
}

function gq (selector){
    return document.getElementById(selector)
}

function num_but(selector, num){
    gq(selector).addEventListener('click', function(){
        gq('inputLabel').innerText += num
        equal()
    })
}

function equal() {
    gq('inputLabel').innerText = eval(gq('inputLabel').innerText)
}


num_but('seven','7')
num_but('eight','8')
num_but('nine','9')
num_but('astrec','*')
num_but('four','4')
num_but('five','5')
num_but('six','6')
num_but('minus','-')
num_but('one','1')
num_but('two','2')
num_but('three','3')
num_but('plus','+')
num_but('zero','0')
num_but('decimal','.')
num_but('equals','=')
num_but('div','/')
num_but('C','AC')


// function clickBtn(obj) {

//     var clicked = obj.innerHTML;

//     if (clicked == 'equals') {
//         gq('inputLabel').innerHTML = eval(gq('inputLabel').innerHTML);
//     } else if (clicked == 'C') {
//         gq('inputLabel').innerHTML = '0'
//     } else {
//         if (gq('inputLabel').innerHTML == '0') {
//             gq('inputLabel').innerHTML = clicked
//         } else {
//             gq('inputLabel').innerHTML += clicked
//         }
//     }
// }
//var inputLabel = document.getElementById('inputLabel');

// gq(selector).addEventListener('click', function(){
//     gq('inputLabel').innerText += num
// gq('seven').addEventListener('click', function () {
//     gq('inputLabel').innerText += '7'
// })

