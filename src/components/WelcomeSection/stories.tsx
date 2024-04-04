import { Story, Meta } from '@storybook/react'
import WelcomeSection from '.'

export default {
  title: 'WelcomeSection',
  component: WelcomeSection
} as Meta

export const Default: Story = () => <WelcomeSection />

Default.parameters = {
  layout: 'fullscreen'
}
