// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

let nameInput = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");

nameInput.oninput = () => {
   switch (nameInput.value === '') {
      case 1: (nameOutput.innerHTML) = 'незнакомец';
         break;
      default: nameOutput.innerHTML = nameInput.value;
   }
}
// let nameInput = document.getElementById("name-input");
// let nameOutput = document.getElementById("name-output");

// nameInput.oninput = function () {
//    if (nameInput.value === '') {
//       nameOutput.innerHTML = 'незнакомец';
//    } else {
//       nameOutput.innerHTML = nameInput.value;
//    }
// }