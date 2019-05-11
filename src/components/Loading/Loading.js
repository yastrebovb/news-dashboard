import React from 'react'
import { RotateLoader } from 'react-spinners'
import { loadingStyles } from './style'

const Loading = () => (
  <RotateLoader
    css={loadingStyles}
    sizeUnit={'px'}
    size={15}
    color={'#f7496a'}
  />
)

export default Loading
