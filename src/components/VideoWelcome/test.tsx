import { render, screen } from '@testing-library/react'

import VideoWelcome from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<VideoWelcome />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <VideoWelcome videoPath="/video/welcome_video.mp4" />
    )

    expect(
      screen.getByRole('heading', { name: /VideoWelcome/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
