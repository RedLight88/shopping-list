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

  button.addEventListener('click', remove);
}

function createButton() {
  const button = document.createElement('button');
  button.className = 'removeBtn';
  button.textContent = 'x';
  return button;
}

function remove(e) {
  if (e.target.classList.contains('removeBtn')) {
    e.target.parentElement.remove();
  }
}

addBtn.addEventListener('click', addItem);
