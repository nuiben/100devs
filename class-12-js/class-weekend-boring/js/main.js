// document.querySelector('#check').addEventListener('click', check)

// function check() {

//   const day = document.querySelector('#day').value.toLowerCase();

//   //Conditionals go here
//   if (day === "tuesday" || "thursday" === day){
//     setText("100 Devs Class Tonight!");
//   } else if (day === "saturday" || day === "sunday") {
//     setText('Weekend!')
//   } else {
//     setText('Boring Day');
//   }

// }


// function setText(string){
//   document.getElementById('placeToSee').innerHTML = string;
// }




// Redo 10-2-2023
document.querySelector('#check').addEventListener('click', check)
function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  if (day === 'tuesday' || 'thursday' === day) {
    setText('100 Devs Class Tonight!')
  } else if (day === 'saturday' || day === 'sunday') {
    setText('Weekend!')
  } else {
    setText('Boring Day. . .')
  }
}

function setText(string) {
  document.getElementById('placeToSee').innerHTML = string
}
