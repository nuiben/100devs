// let total = 0

// document.querySelector('#pumpkin').addEventListener('click', makeZero)
// document.querySelector('#dominosPizza').addEventListener('click', jumanji)
// document.querySelector('#zebra').addEventListener('click', add9)
// document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)
// document.querySelector('#minusFive').addEventListener('click', sub5)

// function makeZero() {
//   total = 0
//   document.querySelector('#placeToPutResult').innerText = total
// }

// function jumanji() {
//   total = total + 3
//   document.querySelector('#placeToPutResult').innerText = total
// }

// function add9() {
//   total = total + 9
//   document.querySelector('#placeToPutResult').innerHTML = total
// }

// function sub2() {
//   total = total - 2
//   document.querySelector('#placeToPutResult').innerHTML = total
// }

// function sub5() {
//   total -= 5
//   document.querySelector('#placeToPutResult').innerHTML = total
// }







// Redo 10-2-2023
let total = 0

document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)
document.querySelector('#minusFive').addEventListener('click', sub5)


function makeZero() {
  total = 0
  setText(total)
}

function jumanji() {
  total += 3
  setText(total)
}

function add9() {
  total += 9
  setText(total)
}

function sub2() {
  total -= 2
  setText(total)
}

function sub5() {
  total -= 5
  setText(total)
}

function setText(string) {
  document.querySelector('#placeToPutResult').innerText = string
}
