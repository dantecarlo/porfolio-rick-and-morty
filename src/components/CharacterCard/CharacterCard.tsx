import React, { FC } from 'react'
import { ICharacterCard } from 'types'

import {
  StyledCardH3,
  StyledCharacterCardImage,
  StyledCharacterCardWrapper,
} from './CharacterCard.style'

const CharacterCard: FC<ICharacterCard> = ({ character, gridArea }) => {
  const { name, image } = character
  return (
    <StyledCharacterCardWrapper gridArea={gridArea}>
      <StyledCharacterCardImage src={image} alt="Character" />
      <StyledCardH3>{name}</StyledCardH3>
    </StyledCharacterCardWrapper>
  )
}

export default CharacterCard
