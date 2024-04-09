import TechnologiesItem from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<TechnologiesItem />', () => {
  it('should render the technologies item', () => {
    renderWithTheme(
      <TechnologiesItem title={''} imgSVG={<></>} subtitle={''} />
    )
  })
})
