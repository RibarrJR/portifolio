import { screen } from '@testing-library/react'

import WelcomeSection from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<WelcomeSection />', () => {
  beforeEach(() => {
    Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
      set: () => {
        // console.log('muted')
      }
    })
  })

  it('should render the heading say welcome', () => {
    renderWithTheme(<WelcomeSection />)

    expect(
      screen.getByRole('heading', { name: /Seja Bem vindo !/i })
    ).toBeInTheDocument()
  })
  it(`should render the button 'começar'`, () => {
    renderWithTheme(<WelcomeSection />)
    expect(screen.getByLabelText(/Começar/i)).toBeInTheDocument()
  })
})
