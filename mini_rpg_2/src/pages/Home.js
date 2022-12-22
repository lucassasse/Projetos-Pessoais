import React, { useState } from 'react'

const Home = () => {
  return (
    <div>
      <h2> HOME </h2>
      <nav>
        <ul>
          <li>Rest (aumenta a energia e a fome)</li>
          <button>Rest</button>
          <li>Eat (diminui a fome e estoque de comida da geladeira)</li>
          <button>Eat</button>
          <li>Train (aumenta a força, fome e energia)</li>
          <button>Train</button>
        </ul>
      </nav>
    </div>
  )
}

export default Home
