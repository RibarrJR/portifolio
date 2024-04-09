import styled, { css } from 'styled-components'
import Media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    text-align: center;
    font-size: ${theme.font.sizes.xxlarge};
    margin: 0 0 ${theme.spacings.xxlarge} 0;
    color: ${theme.colors.black};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: ${theme.colors.white};
    ${Media.lessThan('medium')`
    video {
      max-width: 80%;
    }
    `}
  `}
`

export const Subtitle = styled.span`
  ${({ theme }) => css`
    text-align: center;
    padding: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray};
    max-width: 450px;
  `}
`
