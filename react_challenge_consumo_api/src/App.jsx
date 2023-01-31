/*
Consuma a API e liste todos os pokemons da consulta do seguinte endpoint. 
https://pokeapi.co/api/v2/pokemon

Você deve exibir, de cada pokémon:
- imagem
- nome
- experiência

Você pode acessar as informações de cada pokemón individualmente em:
https://pokeapi.co/api/v2/pokemon/:id

DICA:
imagem => sprites.front_default
experiência => base_experience

EXTRA: se puder ordene por nome.
*/

import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [list, setList] = useState([])
  
  useEffect(() => {
    axios
    .get("https://pokeapi.co/api/v2/pokemon/")
    .then((response) => {
      const sortedArray = [...response.data.results]
      sortedArray.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
      setList(sortedArray)
    })
  }, [])

  return (
    <>
      <h1>Consumir API Pokémon</h1>
      <h3>Lista de Pokemons:</h3>
      <hr />
      {list.map(item => (
      <Pokemon key={item.name} data={item}/>
      ))}
    </>
  );
}

const Pokemon = ({data}) => {
  const [details, setDetails] = useState(null)
  
  useEffect(() => {
    axios
    .get(data.url)
    .then((response) => setDetails(response.data))
  }, [])

  if(!details){
    return <div>Carregando...</div>
  }

  return (
    <div style={{display: 'flex', alignItens: 'center'}}>
      <img src={details.sprites.front_default} style={{width: 30, marginRight: 10}}></img>
      <span><b>{details.name}</b> - exp: {details.base_experience}</span>
    </div>
    )
}

export default App;
