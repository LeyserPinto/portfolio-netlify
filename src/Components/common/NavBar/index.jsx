import React, {useRef} from 'react'
import { View, MobileNav} from './styles'
import {FaBars} from 'react-icons/fa'
import {IoCloseSharp} from 'react-icons/io5'

const Nav = () => {

  //Definition USE REF
  const MboNav=useRef()

  //Call to Action- Show SideNav to Mobiles
  const expandsidenav=()=>{
    
    MboNav.current.style.top<'0%'? MboNav.current.style.top='0%': MboNav.current.style.top='-150%';
  }
  return (
    <>
    <View>
      <div className='header-l-side'>
        <a href="/"> Oi, sou <span>LEYSER PINTO</span> </a>
        
      </div>
      <div className='header-r-side'>
                <ul>
                    <li className='no-menu'><a href="habilidades">Habilidades</a></li>
                    <li className='no-menu'><a href="/projetos">Projetos</a></li>
                    <li className='no-menu'><a href="/sobre-mim">Sobre mim</a></li>
                    <li className='fBars' onClick={()=> expandsidenav()}><a href="#"><FaBars /></a></li>
                </ul>
      </div>
    </View>

    <MobileNav ref={MboNav} >
      <div className="topSection">
        <IoCloseSharp onClick={()=> expandsidenav()}/>
      </div>
      <div className="centerSection">
      <ul>
                    <li className='no-menu'><a href="/habilidades">Habilidades</a></li>
                    <li className='no-menu'><a href="/projetos">Projetos</a></li>
                    <li className='no-menu'><a href="/sobre-mim">Sobre mim</a></li>
                </ul>
      </div>
    </MobileNav>
    </>
  )
}

export default Nav