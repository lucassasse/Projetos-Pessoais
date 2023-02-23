import { useState } from 'react'
import { Header } from '../components/Header'
import { usePlayer } from '../components/usePlayer'
import '../styles/Main.css'

export const Forest = () => {
  const { player, setPlayer } = usePlayer()

  const [monster, setMonster] = useState({
    strength: 10,
    life: 10,
    number: 10
  })

  function randomNumber(num) {
    return Math.floor(Math.random() * (num - 10) + 10)
  }

  const battle = () => {
    monster.life = 0
    if (monster.life <= 0) {
      alert('Parabéns, você matou o monstro. Um mais forte aparece!')
      setPlayer({
        ...player,
        money: player.money + 10
      })
      setMonster({
        ...monster,
        strength: (monster.strength = randomNumber(monster.number)),
        life: (monster.life = randomNumber(monster.number)),
        number: monster.number * 1.5
      })
      console.log({ ...monster })
    }
  }

  return (
    <div>
      <Header />
      <h1 className="title">FOREST</h1>
      <p>Monster strength: {monster.strength}</p>
      <button onClick={battle} className="button" disabled={player.money < 10}>
        Batle: 10 gold
      </button>
      <p>Monster Life: {monster.life}</p>
      <hr />
      <p>Sistema de batalhas em desenvolvimento!</p>
    </div>
  )
}
