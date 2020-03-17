import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Row } from 'react-bootstrap'

const Home = () => (
  <section className="container check">
    <h1 className="gameTitle">Connect 4</h1>
    <Link to='/game' className="h1 button btn-light btn-outline-secondary btn-lg">Play Game</Link>
  </section>
)

export default Home