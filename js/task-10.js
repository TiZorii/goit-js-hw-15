function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxesDiv = document.querySelector('#boxes');

createButton.addEventListener('click', handleCreateBoxes);
destroyButton.addEventListener('click', handleDestroyBoxes);

function handleCreateBoxes() {
  const amount = input.value;
  createBoxes(amount);
}
function handleDestroyBoxes() {
  destroyBoxes();
}

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}


function createBoxes(amount) {
const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    elements.push(box);
    size += 10;
  }
  boxesDiv.append(...elements);
}

