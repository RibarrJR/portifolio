import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    video {
      border-radius: 8px;
      max-width: 800px;
      max-height: 400px;
    }
  `}
`
