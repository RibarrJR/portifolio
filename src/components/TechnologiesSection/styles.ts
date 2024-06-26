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
    font-size: ${theme.font.sizes.xxlarge};
    text-align: center;
    margin: ${theme.spacings.medium} 0;
    color: ${theme.colors.black};
  `}
`

export const Divider = styled.hr`
  width: 150px;
  margin: 35px auto;
`
