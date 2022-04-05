import styled, { keyframes } from 'styled-components'

const spinnerRotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const StyledSpinner = styled.div`
  border: 4px solid #ffffff14;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: #fffffff6;
  animation: ${spinnerRotation} 1s ease infinite;
`
