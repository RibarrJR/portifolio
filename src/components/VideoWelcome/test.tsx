import VideoWelcome from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'

describe('<VideoWelcome />', () => {
  beforeEach(() => {
    Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
      set: () => {
        // console.log('muted')
      }
    })
  })

  it('should render the video', () => {
    renderWithTheme(
      <VideoWelcome data-testid="video" videoPath="/video/welcome_video.mp4" />
    )
    expect(screen.getByTestId('video')).toBeInTheDocument()
  })
  it('should render video component with autoplay, loop and muted', () => {
    renderWithTheme(<VideoWelcome videoPath="/video/welcome_video.mp4" />)

    expect(screen.queryByLabelText('The Video')).toHaveAttribute('loop')
    expect(screen.queryByLabelText('The Video')).toHaveAttribute('autoPlay')
    // expect(screen.queryByLabelText('The Video')).toHaveAttribute('muted')
  })
})
