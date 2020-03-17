import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Row } from 'react-bootstrap'



const Game = () => {

  // const grid = []
  let player1turn = true

  const [playerTurnText, setText] = useState(false)
  const [winner, setWinner] = useState('')
  const [grid, setGrid] = useState([])


  useEffect(() => {
    const gameBoard = document.getElementsByClassName('gameBoard')[0]
    createGameBoard(gameBoard)
    startGame()
  }, [0])

  function createGameBoard(gameBoard) {
    for (let y = 0; y < 7; y++) {
      const createRow = []
      for (let x = 0; x < 6; x++) {
        const node = document.createElement('div')
        node.classList.add('cell')
        // node.setAttribute('id', id)
        gameBoard.appendChild(node)
        createRow.push(node)
      }
      grid.push(createRow)
    }
    // console.log(grid)
  }

  function startGame() {
    for (let y = 0; y < 7; y++) {
      for (let x = 0; x < 6; x++) {
        grid[y][x].addEventListener('click', () => {
          let canAdd = false
          // console.log('clicked', grid[y][x])
          if (grid[6].includes(grid[y][x])) {
            canAdd = true
          } else if (grid[y + 1][x].classList.contains('blue') || grid[y + 1][x].classList.contains('red')) {
            canAdd = true
          }
          if (canAdd) {
            addCounter(grid[y][x], y, x)
          }
        })
      }
    }
  }

  function addCounter(cell, y, x) {
    let color = 'blue'
    if (player1turn) {
      cell.classList.add('blue')
      setText('Player Two')
      color = 'blue'
      player1turn = false
    } else {
      cell.classList.add('red')
      setText('Player One')
      color = 'red'
      player1turn = true
    }
    checkCounters(cell, color, y, x)
  }

  function checkCounters(cell, color, y, x) {
    let rowCount = 0
    let columnCount = 0


    for (let y = 0; y < 7; y++) {
      for (let x = 0; x < 5; x++) {
        //check rows:
        if (grid[y][x].classList.contains(color) && grid[y][x + 1].classList.contains(color)) {
          rowCount++
          // console.log(rowCount)
          checkCount(rowCount)
        } else {
          rowCount = 0
        }
      }
    }
    //find way to combine top loop and bottom
    for (let x = 0; x < 6; x++) {
      for (let y = 0; y < 6; y++) {
        //check columns 
        if (grid[y][x].classList.contains(color) && grid[y + 1][x].classList.contains(color)) {
          columnCount++
          checkCount(columnCount)
        } else {
          columnCount = 0
        }
      }
    }

    //diagonals
    let rightDiaCount = 0
    let leftDiaCount = 0

    // BL
    for (let i = 1; i <= 3; i++) {
      if ((x - i >= 0 && y + i < 7) && checkNextPosition(y + i, x - i, color)) {
        rightDiaCount++
        console.log(rightDiaCount)
        checkCount(rightDiaCount)
      }
    }

    // TR
    for (let i = 1; i <= 3; i++) {
      if ((x + i <= 5 && y - i >= 0) && checkNextPosition(y - i, x + i, color)) {
        rightDiaCount++
        console.log('dia', rightDiaCount)
        checkCount(rightDiaCount)
      }
    }

    // BR
    for (let i = 1; i <= 3; i++) {
      if ((x + i <= 5 && y + i < 7) && checkNextPosition(y + i, x + i, color)) {
        leftDiaCount++
        console.log('dia2', leftDiaCount)
        checkCount(leftDiaCount)
      }
    }

    // TL
    for (let i = 1; i <= 3; i++) {
      if ((x - i >= 0 && y - i >= 0) && checkNextPosition(y - i, x - i, color)) {
        leftDiaCount++
        console.log('dia3', leftDiaCount)
        checkCount(leftDiaCount)
      }
    }

  }

  function checkNextPosition(y, x, color) {
    // console.log(y, x)
    // console.log(grid[y][x])
    if (grid[y][x].classList.contains(color)) {
      console.log('true')
      return true
    } else {
      return false
    }
  }

  function checkCount(count) {
    if (count >= 3) {
      console.log('win')
      setWinner(player1turn ? 'Player Two! - blue' : 'Player One! - green')
    }
  }

  function replay() {
    for (let y = 0; y < 7; y++) {
      for (let x = 0; x < 6; x++) {
        grid[y][x].classList.remove('red')
        grid[y][x].classList.remove('blue')
      }
    }
    setWinner('')
  }



  return (
    <div className='gamePage'>
      <header>
        <h1 className='gamePageTitle'>Connect 4</h1>
        <h3 className='player'><span className='font-weight-bold'>Turn: </span>{playerTurnText ? playerTurnText : 'Player One'}</h3>
      </header>
      <main>
        <div className='winner'>WINNER: {winner}</div>
        <section className='gameBoard'></section>
        <div className="buttons">
          <Button className='restartButton btn-secondary btn-outline-secondary' aria-pressed="false" onClick={() => replay()}>Restart</Button>
          <Button className='restartButton btn-secondary btn-outline-secondary' aria-pressed="false"><Link className='link' to='/'>Instructions</Link></Button>
        </div>
      </main>
    </div>
  )


}

export default Game




// // check diagonals old code:
// for (let y = 6; y >= 4; y--) {
//   if (y === 6)
//     for (let x = 0; x < 3; x++) {
//       for (let up = 0; up < 5 - x; up++) {
//         if (grid[6 - up][x + up].classList.contains(color) && grid[(6 - up) - 1][x + 1].classList.contains(color)) {
//           // console.log(grid[6 - up][x + up])
//           // console.log(grid[(6 - up) - 1][x + 1])
//         }
//       }
//     }
// 

// if (grid[6].includes(cell) || checkLeftColumn(cell)) {
//   console.log('not allowed')
// }




// function checkRightColumn(cell) {
//   for (let i = 0; i < grid.length; i++) {
//     if (grid[i][5] === cell) {
//       // console.log('yes')
//       return true
//     }
//   }
//   return false
// }

// function checkLeftColumn(cell) {
//   for (let i = 0; i < grid.length; i++) {
//     if (grid[i][0] === cell) {
//       // console.log('yes')
//       return true
//     }
//   }
//   return false
// }