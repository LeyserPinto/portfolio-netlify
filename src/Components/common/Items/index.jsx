import React from 'react'
import { ItemView } from './styles'
const Item = ({text, icon}) => {
  return (
    <ItemView>
      {icon}
      <h3 className='ltxt'>{text}</h3>
    </ItemView>
  )
}

export default Item