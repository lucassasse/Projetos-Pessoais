import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'

export const Gym = () => {
  const [player, setPlayer] = useState(() => {
    const playerFromLocalStorage = localStorage.getItem('player')
    return playerFromLocalStorage
      ? JSON.parse(playerFromLocalStorage)
      : { life: 10, food: 10, strength: 5, money: 10 }
  })

  useEffect(() => {
    localStorage.setItem('player', JSON.stringify(player))
  }, [player])

  const training = () => {
    if (player.money > 0) {
      setPlayer({
        ...player,
        strength: player.strength + 1,
        money: player.money - 1
      })
    }
  }

  return (
    <div>
      <Header player={player} />
      <h1>GYM</h1>
      <button onClick={training}>Training</button>
    </div>
  )
}
