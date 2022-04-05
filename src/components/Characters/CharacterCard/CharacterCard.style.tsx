import styled, { keyframes } from 'styled-components'
import { IStyledCharacterCardWrapper } from 'types'

const cardEntrance = keyframes`  
from {
    opacity: 0;
    transform: scale(0.3);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

export const StyledCharacterCardWrapper = styled.div<IStyledCharacterCardWrapper>`
  grid-area: ${(props) => 'character' + props.gridArea};
  align-self: center;
  justify-self: center;
  padding: 20px;
  width: 180px;
  /* height: 200px; */
  border-radius: 40px;
  background: ${(props) => props.theme.dark.primary};
  box-shadow: 10px 10px 20px #312e2e, -10px -10px 20px #433e3e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${cardEntrance} 700ms ease-out;
  animation-fill-mode: backwards;
  animation-delay: calc(${(props) => props.gridArea} * var(--stagger-delay));
`

export const StyledCharacterCardImage = styled.img`
  height: 120px;
  width: 120px;
  border-radius: 40px;
  background: ${(props) => props.theme.dark.primary};
  box-shadow: 10px 10px 20px #312e2e, -10px -10px 20px #433e3e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledCardH3 = styled.h3`
  color: ${(props) => props.theme.dark.text};
  text-align: center;
  margin: 0;
  margin-top: 16px;
`

export const StyledDivider = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  height: 0px;
  width: 50%;
  background: #312e2e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #312e2e;
  border-bottom: 1px solid #433e3e;
`

export const StyledFeaturesContainer = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 16px;
`

export const StyledFeature = styled.h4`
  border-radius: 40px;
  background: #0f9ff2;
  box-shadow: 2px 2px 6px #0f9df0, -2px -2px 6px #0fa1f4;
  height: 20px;
  width: 70px;
  padding: 4px 8px;
  text-align: center;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`

export const StyledImagePlaceholder = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 40px;
  background: ${(props) => props.theme.dark.primary};
  box-shadow: 10px 10px 20px #312e2e, -10px -10px 20px #433e3e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export const StyledTextPlaceholder = styled.div`
  height: 10px;
  width: 120px;
  border-radius: 40px;
  background: ${(props) => props.theme.dark.primary};
  box-shadow: 10px 10px 20px #312e2e, -10px -10px 20px #433e3e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`
