import styled, { keyframes } from 'styled-components'

const pulseAnimation = keyframes`
  0% {
    opacity: 1;
}
50% {
    opacity: 0.4;
}
100% {
    opacity: 1;
}
`

export const StyledSkeleton = styled.div`
  display: flex;
  flex: 1;
  background-color: rgba(255, 255, 255, 0.13);
  height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0px;
  border-radius: 40px;
  animation: 1.5s ease-in-out 0.5s infinite normal none running ${pulseAnimation};
`
