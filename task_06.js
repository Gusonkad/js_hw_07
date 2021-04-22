// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// // Для добавления стилей, используй CSS-классы valid и invalid.

// #validation - input {
//    border: 3px solid #bdbdbd;
// }
//  #validation - input.valid {
//    border - color: #4caf50;
// }
//  #validation - input.invalid {
//    border - color: #f44336;
// }

// Один вариант

// let inputVal = document.getElementById("validation-input");
// inputVal.setAttribute("style", "border: 3px solid #bdbdbd");

// let totalLenght = inputVal.getAttribute("data-length");
// let intTotallenght = parseInt(totalLenght, 6);

// inputVal.onclick = () => {
//    if (inputVal.value.length === +intTotallenght) {
//       inputVal.classList.remove('invalid');
//       inputVal.classList.add('valid');
//       inputVal.setAttribute("style", "border-color:#4caf50");
//    }
//    else {
//       inputVal.classList.remove('valid');
//       inputVal.classList.add('invalid');
//       inputVal.setAttribute("style", "border-color:#f44336");
//    }

// };

// Ворой вариант

const inputVal = document.getElementById("validation-input");
inputVal.setAttribute("style", "border: 3px solid #bdbdbd");

const totalLenght = inputVal.dataset.length;

const input = document.querySelector('input');
inputVal.addEventListener('focus', a => {
   const text = a.target.value;
   if (text.length === +totalLenght) {
      inputVal.classList.remove('invalid');
      inputVal.setAttribute("style", "border: 3px solid #4caf50");
      inputVal.classList.add('valid');
   } else {
      inputVal.classList.remove('valid');
      inputVal.setAttribute("style", "border: 3px solid #f44336");
      inputVal.classList.add('invalid');
   }
});
