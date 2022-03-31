import useAxios from 'hooks/useAxios'
import React from 'react'
import { getCharacters } from 'services/rickAndMorty.api'
import { CharactersApi } from 'types'

function App() {
  const { getData } = useAxios()

  const { data } = getData<CharactersApi>('characters', getCharacters)

  console.log(data)

  return (
    <div>
      <h1>Testing</h1>
    </div>
  )
}

export default App
