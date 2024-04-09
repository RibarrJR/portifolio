import Button from 'components/Button'
import * as S from './styles'

export type TechnologiesItemProps = {
  title?: string
  imgSVG?: JSX.Element
  subtitle?: string
  color?: string
  reverse?: boolean
}

const TechnologiesItem: React.FC<TechnologiesItemProps> = ({
  title,
  imgSVG,
  subtitle,
  color,
  reverse
}) => (
  <S.WrapperTechnologies reverse={reverse}>
    <S.SVGWrapper>
      <S.SVGImage aria-label={title} className="svgLogo" color={color}>
        {imgSVG}
      </S.SVGImage>
    </S.SVGWrapper>
    <S.ContentWrapper>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button size="small">Portifólio</Button>
    </S.ContentWrapper>
  </S.WrapperTechnologies>
)

export default TechnologiesItem
