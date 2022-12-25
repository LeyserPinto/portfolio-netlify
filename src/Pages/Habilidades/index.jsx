import React from 'react'
import Nav from '../../Components/common/NavBar'
import Footer from '../../Components/common/Footer'
import { MainView } from './styles'
import SideList from '../../Components/common/SideList'
import Item from '../../Components/common/Items'
import { FaCode, FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa'
import {SiMysql} from 'react-icons/si'
import {AiOutlineConsoleSql} from 'react-icons/ai'


const Habilidades = () => {
  return (
    <>
    {/* NavBar */}
      <Nav />
      {/* Main Content */}
      <MainView>
        <SideList />
        <div className="MainContent">
          <p className='content-subtitle'>Linguagens Conhecidos</p>
          <div className='content-container-layout'>
            <section className='content'>              
            <Item text={'HTML'} icon={<FaHtml5 />}/>            
            <Item text={'CSS'} icon={<FaCss3 />}/>
            <Item text={'JAVASCRIPT'} icon={<FaJs />}/>            
            <Item text={'C#'} icon={<FaCode />}/>            
            <Item text={'VBA'} icon={<FaCode />}/> 
            </section>
          </div>
          <p className='content-subtitle'>Bibliotecas e Ambientes</p>
          <div className='content-container-layout'>
            <section className='content'>
            <Item text={'NODE JS'} icon={<FaNodeJs />}/>
            <Item text={'REACT JS'} icon={<FaReact />}/>
            </section>
          </div>
          <p className='content-subtitle'>Banco de Dados</p>
          <div className='content-container-layout'>
            <section className='content'>
            <Item text={'MYSQL'} icon={<SiMysql />}/>
            <Item text={'SQL SERVER'} icon={<AiOutlineConsoleSql />}/>
            </section>
          </div>
        </div>
      </MainView>

{/* Footer  */}
      <Footer pnumber={'02'} pname={'Habilidades'}/>
    </>
  )
}

export default Habilidades