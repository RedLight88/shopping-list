// greeting heading
const currentHour = new Date().getHours();
const greet = document.querySelector('.heading h1');
let greeting;
if (currentHour < 12) {
  greeting = 'Good morning';
} else if (currentHour < 18) {
  greeting = 'Good afternoon';
} else {
  greeting = 'Good evening';
}
greet.textContent = greeting;
//

const itemInput = document.querySelector('.input input');
const addBtn = document.querySelector('.input button');
const cnt = document.querySelector('.container ul');

function addItem() {
  if (itemInput.value.trim() === '') {
    alert('Please fill in the input with an item');
    return;
  }
  const li = document.createElement('li');
  const button = createButton();

  li.textContent = itemInput.value;
  li.appendChild(button);
  cnt.appendChild(li);
  itemInput.value = '';
}

function createButton(classes) {
  const button = document.createElement('button');
  button.textContent = 'x';
  return button;
}

addBtn.addEventListener('click', addItem);
