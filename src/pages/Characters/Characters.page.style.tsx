import styled from 'styled-components'

export const StyledCharactersContainer = styled.div`
  align-self: center;

  display: grid;
  gap: 24px;
  grid-template-areas:
    'character1 character2 character3 character4 character5'
    'character14 character15 character16 character17 character6'
    'character13 character20 character19 character18 character7'
    'character12 character11 character10 character9 character8';
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  --stagger-delay: 100ms;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-areas:
      'character1 character2 character3 character4'
      'character14 character15 character16 character5'
      'character13 character20 character17 character6'
      'character12 character19 character18 character7'
      'character11 character10 character9 character8';
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-template-areas:
      'character1 character2'
      'character3 character4'
      'character5 character6'
      'character7 character8'
      'character9 character10'
      'character11 character12'
      'character13 character14'
      'character15 character16'
      'character17 character18'
      'character19 character20';
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(10, 1fr);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.xm}) {
    grid-template-areas:
      'character1'
      'character2'
      'character3'
      'character4'
      'character5'
      'character6'
      'character7'
      'character8'
      'character9'
      'character10'
      'character11'
      'character12'
      'character13'
      'character14'
      'character15'
      'character16'
      'character17'
      'character18'
      'character19'
      'character20';
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(20, 1fr);
  }
`
