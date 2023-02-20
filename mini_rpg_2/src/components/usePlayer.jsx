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
    inventory: { knife: 0, sword: 0, waterGun: 0, gun: 0 }
  })

  useEffect(() => {
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
