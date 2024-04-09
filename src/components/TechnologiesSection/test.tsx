import { renderWithTheme } from 'utils/tests/helpers'

import TechnologiesSection from '.'

describe('<TechnologiesSection />', () => {
  it('should render the heading', () => {
    renderWithTheme(<TechnologiesSection />)
  })
})
