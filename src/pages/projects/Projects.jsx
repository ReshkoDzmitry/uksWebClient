import React from 'react';
import s from './projects.module.scss'
import {projects} from "../../data/data";

const Projects = () => {
    return (
        <div className={s.projectsWrapper}>
            {
                projects.map(m=> {
                    return (
                        <div className={s.projectsInner}>
                            <h4 className={s.projectsTitle}>{m.title}</h4>
                            <img className={s.projectsImg} src="" alt=""/>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Projects;