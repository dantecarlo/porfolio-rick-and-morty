import axios from 'axios'

import { CharactersApi } from '../types/characters.types'

export const rickAndMortyApi = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
})

export const getCharacters = ({ page = 1 }) => {
  return axios.get<CharactersApi>(
    `https://rickandmortyapi.com/api/character/?page=${page}`,
  )
}
