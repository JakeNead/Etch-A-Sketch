const gridContainer = document.querySelector('#gridContainer')

createSketchSquares(16)

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
 black()
}

function removeSketchGrid () {
  while (gridContainer.firstChild){
    gridContainer.removeChild(gridContainer.firstChild)
  }
}
const col = document.querySelectorAll('.col')

function black() {
  const col = document.querySelectorAll('.col')
  col.forEach((col) => {
    col.addEventListener('mouseover', () => col.style.backgroundColor = 'black')
  })
}
//erase button still not working
function erase () {
  const erase = document.getElementsByClassName('erase')
  const col = document.querySelectorAll('.col')
  col.forEach((col) => {
    erase.addEventListener('click', () => col.style.backgroundColor = 'white')
    })
  }

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