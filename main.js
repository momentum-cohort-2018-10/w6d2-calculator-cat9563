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
    })
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

var inputLabel = document.getElementById('inputLabel');

function clickBtn(obj) {

    var clicked = obj.innerHTML;

    if (clicked == 'equals') {
        inputLabel.innerHTML = eval(inputLabel.innerHTML);
    } else if (clicked == 'C') {
        inputLabel.innerHTML = '0'
    } else {
        if (inputLabel.innerHTML == '0') {
            inputLabel.innerHTML = clicked
        } else {
            inputLabel.innerHTML += clicked
        }
    }
}


// gq(selector).addEventListener('click', function(){
//     gq('inputLabel').innerText += num
// gq('seven').addEventListener('click', function () {
//     gq('inputLabel').innerText += '7'
// })

