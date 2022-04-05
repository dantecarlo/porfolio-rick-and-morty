import CharacterCard from 'components/Characters/CharacterCard'
import useAxios from 'hooks/useAxios'
import React from 'react'
import { getCharacters } from 'services/rickAndMorty.api'
import { StyledSection } from 'styled-components/PageLayout.style'
import { ICharacterAPI } from 'types'
import { DEFAULT_CHARACTERS_COUNT } from 'utils/constants'

import { charactersAdapter } from '../../adapters/character.adapter'
import { StyledCharactersContainer } from './Characters.page.style'

const Characters = () => {
  const { getData } = useAxios()

  const { data, isLoading, isError, error } = getData<ICharacterAPI>(
    'characters',
    getCharacters,
  )
  const { characters } = !isLoading && data ? charactersAdapter(data) : { characters: [] }

  console.log(data)

  if (isLoading) {
    return (
      <StyledSection>
        <StyledCharactersContainer>
          {[...Array(DEFAULT_CHARACTERS_COUNT)].map((data, index) => {
            const placeholderKey = `placeholder-key-${index}`
            return <CharacterCard key={placeholderKey} gridArea={index + 1} isLoading />
          })}
        </StyledCharactersContainer>
      </StyledSection>
    )
  }

  if (isError) {
    return console.error(error)
  }

  return (
    <StyledSection>
      <StyledCharactersContainer>
        {characters.map((character, index) => {
          const { id } = character
          const characterKey = `character-key-${id}`
          return (
            <CharacterCard
              key={characterKey}
              character={character}
              gridArea={index + 1}
            />
          )
        })}
      </StyledCharactersContainer>
    </StyledSection>
  )
}

export default Characters
