import React from 'react';
import PROJECTS from '../data/projects';
import { blockStatement } from '@babel/types';


const Project = props => {
    const { title, description, link, image} = props.project;
    return (
        <div style={{ display: 'inline-block', width:300, margin: 10 }}>
            <h3>{title}</h3>
            <img src={image} style={{ width:200, height:120 }}/>
            <p>{description}</p>
            <a href="{link}" alt="project">{link}</a>
        </div>
    )    
}

const Projects = () => (
    <div>
        <h2>Highlighted Projects</h2>
        {
            PROJECTS.map(PROJECT => (
                <Project key={PROJECT.id} project={PROJECT}/>                 
            ))
        }
    </div>
 )

export default Projects;