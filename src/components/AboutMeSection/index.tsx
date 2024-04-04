import Button from 'components/Button'
import * as S from './styles'

const AboutMeSection = () => (
  <S.Wrapper>
    <S.TextWrapper>
      <S.MyName>Ernesto Ribarr</S.MyName>
      <S.Description>
        Já tentei ser jogador de futebol, musico, desenhista, designer,
        sushiman, motoboy e por fim me aquetei como desenvolvedor frontend.
      </S.Description>
      <S.ButtonWrapper>
        <Button size="small" color="primary">
          Continuar
        </Button>
        <Button size="small" color="secondary">
          Vergonha alheia
        </Button>
      </S.ButtonWrapper>
    </S.TextWrapper>
    <S.ImageWrapper></S.ImageWrapper>
  </S.Wrapper>
)

export default AboutMeSection
