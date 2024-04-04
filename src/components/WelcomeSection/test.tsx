import { screen } from '@testing-library/react'

import WelcomeSection from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<WelcomeSection />', () => {
  it('should render the heading', () => {
    renderWithTheme(<WelcomeSection />)

    expect(
      screen.getByRole('heading', { name: /Seja Bem vindo !/i })
    ).toBeInTheDocument()
  })
})
