import React, {useState} from 'react';
import s from './projectCard.module.scss'
import {projects} from "../../data/data";
import ModalProject from "../modalProject/ModalProject";

const ProjectCard = ({img,alt,id, title,description}) => {

    const [modalProject, setModalProject] = useState(false)

    const modalProjectFilter = () => {
        projects.filter(f => f.id === id)
    }

    const allModalFunction = () => {
        setModalProject(!modalProject)
        modalProjectFilter()
    }

    return (
        <div id={id}>
            <div className={s.projectsInner} onClick={allModalFunction}>
                <h4 className={s.projectsTitle}>{title}</h4>
                <img className={s.projectsImg} src={img} alt={alt}/>
            </div>

            <ModalProject
                modalProject={modalProject}
                setModalProject={setModalProject}
                title={title}
                img={img}
                alt={alt}
                description={description}
            />
        </div>
    );
};

export default ProjectCard;