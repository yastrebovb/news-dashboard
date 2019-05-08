import React from 'react'
import {
  ArticleStyled,
  Image,
  Content,
  Title,
  PublishDate,
  Description
} from './style'

const Article = ({
  viewMode,
  render: { title, description, publishedAt, urlToImage }
}) => {
  const convertDate = dateIso => {
    const date = new Date(dateIso)
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]

    const monthDay = date.getUTCDate()
    const month = months[date.getUTCMonth()]
    const year = date.getUTCFullYear()
    const time = `${date.getUTCHours()}:${('0' + date.getUTCMinutes()).substr(
      -2
    )}`

    return `${monthDay} ${month} ${year} ${time}`
  }

  return (
    <ArticleStyled viewMode={viewMode}>
      {viewMode === 'image' && <Image imgUrl={urlToImage} />}
      <Content viewMode={viewMode}>
        <Title>{title}</Title>
        <PublishDate>{convertDate(publishedAt)}</PublishDate>
        {viewMode === 'big' && <Description>{description}</Description>}
      </Content>
    </ArticleStyled>
  )
}

export default Article
