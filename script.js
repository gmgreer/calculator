let first = ''
let second = ''
let operateChoice = ''

const numberKeys = document.querySelectorAll(".number")
const operatorKeys = document.querySelectorAll(".operator")
const display = document.getElementById("display")
const pointButton = document.getElementById('point')
const equalButton = document.getElementById('equal')
const clearButton = document.getElementById('clear')

numberKeys.forEach(item => {item.addEventListener('click', () => handleNum(item.textContent))})
operatorKeys.forEach(item => {item.addEventListener('click', () => handleOp(item.textContent))})
pointButton.addEventListener('click', addPoint)
equalButton.addEventListener('click', equals)
clearButton.addEventListener('click', clear)


function handleNum (num)  { 
    if (second !== "") {
        second = ""
        display.textContent = ""
    } 
    display.textContent += num
}

function handleOp (op)  {
    if (first === "") {
        first = display.textContent
        operateChoice = op
        display.textContent = ''
    } 
    if (second !== "") {
        first = second
        operateChoice = op
        display.textContent = ''
    }

}

function addPoint() {
    if (display.textContent === "") {
        display.textContent += 0
}
    if(display.textContent.includes('.')) return
    display.textContent += "."
}

function equals() {
    let a = Number(first)
    let b = Number(display.textContent)
    let oper = operateChoice
    second = operate(oper,a,b)
    display.textContent = operate(oper,a,b)

}
function add(a, b) {
    return a + b
  }
  
  function substract(a, b) {
    return a - b
  }
  
  function multiply(a, b) {
    return a * b
  }
  
  function divide(a, b) {
    return a / b
  }
  
  function operate(operator, a, b) {
    switch (operator) {
      case '+':
        return add(a, b)
      case '-':
        return substract(a, b)
      case 'X':
        return multiply(a, b)
      case '÷':
        if (b === 0) return null
        else return divide(a, b)
      default:
        return null
    }
  }


function clear() {
    display.textContent = ""
    first = ''
    second = ''
    operateChoice = ''

}


