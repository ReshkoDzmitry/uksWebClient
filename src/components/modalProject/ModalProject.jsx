import React from 'react';
import s from './modalProjec.module.scss'

const ModalProject = ({modalProject,title,setModalProject,description,img,alt}) => {
    return (
        <div className={modalProject ? `${s.modal} ${s.active}` : s.modal} onClick={() => setModalProject(!modalProject)}>
            <div className={s.modalContent} onClick={e => e.stopPropagation()}>
                <h4 className={s.modalTitle}>{title}</h4>
                <div className={s.modalDescriptionWrapper}>
                    <img className={s.modalImg} src={img} alt={alt}/>
                    <p className={s.modalDescription}>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ModalProject;