import { Story, Meta } from '@storybook/react'
import { Angular } from '@styled-icons/simple-icons/Angular'
import TechnologiesItem from '.'

export default {
  title: 'TechnologiesItem',
  component: TechnologiesItem,
  argTypes: {
    title: {
      type: 'string'
    },
    imgSVG: {
      type: 'symbol'
    },
    subtitle: {
      type: 'string'
    },
    color: {
      type: 'string'
    },
    reverse: {
      type: 'boolean'
    }
  }
} as Meta

export const Default: Story = (args) => <TechnologiesItem {...args} />

Default.args = {
  title: 'Angular',
  imgSVG: <Angular />,
  color: 'red',
  reverse: false,
  subtitle:
    'Aqui já é a minha paixão. De estrutura de ERP até aplicação mobile com acesso a câmera e GPS. Já fiz de tudo um pouco com ele.'
}
