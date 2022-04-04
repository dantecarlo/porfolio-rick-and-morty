import styled from 'styled-components'

export const StyledCharactersContainer = styled.div`
  align-self: center;

  display: grid;
  gap: 24px;
  grid-template-areas:
    'c1 c2 c3 c4 c5'
    'c14 c15 c16 c17 c6'
    'c13 c20 c19 c18 c7'
    'c12 c11 c10 c9 c8';
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  --stagger-delay: 100ms;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-areas:
      'c1 c2 c3 c4'
      'c14 c15 c16 c5'
      'c13 c20 c17 c6'
      'c12 c19 c18 c7'
      'c11 c10 c9 c8';
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-template-areas:
      'c1 c2'
      'c3 c4'
      'c5 c6'
      'c7 c8'
      'c9 c10'
      'c11 c12'
      'c13 c14'
      'c15 c16'
      'c17 c18'
      'c19 c20';
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(10, 1fr);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.xm}) {
    grid-template-areas:
      'c1'
      'c2'
      'c3'
      'c4'
      'c5'
      'c6'
      'c7'
      'c8'
      'c9'
      'c10'
      'c11'
      'c12'
      'c13'
      'c14'
      'c15'
      'c16'
      'c17'
      'c18'
      'c19'
      'c20';
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(20, 1fr);
  }
`
