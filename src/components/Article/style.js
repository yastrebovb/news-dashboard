import styled from 'styled-components'

export const ArticleStyled = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  margin: 14px 0;
  padding: 12px 10px;
  color: #57606f;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 27px 28px 23px 10px rgba(240, 241, 247, 1);
`

export const Image = styled.img`
  width: 60px;
  height: 60px;
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  border-radius: 50%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`

export const Title = styled.p`
  font-size: 17px;
`

export const Date = styled.p`
  font-size: 14px;
  color: #a4b0be;
`

export const Description = styled.p`
  font-size: 16px;
`
