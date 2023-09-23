import React from 'react';
import {projects} from "../../data/data";
import ProjectCard from "../../components/projectCard/ProjectCard";
import s from "./projects.module.scss";

const Projects = () => {

    /*const [modalProject, setModalProject] = useState(false)*/

    return (
        <div className={s.projects}>
            <div className={s.projectsTitleWrapper}>
                <h3 className={s.projectsPageTitle}>Реализованные проекты</h3>
            </div>

            <div  className={s.projectsWrapper}>
                {
                    projects.map(m => {
                        return (
                            <ProjectCard
                                id={m.id}
                                title={m.title}
                                img={m.img}
                                alt={m.alt}
                                description={m.description}
                                // modalProject={modalProject}
                                // setModalProject={setModalProject}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Projects;