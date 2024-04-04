import { render, screen } from '@testing-library/react'

import WelcomeSection from '.'

describe('<WelcomeSection />', () => {
  it('should render the heading', () => {
    const { container } = render(<WelcomeSection />)

    expect(screen.getByRole('heading', { name: /WelcomeSection/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
