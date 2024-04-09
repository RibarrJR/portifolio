import TechnologiesItem from 'components/TechnologiesItem'
import * as S from './styles'
import { Angular } from '@styled-icons/simple-icons/Angular'
import { ReactLogo } from '@styled-icons/simple-icons/ReactLogo'

const TechnologiesSection = () => (
  <S.Wrapper>
    <S.Title aria-label="my name">Tecnologias</S.Title>
    <hr />
    <TechnologiesItem {...ReactArgs} />
    <hr />
    <TechnologiesItem {...AngularArgs} />
    <hr />
  </S.Wrapper>
)

export default TechnologiesSection

const AngularArgs = {
  title: 'Angular',
  imgSVG: <Angular />,
  color: '#AB0202',
  reverse: true,
  subtitle:
    'Aqui já é a minha paixão. De estrutura de ERP até aplicação mobile com acesso a câmera e GPS. Já fiz de tudo um pouco com ele.'
}
const ReactArgs = {
  title: 'React',
  imgSVG: <ReactLogo />,
  color: '#191F5C',
  reverse: false,
  subtitle:
    'É já fiz alguns projetos bem legais em React com redux, sem redux, com next, sem next, com styled-componentes e adivinha ? Isso exatamente…com tailwind também.'
}
