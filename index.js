const board = document.querySelector('.board')
const promptSquareNumberBtn = document.querySelector('#squareNumber-btn')
const totalBoardDimention = 420
let gridItem
let gridNumber = 10
let mousoverCount = 0
let colorMode = 'single'
let radios = document.getElementsByName('colorMode')

radios.forEach((radio) => {
  radio.addEventListener('click', e => colorMode = e.currentTarget.value)
})

board.style.width = `${totalBoardDimention}px`
board.style.height = `${totalBoardDimention}px`

createGrid(board, gridNumber)

promptSquareNumberBtn.addEventListener('click', () => {
  removeBoard()

  do {
    let msg = "Enter number of square per side"
    if(gridNumber > 100) msg = "Enter number under 100"

    gridNumber = prompt(msg)
  } while(gridNumber > 100)

  createGrid(board ,gridNumber)
})

function createGrid(board, gridNumber) {
  const gridItmeSizeWithoutBoarder = (totalBoardDimention - (gridNumber * 2)) / gridNumber

  for(let i = 0; i < (gridNumber ** 2); i++) {
    gridItem = document.createElement('div')
    gridItem.classList.add('grid-item')
    gridItem.style.width = `${gridItmeSizeWithoutBoarder}px`
    gridItem.style.height = `${gridItmeSizeWithoutBoarder}px`
    gridItem.addEventListener('mouseover', changeColor)
          
    board.appendChild(gridItem)
  }
}

function changeColor() {
  if(colorMode === 'single'){
    this.style.background = 'blue'
    return
  }

  let r = Math.floor(Math.random() * 255)
  let g = Math.floor(Math.random() * 255)
  let b = Math.floor(Math.random() * 255)

  mousoverCount += 1

  // after 10 color change, the number 10 color should be black, becuase problem description ask this
  if(mousoverCount === 10) {
    mousoverCount = 0
    r = 0
    g = 0
    b = 0
  }
  this.style.background = `rgb(${r}, ${g}, ${b})`
}

function removeBoard() {
  const container = document.querySelector('.container')
  let board = container.querySelector('.board')
  container.removeChild(board)
  board = document.createElement('div')
  board.classList.add('board')
  container.appendChild(board)
}
