import styled from 'styled-components'

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: ${(props) => props.theme.breakpoints.lg};
  padding-left: 16px;
  padding-right: 16px;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: ${(props) => props.theme.breakpoints.md};
    padding-left: 12px;
    padding-right: 12px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    max-width: ${(props) => props.theme.breakpoints.sm};
    padding-left: 8px;
    padding-right: 8px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.xm}) {
    max-width: ${(props) => props.theme.breakpoints.xm};
    padding-left: 4px;
    padding-right: 4px;
  }
`
