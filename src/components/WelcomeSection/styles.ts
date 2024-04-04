import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.black};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: ${theme.colors.white};
  `}
`

export const Subtitle = styled.p`
  ${({ theme }) => css`
    text-align: center;
    padding: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray};
    max-width: 450px;
  `}
`
