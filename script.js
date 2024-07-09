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
//////////////////////////////////////////////////////

const itemInput = document.querySelector('.input input');
const addBtn = document.querySelector('.input button');
const cnt = document.querySelector('.container ul');

const clear = document.querySelector('.clearAll');
const itemFilter = document.querySelector('.filter');
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

  checkUI();

  button.addEventListener('click', remove);
  clear.addEventListener('click', clearAll);
}

function createButton() {
  const button = document.createElement('button');
  button.className = 'removeBtn';
  button.textContent = 'x';
  return button;
}
function remove(e) {
  if (e.target.classList.contains('removeBtn')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.remove();
    }
  }
}

function clearAll() {
  if (cnt) {
    while (cnt.firstChild) {
      cnt.removeChild(cnt.firstChild);
    }
  } else {
    console.error('The container element is null or not found.');
  }
}

function checkUI() {
  const items = document.querySelectorAll('li');

  if (items.length === 0) {
    clear.style.display = 'none';
    itemFilter.style.display = 'none';
  } else {
    clear.style.display = 'block';
    itemFilter.style.display = 'block';
  }
}

function filterItems(e) {
  const items = document.querySelectorAll('li');
  const text = e.target.value.toLowerCase();

  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();

    if (itemName.indexOf(text) != -1) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

addBtn.addEventListener('click', addItem);
itemFilter.addEventListener('input', filterItems);
