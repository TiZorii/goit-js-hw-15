function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxesDiv = document.querySelector('#boxes');

createButton.addEventListener('click', () => {
  const amount = input.value;

  createBoxes(amount);
});

destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const baseSize = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = baseSize + i * 10;
    const color = getRandomHexColor();

    box.style.width = size + 'px';
    box.style.height = size + 'px';
    box.style.backgroundColor = color;

    boxesDiv.appendChild(box);
  }
}

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}
