import styled from 'styled-components'
import { fadeInUp } from '../../styles/animations'
import { media } from '../../styles/templates'

export const ArticleStyled = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: ${props =>
    props.viewMode === 'image' ? 'center' : 'flex-start'};
  width: 320px;
  margin: 18px 12px;
  padding: 12px 10px;
  color: #57606f;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 10px 10px 28px 4px rgba(228, 231, 240, 0.45);

  &:not(:nth-child(-n + 4)) {
    animation: ${fadeInUp} 0.3s ease-out;
  }

  ${media.phone`
    margin: 20px auto;
  `}
`

export const Image = styled.img`
  width: 60px;
  height: 60px;
  background-image: url(${props => props.imgUrl}),
    url('https://pipdigz.co.uk/p3/img/placeholder-square.png');
  background-size: cover;
  background-color: #f1f2f6;
  border-radius: 50%;
  transition: all 0.3s linear;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => (props.viewMode === 'image' ? '70%' : '100%')};
`

export const Title = styled.p`
  margin-bottom: 10px;
  font-size: 17px;
`

export const PublishDate = styled.p`
  margin: 3px 0;
  font-size: 14px;
  color: #a4b0be;
`

export const Description = styled.p`
  font-size: 16px;
`
