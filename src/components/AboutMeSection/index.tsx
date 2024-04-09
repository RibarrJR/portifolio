import Button from 'components/Button'
import * as S from './styles'

const AboutMeSection = () => (
  <S.Wrapper>
    <S.TextWrapper>
      <S.MyName aria-label="my name">Ernesto Ribarr</S.MyName>
      <S.Description aria-label="my description">
        Já tentei ser jogador de futebol, músico, desenhista, designer,
        sushiman, motoboy entre outras... E por fim acabei me apaixonando mesmo
        na carreira de desenvolvedor front.
      </S.Description>
      <S.ButtonWrapper>
        <Button size="small" color="primary" aria-label="continue button">
          Continuar
        </Button>
        <Button size="small" color="secondary" aria-label="sarcastic button">
          Vergonha alheia
        </Button>
      </S.ButtonWrapper>
    </S.TextWrapper>
    <S.ImageWrapper aria-label="One image about me in Garibaldi-RS city"></S.ImageWrapper>
  </S.Wrapper>
)

export default AboutMeSection
