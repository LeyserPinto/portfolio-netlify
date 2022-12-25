import React from 'react'
import { Item } from './styles'


const ProjectItem = ({lang,link, web}) => {
  return (
    <>
    <Item>
        <iframe src={link} frameborder="0" ></iframe>
        <a href={link}>{web}</a>
        <p>{lang}</p>
    </Item>
    </>
  )
}

export default ProjectItem