import { screen } from '@testing-library/react'

import AboutMeSection from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<AboutMeSection />', () => {
  it('should render the about me section component', () => {
    renderWithTheme(<AboutMeSection />)

    expect(screen.getByText(/Ernesto Ribarr/i)).toBeInTheDocument()
    expect(screen.getByText(/Continuar/i)).toBeInTheDocument()
    expect(screen.getByText(/Vergonha alheia/i)).toBeInTheDocument()
    expect(
      screen.getByLabelText(/One image about me in Garibaldi-RS city/i)
    ).toBeInTheDocument()
  })
})
