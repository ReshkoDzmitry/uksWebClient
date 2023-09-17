import React from 'react';
import {projects} from "../../data/data";
import ProjectCard from "../../components/projectCard/ProjectCard";
import s from "./projects.module.scss";

const Projects = () => {
    return (
        <>
            <div className={s.projectsTitleWrapper}>
                <h3 className={s.projectsPageTitle}>Проекты</h3>
            </div>

            <div  className={s.projectsWrapper}>

                {
                    projects.map(m => {
                        return (
                            <ProjectCard
                                id={m.id}
                                title={m.title}
                                img={m.img}
                                intended={m.intended}
                            />
                        )
                    })
                }
            </div>
        </>
    );
};

export default Projects;