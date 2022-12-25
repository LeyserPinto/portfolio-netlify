import React from 'react'
import Footer from '../../Components/common/Footer'
import Nav from '../../Components/common/NavBar'
import SideList from '../../Components/common/SideList'
import { MainView } from './styles'
import InfoCard from '../../Components/InfoCard'


import Vector from '../../assets/vector1.svg'

const SobreMim = () => {
    return (
        <>
            <Nav />
            <MainView>
                {/* Sobre mi */}
                <div className='firstRow'>
                <img src={Vector} alt="...HeadPhoto" />
                <p>Desenvolvedor Web desde 2019, Experiências em manutenção <br />
                    de equipos, desenvolvimento de sistemas <br />
                    computacionais e administração do banco de dados SQL <br />
                    Server MySQL. <br /> Principal linguagem de desenvolvimento 
                    é JavaScript.
                </p>
                </div>
                
                {/* Experiencia */}
                <div className="secondRow">
                    <h3>EXPERIÊNCIA PROFISSIONAL</h3>
                    <section className='content'>
                    <InfoCard tempo={'De maio/2019 a out/2020'} location={'Anaco,Venezuela'} emp={'KOACH SOLUCIONES C.A'} carg={'Estágio em DBA (MySQL) e VBA'} desc={'Estágio de administração de banco de dados MySQL.Estágio em desenvolvimento de Interfaces com linguagem Visual Basic.'}/>
                        <InfoCard tempo={'De Jul/2021 a Set/2022'} location={'Anaco,Venezuela'} emp={'AIC TECH C.A'} carg={'Estágio em Análise de Sistemas'} desc={'Manutenção, instalação e administração de equipamentos e sistemas da empresa. Desenvolvimento de UX para programação. dministração de banco de dados SQL Server'}/>
                        <InfoCard tempo={'De Jul/2021 a Set/2022'} location={'Anaco,Venezuela'} emp={'PANDA NETWORKS VE C.A'} carg={'Administrador de sistemas de rede'} desc={'Manutenção, Administração e instalação de equipamentos e sistemas.  Administração de banco de dados MySQL e integração PHP.  Desenvolvimento de Software com JavaScript e Bootstrap.  Administração do sistema Mikrotik. Manutenção e Administração de Sistemas e Servidores Linux. Suporte ao cliente'} />
                        
                    </section>
                </div>

                {/* Educacion */}
                <div className="secondRow">
                    <h3>EDUCAÇÃO</h3>
                    <section className='content'>
                    <InfoCard tempo={'De Jul/2013 a Jul/2017'} location={'Anaco,Venezuela'} 
                    emp={'Ensino Medio Completo'} carg={'U.E.P Roberto Castillo Cardier'} 
                    desc={'Nota média: 16.01'}/>
                        <InfoCard tempo={'May/2019'} location={'Anaco,Venezuela'} emp={'Informatica'} 
                        carg={'UTS Antonio Jose de Sucre'} 
                        desc={'Nota média: 15,01.  63 das 102 unidades de carreira concluídas.'}/>
                        
                    </section>
                </div>
                
                {/* Cursos */}
                <div className="secondRow">
                    <h3>Cursos</h3>
                    <section className='content'>
                    <InfoCard tempo={'72 Horas'} location={'Anaco,Venezuela'} 
                    emp={'Koach Soluciones C.A'} carg={''} 
                    desc={'Introdução à Programação'}/>
                    <InfoCard tempo={'52 Horas'} location={'Anaco,Venezuela'} 
                    emp={'Koach Soluciones C.A'} carg={''} 
                    desc={'Introdução aos bancos de dados MySQL'}/>
                    <InfoCard tempo={'8 Horas'} location={'Rio do Sul,Venezuela'} 
                    emp={'EBAC Online'} carg={''} 
                    desc={'Jornada DEV Front End'}/> 
                    </section>
                </div>
            </MainView>
            <Footer pnumber={'04'} pname={'Sobre Mim'} />
        </>
    )
}

export default SobreMim