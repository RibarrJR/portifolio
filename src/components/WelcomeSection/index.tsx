import VideoWelcome from 'components/VideoWelcome'
import * as S from './styles'
import Button from 'components/Button'

const WelcomeSection = () => (
  <S.Wrapper>
    <h1>Seja Bem vindo !</h1>
    <VideoWelcome videoPath="/video/welcome_video.mp4" />
    <S.Subtitle>
      Olá !! Fico feliz que tenha vindo me visitar no meu cantinho… quem sou eu
      ?<p> Clica ai embaixo que te mostro</p>
    </S.Subtitle>
    <Button size="small" aria-label="Começar">
      Começar
    </Button>
  </S.Wrapper>
)

export default WelcomeSection
