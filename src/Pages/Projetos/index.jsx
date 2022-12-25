import React from 'react'
import Footer from '../../Components/common/Footer'
import Nav from '../../Components/common/NavBar'
import SideList from '../../Components/common/SideList'
import { MainView } from './styles'
import ProjectItem from '../../Components/ProjectItem'
const Projetos = () => {
  return (
    <>
    <Nav />
    <MainView >

    <SideList />
    <div className="MainContent">
          <p className='content-subtitle'>Site Web</p>
          <div className='content-container-layout'>
            <section className='content'>
                <ProjectItem link={'https://pandanetworksve.com'} web={'pandanetworksve.com'} lang={'Bootstrap + PHP + JS'}/>
                <ProjectItem link={'https://aictech.net'} web={'aictech.net'} lang={'Wordpress + CSS'}/>
            </section>
          </div>
          <p className='content-subtitle'>Formulários</p>
          <div className='content-container-layout'>
            <section className='content'>
                <ProjectItem link={'https://pandanetworksve.com/pages/registro.html'} web={'pandanetworksve.com'} lang={'Bootstrap + PHP + JS'}/>
                <ProjectItem link={'http://aictech.net/contacto/'} web={'aictech.net'} lang={'Wordpress + CSS'}/>
                
            </section>
          </div>
    </div>
    </MainView>
    <Footer pnumber={'03'} pname={'Projetos'} />
    </>
  )
}

export default Projetos