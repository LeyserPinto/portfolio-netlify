import React from 'react'
import { FooView } from './styles'



const Footer = ({pnumber, pname}) => {
  return (
    <FooView>
          <div className="page-info">
              <p>
                  <span className="number">{pnumber}</span>
                  <span className="nome">{pname}</span>
              </p>
          </div>
          <div className="copyInfo">
                <p>&copy; 2022 Copyright Leyser Pinto</p>
            </div>
    </FooView>
  )
}

export default Footer