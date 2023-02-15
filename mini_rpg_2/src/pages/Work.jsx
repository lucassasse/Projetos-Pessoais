import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'

export const Work = () => {
  const [player, setPlayer] = useState(() => {
    const playerFromLocalStorage = localStorage.getItem('player')
    return playerFromLocalStorage
      ? JSON.parse(playerFromLocalStorage)
      : { life: 10, food: 10, strength: 5, money: 10 }
  })

  useEffect(() => {
    localStorage.setItem('player', JSON.stringify(player))
  }, [player])

  const work = () => {
    if (player.life > 1) {
      setPlayer({
        ...player,
        money: player.money + 2,
        life: player.life - 1
      })
    } else {
      alert('Player morto! O game irá ser reiniciado.')
      localStorage.clear()
      window.location.reload()
    }
  }

  return (
    <div>
      <Header player={player} />
      <h1>WORK</h1>
      <button onClick={work}>Work</button>
    </div>
  )
}
