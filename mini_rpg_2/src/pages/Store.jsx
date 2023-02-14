import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'

export const Store = () => {
  const [player, setPlayer] = useState(() => {
    const playerFromLocalStorage = localStorage.getItem('player')
    return playerFromLocalStorage
      ? JSON.parse(playerFromLocalStorage)
      : { life: 10, food: 10, strength: 5, money: 10 }
  })

  useEffect(() => {
    localStorage.setItem('player', JSON.stringify(player))
  }, [player])

  const buyFood = () => {
    if (player.money > 0) {
      setPlayer({
        ...player,
        food: player.food + 1,
        money: player.money - 1
      })
    }
  }

  return (
    <div>
      <Header player={player} />
      <h1>STORE</h1>
      <button onClick={buyFood}>Buy food</button>
    </div>
  )
}
