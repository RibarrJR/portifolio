import { Story, Meta } from '@storybook/react'
import VideoWelcome from '.'

export default {
  title: 'VideoWelcome',
  component: VideoWelcome
} as Meta

export const Default: Story = () => (
  <VideoWelcome videoPath="/video/welcome_video.mp4" />
)
