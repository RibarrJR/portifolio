import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export type WrapperProps = {
  reverse?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, reverse }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: ${theme.spacings.xxsmall};
    ${media.greaterThan('medium')`
        padding: ${theme.spacings.xxsmall} 0;
        flex-direction: ${reverse ? 'row-reverse' : 'row'};
        text-align: start;
        align-items: center;
    `}
    ${media.greaterThan('large')`
        padding: ${theme.spacings.xxsmall} 0;
        flex-direction: ${reverse ? 'row-reverse' : 'row'};
        text-align: start;
        align-items: flex-start;
        ${
          reverse
            ? 'justify-content: space-between'
            : 'justify-content: flex-start'
        }
    `}
  `}
`
export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.medium};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${media.greaterThan('medium')`
    gap: ${theme.spacings.xsmall};
      flex-direction: column;
      align-items: start;
      padding: ${theme.spacings.small};
  `}
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
`
export const Subtitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: 600;
    color: ${theme.colors.darkGray};
    ${media.greaterThan('medium')`
      max-width: 55rem;
    `}
  `}
`
export const SVGImage = styled.div`
  ${({ theme, color }) => css`
    width: 100%;
    color: ${color || theme.colors.primary};
  `}
`
export const SVGWrapper = styled.div`
  ${({ theme }) => css`
    width: 20rem;
    padding: ${theme.spacings.small};
    ${media.greaterThan('small')`
      padding:0
  `}
    ${media.greaterThan('large')`
    width: 25rem;
    padding: 2rem;
    `}
  `}
`
