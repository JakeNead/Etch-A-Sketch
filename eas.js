const gridContainer = document.querySelector('#gridContainer')

const num = 10
for (let i = 0; i < 256; i++) {
    const div = document.createElement('div')
    div.classList.add('pixel')
    gridContainer.appendChild(div);
  }
