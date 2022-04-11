import axios from 'axios'

import { ICharacterAPI } from '../types/characters.types'

export const rickAndMortyApi = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
})

export const getCharacters = ({ page = 1 }) => {
  return axios.get<ICharacterAPI>(
    `https://rickandmortyapi.com/api/character/?page=${page}`,
  )
}
