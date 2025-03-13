import ContentLoader from 'react-content-loader'

interface Skeleton {
  props: number
}

export const Skeleton = (props: Skeleton) => (
  <ContentLoader
    speed={2}
    width={315}
    height={500}
    viewBox='0 0 300 500'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}>
    <rect x='502' y='576' rx='3' ry='3' width='140' height='11' />
    <circle cx='126' cy='131' r='113' />
    <rect x='6' y='256' rx='8' ry='8' width='240' height='18' />
    <rect x='8' y='284' rx='7' ry='7' width='236' height='54' />
    <rect x='14' y='352' rx='11' ry='11' width='99' height='29' />
    <rect x='131' y='348' rx='9' ry='9' width='114' height='34' />
  </ContentLoader>
)
