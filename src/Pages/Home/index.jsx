import React from 'react'
import Nav from '../../Components/common/NavBar'
import { MainView } from './styles'
import SideList from '../../Components/common/SideList'
import Footer from '../../Components/common/Footer'

const Home = () => {
  return (
<>

{/* Header */}
    <Nav />

{/* Main */}
    <MainView>

      <SideList />
      {/* Right Side Block - Text */}
      <section className='main-right-section'>

        {/* Main Text Paragraph */}
          <p>
            Bem-Vindo a meu<br />
            <span>PORTFOLIO</span> <br />
            conhece meus trabalhos com
          </p>

          {/* Languajes Slider -  Typing and Blink Effects */}
          <div className="lang-slider">
            <ul>
              <li>HTML + CSS</li>
              <li>Javascript</li>
              <li>React JS</li>
              <li>Node JS</li>
            </ul>
          </div>
      </section>
    </MainView>

    
{/* Footer */}
    <Footer pnumber={'01'} pname={'Inicio'}/>
    </>
  )
}

export default Home