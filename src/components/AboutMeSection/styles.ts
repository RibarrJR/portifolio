import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.black};
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `}
`

export const MyName = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    padding: 0px;
  `}
`
export const TextWrapper = styled.h1`
  ${({ theme }) => css`
    display: flex;
    padding: ${theme.spacings.medium};
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 100%;
    height: 100vh;
  `}
`
export const ImageWrapper = styled.div`
  background-image: url('/img/aboutme.jpg');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
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

export const ButtonWrapper = styled.p`
  ${({ theme }) => css`
    display: flex;
    padding: ${theme.spacings.medium} 0;
    max-width: 500px;
    Button {
      margin: 0px ${theme.spacings.small} 0 0;
    }
  `}
`
