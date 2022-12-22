import React, { useState } from 'react'

const player = {
  life: 10,
  money: 20,
  stamina: 10,
  strength: 15
}

const Stats = () => {
  const [data, setData] = useState(player)

  //const [life, setLife] = useState(10)
  //const [money, setMoney] = useState(20)
  //const [stamina, setStamina] = useState(10)
  //const [strength, setStrength] = useState(10)

  return (
    <div>
      <nav>
        <ul>
          <li>Life: {data.life}</li>
          <li>Money: {player.money}</li>
          <li>Stamina: {player.stamina}</li>
          <li>Strength: {player.strength}</li>
        </ul>
      </nav>
    </div>
  )
}

export default Stats
