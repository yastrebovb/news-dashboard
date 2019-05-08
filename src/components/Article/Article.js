import React from 'react'
import {
  ArticleStyled,
  Image,
  Content,
  Title,
  Date,
  Description
} from './style'

const Article = ({
  viewMode,
  render: { title, description, publishedAt, urlToImage }
}) => {
  return (
    <ArticleStyled>
      {viewMode === 'image' && <Image imgUrl={urlToImage} />}
      <Content viewMode={viewMode}>
        <Title>{title}</Title>
        <Date>{publishedAt}</Date>
        {viewMode === 'big' && <Description>{description}</Description>}
      </Content>
    </ArticleStyled>
  )
}

export default Article
