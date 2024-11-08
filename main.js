let list = [];
const display = document.getElementById('display');
let verify = true;
let on = false;
let count = 0;
let memory = '';
let element = document.getElementById("memo");
element.hidden = true;
function findNum(digit) {
    if(!verify)
        clearAll();

    verify = true;
    let writer = document.createElement('div');
    writer.innerHTML = digit;
    display.appendChild(writer);
    list.push(digit);
}

function calculate() {

    let indexTimes = list.indexOf('X');
    list[indexTimes] = '*';
    let indexDivide = list.indexOf('÷');
    list[indexDivide] = '/';
    let indexPercentage = list.indexOf('%');
    list[indexPercentage] = '/100';

    display.innerHTML = memory = eval(list.join(''));
    display.style.overflowX = 'auto';
    verify = false;
}

function clearAll() {
    display.innerHTML = " "
    list = []
    verify = true
    display.style.overflowX = 'hidden'
}

function reset() {
    display.removeChild(display.lastChild)
}

function recallMemory() {
    count++;

    if(count === 1) {
        clearAll();
        list.push(String(memory));
        let writer = document.createElement('div');
        writer.innerHTML = String(memory);
        display.appendChild(writer);
        element.hidden = false;
    } else if(count === 2) {
        memory = '';
        count = 0;
        element.hidden = true;
    }
}

function calcMinusMemory() {
    list.unshift(memory, '-');
    calculate();
}

function calcPlusMemory() {
    list.unshift(memory, '+');
    calculate();
}

function calcSqrt() {
    let num = eval(list.join(''));
    let sqrt = Math.sqrt(num);
    clearAll();
    let writer = document.createElement('div');
    writer.innerHTML = String(sqrt.toFixed(2));
    display.appendChild(writer);

}






