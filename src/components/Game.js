import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Row } from 'react-bootstrap'



const Game = () => {

  const grid = []
  let player1turn = true

  const [playerTurnText, setText] = useState(false)

  
  useEffect(() => {
    const gameBoard = document.getElementsByClassName('gameBoard')[0]
    const playerTurn = document.querySelector('.player')
    console.log(gameBoard)
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
    console.log(grid)
  }

  function startGame() {
    console.log(grid[0][0])
    for (let y = 0; y < 7; y++) {
      for (let x = 0; x < 6; x++) {
        grid[y][x].addEventListener('click', () => {
          let canAdd = false
          console.log('clicked', grid[y][x])
          if (grid[6].includes(grid[y][x])) {
            canAdd = true
            console.log('bottom')
          } else if (grid[y + 1][x].classList.contains('blue') || grid[y + 1][x].classList.contains('red')) {
            canAdd = true
          }
          if (canAdd) {
            console.log('yes')
            addCounter(grid[y][x], x)
          }
        })
      }
    }
  }

  function addCounter(cell, i) {
    let color = 'blue'
    if (player1turn) {
      cell.classList.add('blue')
      setText('Turn: Player Two')
      color = 'blue'
      player1turn = false
    } else {
      cell.classList.add('red')
      setText('Turn: Player One')
      color = 'red'
      player1turn = true
    }
    // checkCounters(cell, i, color)
  }




  return (
    <div className='gamePage'>
      <header>
        <h1>Connect 4</h1>
        <h3 className='player'>{playerTurnText ? playerTurnText : 'Turn: Player One'}</h3>
      </header>
      <main>
        {/* <section className='gameBoard'></section> */}
        <section className='gameBoard'></section>
      </main>
    </div>
  )


}

export default Game