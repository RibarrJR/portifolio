import { screen } from '@testing-library/react'

import AboutMeSection from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<AboutMeSection />', () => {
  it('should render the heading', () => {
    renderWithTheme(<AboutMeSection />)

    expect(screen.getByText(/Ernesto Ribarr/i)).toBeInTheDocument()
  })
})
