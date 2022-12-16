import React, { useState } from 'react'



const Stats = ({ Rest }) => {
  const [life, setLife] = useState(10)
  const [money, setMoney] = useState(20)
  const [stamina, setStamina] = useState(10)
  const [strength, setStrength] = useState(10)
  
  function funcAumentarVida() {
    setLife(life + {Rest})
  }
  /*
  function funcDiminuirVida() {
    setLife(life - 5)
  }*/

  return (
    <div>
      <nav>
        <ul>
          <li>{Rest}</li>
          <li>Life: {life}</li>
          <li>Money: {money}</li>
          <li>Stamina: {stamina}</li>
          <li>Strength: {strength}</li>
        </ul>
      </nav>
    </div>
  )
}

export default Stats
