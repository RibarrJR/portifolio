import { renderWithTheme } from 'utils/tests/helpers'
import Home from '.'

describe('<Home />', () => {
  beforeEach(() => {
    Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
      set: () => {
        // console.log('muted')
      }
    })
  })

  it('should render the home component', () => {
    renderWithTheme(<Home />)
  })
})
