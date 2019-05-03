import styled from 'styled-components'

export const ArticleStyled = styled.article`
  width: 300px;
`

export const Image = styled.img`
  width: 50px;
  height: 50px;
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  border-radius: 50%;
`

export const Title = styled.p`
  font-size: 18px;
`

export const Date = styled.p`
  font-size: 14px;
`

export const Description = styled.p`
  font-size: 16px;
`
