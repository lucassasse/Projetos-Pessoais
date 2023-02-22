import {
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback
} from 'react'

export const PlayerContext = createContext()

export const PlayerProvider = ({ children }) => {
  const [player, setPlayer] = useState({
    life: 10,
    food: 10,
    strength: 5,
    money: 250,
    stamina: 5,
    inventory: {
      knife: { quantity: 5, strength: 5 },
      sword: { quantity: 1, strength: 20 },
      waterGun: { quantity: 0, strength: 1 },
      gun: { quantity: 2, strength: 50 }
    }
  })

  let inventory = useEffect(() => {
    const localStoragePlayer = localStorage.getItem('player')
    if (localStoragePlayer) {
      setPlayer(JSON.parse(localStoragePlayer))
      console.log('Recuperando valor localStorage')
    }
  }, [])

  const updatePlayer = useCallback(newPlayer => {
    setPlayer(newPlayer)
    localStorage.setItem('player', JSON.stringify(newPlayer))
  }, [])

  return (
    <PlayerContext.Provider
      value={{
        player,
        setPlayer: updatePlayer
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
  //return { player, setPlayer: updatePlayer }
}

export function usePlayer() {
  const context = useContext(PlayerContext)
  if (context === undefined) {
    throw new Error('usePlayer must be used inside its provider')
  }
  return context
}
