let list = [];
const display = document.getElementById('display');
let verify = true;
let on = false;
let count = 0;
let memory;

function findNum(digit) {
    if(!on) return;

    if(!verify)
        clearAll()

    verify = true
    let writer = document.createElement('div')
    writer.innerHTML = digit
    display.appendChild(writer)
    list.push(digit)
}

function calculate() {
    if(!on) return;

    let indexTimes = list.indexOf('X')
    list[indexTimes] = '*'
    let indexDivide = list.indexOf('÷')
    list[indexDivide] = '/'
    let indexPercentage = list.indexOf('%')
    list[indexPercentage] = '/100'

    let concatList = list.join('')
    display.innerHTML = memory = eval(concatList)
    display.style.overflowX = 'auto'
    verify = false
}

function turnOn() {
    on = true;
}

function turnOff() {
    clearAll()
    on = false
}

function clearAll() {
    if(!on) {
        turnOn()
        return;
    }

    display.innerHTML = " "
    list.clear()
    verify = true
    display.style.overflowX = 'hidden'
}

function reset() {
    display.removeChild(display.lastChild)
}

function recallMemory() {
    list.clear();
    list.push(memory)
}






