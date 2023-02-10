import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'

export const Home = () => {
  const [player, setPlayer] = useState(() => {
    const playerFromLocalStorage = localStorage.getItem('player')
    return playerFromLocalStorage
      ? JSON.parse(playerFromLocalStorage)
      : { food: 10, money: 10 }
  })

  useEffect(() => {
    localStorage.setItem('player', JSON.stringify(player))
  }, [player])

  return (
    <div>
      <Header player={player} />
      <h1>HOME</h1>
    </div>
  )
}
