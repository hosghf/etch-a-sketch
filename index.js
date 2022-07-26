const board = document.querySelector('.board')
const promptSquareNumberBtn = document.querySelector('#squareNumber-btn')
let gridItem
let gridNumber = 10
const totalBoardDimention = 420

createGrid(board, gridNumber)

promptSquareNumberBtn.addEventListener('click', () => {
  // remove board of grids
  const container = document.querySelector('.container')
  let board = container.querySelector('.board')
  container.removeChild(board)
  board = document.createElement('div')
  board.classList.add('board')
  container.appendChild(board)
  // End of remove board of grids

  // removeBoard()  // TODO replace above code in this function for cleaning code

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
    gridItem.addEventListener('mouseover', addClass)
          
    board.appendChild(gridItem)
  }
}

function addClass() {
  this.classList.add('hoverd-grid-item')
}
