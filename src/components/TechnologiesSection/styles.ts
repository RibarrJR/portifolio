import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.medium};
    display: flex;
    flex-direction: column;
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    width: 100%;
    text-align: center;
    margin: ${theme.spacings.medium};
    color: ${theme.colors.black};
  `}
`
