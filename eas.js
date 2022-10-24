const gridContainer = document.querySelector('#gridContainer')
let divNumber = 256;
for (let i = 0; i < (divNumber); i++) {
    const div = document.createElement('div')
    div.classList.add('pixel')
    gridContainer.appendChild(div);
  }

const pixel = document.querySelectorAll('.pixel')
pixel.forEach((pixel) => {
  pixel.addEventListener('mouseover', () => {
    pixel.style.backgroundColor = 'black'
  })
})

function selectGridSize () {
  gridSize = prompt ('Please enter a size between 10 and 100')
    if (gridSize === null) {
      return
    } else if (gridSize < 10 || gridSize > 100 || isNaN(gridSize)) {
      alert ('Try again!')
      selectGridSize()
    } 
    divNumber = (gridSize ** 2)
}

const resize = document.getElementById('resize')
resize.addEventListener('click', () => {
  selectGridSize()
})


//next steps: find out how to replace the drawing grid when user enters new number