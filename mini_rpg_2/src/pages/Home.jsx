import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'

export const Home = () => {
  const [player, setPlayer] = useState(() => {
    const playerFromLocalStorage = localStorage.getItem('player')
    return playerFromLocalStorage
      ? JSON.parse(playerFromLocalStorage)
      : { life: 10, food: 10, strength: 5, money: 10 }
  })

  useEffect(() => {
    localStorage.setItem('player', JSON.stringify(player))
  }, [player])

  const eat = () => {
    if (player.food > 0) {
      setPlayer({
        ...player,
        food: player.food - 1,
        life: player.life + 1
      })
    }
  }

  return (
    <div>
      <Header player={player} />
      <h1>HOME</h1>
      <button onClick={eat}>Eat</button>
    </div>
  )
}
