var list = []
const display = document.getElementById('display')
var verify = true

function findNum(a) {
    if(verify == false) {
        clearAll()
    }

    verify = true
    let writer = document.createElement('div')
    writer.innerHTML = a
    display.appendChild(writer)
    list.push(a)

}

function calculate() {
    let indexTimes = list.indexOf('X')
    list[indexTimes] = '*'
    let indexDivide = list.indexOf('÷')
    list[indexDivide] = '/'
    console.log(list)
    concatList = list.join('')
    let result = eval(concatList) 
    display.innerHTML = result
    display.style.overflowX = 'auto'

    verify = false
}

function clearAll() {
    display.innerHTML = " "
    list = []
    console.log(list)
    verify = true
    display.style.overflowX = 'hidden'
}

function reset() {
    display.removeChild(display.lastChild)
}






