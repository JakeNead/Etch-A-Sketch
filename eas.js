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
  marker('black')
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
    col.addEventListener('mouseover', () => col.style.backgroundColor = color)
  })
  }

const blackBtn = document.getElementById('blackButton')
blackBtn.addEventListener('click', () => {
  marker('black')
})

const rainbowBtn = document.getElementById('rainbow')
rainbowBtn.addEventListener('click', () => {
  randomColor()
})

function randomColor () {
  let rainbowColors = ['red', 'orange', 'yellow','green', 'blue', 'indigo', 'violet']
  const col = document.querySelectorAll('.col')
  col.forEach((col) => {
    col.addEventListener('mouseover', () => col.style.backgroundColor = rainbowColors[Math.floor(Math.random()*7)])
  }
)}

const eraseBtn = document.getElementById('erase')
eraseBtn.addEventListener('click', () => {
  color = 'erase'
  marker('rgb(206, 206, 206)')
})

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