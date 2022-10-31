const gridContainer = document.querySelector('#gridContainer')
let color = 'black'
let gridSize = 50
createSketchSquares(gridSize)

function createSketchSquares (divNumber) {
  removeSketchGrid()
  for (let i = 0; i < divNumber; i++) {
    const row = document.createElement('div')
    row.className = 'row'
    gridContainer.appendChild(row);
      for (let j = 0; j < divNumber; j++) {
        const col = document.createElement('div')
        col.className = 'col'
        row.appendChild(col)
      }
  }
  marker(color)
}

function removeSketchGrid () {
  while (gridContainer.firstChild){
    gridContainer.removeChild(gridContainer.firstChild)
  }
}
const col = document.querySelectorAll('.col')

function marker(color) {
  const col = document.querySelectorAll('.col')
  col.forEach((col) => {
    if (color === 'black') {
      col.addEventListener('mouseover', () => col.style.backgroundColor = 'black')
  } else if (color === 'rainbow') {
      col.addEventListener('mouseover', () => col.style.backgroundColor = 'red')
  } else if (color === 'erase'){
    return
  }
  })
  }
// blackButton not working yet
const blackBtn = document.getElementById('blackButton')
blackBtn.addEventListener('click', () => {
  color = 'black'
  marker(color)
})


const rainbow = document.getElementById('rainbow')
rainbow.addEventListener('click', () => {
  color = 'rainbow'
  marker(color)
})


//reset does not apply the current marker setting yet

const reset = document.getElementById('reset')
reset.addEventListener('click', () => {
  createSketchSquares(50)
})
    

const resize = document.getElementById('resize')
resize.addEventListener('click', () => {
  selectGridSize()
})

function selectGridSize () {
  gridSize = prompt ('Please enter a size between 10 and 100')
    if (gridSize === null) {
      return
    } else if (gridSize < 10 || gridSize > 100 || isNaN(gridSize)) {
      alert ('Try again!')
      selectGridSize()
    } 
    createSketchSquares(gridSize)
}