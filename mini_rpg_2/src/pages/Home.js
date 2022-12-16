import React, { useState } from 'react'
import Stats from '../components/Stats'

const Home = () => {
  const [data, setData] = useState('')
  const Rest = () => {
    setData(5)
  }

  return (
    <div>
      <h2> HOME </h2>
      <Stats Rest={data} />
      <nav>
        <ul>
          <li>Rest (aumenta a energia e a fome)</li>
          <button onClick={() => Rest()}>Rest</button>
          <li>Eat (diminui a fome e estoque de comida da geladeira)</li>
          <li>Train (aumenta a força, fome e energia)</li>
        </ul>
      </nav>
    </div>
  )
}

export default Home
