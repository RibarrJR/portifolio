import { render, screen } from '@testing-library/react'

import Home from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Home />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Home />)
  })
  //   expect(
  //     screen.getByRole('heading', { name: /Framework Ltda/i })
  //   ).toBeInTheDocument()

  //   expect(container.firstChild).toMatchSnapshot()

  // it('should render the colors correctly', () => {
  //   const { container } = renderWithTheme(<Home />)

  //   expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  // })
})
