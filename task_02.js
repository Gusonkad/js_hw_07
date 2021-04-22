// Задание 2
// В HTML есть пустой список ul#ingredients.
// В JS есть массив строк.
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
// после чего вставит все li за одну операцию в список ul.ingredients. 
// // Для создания DOM-узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ulList = document.getElementById('ingredients');
const allIngredients = ingredients.map(ingredient => {
  let li = document.createElement('li');
  li.innerHTML = ingredient;
  ulList.append(li);
  return ingredient;
}, []);

console.log(allIngredients);
