import Skeleton from 'components/shared/Skeleton/Skeleton'
import React, { FC } from 'react'
import { ICharacterCard } from 'types'

import { StyledFeature } from './CharacterCard.style'
import {
  StyledCardH3,
  StyledCharacterCardImage,
  StyledCharacterCardWrapper,
  StyledDivider,
  StyledFeaturesContainer,
  StyledImagePlaceholder,
  StyledTextPlaceholder,
} from './CharacterCard.style'

const CharacterCard: FC<ICharacterCard> = ({ character, gridArea, isLoading }) => {
  const { name, image, gender, origin, status, species } = character || {}

  return (
    <StyledCharacterCardWrapper gridArea={gridArea}>
      {isLoading ? (
        <>
          <StyledImagePlaceholder>
            <Skeleton />
          </StyledImagePlaceholder>
          <StyledDivider />
          <StyledTextPlaceholder>
            <Skeleton />
          </StyledTextPlaceholder>
        </>
      ) : (
        <>
          <StyledCharacterCardImage src={image} alt="Character" />
          <StyledCardH3>{name}</StyledCardH3>
          <StyledDivider />
          <StyledFeaturesContainer>
            <StyledFeature>{gender}</StyledFeature>
            <StyledFeature>{origin?.name}</StyledFeature>
            <StyledFeature>{status}</StyledFeature>
            <StyledFeature>{species}</StyledFeature>
          </StyledFeaturesContainer>
        </>
      )}
    </StyledCharacterCardWrapper>
  )
}

export default CharacterCard
