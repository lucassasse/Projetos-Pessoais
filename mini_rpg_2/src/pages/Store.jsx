import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'

export const Store = () => {
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
      <h1>STORE</h1>
      <button onClick={() => setLife(life + 1)}>Add Life</button>
      <button>Add Money</button>
    </div>
  )
}
