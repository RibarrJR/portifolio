import * as S from './styles'
import AboutMeSection from 'components/AboutMeSection'
import TechnologiesSection from 'components/TechnologiesSection'
import WelcomeSection from 'components/WelcomeSection'

const Home = () => (
  <S.Wrapper>
    <WelcomeSection />
    <AboutMeSection />
    <TechnologiesSection />
  </S.Wrapper>
)

export default Home
