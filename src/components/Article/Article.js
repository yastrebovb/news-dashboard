import React from 'react'
import { ArticleStyled, Image, Title, Date, Description } from './style'

const Article = ({ viewMode, title, description, publishedAt, urlToImage }) => {
  return (
    <ArticleStyled>
      {viewMode === 'image' && <Image imgUrl={urlToImage} />}
      <Title>{title}</Title>
      <Date>{publishedAt}</Date>
      {viewMode === 'big' && <Description>{description}</Description>}
    </ArticleStyled>
  )
}

export default Article
