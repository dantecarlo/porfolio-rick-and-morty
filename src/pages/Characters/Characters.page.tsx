import CharacterCard from 'components/CharacterCard/CharacterCard'
import useAxios from 'hooks/useAxios'
import React from 'react'
import { getCharacters } from 'services/rickAndMorty.api'
import { StyledSection } from 'styled-components/PageLayout.style'
import { ICharacterAPI } from 'types'

import { charactersAdapter } from '../../adapters/character.adapter'
import { StyledCharactersContainer } from './Characters.page.style'

const Characters = () => {
  const { getData } = useAxios()

  const { data, isLoading } = getData<ICharacterAPI>('characters', getCharacters)
  const { characters } = !isLoading && data ? charactersAdapter(data) : { characters: [] }

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
