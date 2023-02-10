import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'

export const Home = () => {
  const [life, setLife] = useState(() => {
    const lifeFromLocalStorage = localStorage.getItem('life')
    return lifeFromLocalStorage ? parseInt(lifeFromLocalStorage) : 0
  })

  useEffect(() => {
    localStorage.setItem('life', life)
  }, [life])

  return (
    <div>
      <Header life={life} />
      <h1>HOME</h1>
    </div>
  )
}
