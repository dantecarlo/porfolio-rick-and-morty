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
  grid-area: ${(props) => 'c' + props.gridArea};
  align-self: center;
  justify-self: center;
  padding: 20px;
  width: 180px;
  height: 200px;
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
`
