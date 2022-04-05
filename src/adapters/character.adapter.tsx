import { ICharacterAPI } from 'types'

export const charactersAdapter = (charactersAPI: ICharacterAPI) => ({
  characters: charactersAPI.data.results,
})
