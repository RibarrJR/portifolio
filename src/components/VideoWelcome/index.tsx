import * as S from './styles'

export type VideoProps = {
  videoPath: string
}

const VideoWelcome = ({ videoPath, ...props }: VideoProps) => (
  <S.Wrapper {...props}>
    <video className="videoTag" autoPlay loop muted aria-label="The Video">
      <source src={videoPath} type="video/mp4" />
    </video>
  </S.Wrapper>
)

export default VideoWelcome
