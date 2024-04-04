import VideoWelcome from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<VideoWelcome />', () => {
  it('should render the heading', () => {
    renderWithTheme(<VideoWelcome videoPath="/video/welcome_video.mp4" />)
  })
})
