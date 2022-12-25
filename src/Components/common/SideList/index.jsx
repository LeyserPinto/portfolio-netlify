import React from 'react'
import { View } from './styles'

import {FaLinkedin,FaGithub, FaWhatsapp} from 'react-icons/fa'
const SideList = () => {
  return (
    
    // section of Code side links
    <View>
        
      <section className='main-left-section'>
          <ul>
            <li><a href="https://www.linkedin.com.br/in/leyser-pinto"><FaLinkedin /></a></li>
            <li><a href="https://github.com/leyserpinto"><FaGithub /></a></li>
            <li><a href="https://wa.me/47988444885"><FaWhatsapp /></a></li>
          </ul>
      </section>
    </View>
  )
}

export default SideList