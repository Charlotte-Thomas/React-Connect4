import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Row } from 'react-bootstrap'

const Home = () => (
  <section className="container hero">
    <h1 className="gameTitle">Connect 4</h1>
    <div>
      <h2>Intructions</h2>
      <h5>Connect 4 is a two-player game. <br /> Take turns to get four counters in a row. <br /> Matches can be made vertically horizontally and diagonally. <br /> You may only add counters from the bottom row and upwards for each column.</h5>
    </div>
    <Link to='/game' className="h1 button btn-light btn-outline-secondary btn-lg playButton link">Play Game</Link>
  </section>
)

export default Home