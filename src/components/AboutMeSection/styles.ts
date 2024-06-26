import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import Media from 'styled-media-query'
export const Wrapper = styled.section`
  ${({ theme }) => css`
    background-color: black;
    display: flex;
    color: ${theme.colors.white};
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${Media.lessThan('medium')`
       flex-direction: column-reverse;
    `}
  `}
`

export const MyName = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    padding: 0px;
  `}
`
export const TextWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: ${theme.spacings.medium};
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 100%;
    /* height: 100vh; */
    ${Media.lessThan('medium')`
      justify-content: center;
      align-items: center;
      text-align: center;
    `}
  `}
`
export const ImageWrapper = styled.div`
  background-image: url('/img/aboutme.jpg');
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;

  ${Media.lessThan('medium')`
    margin-top: 10px;
    border-radius:${({ theme }) => theme.border.radius};
    max-width: 90%;
    max-height: 500px;
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    text-align: justify;
    padding: ${theme.spacings.medium} 0;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray};
    max-width: 500px;
  `}
`

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    padding: ${theme.spacings.xsmall} 0;
    max-width: 500px;
    ${media.lessThan('medium')`
      flex-direction: column;
      align-items:center;
      justify-content: center;
  `}
  `}
`
